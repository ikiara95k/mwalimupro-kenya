# MwalimuPro Kenya

MwalimuPro Kenya is a responsive React + Vite teacher workspace focused on creating editable schemes of work using the Kenyan curriculum structure.

## Available now

- Responsive teacher dashboard
- Grade and subject selection from the configured curriculum directory (Pre-Primary 1 through Grade 12)
- Scheme-of-work draft builder with school, teacher, class, term, year and teaching-week fields
- Editable topic list and scheme preview
- CSV export
- Word document (.docx) export
- Browser print / Save as PDF
- Curriculum coverage view and source links where available
- Guardrails that prevent generation from source-only placeholders or entries explicitly marked for review
- Curriculum catalogue validation script
- Detailed per-grade/per-subject coverage audit report (`npm run report:curriculum`)

## Curriculum data: read this before using a generated scheme

The app contains a mixture of transcribed topic sequences and source-linked entries that are not yet fully indexed. The grade/subject directory is a coverage map; it does **not** mean every subject has a verified topic sequence. The coverage counter distinguishes indexed entries, source-only placeholders, and entries requiring review. An indexed entry is not a guarantee that every learning outcome, learning experience, assessment rubric, and lesson allocation has been independently checked.

Use the official [KICD regular curriculum designs directory](https://kicd.ac.ke/cbc-materials/curriculum-designs/regular-curriculum-designs/) to confirm the latest applicable design and any revisions before teaching or submitting a scheme. Some indexed content refers to April 2024 designs; newer official revisions, if published, take precedence. Never treat automatically balanced lesson periods as official KICD allocations unless the source explicitly gives those allocations.

## Local development

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

## Validation and production build

Validate the curriculum catalogue:

```bash
npm run check:curriculum
```

Print a per-grade and per-subject report showing indexed entries, source-only placeholders, entries requiring review, and missing catalogue entries:

```bash
npm run report:curriculum
```

Build the production app:

```bash
npm run build
```

The production build is written to `dist/`. A GitHub Actions workflow runs catalogue validation and the production build for pull requests and pushes to `main`.

## Current limitations

- The catalogue is not yet complete for every subject and grade; the coverage panel is the source of truth for current indexing status.
- Full learning outcomes, learning experiences, core competencies, values, pertinent and contemporary issues, and assessment rubrics still need structured verification for many entries.
- No live AI generation service is connected.
- No user accounts, cloud sync, or school collaboration system.
- No payment/M-Pesa integration.
- No Android application yet.

## Development priorities

1. Transcribe and cross-check remaining curriculum designs from KICD, prioritising regular-learner designs and recording the revision date/source for each.
2. Add verified learning outcomes, learning experiences, resources, assessment methods and strand/sub-strand allocations.
3. Keep source-only or conflicted entries blocked from automatic scheme generation.
4. Run the curriculum validator and production build on every change.
5. Add secure accounts and cloud storage only after the curriculum and document workflow are reliable.
6. Test generated documents with Kenyan teachers before adding paid features or an Android app.
