import React from 'react';
import {
  Box,
  TextField,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Paper,
  TableBody,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

export default function ViewOperation({ operationData }) {
  const data = operationData;

  return (
    <Paper
      sx={{
        maxHeight: '80vh',
        overflow: 'auto',
        maxWidth: '76vw',
        display: 'flex',
        flex: 1,
        m: 0,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
      elevation={0}
    >
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
            <TableRow>
              <TableCell
                sx={{ color: '#4682B4', fontWeight: '600' }}
                align='center'
              >
                Patient Details
              </TableCell>
              <TableCell align='left'>Name </TableCell>
              <TableCell align='left'>
                {data === null ? ' ' : data.name}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell align='left'>Identification Number</TableCell>
              <TableCell align='left'>
                {data === null ? ' ' : data.nric}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell align='left'>Age</TableCell>
              <TableCell align='left'>
                {data === null ? ' ' : data.age}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell align='left'>Blood Type</TableCell>
              <TableCell align='left'>
                {data === null ? ' ' : data.bloodType}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell align='left'>Medical Allergies</TableCell>
              <TableCell align='left'>
                {data === null ? ' ' : data.allergy}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell align='left'>Medical Condition</TableCell>
              <TableCell align='left'>
                {data === null ? ' ' : data.medicalCondition}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
