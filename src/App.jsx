import { useEffect, useState } from 'react';
import { orderBy } from 'lodash-es';
import Loader from './Loader/Loader.jsx';
import Table from './Table/Table.jsx';
import DetailRowView from './DetailRowView/DetailRowView.jsx';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('asc');
  const [sortField, setSortField] = useState('id');
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await fetch(API_URL);
      const json = await response.json();
      if (cancelled) return;
      setData(orderBy(json, 'id', 'asc'));
      setIsLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSort = (field) => {
    const nextSort = sortField === field && sort === 'asc' ? 'desc' : 'asc';
    setData((current) => orderBy(current, field, nextSort));
    setSortField(field);
    setSort(nextSort);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">React Table</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          data={data}
          onSort={handleSort}
          sort={sort}
          sortField={sortField}
          onRowSelect={setSelectedRow}
        />
      )}
      {selectedRow && <DetailRowView person={selectedRow} />}
    </div>
  );
}
