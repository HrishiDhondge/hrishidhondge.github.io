import React, { useState, useMemo } from "react";
import "./DynamicTable.css";

function DynamicTable({ data, columns, pageSize = 50 }) {
  const [search, setSearch] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // sorting state
  const [sort, setSort] = useState({ key: null, dir: "asc" });

  // helper: normalize value for comparison
  const getCellValue = (row, key) => {
    let v = row?.[key];
    if (Array.isArray(v)) v = v.join(", ");
    if (v == null) return "";
    return v;
  };

  // filter (search across all columns)
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return data;
    return data.filter((row) =>
      columns.some((col) => {
        const v = getCellValue(row, col.key);
        return String(v).toLowerCase().includes(q);
      })
    );
  }, [data, columns, search]);

  // sort (applies BEFORE pagination)
  const sorted = useMemo(() => {
    if (!sort.key) return filtered;
    const copy = filtered.slice();
    copy.sort((a, b) => {
      const aValRaw = getCellValue(a, sort.key);
      const bValRaw = getCellValue(b, sort.key);

      // numeric-aware: if both look like numbers, sort numerically
      const aNum = typeof aValRaw === "number" ? aValRaw :
        (typeof aValRaw === "string" && aValRaw.trim() !== "" && !isNaN(aValRaw)) ? Number(aValRaw) : null;
      const bNum = typeof bValRaw === "number" ? bValRaw :
        (typeof bValRaw === "string" && bValRaw.trim() !== "" && !isNaN(bValRaw)) ? Number(bValRaw) : null;

      if (aNum !== null && bNum !== null) {
        return sort.dir === "asc" ? aNum - bNum : bNum - aNum;
      }

      const aVal = String(aValRaw).toLowerCase();
      const bVal = String(bValRaw).toLowerCase();
      if (aVal < bVal) return sort.dir === "asc" ? -1 : 1;
      if (aVal > bVal) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });
    return copy;
  }, [filtered, sort]);

  // pagination (AFTER sorting)
  const totalPages = Math.ceil(sorted.length / pageSize) || 1;
  const start = (currentPage - 1) * pageSize;
  const pageRows = sorted.slice(start, start + pageSize);

  // single-row highlight
  const handleRowClick = (globalIndex) => {
    setSelectedRow((prev) => (prev === globalIndex ? null : globalIndex));
  };

  // header click => toggle sort
  const handleSort = (key) => {
    setSort((prev) =>
      prev.key === key ? { key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }
    );
    setCurrentPage(1);
  };

  return (
    <div className="books-container">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="books-search"
      />

      {/* Horizontal scroll wrapper */}
      <div className="table-scroll-x">
        <table className="books-table">
          <thead>
            <tr>
              <th /* serial number column is NOT sortable */>#</th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  aria-sort={
                    sort.key === col.key ? (sort.dir === "asc" ? "ascending" : "descending") : "none"
                  }
                  title="Click to sort"
                >
                  {col.label}
                  {sort.key === col.key ? (sort.dir === "asc" ? " ▲" : " ▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageRows.length > 0 ? (
              pageRows.map((row, idx) => {
                const globalIndex = start + idx;
                const isSelected = selectedRow === globalIndex;
                return (
                  <tr
                    key={globalIndex}
                    className={isSelected ? "selected-row" : ""}
                    onClick={() => handleRowClick(globalIndex)}
                  >
                    <td>{globalIndex + 1}</td>

                    {columns.map((col) => {
                    const value = row[col.key];
                    return (
                        <td key={col.key}>
                        {col.render
                            ? col.render(value, row) // use custom render if provided
                            : Array.isArray(value)
                            ? value.join(", ")
                            : value}
                        </td>
                    );
                    })}

                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="no-results">
                  ❌ No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
            ◀ Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
}

export default DynamicTable;
