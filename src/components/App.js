import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../styles/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersRequest } from '../actions';
import * as Constants from '../util/Constants';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);
  const columns = [
    {
      name: Constants.LIST_ID,
      selector: (row) => row.id,
      width: Constants.LIST_ID_WIDTH,
    },
    {
      name: Constants.LIST_NAME,
      selector: (row) => row.first_name,
    },
    {
      name: Constants.LIST_SURNAMES,
      selector: (row) => row.last_name,
    },
    {
      cell: () => <button type="button">Detalle</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return (
    <div className="App">
      {error && <h2>{error}</h2>}
      {users && users.map((user) => <h1>{user.name}</h1>)}
      <header className="App-header">
        <DataTable
          columns={columns}
          data={users}
        />
      </header>
    </div>
  );
}

export default App;
