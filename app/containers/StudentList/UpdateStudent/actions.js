/*
 *
 * UpdateStudent actions
 *
 */

import {
  DEFAULT_ACTION,
  MERGE_DATA,
  MERGE_STATE,
  GET_STUDENT_INFO,
  GET_STUDENT_INFO_SUCCESS,
  GET_STUDENT_INFO_FAILURE,
  GET_CITY_LIST,
  GET_CITY_LIST_SUCCESS,
  GET_CITY_LIST_FAILURE,
  ADD_STUDENT,
  UPDATE_STUDENT,
} from './constants';

export function defaultAction() {
  console.log('onDefault action');
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
  console.log('mergeData_action', data);
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
export function getCityList(data) {
  return {
    type: GET_CITY_LIST,
    data,
  };
}
export function getCityListSuccess(data) {
  return {
    type: GET_CITY_LIST_SUCCESS,
    data,
  };
}
export function getCityListFailure(data) {
  return {
    type: GET_CITY_LIST_FAILURE,
    data,
  };
}
export function addStudent(data) {
  return {
    type: ADD_STUDENT,
    data,
  };
}
export function updateStudent(data) {
  return {
    type: UPDATE_STUDENT,
    data,
  };
}
