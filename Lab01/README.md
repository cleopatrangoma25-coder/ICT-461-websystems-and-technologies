# ICT461 Unit 1 Lab — Course Registration Interface

## What this is
A one-page, standards-compliant course registration form built for the
ICT461 Unit 1 lab (Web Platform and Standards). Plain HTML, CSS and
JavaScript — no build tools or npm install needed.

## Run it
1. Open `index.html` directly in a browser (double-click it, or
   right-click → Open with → your browser).
2. That's it — no server required for this exercise.

## Features (maps to the lab checklist)
- Semantic HTML: `header`, `main`, `section`, `footer`, proper `label`
  elements tied to every input, a real `button` for the action.
- Responsive CSS: single-column on phones, roomier layout from tablet
  width up (`@media (min-width: 768px)`), no fixed pixel widths on the
  form.
- JavaScript interaction: choosing a Programme dynamically repopulates
  the Course dropdown (`change` event listener).
- Client-side validation: `submit` event listener checks every field
  and writes an accessible, per-field error message (`role="alert"`)
  before allowing "submission". Note: this is a UX convenience only —
  a real system must re-validate everything on the server, since
  client-side JavaScript can be bypassed.
- Accessibility: every input has a linked label, the checkbox has its
  own label, tab order follows the visual order, and the whole form is
  operable by keyboard alone.

## Evidence to capture for submission
- **Elements panel screenshot**: open DevTools (F12 or right-click →
  Inspect), Elements tab, with the form expanded so the semantic tags
  and labels are visible.
- **Network tab screenshot**: open the Network tab, reload the page,
  and capture the three requests (`index.html`, `styles.css`,
  `script.js`) with their status codes (should all be 200) and timing.
- **Git history**: commit in small steps (e.g. "add HTML structure",
  "add responsive CSS", "add JS validation") so the log tells the
  story of how it was built — don't submit one giant commit.
