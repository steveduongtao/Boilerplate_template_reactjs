/**
 *
 * UpdateStudent
 *
 */

import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { defaultAction, getStudent, mergeData, mergeState } from './actions';
import makeSelectUpdateStudent from './selectors';
import { useEffect } from 'react';

export function UpdateStudent(props) {
  useInjectReducer({ key: 'updateStudent', reducer });
  useInjectSaga({ key: 'updateStudent', saga });
  const { updateStudent, onGetStudent } = props;
  const { localData, localState } = updateStudent;
  const { studentId } = useParams();
  const isEdit = Boolean(studentId);

  useEffect(() => {
    if (!studentId) return;
    onGetStudent(studentId);
  }, [studentId]);

  console.log('localData_', localData);

  return (
    <Box>
      <Link to="/city">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to student list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update student info' : 'Add new student'}</Typography>
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
