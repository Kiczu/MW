# Contributing

## Code conventions

- Use arrow functions assigned to `const` for components, hooks and helpers. Components use a default export.
- Style with MUI: theme values first (`src/lib/theme.ts`), then the `sx` prop. Avoid hard-coded colours that already exist in the theme.
- Keep routes in `PATHS` (`src/config/paths.ts`) instead of string literals.
- Gate everything that sells (prices, cart, checkout, `/shop`) behind `SHOP_ENABLED` (`src/config/features.ts`). The site currently runs with the shop turned off.
- UI copy is Polish; code, commits and docs are English.
- Follow the surrounding formatting, import order and naming.
- Add a comment only when the code cannot explain the reason on its own.

## Branches and commits

- One branch per concern, named `feat/…`, `fix/…`, `refactor/…` or `chore/…`, created from `main`.
- Use short [Conventional Commits](https://www.conventionalcommits.org/) subjects with a scope, e.g. `fix(cart): keep quantity when re-adding a product`.
- Keep each commit focused and buildable.
- A branch that depends on another one forms a stack: merge them in base-to-tip order and rebase the next branch onto `main` before merging it.
- Rewrite only unpublished commits. Make a local backup branch before a larger rebase.

## Merging

- Merge into `main` through a pull request with a merge commit (no squash), after review.
- Delete the branch after it has been merged.

## Verification

Before opening a pull request run:

```bash
npm run lint
npm run build
```

Copy `.env.example` to `.env.local` and fill in the values to run the app locally.
