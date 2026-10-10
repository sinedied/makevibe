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
   explain, use, or explore? Keep the project's purpose and the child's interests in
   mind.
3. Establish one visual direction:
   - If the child already gave a clear visual brief, follow it without asking another
     style question.
   - Otherwise, offer at most three concrete, age-appropriate directions suited to the
     project's purpose and interests, then ask one short question.
4. Express the chosen idea consistently with a small set of CSS custom-property tokens
   for the colors, type, spacing, shapes, and motion the project actually needs. Avoid
   mixing unrelated visual styles or adding decoration without a purpose.
5. Make the smallest complete design change. Preserve the app's content, behavior,
   requested functionality, and recognizable project identity during refinement. An
   explicit redesign may replace the visual direction, but it must not change the
   product truth or remove requested functionality.
6. Check the result against the quality floor below. Fix problems inside the active
   project folder only.
7. For standalone project design work, run the repository-standard root
   `npm run build`, inspect the diff, and commit only the active project's files with a
   focused project commit. When `create-project` calls this skill before the first
   version, carry the direction into that version and use its single build, diff review,
   and project commit instead.

## Quality floor

- Use semantic HTML with readable typography, clear hierarchy, and sufficient contrast.
- Show a visible keyboard focus state and provide comfortable touch targets.
- Keep the layout usable down to 320px wide with no horizontal overflow.
- Respect reduced-motion preferences. Keep animation restrained and purposeful.
- Include suitable empty and error states when the project can encounter them.

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
