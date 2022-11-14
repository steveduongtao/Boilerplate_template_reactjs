/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { exportPDFt } from '../../helper';
import { changeSnackBar, mergeState } from './actions';
import { GET_DATA } from './constants';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  console.log('getRepos', username);
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    console.log('reponse', response);

    if (response.length > 0) {
      yield put(reposLoaded(response, username));
      yield put(mergeState({ isLoading: false }));
      yield put(
        changeSnackBar({
          open: true,
          variant: 'success',
          message: 'Call API success !',
        }),
      );
    } else {
      yield put(mergeState({ isLoading: false }));
      yield put(
        changeSnackBar({
          open: true,
          variant: 'warning',
          message: 'Not found ! Please type again!',
        }),
      );
    }
    // yield put(mergeState({ typePrint: 'print', loadingBtn: true }));
    // yield exportPDFt('', 'table1', 'duongthetaoDashboard');
    // yield put(mergeState({ typePrint: 'print', loadingBtn: false }));
  } catch (err) {
    yield put(repoLoadingError(err));
    yield put(mergeState({ isLoading: false }));
    yield put(
      changeSnackBar({
        open: true,
        variant: 'error',
        message: 'Call API error !',
      }),
    );
  }
}

export function* getData() {
  try {
    const response = yield call(
      request,
      'https://js-post-api.herokuapp.com/api/students',
    );
    console.log('data', response);
    if (response.length > 0) {
      yield put(mergeState({ dataStudent: response }));
      yield put(
        changeSnackBar({
          open: true,
          variant: 'success',
          message: 'Call API success !',
        }),
      );
    } else {
      yield put(mergeState({ isLoading: false }));
      yield put(
        changeSnackBar({
          open: true,
          variant: 'warning',
          message: 'Not found ! Please type again!',
        }),
      );
    }
  } catch (err) {
    yield put(
      changeSnackBar({
        open: true,
        message: 'Lấy trạng thái thất bại',
        variant: 'error',
      }),
    );
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(GET_DATA, getData);
}
