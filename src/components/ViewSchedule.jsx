import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import ViewOperation from '../components/ViewOperation';
import ViewPatient from '../components/ViewPatient';

export default function ViewSchedule({ operationData }) {
  return (
    <>
      <TableContainer>
        <Table
          stickyHeader
          aria-label='view table'
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
              p: 0.8,
            },
          }}
        >
          <TableBody>
            <ViewOperation operationData={operationData} />

            <ViewPatient operationData={operationData.patientID} />

            <TableRow>
              <TableCell
                sx={{
                  color: '#4682B4',
                  fontWeight: '600',
                  verticalAlign: 'top',
                }}
              >
                Post Operation Report
              </TableCell>
              <TableCell colSpan={2}>{operationData.postOpReport}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        size='medium'
        aria-label='edit'
        sx={{ position: 'absolute', bottom: 0, right: 0, m: 2 }}
      >
        <EditIcon />
      </Fab>
    </>
  );
}
