---
name: slide-type-next-steps
description: Use when creating or revising a university project presentation next steps slide in this slidemaker project, especially future work, roadmap, limitations, improvements, and HyperFrames slide clips.
---

# Slide Type Next Steps

Create the slide that explains what should happen after the current project.

## Purpose

Close the project work honestly. The audience should understand the most realistic improvements, not an endless wishlist.

## Include

- Three next steps.
- Each item should be specific and feasible.
- Mention limitations only when they lead to a concrete improvement.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Next Steps"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Ten-item roadmaps.
- Vague future work like "improve performance".
- Promising features unsupported by the project.

## HTML Pattern

```html
<article class="slide clip" data-slide-name="Next Steps" data-start="42" data-duration="6" data-track-index="0">
  <div class="stack">
    <div class="kicker">Next Steps</div>
    <h2>What comes after this version</h2>
    <p>One sentence that frames the roadmap.</p>
  </div>
  <div class="next-steps">
    <div class="next-step"><b>Improvement</b><span>Specific next action.</span></div>
    <div class="next-step"><b>Improvement</b><span>Specific next action.</span></div>
    <div class="next-step"><b>Improvement</b><span>Specific next action.</span></div>
  </div>
</article>
```
