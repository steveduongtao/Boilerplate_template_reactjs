/**
 * Print thì content cần in có thể set display: none vẫn có thể get id để print
 *
 */

import { Button, makeStyles, Tooltip } from '@material-ui/core';
import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import TabIcon from '@material-ui/icons/Tab';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function PrintSameTab() {
  const classes = useStyles();

  function printDiv() {
    window.frames[
      'print_frame'
    ].document.body.innerHTML = document.getElementById(
      'printableTable',
    ).innerHTML;
    window.frames['print_frame'].window.focus();
    window.frames['print_frame'].window.print();
  }
  return (
    <>
      <Tooltip title="Print in the current tab" placement="start-top">
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
        frameborder="0"
        src="about:blank"
      />
    </>
  );
}

export default PrintSameTab;
