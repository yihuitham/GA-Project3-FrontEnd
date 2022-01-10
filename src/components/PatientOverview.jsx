import axios from 'axios';
import { publicFetch } from './../util/fetch';
import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { FetchContext } from '../context/FetchContext';
import NewPatient from '../components/NewPatient';

export default function PatientOverview() {
  const [patientData, setPatientData] = useState([]);
  const fetchContext = useContext(FetchContext);
  const [openNewModal, setOpenNewModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  };

  const handleNewOpen = () => {
    setOpenNewModal(true);
    handleRefresh();
  };

  const handleNewClose = () => {
    setOpenNewModal(false);
    handleRefresh();
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '76vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 2,
  };

  useEffect(async () => {
    const getPatientData = async () => {
      try {
        const response = await fetchContext.authAxios.get(`patient/all`);
        setPatientData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPatientData();
  }, [refresh]);
  console.log('refresh', refresh);

  return (
    <Paper
      sx={{
        maxHeight: '80vh',
        overflow: 'auto',
        display: 'flex',
        flex: 1,
        m: 2,
      }}
    >
      <Modal
        open={openNewModal}
        onClose={handleNewClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <NewPatient
            handleNewClose={handleNewClose}
            handleRefresh={handleRefresh}
          />
        </Box>
      </Modal>
      <Button
        variant='outlined'
        onClick={(event) => {
          handleNewOpen();
        }}
      >
        New
      </Button>
      <TableContainer>
        <Table stickyHeader aria-label='patient table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>NRIC</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Gender
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Age
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Blood Type
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>
                Medical Condition
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientData.map((patient) => (
              <TableRow
                hover
                onClick={(event) => console.log(patient._id)}
                key={patient.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {patient.name}
                </TableCell>
                <TableCell>{patient.nric}</TableCell>
                <TableCell align='center'>{patient.gender}</TableCell>
                <TableCell align='center'>{patient.age}</TableCell>
                <TableCell align='center'>{patient.bloodType}</TableCell>
                <TableCell>{patient.medicalCondition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
