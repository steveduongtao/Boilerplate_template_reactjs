// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';
import { changeSnackBar } from '../City/actions';
import { getCityListSuccess, getStudentSuccess } from './actions';
import { ADD_STUDENT, GET_CITY_LIST, GET_STUDENT_INFO, UPDATE_STUDENT } from './constants';

export function* getStudent(action) {
  const id = action.data;
  console.log('studentId', id);
  try {
    const response = yield call(request, `http://js-post-api.herokuapp.com/api/students/${id}`);
    if (response) {
      yield put(getStudentSuccess(response));
    }
  } catch (err) {
    console.log('error', err);
  }
}
export function* getCityList(action) {
  try {
    const response = yield call(
      request,
      'http://js-post-api.herokuapp.com/api/cities?_page=1&_limit=10',
    );
    if (response.data.length > 0) {
      // convert origin
      const cityList = response.data.map(city => ({
        label: city.name,
        value: city.code,
      }));
      // yield put(changeSnackBar({ open: true, variant: 'success', message: 'Call API success!' }));
      yield put(getCityListSuccess(cityList));
    }
  } catch (err) {
    // yield put(changeSnackBar({ open: true, variant: 'error', message: 'Call API failed!' }));
    console.log('error', err);
  }
}
export function* addStudent(action) {
  console.log('action_add', action.data);
  const { cd, rest } = action.data;
  try {
    const response = yield call(request, `http://js-post-api.herokuapp.com/api/students`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    });
    if (response) {
      console.log('response_');
      /** Redirect to city list */
      cd();
    }
  } catch (err) {
    console.log('error', err);
  }
}
export function* updateStudent(action) {
  console.log('action_update', action.data);
  const { cd } = action.data;
  const { id, ...rest } = action.data.formValues;
  console.log('id_', id, rest);
  try {
    const response = yield call(request, `http://js-post-api.herokuapp.com/api/students/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...rest }),
    });

    if (response) {
      console.log('response_');
      /** Redirect to city list */
      cd();
    }
  } catch (err) {
    console.log('error', err);
  }
}

// Individual exports for testing
export default function* updateStudentSaga() {
  /** Get student info */
  yield takeLatest(GET_STUDENT_INFO, getStudent);
  /** Get city list */
  yield takeLatest(GET_CITY_LIST, getCityList);
  /** Add student */
  yield takeLatest(ADD_STUDENT, addStudent);
  /** Update student */
  yield takeLatest(UPDATE_STUDENT, updateStudent);
}
