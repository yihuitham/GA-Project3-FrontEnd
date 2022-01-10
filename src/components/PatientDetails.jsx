import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

export default function PatientDetails(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setData(props.operationData.data.patientID);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
    console.log('patient data', data);
  }, [props]);

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
            <TableCell align='center'> Patient Details </TableCell>
            <TableCell align='left'>Name</TableCell>
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
            <TableCell align='left'>{data === null ? ' ' : data.age}</TableCell>
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
        </Table>
      </TableContainer>
    </Paper>
  );
}
