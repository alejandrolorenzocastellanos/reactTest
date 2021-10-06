import { all } from 'redux-saga/effects';
import watcherUserSaga from './fetchUsers';

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
