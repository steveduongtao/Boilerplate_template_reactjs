/**
 *
 * DownloadExcel
 *
 */

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import PropTypes from 'prop-types';
import { default as React, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { tableToExcel } from '../../helper';
import reducer from './reducer';
import saga from './saga';
import makeSelectDownloadExcel from './selectors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function DownloadExcel(props) {
  useInjectReducer({ key: 'downloadExcel', reducer });
  useInjectSaga({ key: 'downloadExcel', saga });

  const { onMergeState } = props;
  const classes = useStyles();

  return (
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
  );
}

DownloadExcel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  downloadExcel: makeSelectDownloadExcel(),
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
)(DownloadExcel);
