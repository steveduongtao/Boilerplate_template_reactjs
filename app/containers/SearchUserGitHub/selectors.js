import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchUserGitHub state domain
 */

const selectSearchUserGitHubDomain = state =>
  state.searchUserGitHub || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchUserGitHub
 */

const makeSelectSearchUserGitHub = () =>
  createSelector(
    selectSearchUserGitHubDomain,
    substate => substate,
  );

export default makeSelectSearchUserGitHub;
export { selectSearchUserGitHubDomain };
