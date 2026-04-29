---
name: slide-type-qa-closing
description: Use when creating or revising a university project presentation Q&A or closing slide in this slidemaker project, especially final messages, contact info, discussion prompts, and HyperFrames slide clips.
---

# Slide Type Q&A Closing

Create the final slide for questions and closure.

## Purpose

Leave the audience with the central message and a clear place to ask questions or follow up.

## Include

- A concise closing headline.
- One remembered takeaway.
- Team, contact, repository, QR code placeholder, or course metadata.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Q&A / Closing"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Adding new arguments.
- Repeating every previous slide.
- Ending with only "Thank you" if a stronger takeaway is available.

## HTML Pattern

```html
<article class="slide clip title-layout" data-slide-name="Q&A / Closing" data-start="48" data-duration="6" data-track-index="0">
  <div class="title-copy">
    <div class="kicker">Q&A / Closing</div>
    <h2>Questions?</h2>
    <p>One final takeaway from the project.</p>
  </div>
  <div class="metadata-row">
    <span>Team / Course</span>
    <span>contact@example.edu</span>
  </div>
</article>
```
