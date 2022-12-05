/*
 *
 * City actions
 *
 */

import {
  MERGE_DATA,
  MERGE_STATE,
  CHANGE_CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
  DEFAULT_ACTION,
  GET_CITY_LIST,
  GET_CITY_LIST_SUCCESS,
  GET_LIST,
  GET_LIST_DEBOUNCE,
  ON_LINER_BUFFER,
  GET_LIST_FAILURE,
  GET_LIST_SUCCESS,
  REMOVE_STUDENT,
} from './constants';

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
export function getList(data) {
  return {
    type: GET_LIST,
    data,
  };
}
export function getListSuccess(data) {
  return {
    type: GET_LIST_SUCCESS,
    data,
  };
}
export function getListFailure(data) {
  return {
    type: GET_LIST_FAILURE,
    data,
  };
}
export function getListWidthDebounce(data) {
  return {
    type: GET_LIST_DEBOUNCE,
    data,
  };
}
export function onLinerBuffer() {
  return {
    type: ON_LINER_BUFFER,
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
export function remove(data) {
  return { type: REMOVE_STUDENT, data };
}
export function changeSnackBar(data) {
  return { type: CHANGE_SNACKBAR, data };
}
export function changeCloseSnackBar(data) {
  return {
    type: CHANGE_CLOSE_SNACKBAR,
    data,
  };
}
