import { Button, Tooltip } from '@material-ui/core';
import React, { useRef } from 'react';
import XLSX from 'xlsx';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function ImportFile() {
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

export default ImportFile;
