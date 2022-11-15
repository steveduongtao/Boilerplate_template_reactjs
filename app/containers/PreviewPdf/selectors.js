import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the previewPdf state domain
 */

const selectPreviewPdfDomain = state => state.previewPdf || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PreviewPdf
 */

const makeSelectPreviewPdf = () =>
  createSelector(
    selectPreviewPdfDomain,
    substate => substate,
  );

export default makeSelectPreviewPdf;
export { selectPreviewPdfDomain };
