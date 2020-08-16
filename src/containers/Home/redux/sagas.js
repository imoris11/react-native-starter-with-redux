const { takeEvery, call, put } = require('redux-saga/effects');
const {
  FETCH_USER,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
} = require('./actionTypes');
const { makeApiCall } = require('../../../utils/services');

function* fetchUser() {
  const apiEntry = 'https://jsonplaceholder.typicode.com';
  const usersNamespace = 'users';
  const url = `${apiEntry}/${usersNamespace}/2`;
  try {
    const response = yield call(makeApiCall, url);
    yield put({
      type: FETCH_USER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: FETCH_USER_ERROR,
      payload: error,
    });
    console.log(error);
  }
}

function* usersSagas() {
  yield takeEvery(FETCH_USER, fetchUser);
}

export default usersSagas;
