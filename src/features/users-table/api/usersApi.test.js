import assert from "node:assert/strict";
import test from "node:test";

import { USERS_ENDPOINT, fetchApiUsers } from "./usersApi.js";

test("fetchApiUsers returns parsed payload on success", async () => {
  const expected = [{ id: 1, name: "Leanne Graham" }];
  const fetchImpl = async (url) => {
    assert.equal(url, USERS_ENDPOINT);

    return {
      ok: true,
      json: async () => expected,
    };
  };

  const result = await fetchApiUsers({ fetchImpl });

  assert.deepEqual(result, expected);
});

test("fetchApiUsers throws on non-ok response", async () => {
  const fetchImpl = async () => ({
    ok: false,
    status: 500,
    json: async () => [],
  });

  await assert.rejects(
    () => fetchApiUsers({ fetchImpl }),
    /Unable to load users: 500/,
  );
});

test("fetchApiUsers propagates abort errors", async () => {
  const abortError = new Error("aborted by caller");
  abortError.name = "AbortError";

  const fetchImpl = async () => {
    throw abortError;
  };

  await assert.rejects(
    () => fetchApiUsers({ fetchImpl }),
    (error) => {
      assert.equal(error.name, "AbortError");
      return true;
    },
  );
});
