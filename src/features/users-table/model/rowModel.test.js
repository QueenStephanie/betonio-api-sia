import assert from "node:assert/strict";
import test from "node:test";

import {
  normalizeApiUser,
  splitName,
  createMissingFieldMap,
} from "./rowModel.js";
import { ROW_SOURCE } from "./rowContract.js";

test("splitName handles first and last names", () => {
  const result = splitName("Jane Smith");

  assert.equal(result.firstName, "Jane");
  assert.equal(result.lastName, "Smith");
});

test("splitName handles single-token names", () => {
  const result = splitName("Plato");

  assert.equal(result.firstName, "Plato");
  assert.equal(result.lastName, "");
});

test("splitName trims and preserves multi-part last names", () => {
  const result = splitName("  Ada   Lovelace Byron  ");

  assert.equal(result.firstName, "Ada");
  assert.equal(result.lastName, "Lovelace Byron");
});

test("createMissingFieldMap flags empty key fields", () => {
  const row = {
    firstName: "Jess",
    lastName: "Rivers",
    username: "jrivers",
    email: "",
    zipcode: null,
  };

  const missing = createMissingFieldMap(row);

  assert.equal(missing.firstName, false);
  assert.equal(missing.lastName, false);
  assert.equal(missing.username, false);
  assert.equal(missing.email, true);
  assert.equal(missing.zipcode, true);
});

test("normalizeApiUser returns canonical row keys and missingFields", () => {
  const row = normalizeApiUser({
    id: 12,
    name: "Jane Smith",
    username: "jane_s",
    email: "",
    address: {},
  });

  assert.deepEqual(Object.keys(row).sort(), [
    "email",
    "firstName",
    "id",
    "lastName",
    "missingFields",
    "source",
    "username",
    "zipcode",
  ]);

  assert.equal(row.id, "12");
  assert.equal(row.firstName, "Jane");
  assert.equal(row.lastName, "Smith");
  assert.equal(row.source, ROW_SOURCE.API);
  assert.equal(row.missingFields.email, true);
  assert.equal(row.missingFields.zipcode, true);
});
