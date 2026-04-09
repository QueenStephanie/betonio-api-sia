export function mergeRows(personalRow, apiRows) {
  const safeApiRows = Array.isArray(apiRows) ? apiRows : [];

  if (!personalRow) {
    return safeApiRows;
  }

  return [personalRow, ...safeApiRows];
}
