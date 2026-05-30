import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Table from './Table.jsx';

const sampleData = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'sincere@april.biz',
    phone: '1-770-736-8031',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'shanna@melissa.tv',
    phone: '010-692-6593',
  },
];

describe('Table', () => {
  it('renders one row per data item with all columns', () => {
    render(
      <Table
        data={sampleData}
        onSort={() => {}}
        sort="asc"
        sortField="id"
        onRowSelect={() => {}}
      />,
    );

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Bret')).toBeInTheDocument();
    expect(screen.getByText('sincere@april.biz')).toBeInTheDocument();
    expect(screen.getAllByRole('row')).toHaveLength(sampleData.length + 1);
  });

  it('calls onSort with the field when a header is clicked', async () => {
    const onSort = vi.fn();
    const user = userEvent.setup();
    render(
      <Table data={sampleData} onSort={onSort} sort="asc" sortField="id" onRowSelect={() => {}} />,
    );

    await user.click(screen.getByRole('columnheader', { name: /^name/i }));
    expect(onSort).toHaveBeenCalledWith('name');
  });

  it('calls onRowSelect with the row when a row is clicked', async () => {
    const onRowSelect = vi.fn();
    const user = userEvent.setup();
    render(
      <Table
        data={sampleData}
        onSort={() => {}}
        sort="asc"
        sortField="id"
        onRowSelect={onRowSelect}
      />,
    );

    await user.click(screen.getByText('Ervin Howell'));
    expect(onRowSelect).toHaveBeenCalledWith(sampleData[1]);
  });
});
