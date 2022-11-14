import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the downloadFile state domain
 */

const selectDownloadFileDomain = state => state.downloadFile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DownloadFile
 */

const makeSelectDownloadFile = () =>
  createSelector(
    selectDownloadFileDomain,
    substate => substate,
  );

export default makeSelectDownloadFile;
export { selectDownloadFileDomain };
