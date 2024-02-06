// GenerateArticlePage.tsx
import React from 'react';
import { useTable } from 'react-table';
import columns from '../lib/columns'; // Adjust the path based on your project structure

const GenerateArticle: React.FC = () => {
  // Sample data for the table
  const data = React.useMemo(
    () => [
      { generateArticle: 'Article 1', website: 'Website 1', niche: 'Niche 1', selectBox: 'Option 1' },
      { generateArticle: 'Article 2', website: 'Website 2', niche: 'Niche 2', selectBox: 'Option 2' },
      // Add more rows as needed
    ],
    []
  );

  // Use react-table to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: columns,
    data: data,
  }); // Pass the imported columns

  return (
    <div>
      <h1>Generate Article</h1>
      {/* Create the table */}
      <table {...getTableProps()} style={{ width: '100%' }}>
        <thead>
          {/* Map through the headerGroups */}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {/* Map through the headers */}
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* Map through the rows */}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {/* Map through the cells */}
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GenerateArticle;
