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
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';
import TimePicker24hr from './TimePicker24hr';

export default function NewOperation({ operationData, date }) {
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
            <TableCell align='left'>{date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Time </TableCell>
            <TableCell align='left'>
              <Box sx={{ mt: 1 }}>
                <TimePicker24hr />
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Description </TableCell>
            <TableCell align='left'>
              <TextField size='small' variant='outlined' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Surgeon </TableCell>
            <TableCell align='left'>
              {' '}
              <TextField size='small' variant='outlined' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Nurses </TableCell>
            <TableCell align='left'>
              {' '}
              <TextField size='small' variant='outlined' />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Fab
        size='medium'
        aria-label='edit'
        sx={{ position: 'absolute', bottom: 0, right: 0, m: 2 }}
      >
        <SaveIcon fontSize='medium' />
      </Fab>
    </Paper>
  );
}
