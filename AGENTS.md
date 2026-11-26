# Agent working rules

These rules are mandatory for every task in this repository.

1. **Inspect before changing.** Before starting work, read the relevant documentation and inspect the project structure and existing implementation.
2. **Keep documentation current.** After significant changes, update the relevant documentation, including setup, architecture, decisions, and task status where applicable.
3. **Separate facts from assumptions.** Do not record unverified assumptions, guesses, or hypotheses as facts. Label uncertainty explicitly and include evidence when available.
4. **Verify documentation before finishing.** Before marking a task complete, check that documentation matches the actual code, commands, dependencies, and repository state.
5. **Commit docs with code.** All documentation changes must be committed in the same commit as the corresponding code changes. Do not leave related documentation for a later commit.

## Engineering standards

- Prefer small, focused changes over unnecessary rewrites.
- Preserve existing conventions and public interfaces unless a change is justified.
- Consider security, reliability, performance, and compatibility.
- Add or update tests for behavior changes.
- Run relevant tests, linting, and builds; report exactly what was and was not run.
- Never claim a check passed unless it was executed and passed.
- Record important architectural decisions in `DECISIONS.md` and update `PROJECT_CONTEXT.md` when project context changes.
