/*
 *
 * UpdateStudent actions
 *
 */

import { DEFAULT_ACTION, MERGE_DATA, MERGE_STATE, GET_STUDENT_INFO, GET_STUDENT_INFO_SUCCESS, GET_STUDENT_INFO_FAILURE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function mergeState(data) {
  return {
    type: MERGE_STATE,
    data,
  };
}
export function mergeData(data) {
  return {
    type: MERGE_DATA,
    data,
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
