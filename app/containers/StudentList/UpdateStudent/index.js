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
import { getStudent } from './actions';
import makeSelectUpdateStudent from './selectors';

export function UpdateStudent(props) {
  const { updateStudent, onGetStudent } = props;
  const { localData, localState } = updateStudent;
  useInjectReducer({ key: 'updateStudent', reducer });
  useInjectSaga({ key: 'updateStudent', saga });
  const { studentId } = useParams();
  const isEdit = Boolean(studentId);

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
