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
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function OperationDetails() {
  return (
    <Paper
      sx={{
        maxHeight: '80vh',
        overflow: 'auto',
        maxWidth: '76vw',
        display: 'flex',
        flex: 1,
        m: 1,
      }}
    >
      <TableContainer>
        <Table
          stickyHeader
          aria-label='view table'
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
            },
          }}
        >
          <TableRow>
            <TableCell align='center'> Operation Details </TableCell>
            <TableCell align='left'>Operation Theatre </TableCell>
            <TableCell align='left'> 1 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Date </TableCell>
            <TableCell align='left'> 5 January 2022 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Time </TableCell>
            <TableCell align='left'> 14:00 </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Description </TableCell>
            <TableCell align='left'> Heart Surgery </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Surgeon </TableCell>
            <TableCell align='left'> Wei Lun </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Nurses </TableCell>
            <TableCell align='left'> Siew La </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Paper>
  );
}
