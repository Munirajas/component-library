import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableColumn, TableData } from '../../components/dataDisplay/Table/Table';
import { useState } from 'react';
import { PrintIcon } from '@/icons/icons';
import { AxeIcon } from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    searchable: {
      control: 'boolean',
      description: 'If the table have search',
    },
    filterable: {
      control: 'boolean',
      description: 'If the table have filters',
    },
    onSort: {
      action: 'sorted',
      description: 'Callback for culumn  order.',
    },
    onRowSelect: {
      action: 'rowSelected',
      description: 'Callback for column selection.',
    },
    onBulkAction: {
      action: 'bulkAction',
      description: 'Callback for bulk actions.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Example data
const userData: TableData[] = [
  {
    id: '1',
    name: 'Craig Fisher',
    email: 'craigf@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2025-06-15'
  },
  {
    id: '2',
    name: 'Chanda Roberts',
    email: 'chanda_r@example.com',
    role: 'User',
    status: 'Inactive',
    lastLogin: '2023-01-10'
  },
  {
    id: '3',
    name: 'Zephania Holt',
    email: 'zeph_holt@example.com',
    role: 'Editor',
    status: 'Active',
    lastLogin: '2025-07-14'
  },
  {
    id: '4',
    name: 'Ana Martinez',
    email: 'ana@example.com',
    role: 'User',
    status: 'Active',
    lastLogin: '2025-08-29'
  },
  {
    id: '5',
    name: 'Victoria Roberts',
    email: 'vic_rob@example.com',
    role: 'Admin',
    status: 'Inactive',
    lastLogin: '2023-04-08'
  }
];

// User columns
const userColumns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true, width: 'w-48' },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (value) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
        {value}
      </span>
    )
  },
  { key: 'lastLogin', label: 'Last Login', sortable: true }
];

// Example products
const productData: TableData[] = [
  {
    id: 'P001',
    name: 'Laptop Pro',
    category: 'Electronics',
    price: '$1,299',
    stock: 45,
    status: 'In Stock'
  },
  {
    id: 'P002',
    name: 'Mouse Wireless',
    category: 'Accesories',
    price: '$29.99',
    stock: 120,
    status: 'In Stock'
  },
  {
    id: 'P003',
    name: 'Keyboard with lazer lights',
    category: 'Accesories',
    price: '$89.99',
    stock: 0,
    status: 'Out of Stock'
  },
  {
    id: 'P004',
    name: 'Monitor 4K',
    category: 'Electronics',
    price: '$499.99',
    stock: 12,
    status: 'Low Stock'
  }
];

