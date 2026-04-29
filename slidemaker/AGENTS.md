# AGENTS.md

## Project Intent

This project is a slide-making workspace that uses HyperFrames to produce both:

1. Static, browser-viewable slides.
2. Rendered video output from the same HTML-based slide source.

The source of truth should remain editable HTML/CSS/JS plus project documentation. Generated videos and temporary render artifacts should not become the canonical source.

## Design Source

When creating or revising slides, use `design.md` as the primary design specification.

If `design.md` exists, read it before making slide changes and follow its slide structure, visual direction, content rules, and rendering requirements. If `design.md` does not exist, create or request one before doing substantial slide design work.

Do not preserve slide design rules in this file. Keep slide-specific design decisions in `design.md`.

## Slide Skills

This project keeps reusable slide-type skills under `.codex/skills/`. Treat these as project-local skills only; do not copy them into global Codex skill directories unless explicitly requested.

When creating or revising repeatable university project presentation slides, prefer the matching `slide-type-` skill:

- `slide-type-title`
- `slide-type-goal`
- `slide-type-user-problem`
- `slide-type-design-direction`
- `slide-type-implementation-process`
- `slide-type-demo-result`
- `slide-type-learnings`
- `slide-type-next-steps`
- `slide-type-qa-closing`

If project-local skills are not automatically discovered, read the relevant `SKILL.md` file directly from `.codex/skills/<skill-name>/SKILL.md` before editing that slide type.

## HyperFrames Direction

Use HyperFrames as the HTML-to-video rendering layer. Slides should remain viewable as regular HTML and renderable to MP4 through HyperFrames.

## Preview Port Policy

Preview must only run on port `3000`.

Before starting any preview server, run the project hook that clears listeners on port `3000` and nearby preview ports:

```bash
npm run preview:clean
```

To start the static preview, use only:

```bash
npm run preview
```

Do not start ad hoc preview servers on `3001`, `5173`, `8000`, `8080`, or any other fallback port. If port `3000` is busy, clean it with the project hook instead of choosing another port.

The hook entrypoint is `.codex/hooks/preview-3000.ps1`. It runs `scripts/prepare-preview-port.ps1` before launching the preview. The server implementation also rejects any `PORT` value other than `3000`.

Expected static preview command:

```bash
npm run preview
```

Expected video render command:

```bash
npx hyperframes render --output output.mp4
```

Runtime prerequisites:

- Node.js 22 or newer.
- npm or bun.
- FFmpeg for MP4 encoding.

## Agent Instructions

When working on this project:

1. Read this file before architectural changes.
2. Read `design.md` before creating or revising slides.
3. Use the relevant project-local `slide-type-` skill when working on a repeatable slide type.
4. Preserve the dual-output goal: static slides and rendered video.
5. Use only port `3000` for preview, and run the preview port hook before starting a server.
6. Keep generated files separate from editable source files.
7. Before claiming video rendering works, verify the relevant HyperFrames command actually runs.
