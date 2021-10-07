import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/index';

function* handleGetUsers() {
  const url = 'https://reqres.in/api/users';
  const fetchGetUsers = () => fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .catch((error) => { throw error; });

  try {
    const result = yield call(fetchGetUsers);
    yield put(actions.getUsersSuccess(result.data));
  } catch (error) {
    yield put(actions.getUsersFail(error));
  }
}

function* watcherUserSaga() {
  yield takeLatest(actions.Types.GET_USERS_REQUEST, handleGetUsers);
}

export default watcherUserSaga;
