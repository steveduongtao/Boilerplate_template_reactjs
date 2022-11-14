/**
 *
 * PrintPdf
 *
 */

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import PropTypes from 'prop-types';
import { default as React, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { printPDF, tableToPDF } from '../../helper';
import ExportFile from './components/ExportFile';
import reducer from './reducer';
import saga from './saga';
import makeSelectPrintPdf from './selectors';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function PrintPdf(props) {
  useInjectReducer({ key: 'printPdf', reducer });
  useInjectSaga({ key: 'printPdf', saga });
  const classes = useStyles();
  const { typePrint, onMergeState } = props;

  return (
    <>
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
      {typePrint && <ExportFile id="table1" />}
    </>
  );
}

PrintPdf.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  printPdf: makeSelectPrintPdf(),
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
)(PrintPdf);
