# React Table

A small sortable user table with a detail panel. The data is fetched from
[JSONPlaceholder](https://jsonplaceholder.typicode.com/users); clicking a column
header sorts the table, clicking a row shows that user's details below.

This repository started life as a Create React App (`react-scripts@3.3.0`,
React 16.12) and has been modernised end-to-end.

## Stack

| Area     | Tool                                               |
| -------- | -------------------------------------------------- |
| Build    | [Vite 6](https://vite.dev/)                        |
| UI       | [React 19](https://react.dev/) (function + hooks)  |
| Styling  | [Bootstrap 5.3](https://getbootstrap.com/)         |
| Utility  | [`lodash-es`](https://lodash.com/) (tree-shakable) |
| Lint     | [ESLint 9](https://eslint.org/) (flat config)      |
| Format   | [Prettier 3](https://prettier.io/)                 |
| Tests    | [Vitest 3](https://vitest.dev/) + Testing Library  |
| Test env | [jsdom](https://github.com/jsdom/jsdom)            |

## Security

`npm audit` reports **0 vulnerabilities** (down from 233 in the original
CRA-based dependency tree).

## Requirements

- Node.js >= 20
- npm >= 10

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script                 | Purpose                              |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the Vite dev server            |
| `npm run build`        | Produce a production build in `dist` |
| `npm run preview`      | Preview the production build         |
| `npm run lint`         | ESLint over the whole project        |
| `npm run lint:fix`     | ESLint with `--fix`                  |
| `npm run format`       | Prettier write                       |
| `npm run format:check` | Prettier check (used by CI)          |
| `npm run test`         | Vitest in watch mode                 |
| `npm run test:run`     | Vitest single run (used by CI)       |
| `npm run coverage`     | Vitest with coverage                 |

## Project layout

```
.
├── index.html               Vite entry HTML
├── vite.config.js
├── eslint.config.js
├── .prettierrc.json
├── public/                  Static assets served as-is
└── src/
    ├── main.jsx             createRoot bootstrap
    ├── App.jsx              Data fetching + state
    ├── Table/
    │   ├── Table.jsx
    │   └── Table.test.jsx
    ├── DetailRowView/
    │   ├── DetailRowView.jsx
    │   └── DetailRowView.test.jsx
    ├── Loader/
    │   ├── Loader.jsx
    │   ├── Loader.css
    │   └── Loader.test.jsx
    └── test/
        └── setup.js         Testing Library + jest-dom registration
```

## Testing

Tests live next to the component they cover. The shared setup file
(`src/test/setup.js`) registers `@testing-library/jest-dom` matchers and
calls `cleanup()` between tests. Run them with:

```bash
npm run test:run
```

## What changed compared to the original

- Replaced Create React App (`react-scripts@3.3.0`) with **Vite 6**.
- Upgraded **React 16 -> 19**, `ReactDOM.render` -> `createRoot` with `<StrictMode>`.
- Converted all components from classes to **function components with hooks**.
- Replaced the dead `http://www.filltext.com` API with the public, HTTPS
  **JSONPlaceholder** users endpoint and adapted the column / detail schema.
- Upgraded **Bootstrap 4 -> 5.3**; refreshed the layout with cards and a
  description list.
- Replaced `lodash` with the tree-shakable `lodash-es`.
- Removed the legacy CRA `serviceWorker.js`.
- Translated the user-facing strings to English and added accessible
  attributes (`role="status"` / `aria-label` on the loader).
- Added **ESLint 9 (flat config)**, **Prettier 3**, **Vitest 3** with
  Testing Library, and a small test suite covering the table interactions,
  the detail panel, and the loader.
