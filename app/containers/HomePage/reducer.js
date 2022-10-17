/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
  CHANGE_USERNAME,
  MERGE_STATE,
} from './constants';

// The initial state of the App
export const initialState = {
  localState: {
    typePrint: undefined,
    isIframe: false,
    isShowSearch: false,
    changeSnackbar: {
      open: false,
      variant: '',
      message: '',
    },
    isLoading: false,
  },
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        console.log('changeuserName', action.username);
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
      case MERGE_STATE:
        console.log('action_reducer', action.data);
        return {
          ...state,
          localState: { ...state.localState, ...action.data },
        };
      case CHANGE_SNACKBAR:
        return {
          ...state,
          localState: {
            ...state.localState,
            changeSnackbar: {
              ...state.localState.changeSnackbar,
              ...action.data,
            },
          },
        };
      case CHANGE_CLOSE_SNACKBAR:
        return {
          ...state,
          localState: {
            ...state.localState,
            changeSnackbar: {
              ...state.localState.changeSnackbar,
              open: false,
            },
          },
        };
    }
  });

export default homeReducer;
