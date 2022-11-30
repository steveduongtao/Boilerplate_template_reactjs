/*
 *
 * City reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
  DEFAULT_ACTION,
  GET_CITY_LIST_SUCCESS,
  GET_LIST,
  GET_LIST_DEBOUNCE,
  GET_LIST_SUCCESS,
  MERGE_DATA,
  MERGE_STATE,
  ON_LINER_BUFFER,
} from './constants';

export const initialState = {
  localData: {
    statistics: {
      maleCount: 0,
      femaleCount: 0,
      highMarkCount: 0,
      lowMarkCount: 0,
      maleHn: 0,
      femaleHn: 0,
      maleHcm: 0,
      femaleHcm: 0,
      malePt: 0,
      femalePt: 0,
      maleDn: 0,
      femaleDn: 0,
      studentCountByCityList: [],
    },
    highestStudentList: [],
    lowestStudentList: [],
    rankingByCityList: [],
    studentList: [],
    cityList: [],
  },
  localState: {
    filter: {
      _page: 1,
      _limit: 13,
    },
    pagination: {
      _page: 1,
      _limit: 13,
      _totalRows: 15,
    },
    loading: false,
    changeSnackBar: {
      open: false,
      variant: '',
      message: '',
    },
  },
};

/* eslint-disable default-case, no-param-reassign */
const cityReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case MERGE_STATE:
        return {
          ...state,
          localState: { ...state.localState, ...action.data },
        };
      case MERGE_DATA:
        return {
          ...state,
          localData: { ...state.localData, ...action.data },
        };
      case GET_LIST:
        console.log('action_re', action.data);
        return {
          ...state,
          localState: { ...state.localState, loading: true, filter: { ...state.localState.filter, ...action.data } },
        };
      case GET_LIST_DEBOUNCE:
        console.log('action_re', action.data);
        return {
          ...state,
          localState: { ...state.localState, filter: { ...state.localState.filter, ...action.data } },
        };
      case ON_LINER_BUFFER:
        return {
          ...state,
          localState: { ...state.localState, loading: true },
        };
      case GET_LIST_SUCCESS:
        console.log('getListSuc_', action);
        return {
          ...state,
          localState: { ...state.localState, loading: false, pagination: action.data.pagination },
          localData: { ...state.localData, studentList: [...action.data.data] },
        };
      case GET_CITY_LIST_SUCCESS:
        console.log('localData_', action);
        return {
          ...state,
          localData: { ...state.localData, cityList: [...action.data] },
        };

      case DEFAULT_ACTION:
        break;
      case CHANGE_SNACKBAR:
        return {
          ...state,
          localState: {
            ...state.localState,
            changeSnackBar: {
              ...state.localState.changeSnackBar,
              ...action.data,
            },
          },
        };
      case CHANGE_CLOSE_SNACKBAR:
        return {
          ...state,
          localState: {
            ...state.localState,
            changeSnackBar: {
              ...state.localState.changeSnackBar,
              open: false,
            },
          },
        };
    }
  });

export default cityReducer;
