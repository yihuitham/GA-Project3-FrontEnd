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
} from '@mui/material';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';

export default function ViewOperation({ operationData }) {
  const data = operationData;

  const nursesList = [];
  for (let i = 0; i < data.nursesID.length; i++) {
    nursesList.push(data.nursesID[i].name);
  }
  const nurses = nursesList.join(', ');

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
          <TableRow>
            <TableCell
              sx={{ color: '#4682B4', fontWeight: '600' }}
              align='center'
            >
              Operation Details
            </TableCell>
            <TableCell align='left'>Operation Theatre </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.operatingRoom}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Date </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.date}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Time </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.time}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Description </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.operation}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Surgeon </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.surgeonID.name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Nurses </TableCell>
            <TableCell align='left'>{data === null ? ' ' : nurses}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Fab
        size='medium'
        aria-label='edit'
        sx={{ position: 'absolute', bottom: 0, right: 0, m: 2 }}
      >
        <EditIcon />
      </Fab>
    </Paper>
  );
}
