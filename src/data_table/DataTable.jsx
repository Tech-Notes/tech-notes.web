import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useCallback } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table';

const DataTable = ({ data, columns, sorting = [], onSetSorting, meta, initialState }) => {
  const onSortingChange = useCallback(
    (updater) => {
      let newSort;
      if (typeof updater === 'function') {
        newSort = updater(sorting);
      } else {
        newSort = updater;
      }
      !!onSetSorting && onSetSorting(newSort);
    },
    [onSetSorting, sorting]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta,
    state: {
      sorting
    },
    initialState,
    onSortingChange
  });

  return (
    <Table>
      <TableHeader>
        {table?.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className={header.column.columnDef.meta?.className}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className={cell.column.columnDef.meta?.cellClass}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default DataTable;
