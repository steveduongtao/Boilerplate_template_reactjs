import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the printCurrentTab state domain
 */

const selectPrintCurrentTabDomain = state =>
  state.printCurrentTab || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PrintCurrentTab
 */

const makeSelectPrintCurrentTab = () =>
  createSelector(
    selectPrintCurrentTabDomain,
    substate => substate,
  );

export default makeSelectPrintCurrentTab;
export { selectPrintCurrentTabDomain };
