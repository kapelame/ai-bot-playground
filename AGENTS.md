# Agent Instructions

## Review guidelines

- Flag privilege escalation bugs as high severity.
- Flag routes or helpers that expose `process.env` or secret-like values.
- Prefer minimal patches over broad refactors.
- When reviewing pricing logic, check whether tests still reflect the intended business formula.

## Cursor Cloud specific instructions

- **Runtime:** Node.js >= 20 (ES Modules, `"type": "module"`). No runtime or dev dependencies to install.
- **Tests:** `npm test` runs the built-in Node.js test runner (`node --test`) against `test/*.test.js`. All tests should pass in under a second.
- **No build step, no lint tool, no dev server.** The project is a utility library with two modules (`src/pricing.js`, `src/security.js`) and their tests.
- **No Docker, no database, no external services** are required.
