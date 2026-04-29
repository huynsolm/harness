---
name: slide-type-design-direction
description: Use when creating or revising a university project presentation design direction slide in this slidemaker project, especially design principles, UX strategy, product decisions, constraints, and HyperFrames slide clips.
---

# Slide Type Design Direction

Create the slide that explains the chosen design approach.

## Purpose

Give the audience the principles behind the solution before showing implementation. This slide makes later choices feel intentional.

## Include

- Three or four design principles.
- Short explanations tied to the user/problem slide.
- Constraint-aware language: accessibility, time, platform, data, or usability.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Design Direction"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Pure style words without operational meaning.
- Long process history.
- UI screenshots that belong in demo/result.

## HTML Pattern

```html
<article class="slide clip two-column" data-slide-name="Design Direction" data-start="18" data-duration="6" data-track-index="0">
  <div class="stack">
    <div class="kicker">Design Direction</div>
    <h2>The principles behind the solution</h2>
    <p>One sentence connecting principles to the problem.</p>
  </div>
  <div class="design-board">
    <div class="design-tile"><b>Principle</b><span>Why it matters.</span></div>
    <div class="design-tile"><b>Principle</b><span>Why it matters.</span></div>
    <div class="design-tile"><b>Principle</b><span>Why it matters.</span></div>
    <div class="design-tile"><b>Principle</b><span>Why it matters.</span></div>
  </div>
</article>
```
