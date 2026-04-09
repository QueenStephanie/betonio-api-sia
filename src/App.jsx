import { useMemo, useState } from 'react'
import { UsersTable } from './features/users-table/components/UsersTable.jsx'
import { useUsersTableData } from './features/users-table/hooks/useUsersTableData.js'
import { filterRows } from './features/users-table/model/filterRows.js'
import './App.css'

function App() {
  const { rows, isLoading, errorMessage, refreshData } = useUsersTableData()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRows = useMemo(
    () => filterRows(rows, searchQuery),
    [rows, searchQuery]
  )

  return (
    <main className="page-shell">
      <header className="page-header">
        <h1>Exploring APIs Using Fake Data</h1>
        <p>
          Phase 3 table UX: live API data plus username/email search filtering.
        </p>
        <div className="search-row">
          <label htmlFor="user-search" className="search-label">
            Search username or email
          </label>
          <input
            id="user-search"
            className="search-input"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Try: Bret or april.biz"
          />
          <span className="result-count">{filteredRows.length} row(s) shown</span>
        </div>
        <div className="controls-row">
          <button type="button" className="refresh-button" onClick={refreshData}>
            Refresh API Data
          </button>
          {isLoading ? <span className="status-pill status-loading">Loading users...</span> : null}
        </div>
        {errorMessage ? (
          <p role="alert" className="status-pill status-error">
            {errorMessage}
          </p>
        ) : null}
      </header>
      <UsersTable rows={filteredRows} />
    </main>
  )
}

export default App
