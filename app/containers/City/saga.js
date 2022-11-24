/**
 * Gets the repositories of the user from Github
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';

import { changeSnackBar, getDataSuccess, mergeState } from './actions';
import { GET_DATA } from './constants';

export function* getData() {
  try {
    const response = yield call(request, 'https://js-post-api.herokuapp.com/api/students');
    console.log('data', response);
    if (response.length > 0) {
      // yield put(mergeState({ dataStudent: response }));
      yield put(changeSnackBar({ open: true, variant: 'success', message: 'Call API success !' }));
      yield put(getDataSuccess(response));
    } else {
      // yield put(mergeState({ isLoading: false }));
      yield put(changeSnackBar({ open: true, variant: 'warning', message: 'Not found ! Please type again!' }));
    }
  } catch (err) {
    //
  }
}

export default function* citySaga() {
  yield takeLatest(GET_DATA, getData);
}
