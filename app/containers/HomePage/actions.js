/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
  CHANGE_USERNAME,
  DEFAULT_ACTION,
  MERGE_STATE,
  GET_DATA,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
export function mergeState(data) {
  return {
    type: MERGE_STATE,
    data,
  };
}
export function defaultAction(data) {
  return {
    type: DEFAULT_ACTION,
    data,
  };
}
export function changeSnackBar(data) {
  return {
    type: CHANGE_SNACKBAR,
    data,
  };
}
export function onChangeCloseSnackBar(data) {
  return {
    type: CHANGE_CLOSE_SNACKBAR,
    data,
  };
}
export function getData(data) {
  return {
    type: GET_DATA,
    data,
  };
}
