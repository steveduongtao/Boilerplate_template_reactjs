import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lightbox state domain
 */

const selectLightboxDomain = state => state.lightbox || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Lightbox
 */

const makeSelectLightbox = () =>
  createSelector(
    selectLightboxDomain,
    substate => substate,
  );

export default makeSelectLightbox;
export { selectLightboxDomain };
