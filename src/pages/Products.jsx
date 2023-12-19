import DataTable from '../data_table/DataTable';

const Products = () => {
  return (
    <DataTable
      data={[
        { id: 1, name: 'mg mg', age: 12 },
        { id: 2, name: 'aye aye', age: 1 }
      ]}
      columns={[
        {
          id: 'select all',
          header: ({ table }) => <div></div>
        },
        {
          accessorKey: 'name',
          header: ({ columns }) => <div aria-label="Name">Name</div>,
          cell: ({ row }) => <div aria-label="Name">{row.getValue('name')}</div>
        },
        {
          accessorKey: 'age',
          header: ({ columns }) => <div aria-label="Age">Age</div>,
          cell: ({ row }) => <div aria-label="Age">{row.getValue('age')}</div>
        }
      ]}
    />
  );
};

export default Products;
