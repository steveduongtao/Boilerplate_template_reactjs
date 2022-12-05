/*
 *
 * UpdateStudent actions
 *
 */

import { DEFAULT_ACTION, GET_STUDENT_INFO, GET_STUDENT_INFO_SUCCESS, GET_STUDENT_INFO_FAILURE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getStudent(data) {
  return {
    type: GET_STUDENT_INFO,
    data,
  };
}
export function getStudentSuccess(data) {
  return {
    type: GET_STUDENT_INFO_SUCCESS,
    data,
  };
}
export function getStudentFailure(data) {
  return {
    type: GET_STUDENT_INFO_FAILURE,
    data,
  };
}
