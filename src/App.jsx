import React, { useMemo, useState } from "react";

const topicBank = {
  Mathematics: ["Numbers and operations", "Algebraic expressions", "Equations and inequalities", "Geometry", "Measurement", "Statistics and probability", "Revision and assessment"],
  Physics: ["Introduction to Physics", "Measurement", "Force and motion", "Work, energy and power", "Thermal physics", "Waves and sound", "Revision and assessment"],
  English: ["Listening and speaking", "Reading comprehension", "Grammar", "Writing skills", "Literature", "Revision and assessment"],
  "Integrated Science": ["Scientific investigation", "Living things", "Matter and materials", "Energy", "Environment", "Revision and assessment"]
};

function App() {
  const [subject, setSubject] = useState("Mathematics");
  const [grade, setGrade] = useState("Grade 10");
  const [term, setTerm] = useState("Term 1");
  const [year, setYear] = useState("2027");
  const [weeks, setWeeks] = useState(10);
  const [teacher, setTeacher] = useState("");
  const [school, setSchool] = useState("");
  const [topicsText, setTopicsText] = useState(topicBank.Mathematics.join("\n"));
  const [scheme, setScheme] = useState(null);
  const [notice, setNotice] = useState("");

  const topics = useMemo(() => topicsText.split("\n").map(t => t.trim()).filter(Boolean), [topicsText]);

  function changeSubject(value) {
    setSubject(value);
    setTopicsText(topicBank[value].join("\n"));
    setScheme(null);
    setNotice("");
  }

  function generateScheme(event) {
    event.preventDefault();
    if (!topics.length) {
      setNotice("Add at least one topic before generating your scheme.");
      return;
    }
    const count = Math.max(1, Number(weeks));
    const rows = Array.from({ length: count }, (_, index) => {
      const topic = topics[Math.min(topics.length - 1, Math.floor(index * topics.length / count))];
      return {
        week: index + 1,
        topic,
        subtopic: "Key concepts, skills and application",
        objectives: `By the end of the week, learners should be able to explain and apply ${topic.toLowerCase()}.`,
        activities: index % 2 === 0 ? "Teacher demonstration, guided discussion and learner practice" : "Pair work, problem-solving and class feedback",
        resources: subject === "Physics" ? "Course book, charts and locally available apparatus" : "Course book, board, worksheets and locally available materials",
        assessment: index === count - 1 ? "Revision and end-of-term assessment" : "Oral questions, class exercise and review of learner work"
      };
    });
    setScheme({ subject, grade, term, year, teacher, school, rows });
    setNotice("Your draft is ready. Review and adapt it to the applicable curriculum design and school calendar.");
  }

  function exportCsv() {
    if (!scheme) return;
    const header = ["Week", "Strand / Topic", "Sub-topic", "Learning objectives", "Learning activities", "Resources", "Assessment"];
    const data = scheme.rows.map(r => [r.week, r.topic, r.subtopic, r.objectives, r.activities, r.resources, r.assessment]);
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
      <section className="layout">
        <div className="panel" id="builder">
          <div className="panel-heading"><div><div className="eyebrow">DOCUMENT BUILDER</div><h2>Scheme of work generator</h2><p>Enter your teaching details and create an editable draft.</p></div><div className="panel-symbol">▤</div></div>
          <form onSubmit={generateScheme}>
            <div className="form-grid">
              <label>Subject<select value={subject} onChange={e => changeSubject(e.target.value)}>{Object.keys(topicBank).map(item => <option key={item}>{item}</option>)}</select></label>
              <label>Grade / Class<select value={grade} onChange={e => setGrade(e.target.value)}>{["Grade 7","Grade 8","Grade 9","Grade 10","Form 1","Form 2","Form 3","Form 4"].map(item => <option key={item}>{item}</option>)}</select></label>
              <label>Term<select value={term} onChange={e => setTerm(e.target.value)}>{["Term 1","Term 2","Term 3"].map(item => <option key={item}>{item}</option>)}</select></label>
              <label>Academic year<input value={year} onChange={e => setYear(e.target.value)} inputMode="numeric" /></label>
              <label>Teacher name<input value={teacher} onChange={e => setTeacher(e.target.value)} placeholder="Enter teacher name" /></label>
              <label>School name<input value={school} onChange={e => setSchool(e.target.value)} placeholder="Enter school name" /></label>
              <label className="full">Teaching weeks <div className="range-row"><input type="range" min="1" max="16" value={weeks} onChange={e => setWeeks(Number(e.target.value))} /><b>{weeks} weeks</b></div></label>
              <label className="full">Topics / strands <span className="hint">Edit the suggestions below to match your curriculum design.</span><textarea rows="7" value={topicsText} onChange={e => setTopicsText(e.target.value)} /></label>
            </div>
            <div className="form-footer"><span>Drafts should be reviewed before classroom use.</span><button className="primary" type="submit">Generate scheme <b>→</b></button></div>
          </form>
          {notice && <div className="notice" role="status">{notice}</div>}
        </div>
        <aside className="right-column">
          <div className="tip-card"><div className="tip-symbol">✦</div><div className="eyebrow">QUICK TIP</div><h3>Start with your curriculum design.</h3><p>Use the topic list as a starting point, then confirm strands, learning outcomes and lesson timing against the official design for your class.</p><div className="tip-footer">Built to support your professional judgement.</div></div>
          <div className="panel roadmap"><h3>What's coming next</h3>{[["Lesson plans","Structured lesson preparation"],["Assessments","Questions and marking guides"],["Document library","Save and revisit your work"],["M-Pesa payments","When paid plans launch"]].map(([title,desc]) => <div className="roadmap-item" key={title}><span /> <div><b>{title}</b><p>{desc}</p></div></div>)}</div>
        </aside>
      </section>
      {scheme && <section className="panel preview">
        <div className="preview-heading"><div><div className="eyebrow">DOCUMENT PREVIEW</div><h2>{scheme.subject} — Scheme of Work</h2><p>{scheme.grade} · {scheme.term} · {scheme.year}{scheme.school ? ` · ${scheme.school}` : ""}{scheme.teacher ? ` · ${scheme.teacher}` : ""}</p></div><div className="button-row"><button className="secondary" onClick={exportCsv}>Export CSV</button><button className="primary" onClick={() => window.print()}>Print / Save PDF</button></div></div>
        <div className="table-wrap"><table><thead><tr><th>Week</th><th>Strand / Topic</th><th>Sub-topic</th><th>Learning objectives</th><th>Activities</th><th>Resources</th><th>Assessment</th></tr></thead><tbody>{scheme.rows.map(row => <tr key={row.week}><td>{row.week}</td><td>{row.topic}</td><td>{row.subtopic}</td><td>{row.objectives}</td><td>{row.activities}</td><td>{row.resources}</td><td>{row.assessment}</td></tr>)}</tbody></table></div>
        <p className="disclaimer">Important: this is a template-generated draft, not an officially validated curriculum document. Verify all content against the current curriculum design and your school's calendar.</p>
      </section>}
      <footer className="footer"><span>© {new Date().getFullYear()} MwalimuPro Kenya</span><span>Made for teachers, with care.</span></footer>
    </main>
  </div>;
}

export default App;