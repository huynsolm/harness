---
name: slide-type-title
description: Use when creating or revising a university project presentation title slide in this slidemaker project, especially HyperFrames HTML decks, opening slides, project names, presenter metadata, course names, and first-slide framing.
---

# Slide Type Title

Create the opening slide for a project presentation.

## Purpose

Establish the project identity before any details. A title slide should answer: what is this project, who made it, and what academic context does it belong to?

## Include

- Project name as the dominant text.
- Course, semester, team, author, or institution metadata.
- One short framing sentence if the title alone is not clear.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Title"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Dense explanation.
- Feature lists.
- Results or conclusions that belong later.

## HTML Pattern

```html
<article class="slide clip title-layout" data-slide-name="Title" data-start="0" data-duration="6" data-track-index="0">
  <div class="title-copy">
    <div class="kicker">Project Presentation</div>
    <h1>Project Name</h1>
    <p>One sentence that frames the project.</p>
  </div>
  <div class="metadata-row">
    <span>Course Name</span>
    <span>Team / Semester</span>
  </div>
</article>
```
