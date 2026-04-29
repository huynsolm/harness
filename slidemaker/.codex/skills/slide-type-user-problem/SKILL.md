---
name: slide-type-user-problem
description: Use when creating or revising a university project presentation user/problem slide in this slidemaker project, especially personas, pain points, problem statements, user context, and HyperFrames slide clips.
---

# Slide Type User Problem

Create the slide that connects users to the problem.

## Purpose

Show who has the problem, when it happens, and why it matters. This slide should make the solution feel necessary.

## Include

- Clear user groups or personas.
- Specific pain points, not generic inconvenience.
- A headline that names the problem.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="User / Problem"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Blaming users.
- Overly broad groups like "everyone".
- Jumping into the solution.

## HTML Pattern

```html
<article class="slide clip two-column" data-slide-name="User / Problem" data-start="12" data-duration="6" data-track-index="0">
  <div class="stack">
    <div class="kicker">User / Problem</div>
    <h2>Who struggles, and where</h2>
    <p>One sentence explaining the situation.</p>
  </div>
  <div class="problem-map">
    <div class="problem-card"><strong>User group</strong><span>Specific pain point.</span></div>
    <div class="problem-card"><strong>User group</strong><span>Specific pain point.</span></div>
    <div class="problem-card"><strong>User group</strong><span>Specific pain point.</span></div>
  </div>
</article>
```
