import { REQUIRED_FIELD_KEYS, ROW_SOURCE } from "./rowContract.js";

function sanitizeValue(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim();
}

export function splitName(name) {
  const cleanedName = sanitizeValue(name);

  if (!cleanedName) {
    return { firstName: "", lastName: "" };
  }

  const parts = cleanedName.split(/\s+/);
  const [firstName, ...lastNameParts] = parts;

  return {
    firstName,
    lastName: lastNameParts.join(" "),
  };
}

export function createMissingFieldMap(row) {
  return REQUIRED_FIELD_KEYS.reduce((acc, field) => {
    acc[field] = !sanitizeValue(row[field]);
    return acc;
  }, {});
}

export function normalizeApiUser(apiUser) {
  const { firstName, lastName } = splitName(apiUser?.name);

  const row = {
    id: sanitizeValue(apiUser?.id),
    firstName,
    lastName,
    username: sanitizeValue(apiUser?.username),
    email: sanitizeValue(apiUser?.email),
    zipcode: sanitizeValue(apiUser?.address?.zipcode),
    source: ROW_SOURCE.API,
  };

  return {
    ...row,
    missingFields: createMissingFieldMap(row),
  };
}

export function createPersonalRow(personalInput) {
  const row = {
    id: sanitizeValue(personalInput?.id),
    firstName: sanitizeValue(personalInput?.firstName),
    lastName: sanitizeValue(personalInput?.lastName),
    username: sanitizeValue(personalInput?.username),
    email: sanitizeValue(personalInput?.email),
    zipcode: sanitizeValue(personalInput?.zipcode),
    source: ROW_SOURCE.PERSONAL,
  };

  return {
    ...row,
    missingFields: createMissingFieldMap(row),
  };
}
