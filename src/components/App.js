import React, { useEffect } from 'react';
// import DataTable from 'react-data-table-component';
import '../styles/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../actions';
// import * as Constants from '../util/Constants';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const error = useSelector((state) => state.users.error);
  // const columns = [
  //   {
  //     name: Constants.LIST_ID,
  //     selector: (row) => row.id,
  //   },
  //   {
  //     name: Constants.LIST_NAME,
  //     selector: (row) => row.name,
  //   },
  //   {
  //     name: Constants.LIST_SURNAMES,
  //     selector: (row) => row.username,
  //   },
  // ];

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      {error && <h2>{error}</h2>}
      {users && users.map((user) => <h1>{user.name}</h1>)}
      {/* <header className="App-header">
        <DataTable
          columns={columns}
          data={users}
        />
      </header> */}
    </div>
  );
}

export default App;