// Products columns
const productColumns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true, width: 'w-20' },
  { key: 'name', label: 'Name', sortable: true, width: 'w-48' },
  { key: 'category', label: 'Categy', sortable: true },
  { key: 'price', label: 'Price', sortable: true },
  { key: 'stock', label: 'Stock', sortable: true },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (value) => {
      const statusConfig: Record<string, string> = {
        'In Stock': 'bg-green-100 text-green-800',
        'Out of Stock': 'bg-red-100 text-red-800',
        'Low Stock': 'bg-yellow-100 text-yellow-800'
      };

      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[value] || 'bg-gray-100 text-gray-800'}`}>
          {value}
        </span>
      );
    }
  }
];

// Basic Story
export const TableDefault: Story = {
  args: {
    data: userData,
    columns: userColumns,
    searchable: true,
    filterable: true,
  },
};

// Table - no search
export const NoSearch: Story = {
  args: {
    data: userData,
    columns: userColumns,
    searchable: false,
    filterable: true,
  },
};

// Table - no filters
export const NoFilters: Story = {
  args: {
    data: userData,
    columns: userColumns,
    searchable: true,
    filterable: false,
  },
};

// Table - With products
export const Products: Story = {
  args: {
    data: productData,
    columns: productColumns,
    searchable: true,
    filterable: true,
  },
};

// Table - Empty
export const Empty: Story = {
  args: {
    data: [],
    columns: userColumns,
    searchable: true,
    filterable: true,
  },
};

// Table - Large data
export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 50 }, (_, i) => ({
      id: (i + 1).toString(),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: `2024-01-${String(i % 28 + 1).padStart(2, '0')}`
    })),

    columns: userColumns,
    searchable: true,
    filterable: true,
    stickyHeader: {}
  },
};

// Table - Sticky header (sticks to the page while scrolling)
export const StickyHeader: Story = {
  args: {
    ...LargeDataset.args,
    stickyHeader: true,
  },
};

// Table - Sticky header inside a scrollable container
export const StickyHeaderWithMaxHeight: Story = {
  args: {
    ...LargeDataset.args,
    stickyHeader: { maxHeight: 400 },
  },
};

// Table - With Pagination (Uncontrolled)
export const WithPagination: Story = {
  args: {
    data: Array.from({ length: 25 }, (_, i) => ({
      id: (i + 1).toString(),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: `2024-01-${String(i % 28 + 1).padStart(2, '0')}`
    })),
    columns: userColumns,
    searchable: true,
    filterable: true,
    pagination: {
      enabled: true,
      pageSize: 5,
      showTotal: true,
    },
  },
};

// Table - With Pagination and Page Size Selector
export const WithPaginationAndPageSize: Story = {
  args: {
    data: Array.from({ length: 30 }, (_, i) => ({
      id: (i + 1).toString(),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: `2024-01-${String(i % 28 + 1).padStart(2, '0')}`
    })),
    columns: userColumns,
    searchable: true,
    filterable: true,
    pagination: {
      enabled: true,
      pageSize: 10,
      showPageSizeSelector: true,
      pageSizeOptions: [5, 10, 20, 50],
      showTotal: true,
    },
  },
};

// Table - Controlled Pagination
export const ControlledPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const paginatedData = Array.from({ length: 30 }, (_, i) => ({
      id: (i + 1).toString(),
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'User',
      status: i % 4 === 0 ? 'Inactive' : 'Active',
      lastLogin: `2024-01-${String(i % 28 + 1).padStart(2, '0')}`
    }));

    const bulkActions = [{
      label: "Chop Trees",
      action: "chop",
      icon: <AxeIcon />
    }, {
      label: "Print Tickets",
      action: "print",
      icon: <PrintIcon />
    }];

    function handleBulkAction(action: string, rows: string[]) {
      alert(`Executed ${action} on ${rows.length} rows`);
    }

    return (
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Pagination State</h3>
          <p className="text-blue-600 text-sm">
            Current Page: {currentPage} | Page Size: {pageSize} | Total Items: {paginatedData.length}
          </p>
        </div>

        <Table
          data={paginatedData}
          columns={userColumns}
          bulkActions={bulkActions}
          onBulkAction={handleBulkAction}
          searchable={true}
          filterable={true}
          pagination={{
            enabled: true,
            currentPage,
            pageSize,
            onPageChange: setCurrentPage,
            onPageSizeChange: setPageSize,
            showPageSizeSelector: true,
            pageSizeOptions: [5, 10, 20, 50],
            showTotal: true,
          }}
        />
      </div>
    );
  },
};

// Table - custom cols
export const CustomColumns: Story = {
  args: {
    data: userData,
    columns: [
      ...userColumns,
      {
        key: 'actions',
        label: 'Actions',
        sortable: false,
        width: 'w-32',
        render: () => (
          <div className="flex gap-2">
            <button className="px-2 py-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600">
              Edit
            </button>
            <button className="px-2 py-2 bg-red-500 text-white text-xs rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        )
      }
    ],
    searchable: true,
    filterable: true,
  },
};

// Width, minWidth and maxWidth stay on those columns. The others share the rest.
export const ColumnWidths: Story = {
  args: {
    data: userData,
    columns: [
      { key: 'id', label: 'ID', sortable: true, width: '4rem' },
      { key: 'name', label: 'Name', sortable: true, minWidth: '8rem', maxWidth: '14rem' },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Role', sortable: true, width: 'w-28', minWidth: 'w-24', maxWidth: 'w-40' },
      { key: 'status', label: 'Status', sortable: true },
    ],
    searchable: false,
    filterable: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'ID is fixed at 4rem. Name stays between 8rem and 14rem. Role stays between w-24 and w-40. Email and Status fill the remaining width.',
      },
    },
  },
};

// Table - State Controlled
export const Controlled: Story = {
  render: () => {
    const [data, setData] = useState(userData);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const handleSort = (column: string, direction: 'asc' | 'desc') => {
      const sorted = [...data].sort((a, b) => {
        const aVal = a[column];
        const bVal = b[column];

        if (direction === 'asc') {
          return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
          return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
      });

      setData(sorted);
    };

    const handleRowSelect = (rows: string[]) => {
      setSelectedRows(rows);
    };

    const handleBulkAction = (action: string, rows: string[]) => {
      //console.log(`Action: ${action}`, rows);
      alert(`Executed ${action} on ${rows.length} rows`);
    };

    return (
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Table state</h3>
          <p className="text-blue-600 text-sm">
            Selected rows: {selectedRows.length} | Total: {data.length}
          </p>
        </div>

        <Table
          data={data}
          columns={userColumns}
          onSort={handleSort}
          onRowSelect={handleRowSelect}
          onBulkAction={handleBulkAction}
          searchable={true}
          filterable={true}
          filters={{
            definitions: [
              {
                key: "status",
                label: "Status",
                type: "select",
                options: [
                  { label: "Active", value: "Active" },
                  { label: "Inactive", value: "Inactive" },
                ],
              },
            ],
          }}
        />
      </div>
    );
  },
};

// ─── Filter stories ────────────────────────────────────────────────────────

// Table - Explicit filter definitions (select, multiselect, boolean)
export const WithFiltersExplicit: Story = {
  name: 'Filters / Explicit Definitions',
  render: () => {
    const data: TableData[] = [
      { id: '1', name: 'Craig Fisher', email: 'craig@example.com', role: 'Admin', status: 'Active', verified: true },
      { id: '2', name: 'Chanda Roberts', email: 'chanda@example.com', role: 'User', status: 'Inactive', verified: false },
      { id: '3', name: 'Zephania Holt', email: 'zeph@example.com', role: 'Editor', status: 'Active', verified: true },
      { id: '4', name: 'Ana Martinez', email: 'ana@example.com', role: 'User', status: 'Active', verified: false },
      { id: '5', name: 'Victoria Roberts', email: 'vic@example.com', role: 'Admin', status: 'Inactive', verified: true },
      { id: '6', name: 'Marcus Lee', email: 'marcus@example.com', role: 'Editor', status: 'Active', verified: true },
      { id: '7', name: 'Priya Nair', email: 'priya@example.com', role: 'User', status: 'Active', verified: false },
    ];

    const columns: TableColumn[] = [
      { key: 'name', label: 'Name', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Role', sortable: true },
      {
        key: 'status', label: 'Status', sortable: true,
        render: (v) => (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${v === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {v}
          </span>
        )
      },
      {
        key: 'verified', label: 'Verified', sortable: true,
        render: (v) => (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${v ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'}`}>
            {v ? 'Yes' : 'No'}
          </span>
        )
      },
    ];

    return (
      <Table
        data={data}
        columns={columns}
        searchable
        filterable
        filters={{
          definitions: [
            {
              key: 'role',
              label: 'Role',
              type: 'multiselect',
              options: [
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
                { value: 'User', label: 'User' },
              ],
            },
            {
              key: 'status',
              label: 'Status',
              type: 'select',
              options: [
                { value: 'Active', label: 'Active' },
                { value: 'Inactive', label: 'Inactive' },
              ],
            },
            {
              key: 'verified',
              label: 'Verified',
              type: 'boolean',
            },
          ],
        }}
      />
    );
  },
};

