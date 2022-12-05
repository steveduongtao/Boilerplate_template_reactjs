/**
 *
 * City
 *
 */

import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CustomSnackbar from '../../HomePage/CustomSnackbar';
import { changeCloseSnackBar, getCityList, getList, getListWidthDebounce, mergeData, mergeState, remove } from './actions';
import LinearBuffer from './components/LinearBuffer';
import RemoveDialog from './components/RemoveDialog';
import StudentFilter from './components/StudentFilter';
import StudentTable from './components/StudentTable';
import reducer from './reducer';
import saga from './saga';
import makeSelectCity from './selectors';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  titleContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  loading: {
    position: 'absolute',
    top: '-8px',
    width: '100%',
  },
}));

export function City(props) {
  useInjectReducer({ key: 'city', reducer });
  useInjectSaga({ key: 'city', saga });

  const classes = useStyles();

  const { city, onMergeState, onMergeData, onGetList, onGetListWidthDebounce, onGetCityList, onRemove, onChangeCloseSnackBar } = props;
  const { localData, localState } = city;
  const { changeSnackBar, filter, pagination, loading } = localState;
  const { studentList, cityList } = localData;
  console.log('filter_', filter);

  useEffect(() => {
    console.log('inuseeffect', filter);
    onGetList(filter);
    onGetCityList();
  }, []);
  const handleSearchChange = newFilter => {
    onGetListWidthDebounce(newFilter);
  };
  const handleFilterChange = newFilter => {
    onGetList(newFilter);
  };
  const handlePageChange = (e, page) => {
    onGetList({ ...filter, _page: page });
  };
  const handleRemove = id => {
    onMergeState({ open: false });
    const cb = () => {
      onGetList(filter);
    };
    onRemove({ id, cb });
  };
  const handleEditStudent = studentId => {
    // history.push(`${match.url}/${studentId}`);
    history.push(`admin/students/${studentId}`);
  };
  const history = useHistory();
  const match = useRouteMatch();
  console.log('match', match);
  console.log('history', history);
  console.log('localState', localState);
  console.log('localData', localData);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.titleContainer}>
          <Typography variant="h4">Students</Typography>
          <Link to="/admin/students/add" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Add new student
            </Button>
          </Link>
        </Box>
        <StudentFilter cityList={cityList} filter={filter} onSearchChange={handleSearchChange} onChange={handleFilterChange} />
        {loading && <LinearBuffer className={classes.loading} />}
        <StudentTable studentList={studentList} onMergeState={onMergeState} handleEditStudent={handleEditStudent} />
        <Box my={2} display="flex" justifyContent="center">
          <Pagination
            color="primary"
            page={pagination._page}
            count={Math.ceil(pagination._totalRows / pagination._limit)}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
      {/*Remove Dialog */}
      <RemoveDialog
        open={localState.open}
        onMergeState={onMergeState}
        onRemove={handleRemove}
        selectedStudent={localState.selectedStudent}
        filter={filter}
      />
      <CustomSnackbar open={changeSnackBar.open} variant={changeSnackBar.variant} message={changeSnackBar.message} onClose={onChangeCloseSnackBar} />
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
    onMergeState: data => {
      dispatch(mergeState(data));
    },
    onMergeData: data => {
      dispatch(mergeData(data));
    },
    onGetList: data => {
      dispatch(getList(data));
    },
    onGetListWidthDebounce: data => {
      dispatch(getListWidthDebounce(data));
    },
    onGetCityList: data => {
      dispatch(getCityList(data));
    },
    onRemove: data => {
      dispatch(remove(data));
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
