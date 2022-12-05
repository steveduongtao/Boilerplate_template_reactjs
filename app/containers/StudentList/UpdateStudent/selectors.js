import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the updateStudent state domain
 */

const selectUpdateStudentDomain = state => state.updateStudent || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UpdateStudent
 */

const makeSelectUpdateStudent = () =>
  createSelector(
    selectUpdateStudentDomain,
    substate => substate,
  );

export default makeSelectUpdateStudent;
export { selectUpdateStudentDomain };
