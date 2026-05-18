import test from "node:test";
import assert from "node:assert/strict";
import { isAdmin, canViewAdminPanel, getPublicEnvironment } from "../src/security.js";

test("isAdmin returns boolean without mutation", () => {
  const adminUser = { role: "admin" };
  const memberUser = { role: "member" };

  assert.equal(isAdmin(adminUser), true);
  assert.equal(adminUser.role, "admin"); // verify no mutation

  assert.equal(isAdmin(memberUser), false);
  assert.equal(memberUser.role, "member"); // verify no mutation

  assert.equal(isAdmin(null), false);
  assert.equal(isAdmin(undefined), false);
  assert.equal(isAdmin({}), false);
});

test("only admins can view the admin panel", () => {
  assert.equal(canViewAdminPanel({ role: "admin" }), true);
  assert.equal(canViewAdminPanel({ role: "member" }), false);
  assert.equal(canViewAdminPanel(null), false);
  assert.equal(canViewAdminPanel(undefined), false);
});

test("public environment hides secrets", () => {
  const env = getPublicEnvironment({ NODE_ENV: "test", APP_VERSION: "1.2.3", SECRET_KEY: "hidden" });
  assert.deepEqual(env, { NODE_ENV: "test", APP_VERSION: "1.2.3" });
});
