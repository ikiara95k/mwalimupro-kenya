# MwalimuPro Kenya

A responsive React + Vite prototype for a teacher document workspace, designed with Kenyan teachers in mind.

## Included
- Responsive dashboard
- Scheme-of-work draft builder
- Subject, grade/class, term, year, teacher and school fields
- Editable topic list and adjustable teaching-week count
- Draft table preview
- CSV export
- Browser print / Save as PDF

## Current limitations
This is an early frontend prototype. It does not yet include AI API integration, officially validated KICD curriculum data, user accounts, cloud document storage, M-Pesa payments, Word (.docx) export, or an Android application.

Generated schemes use basic templates. Please verify content against the applicable official curriculum design and your school's calendar before use.

## Run locally
Use Node.js 20 or later:

```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

Vite writes the production files to `dist/`.

## Planned development
1. Deploy the website to Vercel.
2. Add secure authentication and cloud document storage.
3. Add verified curriculum datasets and teacher-editable templates.
4. Add a secure AI generation endpoint.
5. Add server-verified M-Pesa payments and subscriptions.
6. Add DOCX export and user testing.
7. Build an Android app after validating the website workflow.