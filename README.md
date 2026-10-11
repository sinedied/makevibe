<div align="center">

# MakeVibe

**A safe little workshop where kids can learn by making web apps with AI.**

[Start a project](#start-making) &middot; [Safety](#made-for-safe-exploring) &middot; [Projects](#projects) &middot; [Publish](#publish-with-permission)

</div>

MakeVibe is a GitHub repository template for presentations, friendly games, visualizations, interactive stories, educational tools, and simple utilities. Each app is plain HTML, CSS, and JavaScript, so it stays easy to inspect, understand, and undo.

## Made for safe exploring

- **Kid-sized conversations:** one short question at a time, in the child's chosen language and tone.
- **Privacy-aware onboarding:** stores only a nickname, age range, language, tone, and interests. Projects exclude personal details beyond a first name or nickname the child explicitly chooses to use.
- **Small first, structured when needed:** every app starts with four readable files and adds modules only after the child confirms the extra complexity.
- **Child-led design:** the child chooses the app's visual direction while MakeVibe applies responsive, accessible defaults.
- **Browser-only:** no servers, databases, project packages, accounts, ads, analytics, or personal-data collection.
- **Easy to undo:** every coherent change gets a clear Git commit.
- **Private until approved:** only projects listed in `projects/published-projects.json` enter the public build.

> [!NOTE]
> AI guardrails reduce risk but cannot guarantee perfect results. A parent, guardian, or teacher should stay involved, especially before anything is published.

## Start making

1. Use this repository as a GitHub template and choose **Private**.
2. Open it with GitHub Copilot in the app, an editor, or the CLI.
3. Say **"Let's get started"**. The onboarding skill asks a few short questions.
4. Say what you want to make, or ask for three ideas.

MakeVibe starts each app in `projects/<project-name>/` with:

```text
index.html    page structure and words
styles.css    colors, layout, and motion
script.js     interactions
README.md     what the project does and what was learned
```

Most ideas fit this **simple project** layout. Either project type may add `assets/` when it needs browser-safe images, sounds, video, fonts, 3D models, or data.

When an idea clearly needs more structure, MakeVibe explains that it may take longer and asks before turning it into a **complex project**. A complex project keeps the same four root entry files and adds `modules/` for nested HTML, CSS, and JavaScript. It is a refactor of the same starter, not a second template.

Around 5,000 lines of HTML, CSS, and JavaScript is a prompt to discuss readability and possible refactoring, not a strict build quota.

> [!CAUTION]
> Never put PII such as a full name, exact age or birthday, address, school, phone number, email, account name, precise location, identifying photo, or embedded location metadata in a project. A first name or nickname is allowed only when the child explicitly chooses to use it, and publication makes that name public.

MakeVibe prefers plain browser features. When a library clearly helps, its compact agent reference suggests free open-source options loaded from a reputable HTTPS CDN with an exact stable version.

## Projects

<!-- makevibe-projects:start -->

| Project           | What it is                  | Status     |
| ----------------- | --------------------------- | ---------- |
| _No projects yet_ | Ask MakeVibe to create one. | Local only |

<!-- makevibe-projects:end -->

## Run projects locally

Install [Node.js](https://nodejs.org/) 20.19+ or 22.12+, then install the root development tool once:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Then open the project URL MakeVibe gives you, such as `http://localhost:5173/my-first-project/`.

> [!TIP]
> Packages are only for the repository's development tools. You don't need to run `npm install` inside a project folder.

## Publish with permission

1. In an interactive conversation, ask MakeVibe to publish a project.
2. MakeVibe checks safety, privacy, accessibility, and the production build.
3. The child gives explicit final approval.
4. MakeVibe adds the project to `projects/published-projects.json` and records its public link in the table above.
5. When that commit reaches the default branch, GitHub Actions deploys the approved projects. Later changes to a published app deploy the same way until it is unpublished.

Publication status only changes in an interactive conversation. Unpublishing removes the app from the next deployment while keeping its private source and Git history.

> [!NOTE]
> **Turn publishing on:** in **Settings > Pages**, set the source to **GitHub Actions**. Pages from a private repository requires GitHub Pro, Team, or Enterprise.
>
> **Turn publishing off:** disable the **Deploy published projects** workflow in the **Actions** tab and unpublish the site in **Settings > Pages**. If you never plan to publish, disable the workflow so pushes don't create failed runs.

The Pages landing page is generated during the build from the publication manifest. It is not another project and adds no hand-maintained HTML, CSS, or JavaScript to `projects/`.
