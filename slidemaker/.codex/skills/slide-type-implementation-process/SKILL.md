---
name: slide-type-implementation-process
description: Use when creating or revising a university project presentation implementation process slide in this slidemaker project, especially build steps, research-to-prototype flow, technical milestones, and HyperFrames slide clips.
---

# Slide Type Implementation Process

Create the slide that shows how the project was built.

## Purpose

Turn the team's work into a credible sequence. The audience should see the process without needing a full technical report.

## Include

- Four major phases.
- One concise sentence per phase.
- Phase names that fit the project: research, data, prototype, test, model, deploy, evaluate.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Implementation Process"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Every small task or meeting.
- Raw code snippets unless the project is specifically about code.
- Results that belong in demo/result.

## HTML Pattern

```html
<article class="slide clip" data-slide-name="Implementation Process" data-start="24" data-duration="6" data-track-index="0">
  <div class="stack">
    <div class="kicker">Implementation Process</div>
    <h2>How the team built it</h2>
  </div>
  <div class="process-grid">
    <div class="process-card"><strong>Phase</strong><span>What happened.</span></div>
    <div class="process-card"><strong>Phase</strong><span>What happened.</span></div>
    <div class="process-card"><strong>Phase</strong><span>What happened.</span></div>
    <div class="process-card"><strong>Phase</strong><span>What happened.</span></div>
  </div>
</article>
```
