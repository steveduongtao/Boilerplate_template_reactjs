import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the jsonToExcel state domain
 */

const selectJsonToExcelDomain = state => state.jsonToExcel || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by JsonToExcel
 */

const makeSelectJsonToExcel = () =>
  createSelector(
    selectJsonToExcelDomain,
    substate => substate,
  );

export default makeSelectJsonToExcel;
export { selectJsonToExcelDomain };
