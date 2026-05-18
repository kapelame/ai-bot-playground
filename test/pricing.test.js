import test from "node:test";
import assert from "node:assert/strict";
import { applyDiscount } from "../src/pricing.js";

test("applies percentage discount", () => {
  assert.equal(applyDiscount(100, 0.2), 80);
});

test("rejects invalid discounts", () => {
  assert.throws(() => applyDiscount(100, 1.5), RangeError);
});
