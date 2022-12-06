/*
 *
 * UpdateStudent reducer
 *
 */
import { CallToActionSharp, Satellite } from '@material-ui/icons';
import produce from 'immer';
import { DEFAULT_ACTION, GET_STUDENT_INFO_SUCCESS, MERGE_DATA, MERGE_STATE } from './constants';

export const initialState = {
  localState: {},
  localData: {},
};

/* eslint-disable default-case, no-param-reassign */
const updateStudentReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
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
      case GET_STUDENT_INFO_SUCCESS:
        return {
          ...state,
          localData: { ...state.localData, ...action.data },
        };
    }
  });

export default updateStudentReducer;
