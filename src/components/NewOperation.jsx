import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';
import TimePicker24hr from './TimePicker24hr';
import Nursestags from './NursesTags';
import SurgeonsTags from './SurgeonsTags';
import PatientAutocomplete from './PatientAutocomplete';
import PatientDetailsOnSelect from './PatientDetailsOnSelect';
import { FetchContext } from '../context/FetchContext';
import { Typography } from '@mui/material';

export default function NewOperation({ operationData, date, handleClose }) {
  const data = operationData;
  console.log(operationData);
  // const fetchContext = useContext(FetchContext);
  const [selectedSurgeons, setSelectedSurgeons] = useState([]);
  const [selectedNurses, setSelectedNurses] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [operationName, setOperationName] = useState(null);

  // const createNewOperation = async () => {
  //   try {
  //     const response = await fetchContext.authAxios.post('/operation', {
  //       operatingRoom: data.operatingRoom,
  //       operation: operationName,
  //       surgeonID: selectedSurgeons,
  //       nursesID: selectedNurses,
  //       patientID: selectedPatient._id,
  //       date: date,
  //       time: selectedTime,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = () => {
    // createNewOperation();
    handleClose();
  };

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
              <TableCell>{`Operation Time (24hr format)`} </TableCell>
              <TableCell>
                <TimePicker24hr setSelectedTime={setSelectedTime} date={date} />
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
                  onChange={(e) => {
                    setOperationName(e.target.value);
                    // console.log(operationName);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Surgeon </TableCell>
              <TableCell>
                <SurgeonsTags
                  selectedSurgeons={selectedSurgeons}
                  setSelectedSurgeons={setSelectedSurgeons}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Nurses </TableCell>
              <TableCell>
                <Nursestags
                  selectedNurses={selectedNurses}
                  setSelectedNurses={setSelectedNurses}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: '#4682B4', fontWeight: '600' }}>
                Patient Details
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>
                <PatientAutocomplete
                  selectedPatient={selectedPatient}
                  setSelectedPatient={setSelectedPatient}
                />
              </TableCell>
            </TableRow>
            <PatientDetailsOnSelect selectedPatient={selectedPatient} />
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        size='medium'
        aria-label='edit'
        onClick={handleSubmit}
        sx={{ position: 'absolute', bottom: 0, right: 0, m: 2 }}
      >
        <SaveIcon fontSize='medium' />
      </Fab>
    </Paper>
  );
}
