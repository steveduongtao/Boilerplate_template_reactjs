import React, { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import ExportTableToExcel from './ExportTableToExcel';
import {
  printPDF,
  tableToExcel,
  tableToPDF,
  exportPDF,
  exportPDFt,
} from './helper';
import Look from './Look';

function Child() {
  const { store } = useContext(ReactReduxContext);
  console.log('store', store.getState());
  return (
    <>
      <h1>Child</h1>
      <Look />
      <button
        onClick={() =>
          tableToExcel(
            'table1',
            'duongthetao1',
            'duongthetao2',
            'duongthetao3',
            'duongthetao5',
          )
        }
      >
        Export to Excel
      </button>
      <button
        onClick={() =>
          printPDF(tableToPDF('table1', 'duongthetao1', 'duongthetao2'))
        }
      >
        print PDF
      </button>
      <button
        onClick={() =>
          exportPDFt(
            tableToPDF('table1', 'duongthetao1', 'duongthetao2'),
            'table1',
            'duongthetaoDashboard',
          )
        }
      >
        export PDF
      </button>
      <ExportTableToExcel id={'table1'} />
    </>
  );
}

export default Child;
