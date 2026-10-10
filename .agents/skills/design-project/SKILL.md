---
name: design-project
description: Use for visual design, styling, polish, layout, typography, color, motion, responsiveness, or an explicit redesign inside one active MakeVibe project. Helps the child choose a coherent visual direction while preserving the app's content, behavior, and identity.
---

# Design a project

Shape or refine one active MakeVibe project's visual experience without changing what
the app is for.

## Procedure

1. Read the managed profile in `AGENTS.md`, the active project's `README.md`, and its
   current HTML, CSS, and JavaScript before proposing or editing. For an already
   confirmed complex project, also read the relevant files under `modules/`. If the
   profile is pending, run the `onboarding` skill first.
2. Understand the surface in a kid-friendly way: is it mainly for the child to play,
   explain, use, or explore? Play and explore surfaces can be more expressive. For use
   surfaces and explain surfaces meant for reading or completing a task, standard
   controls, consistency, and restrained motion matter more than visual choreography.
3. Choose one coherent visual direction:
   - If the child already gave a clear visual brief, follow it without asking another
     style question.
   - Otherwise, offer at most three concrete, age-appropriate directions suited to the
     project's purpose and interests, then ask one short question.
4. Express the chosen idea consistently with a small set of CSS custom-property tokens
   for the colors, type, spacing, shapes, and motion the project actually needs. Avoid
   mixing unrelated visual styles or adding decoration without a purpose.
5. Apply the decision hierarchy, quality floor, and defaults below. Make the smallest
   complete change and fix problems inside the active project folder only.
6. Verify the result with the bounded visual check below.
7. For standalone project design work, run the repository-standard root
   `npm run build`, inspect the diff, and commit only the active project's files with a
   focused project commit. When `create-project` calls this skill before the first
   version, carry the direction into that version and use its single build, diff review,
   and project commit instead.

## Decision hierarchy

1. A child's clear visual brief wins over stylistic defaults.
2. Refinement preserves the app's content, behavior, requested functionality, and
   recognizable identity.
3. An explicit redesign may replace the visual direction, but not product truth or
   requested functionality.
4. The accessibility requirements in the quality floor and the eyebrow or kicker ban
   are mandatory. A visual brief cannot override them.

## Quality floor

- Use semantic HTML with a clear, readable hierarchy, working controls, visible
  keyboard focus, and comfortable touch targets. Keep the layout usable at 320px wide
  with no horizontal overflow.
- Keep body and placeholder text contrast at least 4.5:1 and large text at least 3:1.
  On a colored surface, tint secondary text from that surface's hue or foreground
  instead of using generic gray.
- Use tight spacing within a group and generous separation between groups. Give a
  heading more space above it than below it.
- Keep prose around `65-75ch` wide and test the real copy at every relevant
  breakpoint for wrapping and overflow.
- Implement every state the project can actually reach: hover, active, disabled,
  loading, error, empty, and success.
- Name controls by their action. Error messages name the problem and how to recover.
- Keep motion restrained and purposeful, support reduced motion, and do not give every
  section the same entrance animation. For task-focused UI, use fast state transitions
  instead of choreography.
- When shadows communicate depth, use an intentional offset with a soft blur rather
  than a zero-offset colored halo.

## Stylistic defaults

Eyebrow or kicker labels above headings are banned.

Unless a clear child brief calls for them:

- Avoid nested cards and repetitive grids of same-size icon, heading, and text cards as
  page scaffolding.
- Avoid gradient text, decorative glass or blur, thick colored left or right borders on
  cards and callouts, decorative sparklines or progress rings, and monospace used only
  to look technical.
- Avoid unnecessary modals. Choose light or dark from the real use scene, not only from
  the app category.

These are defaults that a clear brief may override. The eyebrow ban and accessibility
requirements may not be overridden.

## Visual verification

- When preview tooling is already available, inspect desktop and mobile together in one
  pass, batch the fixes, optionally confirm once, then stop.
- Otherwise, use the production build plus a static inspection of the relevant HTML and
  CSS.

## Boundaries

- Work inside only one active `projects/<project-slug>/` folder.
- Keep a simple project in its four root files. Use `modules/` only when that complex
  structure was already confirmed for this project.
- Do not add design metadata files, helper scripts, packages, APIs, or cross-boundary
  edits.
- Keep communication short, kind, and child-friendly. Ask only one question at a time
  and leave meaningful creative choices to the child.
- Do not introduce command catalogs, browser or live-design tooling, hooks, detectors,
  subagents, product or design specification files, or separate surface briefs.
