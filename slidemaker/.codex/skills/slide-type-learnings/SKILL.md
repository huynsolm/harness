---
name: slide-type-learnings
description: Use when creating or revising a university project presentation learnings slide in this slidemaker project, especially lessons learned, reflection, tradeoffs, evaluation insights, and HyperFrames slide clips.
---

# Slide Type Learnings

Create the slide that reflects on what the team learned.

## Purpose

Show judgment. This slide separates a mature project presentation from a feature demo.

## Include

- Three lessons or insights.
- Each lesson should connect to a decision, user behavior, constraint, or evaluation result.
- Plain language that would make sense to classmates and instructors.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Learnings"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Generic statements like "teamwork is important".
- Excuses.
- New features that belong in next steps.

## HTML Pattern

```html
<article class="slide clip two-column" data-slide-name="Learnings" data-start="36" data-duration="6" data-track-index="0">
  <div class="stack">
    <div class="kicker">Learnings</div>
    <h2>What changed our thinking</h2>
    <p>One sentence introducing the reflection.</p>
  </div>
  <div class="learn-list">
    <div><span class="marker">1</span><span>Concrete lesson.</span></div>
    <div><span class="marker">2</span><span>Concrete lesson.</span></div>
    <div><span class="marker">3</span><span>Concrete lesson.</span></div>
  </div>
</article>
```
