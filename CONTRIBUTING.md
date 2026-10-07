# Contributing

## Code conventions

- Use arrow functions assigned to `const` for components, hooks and helpers. Components use a default export.
- Style with MUI: theme values first (`src/lib/theme.ts`), then the `sx` prop. Avoid hard-coded colours that already exist in the theme.
- Keep routes in `PATHS` (`src/config/paths.ts`) instead of string literals.
- UI copy is Polish; code, commits and docs are English.
- Follow the surrounding formatting, import order and naming.
- Add a comment only when the code cannot explain the reason on its own.

## Branches and commits

- One branch per feature or fix, named `feat/…`, `fix/…`, `refactor/…` or `chore/…`. Unrelated changes go to separate branches, even when they come up during the same work.
- Use short [Conventional Commits](https://www.conventionalcommits.org/) subjects with a scope, e.g. `fix(cart): keep quantity when re-adding a product`.
- Keep each commit focused and buildable.
- A branch that builds on another unmerged branch starts from it; merge them in that order.
- Merge into `main` through a pull request with a merge commit (no squash).

## Verification

Before merging run:

```bash
npm run lint
npm run build
```

Copy `.env.example` to `.env.local` and fill in the values to run the app locally.
