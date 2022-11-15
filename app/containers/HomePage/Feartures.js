import { Button, Divider, Menu, MenuItem, Tooltip } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import SearchIcon from '@material-ui/icons/Search';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import SwapCallsIcon from '@material-ui/icons/SwapCalls';
import React, { useContext, useState } from 'react';
import { ReactReduxContext } from 'react-redux';
import { exportPDFt2, tableToExcel } from '../../helper';
import { DownloadExcel } from '../DownloadExcel';
import { DownloadFile } from '../DownloadFile';
import ExportPdFv2 from '../ExportPdFv2';
import PreviewPdf from '../PreviewPdf';
import PrintCurrentTab from '../PrintCurrentTab';
import { PrintPdf } from '../PrintPdf';
import { SearchUserGitHub } from '../SearchUserGitHub';
import { SnackBar } from '../SnackBar';
import UploadExcel from '../UploadExcel';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Feartures(props) {
  const classes = useStyles();
  const { localState, onMergeState, onChangeSnackBar } = props;
  const { typePrint, loadingBtn, isIframe, isShowSearch } = localState;
  const { store } = useContext(ReactReduxContext);
  console.log('store', store.getState());
  return (
    <>
      <PrintPdf
        typePrint={typePrint}
        onMergeState={data => {
          onMergeState(data);
        }}
      />
      <DownloadExcel
        onMergeState={data => {
          onMergeState(data);
        }}
      />
      <PreviewPdf
        loadingBtn={loadingBtn}
        onMergeState={data => {
          onMergeState(data);
        }}
      />
      <SearchUserGitHub
        isShowSearch={isShowSearch}
        onMergeState={data => {
          onMergeState(data);
        }}
      />
      <SnackBar
        onChangeSnackBar={data => {
          onChangeSnackBar(data);
        }}
      />
      <UploadExcel />
      <PrintCurrentTab />
      <ExportPdFv2
        localState={localState}
        onMergeState={data => onMergeState(data)}
      />
      <DownloadFile />
      <Divider />

      {isIframe && (
        <iframe
          frameBorder="0"
          style={{ display: 'block', width: '99vw', height: '100vh' }}
          id="duongthetao"
        />
      )}
      {/* {<ExportTableToExcel id={'table1'} />} */}
    </>
  );
}

export default Feartures;
