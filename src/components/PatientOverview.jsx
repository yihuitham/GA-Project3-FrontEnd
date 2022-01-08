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
import { FetchContext } from '../context/FetchContext';

export default function PatientOverview() {
  const [patientData, setPatientData] = useState([]);
  const fetchContext = useContext(FetchContext);

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
  }, []);
  console.log('Patient', patientData);

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
