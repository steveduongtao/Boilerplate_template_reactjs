/*
 *
 * UpdateStudent reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_CITY_LIST_SUCCESS,
  GET_STUDENT_INFO_SUCCESS,
  MERGE_DATA,
  MERGE_STATE,
} from './constants';

export const initialState = {
  localState: {},
  localData: {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const updateStudentReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        return initialState;
      case MERGE_STATE:
        return {
          ...state,
          localState: { ...state.localState, ...action.data },
        };
      case MERGE_DATA:
        console.log('mergeData_', action.data);
        return {
          ...state,
          localData: { ...state.localData, ...action.data },
        };
      case MERGE_STATE:
        return {
          ...state,
          localState: { ...state.localState, ...action.data },
        };

      case GET_STUDENT_INFO_SUCCESS:
        return {
          ...state,
          localData: { ...state.localData, ...action.data },
        };
      case GET_CITY_LIST_SUCCESS:
        return {
          ...state,
          localData: { ...state.localData, cityOptions: [...action.data] },
        };
    }
  });

export default updateStudentReducer;
