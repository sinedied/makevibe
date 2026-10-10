---
name: create-project
description: Use when the child wants to start, make, or create a new MakeVibe web app, game, presentation, visualization, interactive story, learning tool, or utility. Creates exactly one project from the bundled four-file template. Do not use to edit an existing project or publish one.
---

# Create a project

Create one safe browser app from `assets/project-template/`.

## Procedure

1. Read the managed profile in `AGENTS.md`. If it is pending, run the `onboarding` skill
   first. Use the selected language for every question and generated project text.
2. Help the child choose one idea. If they are unsure, offer at most three options based
   on their interests, such as:
   - a presentation or interactive story;
   - a friendly 2D or 3D game without violence;
   - a countdown, visualization, quiz, learning tool, or simple utility.
3. Ask one short question at a time until the app has a title and a one-sentence goal.
   Prefer a small first version that can grow later.
4. Create a lowercase kebab-case slug using only `a-z`, `0-9`, and single hyphens. It
   must match `^[a-z0-9]+(?:-[a-z0-9]+)*$`. If `projects/<slug>/` exists, choose another
   slug with the child; never overwrite it.
5. Copy the four files from `assets/project-template/` into `projects/<slug>/`. Do not
   copy the template folder itself and do not modify the bundled template.
6. Replace every `{{PLACEHOLDER}}` in the new files. Localize visible text and
   `README.md`; use a short BCP 47 language code in the HTML `lang` attribute.
7. Build the smallest useful first version within `index.html`, `styles.css`,
   `script.js`, and `README.md`. Do not add files, folders, packages, APIs, or sensitive
   browser capabilities.
8. Update only the section between `<!-- makevibe-projects:start -->` and
   `<!-- makevibe-projects:end -->` in the root `README.md`. Add one row linking to the
   project folder with status `Local only`. Remove the empty-state row when adding the
   first project.
9. Confirm no `{{PLACEHOLDER}}` remains, run `npm run build`, and inspect the diff.
10. Commit only the new project folder and root `README.md` with
    `feat(<slug>): create project`.
11. Tell the child, in one short message, that they can run `npm run dev` and open
    `http://localhost:5173/<slug>/`.

## Project file roles

- `index.html`: structure and visible text.
- `styles.css`: layout, colors, typography, and motion.
- `script.js`: browser interaction.
- `README.md`: a short explanation of the project and what the child learned.

## Gotchas

- Do not put the nickname, age range, or other profile data in the project.
- A CDN script is allowed only when it is necessary and uses HTTPS. Prefer plain browser
  features for the first version.
- Creating a project does not approve it for publication.
