/**
 *
 * ExportPdFv2
 *
 */

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import PictureAsPdfTwoToneIcon from '@material-ui/icons/PictureAsPdfTwoTone';
import PropTypes from 'prop-types';
import { default as React, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { exportPDFhtml2pdf } from '../../helper';
import ExportPDF from './components/ExportPDF';
import './index.css';
import reducer from './reducer';
import saga from './saga';
import makeSelectExportPdFv2 from './selectors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function ExportPdFv2(props) {
  useInjectReducer({ key: 'exportPdFv2', reducer });
  useInjectSaga({ key: 'exportPdFv2', saga });
  const { localState, onMergeState } = props;
  const { hideDiv } = localState;
  console.log('duongthetao', localState, onMergeState);
  const classes = useStyles();
  function cb(param) {
    onMergeState({ hideDiv: false });
  }

  return (
    <>
      <Tooltip title="Export PDF ver.2" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={async () => {
            await onMergeState({ hideDiv: true });
            exportPDFhtml2pdf(cb);
          }}
        >
          <PictureAsPdfTwoToneIcon fontSize="large" />
        </Button>
      </Tooltip>

      {hideDiv && <ExportPDF />}
    </>
  );
}

ExportPdFv2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  exportPdFv2: makeSelectExportPdFv2(),
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
)(ExportPdFv2);
