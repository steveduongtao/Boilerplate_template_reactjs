import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import { NoDataToShow } from './NoDataToShow';

function StudentTable(props) {
  const { studentList, onMergeState, handleEditStudent } = props;
  return (
    <TableContainer>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell width="240px">ID</TableCell>
            <TableCell width="240px">Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Ranking</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.length === 0 && <NoDataToShow />}
          {studentList.map(student => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>
                <Box fontWeight="bold">{student.mark}</Box>
              </TableCell>
              <TableCell>{student.city}</TableCell>
              <TableCell />
              <TableCell align="right">
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    handleEditStudent(student.id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => {
                    onMergeState({ open: true, selectedStudent: student });
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
  );
}

export default StudentTable;
