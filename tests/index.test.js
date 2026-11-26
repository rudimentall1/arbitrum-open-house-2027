import test from "node:test";
import assert from "node:assert/strict";
import { getProjectStatus } from "../src/index.js";

test("project status is explicit and does not claim a concept is selected", () => {
  assert.deepEqual(getProjectStatus(), {
    name: "arbitrum-open-house-2027",
    stage: "scaffold",
    conceptSelected: false
  });
});
