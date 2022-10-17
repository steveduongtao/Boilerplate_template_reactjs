import { makeStyles, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
function CustomSnackbar(props) {
  const { open, onClose, variant, message } = props;
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          onClose();
        }}
      >
        <Alert onClose={() => onClose()} severity={variant}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomSnackbar;
