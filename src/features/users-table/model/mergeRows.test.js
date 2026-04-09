import assert from "node:assert/strict";
import test from "node:test";

import { mergeRows } from "./mergeRows.js";
import { ROW_SOURCE } from "./rowContract.js";

test("mergeRows places personal row first", () => {
  const personalRow = { id: "mine", source: ROW_SOURCE.PERSONAL };
  const apiRows = [{ id: "1", source: ROW_SOURCE.API }];

  const merged = mergeRows(personalRow, apiRows);

  assert.equal(merged[0], personalRow);
});

test("mergeRows preserves API row order", () => {
  const personalRow = { id: "mine", source: ROW_SOURCE.PERSONAL };
  const apiRows = [
    { id: "1", source: ROW_SOURCE.API },
    { id: "2", source: ROW_SOURCE.API },
  ];

  const merged = mergeRows(personalRow, apiRows);

  assert.equal(merged[1], apiRows[0]);
  assert.equal(merged[2], apiRows[1]);
});

test("mergeRows keeps source labels intact", () => {
  const personalRow = { id: "mine", source: ROW_SOURCE.PERSONAL };
  const apiRows = [{ id: "1", source: ROW_SOURCE.API }];

  const merged = mergeRows(personalRow, apiRows);

  assert.equal(merged[0].source, ROW_SOURCE.PERSONAL);
  assert.equal(merged[1].source, ROW_SOURCE.API);
});
