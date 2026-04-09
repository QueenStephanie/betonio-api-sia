import assert from "node:assert/strict";
import test from "node:test";

import { filterRows } from "./filterRows.js";

const sampleRows = [
  { username: "Bret", email: "Sincere@april.biz" },
  { username: "Antonette", email: "Shanna@melissa.tv" },
  { username: "Samantha", email: "Nathan@yesenia.net" },
];

test("filterRows returns all rows for empty query", () => {
  const result = filterRows(sampleRows, "");

  assert.equal(result.length, 3);
});

test("filterRows matches username case-insensitively", () => {
  const result = filterRows(sampleRows, "bret");

  assert.equal(result.length, 1);
  assert.equal(result[0].username, "Bret");
});

test("filterRows matches email case-insensitively", () => {
  const result = filterRows(sampleRows, "MELISSA.TV");

  assert.equal(result.length, 1);
  assert.equal(result[0].username, "Antonette");
});

test("filterRows returns empty array when no match", () => {
  const result = filterRows(sampleRows, "zzz-no-match");

  assert.equal(result.length, 0);
});
