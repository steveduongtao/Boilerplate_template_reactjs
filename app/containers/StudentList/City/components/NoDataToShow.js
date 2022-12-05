import { TableCell, TableRow } from '@material-ui/core';
import * as React from 'react';

export function NoDataToShow(props) {
  return (
    <TableRow>
      <TableCell colSpan={7} style={{ textAlign: 'center' }}>
        <em>No data to show</em>
      </TableCell>
    </TableRow>
  );
}
