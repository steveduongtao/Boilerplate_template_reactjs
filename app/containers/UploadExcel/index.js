/**
 *
 * UploadExcel
 *
 */

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PropTypes from 'prop-types';
import { default as React, memo, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import XLSX from 'xlsx';
import reducer from './reducer';
import saga from './saga';
import makeSelectUploadExcel from './selectors';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function UploadExcel() {
  useInjectReducer({ key: 'uploadExcel', reducer });
  useInjectSaga({ key: 'uploadExcel', saga });
  const classes = useStyles();
  function handleFile(file /* :File */) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils
        .sheet_to_json(ws, { header: 1, raw: false, dateNF: 'dd/mm/YYYY' })
        .filter(item => item.length !== 0);
      // const newData = formatTimekeepingToData(data);
      console.log('newData', data);
      // setLocalData({ ...localData, data: newData, file });
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  }

  async function uploadFile(e) {
    const files = e.target.files[0];
    handleFile(files);
  }
  const inputEl = useRef(null);

  return (
    <>
      <Tooltip title="Upload file excel.xlsx">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => inputEl.current.click()}
        >
          <CloudUploadIcon fontSize="large" />
        </Button>
      </Tooltip>

      <input
        style={{ display: 'none' }}
        ref={inputEl}
        multiple
        onChange={uploadFile}
        id="fileUpload"
        // style={{ display: 'none' }}
        name="fileUpload"
        type="file"
        accept=".xlsx"
      />
    </>
  );
}

UploadExcel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  uploadExcel: makeSelectUploadExcel(),
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
)(UploadExcel);
