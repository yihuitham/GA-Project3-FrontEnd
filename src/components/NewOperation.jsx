import React, { useState } from 'react';
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
import Nursestags from './NursesTags';
import SurgeonsTags from './SurgeonsTags';
import PatientAutocomplete from './PatientAutocomplete';
import PatientDetailsOnSelect from './PatientDetailsOnSelect';

export default function NewOperation({ operationData, date }) {
  const data = operationData;
  const [patient, setPatient] = useState({});
  console.log('setPatient', patient);
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
            <TableCell sx={{ color: '#4682B4', fontWeight: '600' }}>
              Operation Details
            </TableCell>
            <TableCell>Operation Theatre </TableCell>
            <TableCell>{data === null ? ' ' : data.operatingRoom}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell>Operation Date </TableCell>
            <TableCell>{date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell>{`Operation Time (24hr)`} </TableCell>
            <TableCell>
              <TimePicker24hr />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell>Operation Description </TableCell>
            <TableCell>
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                size='small'
                variant='standard'
                sx={{ width: 350 }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell>Surgeon </TableCell>
            <TableCell>
              <SurgeonsTags />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell>Nurses </TableCell>
            <TableCell>
              <Nursestags />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: '#4682B4', fontWeight: '600' }}>
              Patient Details
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>
              <PatientAutocomplete setPatient={setPatient} />
            </TableCell>
          </TableRow>
          <PatientDetailsOnSelect patient={patient} />
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
