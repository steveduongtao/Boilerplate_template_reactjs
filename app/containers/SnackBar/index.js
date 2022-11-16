/**
 *
 * SnackBar
 *
 */

import { Button, makeStyles, Menu, MenuItem, Tooltip } from '@material-ui/core';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import PropTypes from 'prop-types';
import { default as React, memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectSnackBar from './selectors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export function SnackBar(props) {
  useInjectReducer({ key: 'snackBar', reducer });
  useInjectSaga({ key: 'snackBar', saga });
  const classes = useStyles();
  const { onChangeSnackBar } = props;
  const [openSnackbar, setOpenSnackBar] = useState(null);
  const handleClose = () => {
    setOpenSnackBar(null);
  };
  const handleClick = event => {
    setOpenSnackBar(event.currentTarget);
  };
  return (
    <>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Tooltip title="Turn on Snackbar" placement="start-top">
          <Button
            variant="contained"
            color="primary"
            size="large"
            // className={classes.button}
          >
            <SettingsRemoteIcon fontSize="large" />
          </Button>
        </Tooltip>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={openSnackbar}
        keepMounted
        open={Boolean(openSnackbar)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            onChangeSnackBar({
              open: true,
              variant: 'success',
              message:
                'Chỉ cần bạn cố gắng không ngừng nhất định bạn sẽ thành công!!!',
            });
          }}
        >
          Success
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            onChangeSnackBar({
              open: true,
              variant: 'error',
              message:
                'Chỉ cần bạn cố gắng không ngừng nhất định bạn sẽ thành công!!!',
            });
          }}
        >
          Error
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            onChangeSnackBar({
              open: true,
              variant: 'warning',
              message:
                'Chỉ cần bạn cố gắng không ngừng nhất định bạn sẽ thành công!!!',
            });
          }}
        >
          Warning
        </MenuItem>
      </Menu>
    </>
  );
}

SnackBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  snackBar: makeSelectSnackBar(),
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
)(SnackBar);
