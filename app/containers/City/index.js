/**
 *
 * City
 *
 */

import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CustomSnackbar from '../HomePage/CustomSnackbar';
import { changeCloseSnackBar, getData } from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectCity from './selectors';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '&.active > div': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));

export function City(props) {
  const classes = useStyles();
  useInjectReducer({ key: 'city', reducer });
  useInjectSaga({ key: 'city', saga });
  const { city, onGetData, onChangeCloseSnackBar } = props;
  const { localData, localState } = city;
  const { changeSnackBar, loading } = localState;
  const { studentList } = localData;

  useEffect(() => {
    onGetData();
  }, []);
  console.log('localData', studentList);
  return (
    <>
      <Box className={classes.root}>
        <TableContainer>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell width="240px">ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Mark</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Ranking</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentList.map(student => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell> <TableCell />
                  <TableCell>
                    <Box fontWeight="bold">{student.mark}</Box>
                  </TableCell>
                  <TableCell />
                  <TableCell />
                  <TableCell align="right">
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => {
                        // handleRemoveClick(student);
                      }}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <CustomSnackbar
        open={changeSnackBar.open}
        variant={changeSnackBar.variant}
        message={changeSnackBar.message}
        onClose={() => onChangeCloseSnackBar()}
      />
    </>
  );
}

City.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  city: makeSelectCity(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetData: data => {
      dispatch(getData(data));
    },
    onChangeCloseSnackBar: data => {
      dispatch(changeCloseSnackBar(data));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(City);
