/**
 * Gets the repositories of the user from Github
 */
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';
import { changeSnackBar, getCityListSuccess, getListSuccess, onLinerBuffer } from './actions';
import { GET_CITY_LIST, GET_LIST, GET_LIST_DEBOUNCE, REMOVE_STUDENT } from './constants';

export function* getList(action) {
  console.log('action_', action);
  // const name_like = data.newFilter.name_like || undefined;
  const city = (action && action.data && action.data.city) || undefined;
  const _sort = (action && action.data && action.data._sort) || undefined;
  const _order = (action && action.data && action.data._order) || undefined;
  const name_like = (action && action.data && action.data.name_like) || undefined;
  const _page = (action && action.data && action.data._page) || 1;
  console.log('getList', action && action.data && action.data.city);
  try {
    yield put(onLinerBuffer());
    const response = yield call(
      request,
      `https://js-post-api.herokuapp.com/api/students?_page=${_page}&_limit=13${city ? `&city=${city}` : ''}${_sort ? `&_sort=${_sort}` : ''}${
        _order ? `&_order=${_order}` : ''
      }${name_like ? `&name_like=${name_like}` : ''}`,
    );
    console.log('data', response.data);
    if (response) {
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
export function* removeStudent(action) {
  const { data } = action;
  const { id, cb } = data;
  console.log('data_', action);
  try {
    const response = yield call(request, `http://js-post-api.herokuapp.com/api/students/${id}`, {
      method: 'DELETE',
    });
    yield put(changeSnackBar({ open: true, variant: 'success', message: 'Remove student successfully!' }));
    cb && cb();
  } catch (err) {
    yield put(changeSnackBar({ open: false, varriant: 'error', message: 'Remove student failed!' }));
    console.log('error', err);
  }
}

export default function* citySaga() {
  /**Filter */
  yield takeLatest(GET_LIST, getList);
  yield debounce(500, GET_LIST_DEBOUNCE, getList);
  /**Fetch API */
  yield takeLatest(GET_CITY_LIST, getCityList);
  /**Remove API */
  yield takeLatest(REMOVE_STUDENT, removeStudent);
}
