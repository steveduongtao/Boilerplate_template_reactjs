/**
 * Gets the repositories of the user from Github
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { changeSnackBar, getCityListSuccess, getListSuccess } from './actions';
import { GET_CITY_LIST, GET_LIST } from './constants';

export function* getList() {
  try {
    const response = yield call(request, 'https://js-post-api.herokuapp.com/api/students');
    console.log('data', response);
    if (response.length > 0) {
      // yield put(mergeState({ dataStudent: response }));
      yield put(changeSnackBar({ open: true, variant: 'success', message: 'Call API success !' }));
      yield put(getListSuccess(response));
    } else {
      // yield put(mergeState({ isLoading: false }));
      yield put(changeSnackBar({ open: true, variant: 'warning', message: 'Not found ! Please type again!' }));
    }
  } catch (err) {
    //
  }
}

export function* getCityList() {
  try {
    const response = yield call(request, 'http://js-post-api.herokuapp.com/api/cities?_page=1&_limit=10');
    console.log('cityList_', response);
    if (response.data.length > 0) {
      yield put(changeSnackBar({ open: true, variant: 'success', message: 'Call API success !' }));
      yield put(getCityListSuccess(response.data));
    } else {
      yield put(changeSnackBar({ open: false, varriant: 'warning', message: 'Not found ! Please type again!' }));
    }
  } catch (err) {}
}

export default function* citySaga() {
  yield takeLatest(GET_LIST, getList);
  yield takeLatest(GET_CITY_LIST, getCityList);
}
