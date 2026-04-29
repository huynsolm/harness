---
name: slide-type-demo-result
description: Use when creating or revising a university project presentation demo/result slide in this slidemaker project, especially prototype previews, outcome metrics, screenshots, evaluation results, and HyperFrames slide clips.
---

# Slide Type Demo Result

Create the slide that shows the result.

## Purpose

Prove the project exists and summarize what changed. Pair a visible artifact with a few outcome metrics.

## Include

- Prototype, screenshot, mock demo frame, chart, or result visualization.
- Two or three metrics or evaluation findings.
- A headline that states the outcome.
- HyperFrames fields: `class="slide clip"`, `data-slide-name="Demo / Result"`, `data-start`, `data-duration`, `data-track-index`.

## Avoid

- Showing only numbers without the artifact.
- Showing only a screenshot without explaining significance.
- Overclaiming results from tiny tests.

## HTML Pattern

```html
<article class="slide clip two-column" data-slide-name="Demo / Result" data-start="30" data-duration="6" data-track-index="0">
  <div class="stack">
    <div class="kicker">Demo / Result</div>
    <h2>What changed after building it</h2>
    <div class="outcome-row">
      <div class="metric"><b>42%</b><span>Metric label</span></div>
      <div class="metric"><b>18</b><span>Metric label</span></div>
      <div class="metric"><b>4.5</b><span>Metric label</span></div>
    </div>
  </div>
  <div class="demo-frame">
    <h3>Prototype preview</h3>
    <p>Short flow or result caption.</p>
  </div>
</article>
```
