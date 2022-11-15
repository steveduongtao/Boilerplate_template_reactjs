import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the snackBar state domain
 */

const selectSnackBarDomain = state => state.snackBar || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SnackBar
 */

const makeSelectSnackBar = () =>
  createSelector(
    selectSnackBarDomain,
    substate => substate,
  );

export default makeSelectSnackBar;
export { selectSnackBarDomain };
