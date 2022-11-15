/**
 *
 * PreviewPdf
 *
 */

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PropTypes from 'prop-types';
import { default as React, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { exportPDFt2 } from '../../helper';
import reducer from './reducer';
import saga from './saga';
import makeSelectPreviewPdf from './selectors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function PreviewPdf(props) {
  useInjectReducer({ key: 'previewPdf', reducer });
  useInjectSaga({ key: 'previewPdf', saga });
  const classes = useStyles();
  const { onMergeState, loadingBtn, isIframe } = props;

  function cb(param) {
    onMergeState({ typePrint: undefined, loadingBtn: false });
  }

  return (
    <>
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
            // exportPDFt('', 'table1', 'duongthetaoDashboard', cb);
            exportPDFt2('', 'table1', 'duongthetaoDashboard', cb);
          }}
        >
          {loadingBtn ? (
            <CircularProgress color="secondary" />
          ) : (
            <PictureAsPdfIcon fontSize="large" />
          )}
        </Button>
      </Tooltip>
      {isIframe && (
        <iframe
          frameBorder="0"
          style={{ display: 'block', width: '99vw', height: '100vh' }}
          id="duongthetao"
        />
      )}
    </>
  );
}

PreviewPdf.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  previewPdf: makeSelectPreviewPdf(),
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
)(PreviewPdf);
