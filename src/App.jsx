import React, { useMemo, useState } from "react";
import { Document, Packer, Paragraph, Table, TableRow, TableCell, HeadingLevel, WidthType } from "docx";
import { getCurriculum, getCurriculumTopics, getSubjectsForGrade, getCurriculumSourceUrl, getGrades, getCurriculumCoverage, isCurriculumPlaceholder, KICD_CURRICULUM_URL } from "./curriculumCatalog.js";

function App() {
  const [subject, setSubject] = useState("Core Mathematics");
  const [grade, setGrade] = useState("Grade 10");
  const [term, setTerm] = useState("Term 1");
  const [year, setYear] = useState("2027");
  const [weeks, setWeeks] = useState(10);
  const [teacher, setTeacher] = useState("");
  const [school, setSchool] = useState("");
  const [scheme, setScheme] = useState(null);
  const [notice, setNotice] = useState("");

  const curriculum = useMemo(() => getCurriculum(grade, subject), [grade, subject]);
  const topics = useMemo(() => getCurriculumTopics(grade, subject), [grade, subject]);
  const gradeSubjects = useMemo(() => getSubjectsForGrade(grade), [grade]);
  const gradeSourceUrl = getCurriculumSourceUrl(grade);
  const coverage = useMemo(() => getCurriculumCoverage(), []);
  // Some directory entries are intentionally source-linked placeholders, not verified topic indexes.
  // Never let these placeholders produce a misleading scheme of work.
  const hasPlaceholderTopics = Boolean(curriculum && isCurriculumPlaceholder(null, curriculum));
  const curriculumReady = Boolean(curriculum && topics.length && !hasPlaceholderTopics);

  function changeSubject(value) {
    setSubject(value);
    setScheme(null);
    setNotice("");
  }

  function changeGrade(value) {
    const availableSubjects = getSubjectsForGrade(value);
    setGrade(value);
    if (!availableSubjects.includes(subject)) setSubject(availableSubjects[0] || "Mathematics");
    setScheme(null);
    setNotice("");
  }

  function generateScheme(event) {
    event.preventDefault();
    if (!curriculumReady) {
      setScheme(null);
      setNotice(hasPlaceholderTopics
        ? "This subject is linked to the official KICD source, but its strand and sub-strand sequence is still a placeholder. A scheme cannot be generated until the actual curriculum sequence is verified and indexed."
        : "A verified topic index for " + grade + " " + subject + " has not been added yet. Open the official KICD curriculum designs. No generic topics will be substituted.");
      return;
    }
    const count = Math.max(1, Math.min(16, Number(weeks) || 1));
    // Preserve KICD order and use stated lesson allocations to balance adjacent sub-strands.
    // If allocations are missing, fall back to equal topic weights rather than inventing lesson counts.
    const weights = topics.map(item => {
      const match = item.subStrand.match(/\\((\\d+) lessons?\\)/i);
      return match ? Number(match[1]) : 1;
    });
    const groups = [];
    if (topics.length >= count) {
      let cursor = 0;
      let remainingWeight = weights.reduce((sum, value) => sum + value, 0);
      for (let week = 0; week < count; week++) {
        const weeksLeft = count - week;
        const maxEnd = topics.length - (weeksLeft - 1);
        const target = remainingWeight / weeksLeft;
        let end = cursor;
        let weight = 0;
        while (end < maxEnd) {
          const nextWeight = weights[end];
          if (end > cursor && Math.abs(weight - target) <= Math.abs(weight + nextWeight - target)) break;
          weight += nextWeight;
          end++;
          if (weight >= target && end < maxEnd) break;
        }
        if (end === cursor) { weight = weights[end]; end++; }
        groups.push(topics.slice(cursor, end));
        cursor = end;
        remainingWeight -= weight;
      }
    } else {
      // There are fewer indexed sub-strands than requested weeks; do not fabricate extra topics.
      for (let index = 0; index < topics.length; index++) groups.push([topics[index]]);
    }
    const rows = groups.map((group, index) => {
      const topic = [...new Set(group.map(item => item.strand))].join(" / ");
      const subtopic = group.map(item => item.subStrand).join("; ");
      const allocatedLessons = group.reduce((sum, item) => {
        const match = item.subStrand.match(/\\((\\d+) lessons?\\)/i);
        return sum + (match ? Number(match[1]) : 0);
      }, 0);
      return {
        week: index + 1, topic, subtopic,
        allocatedLessons: allocatedLessons || null,
        objectives: "Plan learning outcomes for " + subtopic + ". Use the specific learning outcomes in the official KICD design.",
        activities: "Use suggested learning experiences in the KICD design; adapt to learner needs and available resources",
        resources: subject === "Physics" ? "KICD design, course book, locally available apparatus and approved digital resources" : "KICD design, course book, board, worksheets and locally available materials",
        assessment: "Use the assessment methods and rubric in the official KICD design; record evidence of learner progress"
      };
    });
    setScheme({ subject, grade, term, year, teacher, school, rows, curriculumTitle: curriculum.title, sourceUrl: curriculum.sourceUrl });
    setNotice(topics.length < count
      ? "This curriculum has fewer indexed sub-strands than the number of weeks requested, so the draft contains " + topics.length + " topic rows rather than repeating or inventing topics. Add remaining verified topics or adjust teaching weeks. Lesson allocations shown are taken only from indexed labels."
      : "Your draft preserves the indexed KICD topic order and balances adjacent topics using lesson allocations where available. Add specific learning outcomes, suggested learning experiences and assessment details from the official design before use.");
  }

  async function exportDocx() {
    if (!scheme) return;
    const cell = (value, bold = false) => new TableCell({
      width: { size: 100 / 8, type: WidthType.PERCENTAGE },
      children: [new Paragraph({ text: String(value ?? ""), bold })]
    });
    const header = ["Week", "Strand / Topic", "Sub-topic", "Suggested lessons", "Learning objectives", "Learning activities", "Resources", "Assessment"];
    const rows = [
      new TableRow({ children: header.map(value => cell(value, true)) }),
      ...scheme.rows.map(row => new TableRow({ children: [
        cell(row.week), cell(row.topic), cell(row.subtopic), cell(row.allocatedLessons ?? "—"), cell(row.objectives),
        cell(row.activities), cell(row.resources), cell(row.assessment)
      ] }))
    ];
    const doc = new Document({ sections: [{ children: [
      new Paragraph({ text: "MWALIMUPRO KENYA", heading: HeadingLevel.HEADING_1 }),
      new Paragraph({ text: `${scheme.subject} — SCHEME OF WORK`, heading: HeadingLevel.HEADING_2 }),
      new Paragraph({ text: `Class: ${scheme.grade} | Term: ${scheme.term} | Year: ${scheme.year}` }),
      new Paragraph({ text: `Teacher: ${scheme.teacher || "________________"} | School: ${scheme.school || "________________"}` }),
      new Paragraph({ text: " " }),
      new Table({ rows, width: { size: 100, type: WidthType.PERCENTAGE } }),
      new Paragraph({ text: " " }),
      new Paragraph({ text: "Note: This is a template-generated draft. Verify topics, learning outcomes and timing against the current official curriculum design and school calendar." })
    ] }] });
    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mwalimupro-${scheme.subject.toLowerCase().replaceAll(" ", "-")}-${scheme.term.toLowerCase().replaceAll(" ", "-")}.docx`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportCsv() {
    if (!scheme) return;
    const header = ["Week", "Strand / Topic", "Sub-topic", "Suggested lessons", "Learning objectives", "Learning activities", "Resources", "Assessment"];
    const data = scheme.rows.map(r => [r.week, r.topic, r.subtopic, r.allocatedLessons ?? "", r.objectives, r.activities, r.resources, r.assessment]);
    const quote = value => '"' + String(value ?? "").replaceAll('"', '""') + '"';
    const csv = [header, ...data].map(row => row.map(quote).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `mwalimupro-${scheme.subject.toLowerCase().replaceAll(" ", "-")}-${scheme.term.toLowerCase().replaceAll(" ", "-")}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">M</div><div><strong>MwalimuPro</strong><span>KENYA</span></div></div>
      <p className="side-label">TEACHER WORKSPACE</p>
      <a className="nav-link active" href="#dashboard">▦ &nbsp; Dashboard</a>
      <a className="nav-link" href="#builder">▤ &nbsp; Scheme generator</a>
      <button className="nav-link" onClick={() => setNotice("Lesson-plan tools are planned for a future release.")}>▧ &nbsp; Lesson plans <small>SOON</small></button>
      <button className="nav-link" onClick={() => setNotice("Assessment tools are planned for a future release.")}>✓ &nbsp; Assessments <small>SOON</small></button>
      <div className="sidebar-note"><b>Made for Kenyan teachers</b><p>Plan, organise and prepare your teaching documents in one place.</p></div>
    </aside>
    <main className="main" id="dashboard">
      <header className="topbar"><div className="mobile-brand"><span className="brand-mark">M</span><b>MwalimuPro Kenya</b></div><div className="crumb">Workspace <span>/</span> Dashboard</div><span className="status"><i /> Early access</span></header>
      <section className="hero"><div><div className="eyebrow">TEACH SMARTER. PLAN BETTER.</div><h1>Your teaching workspace.</h1><p>Prepare structured teaching documents and spend more time supporting your learners.</p></div><div className="hero-art" aria-hidden="true"><span>📚</span><span>✦</span></div></section>
      <section className="stats">
        <article><div className="stat-icon green">▤</div><div><small>Available tool</small><b>Scheme of work</b><span>Draft and export</span></div></article>
        <article><div className="stat-icon yellow">✎</div><div><small>Designed for</small><b>Kenyan teachers</b><span>Teacher-first workflow</span></div></article>
        <article><div className="stat-icon blue">↗</div><div><small>Export formats</small><b>CSV + Print</b><span>Save as PDF from browser</span></div></article>
      </section>
      <section className="coverage-panel" aria-labelledby="coverage-title">
        <div className="coverage-heading"><div><div className="eyebrow">CURRICULUM COVERAGE</div><h2 id="coverage-title">Know what is ready — and what still needs indexing.</h2><p>Counts reflect subjects listed in the grade directory. “Indexed” means topic labels exist in MwalimuPro; it is not a claim that every outcome has been independently verified.</p></div><a href={KICD_CURRICULUM_URL} target="_blank" rel="noreferrer">Check official KICD designs ↗</a></div>
        <div className="coverage-summary">
          <article><b>{coverage.indexed}</b><span>Indexed subject entries</span></article>
          <article><b>{coverage.sourceOnly}</b><span>Source-linked placeholders</span></article>
          <article><b>{coverage.notIndexed}</b><span>Still to index</span></article>
          <article><b>{coverage.total}</b><span>Directory subject slots</span></article>
        </div>
        <div className="coverage-grid">{coverage.grades.map(item => <article className="coverage-grade" key={item.grade}><div className="coverage-grade-title"><b>{item.grade}</b><span>{item.indexed}/{item.total}</span></div><div className="coverage-track" role="img" aria-label={item.indexed + " of " + item.total + " subjects have topic entries"}><span style={{ width: (item.total ? item.indexed / item.total * 100 : 0) + "%" }} /></div><div className="coverage-legend"><span>{item.indexed} indexed</span><span>{item.sourceOnly} source-only</span><span>{item.notIndexed} remaining</span></div></article>)}</div>
      </section>
      <section className="layout">
        <div className="panel" id="builder">
          <div className="panel-heading"><div><div className="eyebrow">DOCUMENT BUILDER</div><h2>Scheme of work generator</h2><p>Enter your teaching details and create an editable draft.</p></div><div className="panel-symbol">▤</div></div>
          <form onSubmit={generateScheme}>
            <div className="form-grid">
              <label>Subject<select value={subject} onChange={e => changeSubject(e.target.value)}>{gradeSubjects.map(item => <option key={item}>{item}</option>)}</select></label>
              <label>Grade / Class<select value={grade} onChange={e => changeGrade(e.target.value)}>{getGrades().map(item => <option key={item}>{item}</option>)}</select></label>
              <label>Term<select value={term} onChange={e => setTerm(e.target.value)}>{["Term 1","Term 2","Term 3"].map(item => <option key={item}>{item}</option>)}</select></label>
              <label>Academic year<input value={year} onChange={e => setYear(e.target.value)} inputMode="numeric" /></label>
              <label>Teacher name<input value={teacher} onChange={e => setTeacher(e.target.value)} placeholder="Enter teacher name" /></label>
              <label>School name<input value={school} onChange={e => setSchool(e.target.value)} placeholder="Enter school name" /></label>
              <label className="full">Teaching weeks <div className="range-row"><input type="range" min="1" max="16" value={weeks} onChange={e => setWeeks(Number(e.target.value))} /><b>{weeks} weeks</b></div></label>
              <div className="full curriculum-source"><div><b>{curriculumReady ? curriculum.title : "Official KICD source: " + grade + " — " + subject}</b><p>{curriculumReady ? topics.length + " indexed sub-strands loaded in sequence." : hasPlaceholderTopics ? "Source linked, but the curriculum sequence is not yet verified. Scheme generation is disabled for this entry." : "The official KICD grade page is linked below. This subject is not yet indexed inside MwalimuPro, so the app will not invent or substitute topics."}</p></div><a href={curriculumReady ? curriculum.sourceUrl : (curriculum?.sourceUrl || gradeSourceUrl)} target="_blank" rel="noreferrer">Open official KICD design for this grade ↗</a>{!curriculum && <><p className="directory-label">Subjects listed for {grade} on the KICD directory:</p><div className="subject-chips">{gradeSubjects.map(item => <span key={item} className={item === subject ? "subject-chip selected" : "subject-chip"}>{item}</span>)}</div></>}{curriculumReady && <ol className="curriculum-list">{curriculum.strands.map(strand => <li key={strand.name}><b>{strand.name}</b><ul>{strand.subStrands.map(item => <li key={item}>{item}</li>)}</ul></li>)}</ol>}</div>
            </div>
            <div className="form-footer"><span>Drafts should be reviewed before classroom use.</span><button className="primary" type="submit">Generate scheme <b>→</b></button></div>
          </form>
          {notice && <div className="notice" role="status">{notice}</div>}
        </div>
        <aside className="right-column">
          <div className="tip-card"><div className="tip-symbol">✦</div><div className="eyebrow">OFFICIAL SOURCE</div><h3>Curriculum-first planning.</h3><p>MwalimuPro links to KICD curriculum-design pages for Pre-Primary and Grades 1–12. Only verified, indexed strands can be used to generate a scheme; other subjects remain linked to KICD until their design content is indexed.</p><a href={KICD_CURRICULUM_URL} target="_blank" rel="noreferrer">Browse KICD curriculum designs ↗</a><div className="tip-footer">No generic topic list is substituted when curriculum data is unavailable.</div></div>
          <div className="panel roadmap"><h3>What's coming next</h3>{[["Lesson plans","Structured lesson preparation"],["Assessments","Questions and marking guides"],["Document library","Save and revisit your work"],["M-Pesa payments","When paid plans launch"]].map(([title,desc]) => <div className="roadmap-item" key={title}><span /> <div><b>{title}</b><p>{desc}</p></div></div>)}</div>
        </aside>
      </section>
      {scheme && <section className="panel preview">
        <div className="preview-heading"><div><div className="eyebrow">DOCUMENT PREVIEW</div><h2>{scheme.subject} — Scheme of Work</h2><p>{scheme.grade} · {scheme.term} · {scheme.year}{scheme.school ? ` · ${scheme.school}` : ""}{scheme.teacher ? ` · ${scheme.teacher}` : ""}</p></div><div className="button-row"><button className="secondary" onClick={exportCsv}>Export CSV</button><button className="secondary" onClick={exportDocx}>Download Word</button><button className="primary" onClick={() => window.print()}>Print / Save PDF</button></div></div>
        <div className="table-wrap"><table><thead><tr><th>Week</th><th>Strand / Topic</th><th>Sub-topic</th><th>Suggested lessons</th><th>Learning objectives</th><th>Activities</th><th>Resources</th><th>Assessment</th></tr></thead><tbody>{scheme.rows.map(row => <tr key={row.week}><td>{row.week}</td><td>{row.topic}</td><td>{row.subtopic}</td><td>{row.allocatedLessons ?? "—"}</td><td>{row.objectives}</td><td>{row.activities}</td><td>{row.resources}</td><td>{row.assessment}</td></tr>)}</tbody></table></div>
        <p className="disclaimer">Source: {scheme.curriculumTitle}. This generated scheme is not an official KICD document. Verify specific learning outcomes, suggested learning experiences, lesson allocations and school calendar against the <a href={scheme.sourceUrl} target="_blank" rel="noreferrer">official KICD design</a>.</p>
      </section>}
      <footer className="footer"><span>© {new Date().getFullYear()} MwalimuPro Kenya</span><span>Made for teachers, with care.</span></footer>
    </main>
  </div>;
}

export default App;