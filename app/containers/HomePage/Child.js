import { Button, Tooltip } from '@material-ui/core';
import React, { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import ExportTableToExcel from './ExportTableToExcel';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import GetAppIcon from '@material-ui/icons/GetApp';
import DescriptionIcon from '@material-ui/icons/Description';
import {
  printPDF,
  tableToExcel,
  tableToPDF,
  exportPDF,
  exportPDFt,
} from './helper';
import Look from './Look';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Child(props) {
  const classes = useStyles();
  const { localState, onMergeState } = props;
  const { typePrint, loadingBtn } = localState;
  const { store } = useContext(ReactReduxContext);
  console.log('store', store.getState());

  function cb(param) {
    onMergeState({ typePrint: undefined, loadingBtn: false });
  }
  return (
    <>
      <h1>Child</h1>
      <Look />

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

      <Tooltip title="Preview PDF" placement="start-top">
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
          <DescriptionIcon fontSize="large" />
        </Button>
      </Tooltip>

      <Tooltip title="Download PDF" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={async () => {
            await onMergeState({ typePrint: 'print', loadingBtn: true });
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

      {typePrint && <ExportTableToExcel id={'table1'} />}
    </>
  );
}

export default Child;
