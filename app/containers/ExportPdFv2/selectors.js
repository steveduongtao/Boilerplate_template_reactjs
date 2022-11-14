import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the exportPdFv2 state domain
 */

const selectExportPdFv2Domain = state => state.exportPdFv2 || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ExportPdFv2
 */

const makeSelectExportPdFv2 = () =>
  createSelector(
    selectExportPdFv2Domain,
    substate => substate,
  );

export default makeSelectExportPdFv2;
export { selectExportPdFv2Domain };
