const columns = [
  { field: 'id', label: 'ID' },
  { field: 'name', label: 'Name' },
  { field: 'username', label: 'Username' },
  { field: 'email', label: 'Email' },
  { field: 'phone', label: 'Phone' },
];

export default function Table({ data, onSort, sort, sortField, onRowSelect }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {columns.map(({ field, label }) => (
            <th
              key={field}
              onClick={() => onSort(field)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              {label} {sortField === field ? <small>{sort}</small> : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => onRowSelect(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
