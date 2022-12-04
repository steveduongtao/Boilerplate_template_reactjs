import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';

function RemoveDialog(props) {
  const { selectedStudent, open, onMergeState, onRemove } = props;
  function handleClose() {
    onMergeState({ open: false });
  }
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">Remove a student?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure to remove student name "<b>{selectedStudent && selectedStudent.name}</b>".
          <br /> This action can't be undo.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={() => onRemove(selectedStudent.id)} autoFocus color="secondary" variant="contained">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RemoveDialog;
