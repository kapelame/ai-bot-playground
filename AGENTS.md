# Agent Instructions

## Review guidelines

- Flag privilege escalation bugs as high severity.
- Flag routes or helpers that expose `process.env` or secret-like values.
- Prefer minimal patches over broad refactors.
- When reviewing pricing logic, check whether tests still reflect the intended business formula.

## Cursor Cloud specific instructions

- **Runtime:** Node.js >= 20 (no other services or databases needed).
- **Tests:** `npm test` runs all tests via the Node.js built-in test runner (`node --test`). There are no lint or build steps configured.
- **No dependencies:** The project has zero npm dependencies; `node_modules` is not required.
- **ES Modules:** The project uses `"type": "module"` — use `import`/`export` syntax, not `require`.
