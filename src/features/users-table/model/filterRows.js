function safeText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).toLowerCase();
}

export function filterRows(rows, query) {
  const safeRows = Array.isArray(rows) ? rows : [];
  const normalizedQuery = String(query ?? "")
    .trim()
    .toLowerCase();

  if (!normalizedQuery) {
    return safeRows;
  }

  return safeRows.filter((row) => {
    const username = safeText(row?.username);
    const email = safeText(row?.email);

    return (
      username.includes(normalizedQuery) || email.includes(normalizedQuery)
    );
  });
}
