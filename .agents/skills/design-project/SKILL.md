---
name: design-project
description: Use for visual design, styling, polish, layout, typography, color, motion, or an explicit redesign of one active MakeVibe project. Not for game mechanics, logic, or content changes; for a new app, start with create-project.
---

# Design a project

Shape or refine one active project's look without changing what the app is for. Only an explicit redesign may replace the visual direction, never the content or behavior.

## Procedure

1. Read the project's `README.md`, HTML, CSS, and JavaScript (and relevant `modules/` files) before proposing changes.
2. Infer, without asking, whether the app is mainly for play, explaining, using, or exploring. Play and explore can be more expressive; use and explain need standard controls and restrained motion.
3. If the child gave a clear visual brief, follow it. Otherwise offer at most three concrete, age-appropriate directions based on the app and their interests.
4. Apply the direction consistently through the CSS custom properties in `styles.css`. Add decoration only with a purpose.
5. Pick a characterful heading font that fits the direction and a very readable body font; self-host fonts in `assets/` when possible.
6. For the `under 8` and `8-10` age ranges, use larger text and touch targets, fewer words, and icons paired with words.
7. Verify with `npm run dev` at `/<slug>/`, at desktop width and 320px, when a browser tool is available; otherwise inspect the HTML and CSS. Batch fixes in one pass, then stop. When called from `create-project`, verify after the first version is built.
8. For standalone design work, run `npm run build` and commit only the active project's files. When called from `create-project`, its build and commit cover this work.

## Always required

A child's request cannot override these:

- Visible keyboard focus, comfortable touch targets, and no horizontal overflow at 320px.
- Text contrast of at least 4.5:1, or 3:1 for large text.
- Every reachable state works: hover, active, disabled, loading, error, empty, and success.

## Defaults

Follow these unless the child asks otherwise:

- No eyebrow or kicker labels above headings.
- No nested cards or grids of same-size icon cards as page scaffolding.
- No gradient text, decorative glass or blur, thick colored side borders on cards, or unnecessary modals.
- Tint secondary text from its surface color instead of generic gray.
- Keep motion purposeful; don't give every section the same entrance animation.
