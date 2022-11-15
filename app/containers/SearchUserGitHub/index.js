/**
 *
 * SearchUserGitHub
 *
 */

import { Button, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectSearchUserGitHub from './selectors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function SearchUserGitHub(props) {
  useInjectReducer({ key: 'searchUserGitHub', reducer });
  useInjectSaga({ key: 'searchUserGitHub', saga });
  const classes = useStyles();

  const { onMergeState, isShowSearch } = props;

  return (
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
