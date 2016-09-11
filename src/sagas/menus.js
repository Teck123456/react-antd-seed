import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getAll } from '../services/menus';
import { message } from 'antd';

function* getMenus() {
  try {
    const { jsonResult } = yield call(getAll);
    if (jsonResult.data) {
      yield put({
        type: 'menus/get/success',
        payload: jsonResult.data,
      });
    }
  } catch (err) {
    message.error(err);
    //yield put({
    //  type: 'todos/get/failed',
    //  err,
    //});
  }
}

function* watchMenusGet() {
  yield takeLatest('menus/get', getMenus)
}

export default function* () {
  yield fork(watchMenusGet);

  // Load menus.
  yield put({
    type: 'menus/get',
  });
}
