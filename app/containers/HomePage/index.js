/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectError, makeSelectLoading, makeSelectRepos } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { loadRepos } from '../App/actions';
import {
  changeSnackBar,
  changeUsername,
  defaultAction,
  getData,
  mergeState,
  onChangeCloseSnackBar,
} from './actions';
import CustomSnackbar from './CustomSnackbar';
import Feartures from './Feartures';
import Loading from './Loading/Loading';
import reducer from './reducer';
import saga from './saga';
import Section from './Section';
import makeSelectHomePage, { makeSelectUsername } from './selectors';

const key = 'home';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const {
    onDefaultAction,
    onMergeState,
    homePage,
    username,
    loading,
    error,
    repos,
    onSubmitForm,
    onChangeUsername,
    onChangeCloseSnackBar,
    onChangeSnackBar,
    onGetData,
  } = props;

  const { localState } = homePage;
  const { changeSnackbar, isLoading } = localState;
  console.log('homePage_');
  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);
  useEffect(() => {
    onGetData();
  }, []);

  return (
    <div>
      <Section>
        {/* Feartures component */}
        <Feartures
          onSubmitForm={data => {
            onSubmitForm(data);
          }}
          onChangeUsername={data => {
            onChangeUsername(data);
          }}
          onChangeSnackBar={data => {
            onChangeSnackBar(data);
          }}
          onMergeState={data => onMergeState(data)}
          localState={localState}
          username={username}
          loading={loading}
          error={error}
          repos={repos}
        />
      </Section>
      {/* Snackbar đã customed */}
      <CustomSnackbar
        open={changeSnackbar.open}
        variant={changeSnackbar.variant}
        message={changeSnackbar.message}
        onClose={() => onChangeCloseSnackBar()}
      />
      {/* Loading */}
      {isLoading && <Loading />}
    </div>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onMergeState: data => {
      dispatch(mergeState(data));
    },
    onDefaultAction: data => {
      dispatch(defaultAction(data));
    },
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt, data) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos(data));
    },
    onChangeSnackBar: data => {
      dispatch(changeSnackBar(data));
    },
    onChangeCloseSnackBar: () => {
      dispatch(onChangeCloseSnackBar());
    },
    onGetData: data => {
      dispatch(getData(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
