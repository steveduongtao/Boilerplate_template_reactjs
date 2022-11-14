import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the uploadExcel state domain
 */

const selectUploadExcelDomain = state => state.uploadExcel || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UploadExcel
 */

const makeSelectUploadExcel = () =>
  createSelector(
    selectUploadExcelDomain,
    substate => substate,
  );

export default makeSelectUploadExcel;
export { selectUploadExcelDomain };
