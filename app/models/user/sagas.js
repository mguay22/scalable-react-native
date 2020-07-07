import {takeEvery, put, call} from 'redux-saga/effects';
import {
  GET_ALL_USER_INFO_REQUEST,
  GET_ALL_USER_INFO_REQUEST_SUCCESS,
} from './actions';
import {queryApi} from '../query-api';

function* handler() {
  yield takeEvery(GET_ALL_USER_INFO_REQUEST, getAllUserInfo);
}

function* getAllUserInfo(action) {
  try {
    const posts = yield call(queryApi, {
      endpoint: '',
      method: 'GET',
    });
    console.log(posts);

    // API call
    yield put({
      type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
      payload: {
        id: 'id1',
        name: posts[0].body,
        email: 'anothertestemail@test.com',
      },
    });
  } catch (err) {
    console.log(err);
    // Handle error
  }
}

export {handler};
