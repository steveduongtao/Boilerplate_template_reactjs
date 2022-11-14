/**
 *
 * PrintCurrentTab
 *
 */

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import TabIcon from '@material-ui/icons/Tab';
import PropTypes from 'prop-types';
import { default as React, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectPrintCurrentTab from './selectors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function PrintCurrentTab() {
  useInjectReducer({ key: 'printCurrentTab', reducer });
  useInjectSaga({ key: 'printCurrentTab', saga });
  const classes = useStyles();

  function printDiv() {
    window.frames.print_frame.document.body.innerHTML = document.getElementById(
      'printableTable',
    ).innerHTML;
    window.frames.print_frame.window.focus();
    window.frames.print_frame.window.print();
  }

  return (
    <>
      <Tooltip title="PrintCurrentTab" placement="start-top">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={async () => {
            printDiv();
          }}
        >
          <TabIcon fontSize="large" />
        </Button>
      </Tooltip>
      <div id="printableTable" style={{ display: 'none' }}>
        <table>
          <thead>
            <tr>
              <td>Thing</td>
              <td>Chairs</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>blue</td>
            </tr>
            <tr>
              <td>2</td>
              <td>green</td>
            </tr>
          </tbody>
        </table>
      </div>
      <iframe
        name="print_frame"
        width="0"
        height="0"
        frameBorder="0"
        src="about:blank"
      />
    </>
  );
}

PrintCurrentTab.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  printCurrentTab: makeSelectPrintCurrentTab(),
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
)(PrintCurrentTab);
