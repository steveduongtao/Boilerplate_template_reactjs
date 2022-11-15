/**
 *
 * SearchUserGitHub
 *
 */

import { Button, Grid, TextField, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Form from '../HomePage/Form';
import reducer from './reducer';
import saga from './saga';
import makeSelectSearchUserGitHub from './selectors';
import ReposList from 'components/ReposList';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function SearchUserGitHub(props) {
  useInjectReducer({ key: 'searchUserGitHub', reducer });
  useInjectSaga({ key: 'searchUserGitHub', saga });
  const classes = useStyles();

  const {
    onMergeState,
    onChangeUsername,
    onSubmitForm,
    isShowSearch,
    username,
    loading,
    error,
    repos,
  } = props;
  const reposListProps = {
    loading,
    error,
    repos,
  };
  return (
    <>
      <Tooltip title="Search your Github" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            onMergeState({ isShowSearch: !isShowSearch });
          }}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </Tooltip>
      {/* Form search */}
      {isShowSearch && (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Form
              onSubmit={value => {
                onSubmitForm(value);
                onMergeState({ isLoading: true });
              }}
            >
              <TextField
                margin="dense"
                type="search"
                variant="outlined"
                fullWidth
                id="username"
                label="Enter your github name to search"
                // defaultValue="Hello World"
                InputProps={{
                  readOnly: false,
                }}
                value={username}
                onChange={onChangeUsername}
              />
            </Form>
            <ReposList {...reposListProps} />
          </Grid>
        </Grid>
      )}
    </>
  );
}

SearchUserGitHub.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  searchUserGitHub: makeSelectSearchUserGitHub(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SearchUserGitHub);
