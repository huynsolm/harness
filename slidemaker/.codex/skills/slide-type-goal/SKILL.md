---
name: slide-type-goal
description: Use when creating or revising a university project presentation goal slide in this slidemaker project, especially objectives, success criteria, measurable outcomes, scope boundaries, and HyperFrames slide clips.
---

# Slide Type Goal

Create the slide that defines project success.

## Purpose

Translate the project idea into measurable goals. The audience should understand what the team tried to achieve and how success will be judged.

## Include

- One strong headline about the project goal.
- Three concrete success criteria.
- Measurable language when possible: time, accuracy, user count, completion rate, or quality threshold.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Goal"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Vague claims like "make it better" or "improve experience".
- Too many goals.
- Implementation details.

## HTML Pattern

```html
<article class="slide clip two-column" data-slide-name="Goal" data-start="6" data-duration="6" data-track-index="0">
  <div class="stack">
    <div class="kicker">Goal</div>
    <h2>What counts as success</h2>
    <p>Short explanation of the goal.</p>
  </div>
  <div class="goal-list">
    <div><span class="marker">1</span><span>Measurable criterion.</span></div>
    <div><span class="marker">2</span><span>Measurable criterion.</span></div>
    <div><span class="marker">3</span><span>Measurable criterion.</span></div>
  </div>
</article>
```
