import axios from 'axios';
import { publicFetch } from './../util/fetch';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';

// get patient data with axios
// const getPatientData = async () => {
//   try {
//     const response = await publicFetch.get(`api/patient/all`);
//     patientData = await response.data;
//     console.log(patientData);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default function PatientOverview() {
  const [patientData, setpatientData] = useState([]);
  useEffect(async () => {
    const getPatientData = async () => {
      try {
        const response = await publicFetch.get(`api/patient/all`);
        setpatientData(response.data);
        console.log(patientData);
      } catch (error) {
        console.log(error);
      }
    };
    getPatientData();
  }, []);
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
        <Table stickyHeader aria-label='patient table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>NRIC</TableCell>
              <TableCell align='center'>Gender</TableCell>
              <TableCell align='center'>Age</TableCell>
              <TableCell align='center'>Blood Type</TableCell>
              <TableCell>Medical Condition</TableCell>
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
