import { orderBy } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import DataTable from '../data_table/DataTable';
import SortableColumnHeader from '../data_table/SortableColumnHeader';

const data = [
  { id: 1, name: 'mg mg', age: 12 },
  { id: 2, name: 'aye aye', age: 1 }
];

const Products = () => {
  const [desc, setDesc] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [orderedData, setOrderedData] = useState(data);
  const onSortingChangeX = useCallback(
    (newSorting) => {
      setDesc(newSorting[0].desc);
      setSortBy(newSorting[0].id);
    },
    [setDesc]
  );

  useEffect(() => {
    setOrderedData(orderBy(data, 'age', desc ? 'desc' : 'asc'));
  }, [desc, setOrderedData]);

  return (
    <DataTable
      data={orderedData}
      sorting={[{ desc, id: sortBy }]}
      onSetSorting={onSortingChangeX}
      columns={[
        { id: 'select' },
        {
          accessorKey: 'name',
          header: () => <div aria-label="Name">Name</div>,
          cell: ({ row }) => <div aria-label="Name">{row.getValue('name')}</div>
        },
        {
          accessorKey: 'age',
          header: ({ column }) => <SortableColumnHeader column={column} title="Age" />,
          cell: ({ row }) => <div aria-label="Age">{row.getValue('age')}</div>,
          enableSorting: true
        }
      ]}
    />
  );
};

export default Products;
