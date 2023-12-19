import DataTable from '../data_table/DataTable';

const Products = () => {
  return (
    <DataTable
      data={[{ id: 1, name: 'mgmg' }]}
      columns={[
        {
          accessorKey: 'name',
          header: ({ table }) => <div aria-label="Name">Name</div>,
          cell: ({ row }) => <div aria-label="Name">{row.getValue('name')}</div>
        },
        {
          accessorKey: 'age',
          header: ({ table }) => <div aria-label="Age">Age</div>,
          cell: ({ row }) => <div aria-label="Age">{row.getValue('name')}</div>
        }
      ]}
    />
  );
};

export default Products;
