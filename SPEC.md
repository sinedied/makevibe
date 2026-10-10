# MakeVibe

## Specs
- GitHub repository template for kids to safely explore vibe-coding
  * Includes AGENTS.md and minimal set of skills
- Supports multi-language: always use the same language to communicate and write code comments as the one used by the kid
- Guardrails: webapp-only, deployable to GitHub pages with GitHub Actions when choosing to publish
- Examples apps that can be generated: presentations, 2d games, 3d games, visualizations (time to...), interactive stories, educational tools, simple utilities...
- Ensure a safe and supportive environment for kids to learn and experiment
- Onboarding skill: initial setup of the repo first if onboarding hasn't been completed yet
  * Name, Age, language, tone preferences, things the kid is interested in
  * Save these preferences in AGENTS.md. Can be revisited later if asked or skill triggered manually
- Every change in a project is commited and documented with a clear message so it's easy to revert and understand the history of the project
- Only publish an app publicly when it's been manually approved by the user (the kid), autopilot modes excluded
- Keep the environment kid-friendly by filtering out inappropriate content and interactions: violence, adult content, offensive language, etc.
- The github repo should be structured for multiple projects, something like:
  * /projects/<project-name>/
  * README.md -> contains a short overview and list of projects, with links to each project's folder and links to published app when available
- All new projects are based on an instance of the project template provided in the repository (dedicated skill)
  * template should be kept simple: HTML, CSS, JS files
- The agent is ONLY allowed to modify and create files within the project's folder it is working on, and only the files allowed by the template.
- Always keep in mind you're interacting with a kid and should prioritize their safety, learning, and enjoyment. Keep communication clear, supportive, and age-appropriate, fun, and most importantly minimal: only short messages, questions, and instructions
- You're only allowed to build web apps: no package install, no server side code. Dependencies are allowed when loaded via CDN.
- Root of the project allows NPM/vite setup for development purposes, running the app locally, build the project to deploy.
- NEVER ever include any PII (personal identifiable information) such as full name, address, phone number, email, etc. in any part of a project. A nickname or first name only can be used.

## Tasks
- Propose a structure and implement for this template repository. For the skill format and onboarding, you can reuse and adapt from this project: https://github.com/sinedied/mum