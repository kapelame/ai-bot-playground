# Agent Instructions

## Review guidelines

- Flag privilege escalation bugs as high severity.
- Flag routes or helpers that expose `process.env` or secret-like values.
- Prefer minimal patches over broad refactors.
- When reviewing pricing logic, check whether tests still reflect the intended business formula.
