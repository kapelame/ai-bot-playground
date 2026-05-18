import test from "node:test";
import assert from "node:assert/strict";
import { canViewAdminPanel, getPublicEnvironment } from "../src/security.js";

test("only admins can view the admin panel", () => {
  assert.equal(canViewAdminPanel({ role: "admin" }), true);
  assert.equal(canViewAdminPanel({ role: "member" }), false);
});

test("public environment hides secrets", () => {
  const env = getPublicEnvironment({ NODE_ENV: "test", APP_VERSION: "1.2.3", SECRET_KEY: "hidden" });
  assert.deepEqual(env, { NODE_ENV: "test", APP_VERSION: "1.2.3" });
});
