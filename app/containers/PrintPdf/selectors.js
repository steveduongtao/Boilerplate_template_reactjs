import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the printPdf state domain
 */

const selectPrintPdfDomain = state => state.printPdf || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PrintPdf
 */

const makeSelectPrintPdf = () =>
  createSelector(
    selectPrintPdfDomain,
    substate => substate,
  );

export default makeSelectPrintPdf;
export { selectPrintPdfDomain };
