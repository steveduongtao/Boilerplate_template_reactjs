/**
 *
 * JsonToExcel
 *
 */

import PropTypes from 'prop-types';
import { default as React, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import * as XLSX from 'xlsx';
import reducer from './reducer';
import saga from './saga';
import makeSelectJsonToExcel from './selectors';

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function JsonToExcel() {
  useInjectReducer({ key: 'jsonToExcel', reducer });
  useInjectSaga({ key: 'jsonToExcel', saga });
  const classes = useStyles();

  async function Presidents() {
    /* fetch JSON data and parse */
    const url = 'https://sheetjs.com/data/executive.json';
    const raw_data = await fetch(url).then(res => res.json());
    console.log('raw_data', raw_data);
    /* filter for the Presidents */
    const prez = raw_data.filter(row =>
      row.terms.some(term => term.type === 'prez'),
    );

    /* flatten objects */
    // const rows = prez.map(row => ({
    //   name: row.name.first + ' ' + row.name.last,
    //   birthday: row.bio.birthday,
    // }));

    const rows = [
      {
        color: 'red',
        value: '#f00',
      },
      {
        color: 'green',
        value: '#0f0',
      },
      {
        color: 'blue',
        value: '#00f',
      },
      {
        color: 'cyan',
        value: '#0ff',
      },
      {
        color: 'magenta',
        value: '#f0f',
      },
      {
        color: 'yellow',
        value: '#ff0',
      },
      {
        color: 'black',
        value: '#000',
      },
    ];

    /* generate worksheet and workbook */
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dates');

    /* fix headers */
    XLSX.utils.sheet_add_aoa(worksheet, [['Color Name', 'Color Code']], {
      origin: 'A1',
    });

    /* calculate column width */
    const max_width = rows.reduce((w, r) => Math.max(w, r.color.length), 10);
    worksheet['!cols'] = [{ wch: max_width }];

    /* create an XLSX file and try to save to Presidents.xlsx */
    XLSX.writeFile(workbook, 'Presidents.xlsx', { compression: true });
  }

  return (
    <>
      <Tooltip title="Json to excel" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => {
            Presidents();
          }}
        >
          <AttachmentIcon fontSize="large" />
        </Button>
      </Tooltip>
    </>
  );
}

JsonToExcel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  jsonToExcel: makeSelectJsonToExcel(),
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
)(JsonToExcel);
