// import { take, call, put, select } from 'redux-saga/effects';

import { call } from 'file-loader';
import { takeLatest } from 'redux-saga/effects';
import request from '../../../utils/request';
import { getStudentSuccess } from './actions';
import { GET_STUDENT_INFO } from './constants';

export function* getStudent(action) {
  const studentId = 'lfajlf';
  try {
    const response = yield call(request, `http://js-post-api.herokuapp.com/api/students/${studentId}`);
    if (response) {
      // yield put(getStudentSuccess(response));
    }
  } catch (err) {
    console.log('error', err);
  }
}

// Individual exports for testing
export default function* updateStudentSaga() {
  /**Get student info */
  yield takeLatest(GET_STUDENT_INFO, getStudent);
  // See example in containers/HomePage/saga.js
}
