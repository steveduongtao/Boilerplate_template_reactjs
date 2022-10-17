import { Button, Menu, MenuItem, Tooltip } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import React, { useContext, useState } from 'react';
import { ReactReduxContext } from 'react-redux';
import ExportTableToExcel from './ExportTableToExcel';
import { exportPDFt, printPDF, tableToExcel, tableToPDF } from './helper';
import SearchIcon from '@material-ui/icons/Search';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Child(props) {
  const classes = useStyles();
  const { localState, onMergeState, onChangeSnackBar } = props;
  const { typePrint, loadingBtn, isIframe, isShowSearch } = localState;
  const { store } = useContext(ReactReduxContext);
  console.log('store', store.getState());

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function cb(param) {
    onMergeState({ typePrint: undefined, loadingBtn: false });
  }
  return (
    <>
      <Tooltip title="Download Excel" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={async () => {
            await onMergeState({ typePrint: 'excel' });
            tableToExcel(
              'table1',
              'duongthetao1',
              'duongthetao2',
              'duongthetao3',
              'duongthetao5',
            );
          }}
        >
          <GetAppIcon fontSize="large" />
        </Button>
      </Tooltip>

      <Tooltip title="Print" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={async () => {
            await onMergeState({ typePrint: 'pdf' });
            printPDF(tableToPDF('table1', 'duongthetao1', 'duongthetao2'));
          }}
        >
          <PrintIcon fontSize="large" />
        </Button>
      </Tooltip>

      <Tooltip title="Preview PDF & Print" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={async () => {
            await onMergeState({
              typePrint: 'print',
              loadingBtn: true,
              isIframe: true,
            });
            exportPDFt('', 'table1', 'duongthetaoDashboard', cb);
          }}
        >
          {loadingBtn ? (
            <CircularProgress color="secondary" />
          ) : (
            <PictureAsPdfIcon fontSize="large" />
          )}
        </Button>
      </Tooltip>
      <Tooltip title="Hide/Show iFrame" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            onMergeState({ isIframe: !isIframe });
          }}
        >
          <SwapCallsIcon fontSize="large" />
        </Button>
      </Tooltip>
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
      {/* <Tooltip title="Turn on Snackbar" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            // onMergeState({ isShowSearch: !isShowSearch });
            onChangeSnackBar({
              open: true,
              variant: 'success',
              message:
                'Chỉ cần bạn cố gắng không ngừng nhất định bạn sẽ thành công!!!',
            });
          }}
        >
          <SettingsRemoteIcon fontSize="large" />
        </Button>
      </Tooltip> */}

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
            className={classes.button}
          >
            <SettingsRemoteIcon fontSize="large" />
          </Button>
        </Tooltip>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
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

      {isIframe && (
        <iframe
          frameborder="0"
          style={{ display: 'block', width: '99vw', height: '100vh' }}
          id={'duongthetao'}
        />
      )}

      {typePrint && <ExportTableToExcel id={'table1'} />}
      {/* {<ExportTableToExcel id={'table1'} />} */}
    </>
  );
}

export default Child;
