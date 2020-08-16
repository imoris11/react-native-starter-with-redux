import { all } from 'redux-saga/effects';
import usersSagas from './src/containers/Home/redux/sagas';

export default function* root() {
  yield all([usersSagas()]);
}