// Table - Filters inferred automatically from columns + data
export const WithFiltersInferred: Story = {
  name: 'Filters / Auto-inferred',
  args: {
    data: productData,
    columns: productColumns,
    searchable: true,
    filterable: true,
    filters: { infer: true },
  },
};

// Table - Explicit + inferred combined, shows active filter state
export const WithFiltersControlled: Story = {
  name: 'Filters / Controlled (with state)',
  render: () => {
    const [activeFilters, setActiveFilters] = useState<Record<string, unknown>>({});

    const data: TableData[] = [
      { id: '1', name: 'Craig Fisher', role: 'Admin', status: 'Active', department: 'Engineering', verified: true },
      { id: '2', name: 'Chanda Roberts', role: 'User', status: 'Inactive', department: 'Marketing', verified: false },
      { id: '3', name: 'Zephania Holt', role: 'Editor', status: 'Active', department: 'Design', verified: true },
      { id: '4', name: 'Ana Martinez', role: 'User', status: 'Active', department: 'Engineering', verified: false },
      { id: '5', name: 'Victoria Roberts', role: 'Admin', status: 'Inactive', department: 'Marketing', verified: true },
      { id: '6', name: 'Marcus Lee', role: 'Editor', status: 'Active', department: 'Design', verified: true },
      { id: '7', name: 'Priya Nair', role: 'User', status: 'Active', department: 'Engineering', verified: false },
    ];

    const columns: TableColumn[] = [
      { key: 'name', label: 'Name', sortable: false },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'status', label: 'Status', sortable: true },
      { key: 'department', label: 'Department', sortable: true },
      {
        key: 'verified', label: 'Verified', sortable: true,
        render: (v) => (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${v ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'}`}>
            {v ? 'Yes' : 'No'}
          </span>
        )
      },
    ];

    return (
      <div className="space-y-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Active filters (onChange output)</p>
          <pre className="text-sm text-gray-800 font-mono">
            {Object.keys(activeFilters).length === 0
              ? 'none'
              : JSON.stringify(activeFilters, null, 2)}
          </pre>
        </div>

        <Table
          data={data}
          columns={columns}
          searchable
          filterable
          filters={{
            definitions: [
              {
                key: 'role',
                label: 'Role',
                type: 'multiselect',
                options: [
                  { value: 'Admin', label: 'Admin' },
                  { value: 'Editor', label: 'Editor' },
                  { value: 'User', label: 'User' },
                ],
              },
              {
                key: 'department',
                label: 'Department',
                type: 'select',
                options: [
                  { value: 'Engineering', label: 'Engineering' },
                  { value: 'Marketing', label: 'Marketing' },
                  { value: 'Design', label: 'Design' },
                ],
              },
              {
                key: 'verified',
                label: 'Verified',
                type: 'boolean',
              },
            ],
            infer: true,
            onChange: setActiveFilters,
          }}
        />
      </div>
    );
  },
};

// Table - Different data types
export const MixedDataTypes: Story = {
  args: {
    data: [
      {
        id: '1',
        name: 'Simple text',
        number: 42,
        boolean: true,
        date: '2024-01-15',
        array: ['item1', 'item2']
      },
      {
        id: '2',
        name: 'Another text',
        number: 3.14,
        boolean: false,
        date: '2027-06-15',
        array: ['item3']
      }
    ],
    columns: [
      { key: 'name', label: 'Text', sortable: true },
      { key: 'number', label: 'Number', sortable: true },
      { key: 'boolean', label: 'Boolean', sortable: true },
      { key: 'date', label: 'Date', sortable: true },
      {
        key: 'array',
        label: 'Array',
        sortable: false,
        render: (value) => (
          <span className="text-sm text-gray-600">
            {Array.isArray(value) ? value.join(', ') : String(value)}
          </span>
        )
      }
    ],
    searchable: true,
    filterable: true,
  },
};
