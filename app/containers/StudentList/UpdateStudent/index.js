/**
 *
 * UpdateStudent
 *
 */

import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import StudentForm from '../City/components/StudentForm';
import {
  defaultAction,
  getStudent,
  addStudent,
  updateStudent,
  getCityList,
  mergeData,
  mergeState,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import makeSelectUpdateStudent from './selectors';
import makeSelectCity, { selectCityDomain } from '../City/selectors';

export function UpdateStudent(props) {
  useInjectReducer({ key: 'updateStudent', reducer });
  useInjectSaga({ key: 'updateStudent', saga });
  const {
    updateStudent,
    onDefaultAction,
    onGetStudent,
    onGetCityList,
    onUpdateStudent,
    onAddStudent,
    onMergeData,
    onMergeState,
    location,
  } = props;
  const { localData, localState } = updateStudent;
  const { studentId } = useParams();
  const isEdit = Boolean(studentId);

  useEffect(() => {
    if (!studentId) return;
    onGetStudent(studentId);
    return () => {
      onDefaultAction();
    };
  }, [studentId]);
  useEffect(() => {
    onGetCityList();
  }, []);

  const handleStudentFormSubmit = async formValues => {
    // if(isEdit) {
    //   await onUpdateStudent(formValues)
    // }

    console.log('formValues', formValues);
  };
  // const cityOptions = useSelector(makeSelectCity);
  const cityOptions = makeSelectCity;
  console.log('localData_', localData);
  console.log('selectCityDomain', cityOptions());
  console.log('location', location);

  return (
    <Box>
      <Link to="/city">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to student list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update student info' : 'Add new student'}</Typography>
      {(!isEdit || Boolean(localData.createdAt)) && (
        <Box mt={3}>
          <StudentForm localData={localData} onSubmit={handleStudentFormSubmit} />
        </Box>
      )}
    </Box>
  );
}

UpdateStudent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  updateStudent: makeSelectUpdateStudent(),
});

function mapDispatchToProps(dispatch) {
  return {
    onDefaultAction: data => {
      dispatch(defaultAction(data));
    },
    onMergeState: data => {
      dispatch(mergeState(data));
    },
    onMergeData: data => {
      dispatch(mergeData(data));
    },
    onGetStudent: data => {
      dispatch(getStudent(data));
    },
    onGetCityList: data => {
      dispatch(getCityList(data));
    },
    onAddStudent: data => {
      dispatch(addStudent(data));
    },
    onUpdateStudent: data => {
      dispatch(updateStudent(data));
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
)(UpdateStudent);
