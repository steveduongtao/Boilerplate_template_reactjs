/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );
const makeSelectHomePage = () =>
  createSelector(
    selectHome,
    homeState => homeState,
  );

export default makeSelectHomePage;
export { selectHome, makeSelectUsername };
