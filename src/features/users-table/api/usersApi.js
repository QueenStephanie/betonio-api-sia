export const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export async function fetchApiUsers({ signal, fetchImpl = fetch } = {}) {
  const response = await fetchImpl(USERS_ENDPOINT, { signal });

  if (!response.ok) {
    throw new Error(`Unable to load users: ${response.status}`);
  }

  return response.json();
}
