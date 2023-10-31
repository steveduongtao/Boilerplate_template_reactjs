import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lazyLoadImg state domain
 */

const selectLazyLoadImgDomain = state => state.lazyLoadImg || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LazyLoadImg
 */

const makeSelectLazyLoadImg = () =>
  createSelector(
    selectLazyLoadImgDomain,
    substate => substate,
  );

export default makeSelectLazyLoadImg;
export { selectLazyLoadImgDomain };
