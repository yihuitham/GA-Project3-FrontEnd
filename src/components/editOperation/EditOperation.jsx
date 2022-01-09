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
import PatientDetailsOnSelect from '../PatientDetailsOnSelect';
import { FetchContext } from '../../context/FetchContext';

export default function EditOperation({
  operationData,
  handleClose,
  currentID,
  closeViewSchedule,
}) {
  const data = operationData;
  console.log(data);
  const fetchContext = useContext(FetchContext);
  const [selectedSurgeons, setSelectedSurgeons] = useState(data.surgeonID);
  const [selectedNurses, setSelectedNurses] = useState(data.nursesID);
  const [selectedPatient, setSelectedPatient] = useState(data.patientID);
  const [time, setTime] = useState(data.time);
  const [operationName, setOperationName] = useState(data.operation);
  const [postOpReport, setPostOpReport] = useState(data.postOpReport);

  const editOperation = async () => {
    try {
      const response = await fetchContext.authAxios.put(
        `/operation/${currentID}`,
        {
          operatingRoom: data.operatingRoom,
          operation: operationName,
          surgeonID: selectedSurgeons,
          nursesID: selectedNurses,
          patientID: selectedPatient._id,
          date: data.date,
          time: time,
          postOpReport: postOpReport,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    editOperation();
    handleClose();
    closeViewSchedule();
    console.log(selectedSurgeons);
  };
  console.log(postOpReport);

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
              <TableCell>{data.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>{`Operation Time (24hr format)`} </TableCell>
              <TableCell>
                <TimePicker24hr
                  setTime={setTime}
                  date={data.date}
                  time={time}
                />
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
                  value={data.operation}
                  sx={{ width: 350 }}
                  onChange={(e) => {
                    setOperationName(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Surgeon </TableCell>
              <TableCell>
                <SurgeonsTags
                  setSelectedSurgeons={setSelectedSurgeons}
                  currentSurgeons={data.surgeonID}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Nurses </TableCell>
              <TableCell>
                <Nursestags
                  setSelectedNurses={setSelectedNurses}
                  currentNurses={data.nursesID}
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
              <TableCell colSpan={2}>
                <TextField
                  size='small'
                  sx={{ display: 'flex', mb: 7 }}
                  id='input'
                  multiline
                  rows={4}
                  maxRows={4}
                  defaultValue={data.postOpReport}
                  variant='outlined'
                  onChange={(e) => setPostOpReport(e.target.value)}
                />
              </TableCell>
            </TableRow>
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
