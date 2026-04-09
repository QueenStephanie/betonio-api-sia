import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchApiUsers } from "../api/usersApi.js";
import { mergeRows } from "../model/mergeRows.js";
import { createPersonalRow, normalizeApiUser } from "../model/rowModel.js";

const personalRow = createPersonalRow({
  id: "ME",
  firstName: "Queen Stephanie",
  lastName: "Betonio",
  username: "Kuwen",
  email: "queenstephanie@nmsc.edu.ph",
  zipcode: "7200",
});

export function useUsersTableData() {
  const [apiRows, setApiRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [requestVersion, setRequestVersion] = useState(0);

  const refreshData = useCallback(() => {
    setRequestVersion((value) => value + 1);
  }, []);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function loadUsers() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const users = await fetchApiUsers({ signal: controller.signal });

        if (!active) {
          return;
        }

        setApiRows(users.map(normalizeApiUser));
      } catch (error) {
        if (!active || error?.name === "AbortError") {
          return;
        }

        setErrorMessage(error?.message || "Unable to load users right now.");
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      active = false;
      controller.abort();
    };
  }, [requestVersion]);

  const rows = useMemo(() => mergeRows(personalRow, apiRows), [apiRows]);

  return {
    rows,
    isLoading,
    errorMessage,
    refreshData,
  };
}
