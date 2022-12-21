import { Divider } from '@material-ui/core';
import React, { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import { DownloadExcel } from '../DownloadExcel';
import { DownloadFile } from '../DownloadFile';
import ExportPdFv2 from '../ExportPdFv2';
import JsonToExcel from '../JsonToExcel';
import LightboxView from '../LightboxView';
import PreviewPdf from '../PreviewPdf';
import PrintCurrentTab from '../PrintCurrentTab';
import { PrintPdf } from '../PrintPdf';
import { SearchUserGitHub } from '../SearchUserGitHub';
import { SnackBar } from '../SnackBar';
import UploadExcel from '../UploadExcel';

function Feartures(props) {
  const {
    onMergeState,
    onChangeSnackBar,
    onChangeUsername,
    onSubmitForm,
    localState,
    username,
    loading,
    error,
    repos,
  } = props;
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
        isIframe={isIframe}
        loadingBtn={loadingBtn}
        onMergeState={data => {
          onMergeState(data);
        }}
      />
      <SearchUserGitHub
        loading={loading}
        error={error}
        repos={repos}
        username={username}
        isShowSearch={isShowSearch}
        onSubmitForm={data => {
          onSubmitForm(data);
        }}
        onMergeState={data => {
          onMergeState(data);
        }}
        onChangeUsername={data => {
          onChangeUsername(data);
        }}
      />
      <SnackBar
        onChangeSnackBar={data => {
          onChangeSnackBar(data);
        }}
      />
      <UploadExcel />
      <PrintCurrentTab />
      <ExportPdFv2 localState={localState} onMergeState={data => onMergeState(data)} />
      <DownloadFile />
      <JsonToExcel />
      <Divider />
      <LightboxView />

      {/* {<ExportTableToExcel id={'table1'} />} */}
    </>
  );
}

export default Feartures;
