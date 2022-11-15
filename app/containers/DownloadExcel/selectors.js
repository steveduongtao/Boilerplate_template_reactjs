import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the downloadExcel state domain
 */

const selectDownloadExcelDomain = state => state.downloadExcel || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DownloadExcel
 */

const makeSelectDownloadExcel = () =>
  createSelector(
    selectDownloadExcelDomain,
    substate => substate,
  );

export default makeSelectDownloadExcel;
export { selectDownloadExcelDomain };
