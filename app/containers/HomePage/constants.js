/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const DEFAULT_ACTION = 'boilerplate/Home/DEFAULT_ACTION';
export const MERGE_STATE = 'boilerplate/Home/MERGE_STATE';
export const CHANGE_SNACKBAR = 'boilerplate/Home/CHANGE_SNACKBAR';
export const CHANGE_CLOSE_SNACKBAR = 'boilerplate/Home/CHANGE_CLOSE_SNACKBAR';
