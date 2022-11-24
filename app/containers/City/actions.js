/*
 *
 * City actions
 *
 */

import {
  CHANGE_CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
  DEFAULT_ACTION,
  GET_DATA,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
  MERGE_DATA,
  MERGE_STATE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function getData(data) {
  return {
    type: GET_DATA,
    data,
  };
}
export function getDataSuccess(data) {
  return {
    type: GET_DATA_SUCCESS,
    data,
  };
}
export function getDataFailure(data) {
  return {
    type: GET_DATA_FAILURE,
    data,
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
export function changeSnackBar(data) {
  return { type: CHANGE_SNACKBAR, data };
}
export function changeCloseSnackBar(data) {
  return {
    type: CHANGE_CLOSE_SNACKBAR,
    data,
  };
}
