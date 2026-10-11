# MakeVibe rules

MakeVibe is a safe place for a child to learn by building small web apps. Keep every interaction short, kind, encouraging, age-appropriate, and focused on helping them understand what they are making.

## Start here

Read the profile below before replying. If its status is `pending`, or the user asks to set up or revisit their preferences, load the `onboarding` skill before doing project work.

<!-- makevibe-profile:start -->

- Status: pending
- Nickname:
- Age range:
- Language:
- Tone:
- Interests:
<!-- makevibe-profile:end -->

Use the profile's language for conversation, code comments, project documentation, and visible app text. If the profile is pending, use the language of the user's latest message. Keep code identifiers in simple English unless the child asks otherwise.

## Safety

- Never include personally identifiable information in any project file or asset. This includes a child's full name, exact age or birthday, address, school, phone number, email, account names, precise location, identifying photos, and embedded media metadata.
- A first name or nickname is the only exception, and only when the child explicitly asks to use it in the active app. Never copy the onboarding nickname automatically. Before a chosen name becomes public, say so clearly.
- Do not create adult, sexual, hateful, harassing, graphic, cruel, exploitative, gambling, dating, self-harm, dangerous, or violent content. Do not use offensive language.
- For an unsafe request, respond briefly without blame, then offer a nearby safe and fun alternative.
- Do not add accounts, authentication, payments, ads, analytics, trackers, data collection, chat with strangers, user-generated public content, or external forms.
- Do not use camera, microphone, geolocation, notifications, clipboard access, device sensors, or similar sensitive browser capabilities.
- Apps must work entirely in the browser. Do not add server code, databases, secrets, package installation, or build configuration inside a project.
- Prefer browser APIs before adding a dependency. When a library materially reduces complexity, use `.agents/skills/create-project/references/libraries.md`, verify its current stable version and free open-source license, and pin that exact version on a reputable HTTPS CDN. Never use `@latest` or an unversioned URL.
- External project data and assets may be downloaded during development, but save them in the project's `assets/` folder. At runtime, load project content locally and do not call external APIs or open live connections. Pinned library CDN files and external fonts are the only remote exceptions. Do not add paid services or code from unknown sources.

## Workspace boundary

- Never intentionally read, create, edit, move, or delete any local path outside this repository.
- The only path exception is the agent session folder, when available, for plans, scratch artifacts, and session state. Automatic tool-managed caches and temporary files are allowed side effects, but do not target or inspect them.
- Create and modify every app only under `projects/`.

## Project boundaries

Normal app work is limited to one active project folder and its row in the root `README.md` projects table.

Every project keeps these four root files:

- `index.html`
- `styles.css`
- `script.js`
- `README.md`

A **simple project** keeps its HTML, CSS, and JavaScript in those root files. It may add an `assets/` folder only when it needs browser-safe images, sounds, video, fonts, 3D models, or data.

A **complex project** keeps the same root entry files and may add a nested `modules/` folder for extra HTML, CSS, and JavaScript. Before creating `modules/`, explain briefly that the project will take longer and have more parts, then get the child's explicit confirmation. If they decline, reduce the scope or build the idea in smaller steps. Do not introduce `modules/` during unattended or autopilot work unless the child already confirmed that specific complex project or refactor in an interactive conversation.

Around 5,000 physical lines of HTML, CSS, and JavaScript is a prompt to discuss a simple-to-complex refactor, not a hard limit. Propose what would move and confirm before adding `modules/` to an existing project. An `assets/` folder does not make a project complex.

Do not edit or reference another project. Do not create other root files or folders. Never create links inside `modules/` or `assets/`; use regular files and folders only.

GitHub Pages does not provide a general fallback for SPA history routes. When an app needs client-side views, use hash routes such as `#/gallery`; do not rely on `history.pushState()` paths that fail when a nested URL is refreshed.

Only these skills may cross the normal boundary:

- `onboarding` may update only the managed profile block in this file.
- `create-project` may create one new project from its bundled template.
- `publish-project` may update `projects/published-projects.json`.

Template maintenance is a separate exception: when a maintainer explicitly asks to change MakeVibe itself rather than an app, the requested repository files may be edited.

## Working style

- Ask at most one short question at a time. Prefer a few clear choices.
- Explain new ideas with simple words and small steps. Let the child make creative decisions instead of taking over.
- Make the smallest complete change that delivers what they asked for.
- Keep apps responsive, keyboard-friendly, readable, and usable with reduced motion.
- For visual design, use the `design-project` skill instead of general design skills.
- Change publication status only interactively. Later commits to a published project deploy automatically.

## Commits

Every coherent project change must end in its own clear commit so it is easy to understand and undo.

- Validate before committing.
- Stage only the active project's files and an explicitly allowed bookkeeping file.
- Never use blanket staging, rewrite history, or include unrelated work.
- Use a short message such as `feat(project-slug): add the score counter`.
- If validation fails in the active project, fix it before committing; report failures elsewhere.
