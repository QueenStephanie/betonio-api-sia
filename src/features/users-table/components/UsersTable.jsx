import {
  EMPTY_CELL_FALLBACK,
  MISSING_FIELD_LABEL,
  ROW_COLUMNS,
} from '../model/rowContract'
import './UsersTable.css'

const COLUMN_LABELS = {
  id: 'ID',
  firstName: 'First Name',
  lastName: 'Last Name',
  username: 'Username',
  email: 'Email',
  zipcode: 'Zipcode',
}

function TableCell({ row, field }) {
  const value = row[field]
  const isMissing = row.missingFields?.[field]

  return (
    <td>
      <div className="cell-content">
        <span>{value || EMPTY_CELL_FALLBACK}</span>
        {isMissing ? <span className="missing-pill">{MISSING_FIELD_LABEL}</span> : null}
      </div>
    </td>
  )
}

export function UsersTable({ rows }) {
  return (
    <section className="table-shell" aria-label="User rows">
      <table className="users-table">
        <thead>
          <tr>
            {ROW_COLUMNS.map((columnKey) => (
              <th key={columnKey} scope="col">
                {COLUMN_LABELS[columnKey]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={ROW_COLUMNS.length} className="empty-table-message">
                No rows match current search.
              </td>
            </tr>
          ) : null}
          {rows.map((row) => (
            <tr key={`${row.source}-${row.id}-${row.username}`}>
              <td>
                <div className="cell-content">
                  <span>{row.id || EMPTY_CELL_FALLBACK}</span>
                  <span className="source-pill">{row.source}</span>
                </div>
              </td>
              <TableCell row={row} field="firstName" />
              <TableCell row={row} field="lastName" />
              <TableCell row={row} field="username" />
              <TableCell row={row} field="email" />
              <TableCell row={row} field="zipcode" />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
