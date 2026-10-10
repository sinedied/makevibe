<div align="center">

# MakeVibe

**A safe little workshop where kids can learn by making web apps with AI.**

[Start a project](#start-making) &middot; [Safety](#made-for-safe-exploring) &middot; [Projects](#projects) &middot; [Publish](#publish-with-permission)

</div>

MakeVibe is a GitHub repository template for presentations, friendly games,
visualizations, interactive stories, educational tools, and simple utilities. Each app
is plain HTML, CSS, and JavaScript, so it stays easy to inspect, understand, and undo.

> [!IMPORTANT]
> Create the repository as **private**. A published GitHub Pages app is public, but
> MakeVibe's build includes only projects that the child has explicitly approved.

## Made for safe exploring

- **Kid-sized conversations:** one short question at a time, in the child's chosen
  language and tone.
- **Privacy-aware onboarding:** stores only a nickname, age range, language, tone, and
  interests in a private repository.
- **Small, understandable projects:** every app has exactly four files.
- **Browser-only:** no servers, databases, project packages, accounts, ads, analytics, or
  personal-data collection.
- **Easy to undo:** every coherent change gets a clear Git commit.
- **Private until approved:** only projects listed in
  `projects/published-projects.json` enter the public build.

> [!NOTE]
> AI guardrails reduce risk but cannot guarantee perfect results. A parent, guardian, or
> teacher should stay involved, especially before anything is published.

## Start making

1. Use this repository as a GitHub template and choose **Private**.
2. Open it with GitHub Copilot in the app, an editor, or the CLI.
3. Say **"Let's get started"**. The onboarding skill asks a few short questions.
4. Say what you want to make, or ask for three ideas.

MakeVibe creates each app in `projects/<project-name>/` with:

```text
index.html    page structure and words
styles.css    colors, layout, and motion
script.js     interactions
README.md     what the project does and what was learned
```

Those are the only files an app can use. Browser libraries may be loaded from a trusted
HTTPS CDN when plain JavaScript is not enough.

## Projects

<!-- makevibe-projects:start -->
| Project | What it is | Status |
| --- | --- | --- |
| _No projects yet_ | Ask MakeVibe to create one. | Local only |
<!-- makevibe-projects:end -->

## Run projects locally

Install [Node.js](https://nodejs.org/) 20.19 or newer, then install the root development
tool once:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Then open the project URL MakeVibe gives you, such as
`http://localhost:5173/my-first-project/`.

> [!TIP]
> Packages are only for the repository's development tools. Never run `npm install`
> inside a project folder.

## Publish with permission

1. In **Settings > Pages**, choose **GitHub Actions** as the source.
2. In an interactive conversation, ask MakeVibe to publish a project.
3. MakeVibe checks safety, privacy, accessibility, and the production build.
4. The child gives explicit final approval.
5. MakeVibe adds the project to `projects/published-projects.json` and records its public
   link in the table above.
6. When that commit reaches the default branch, GitHub Actions deploys the approved
   projects automatically.

Publishing never runs from autopilot, plan, background, or unattended work. Removing a
project from the publication list removes it from the next Pages deployment while keeping
its private source and Git history.

## How the repository is organized

```text
AGENTS.md
  MakeVibe's language, safety, file-boundary, and commit rules

.agents/skills/
  onboarding/       private, child-friendly setup
  create-project/   new-project workflow and four-file starter asset
  publish-project/  explicit public approval and unpublishing

projects/
  published-projects.json  the public deployment allowlist
  <project-name>/           one four-file app

vite.config.js
  validates every project and builds only published ones

.github/workflows/deploy-pages.yml
  deploys the allowlisted build from the default branch
```

The Pages landing page is generated during the build from the publication manifest. It
is not another project and adds no hand-maintained HTML, CSS, or JavaScript to
`projects/`.
