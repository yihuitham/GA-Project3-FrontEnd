import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function PatientDetailsOnSelect({ selectedPatient }) {
  const data = selectedPatient;

  return (
    <>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Identification Number</TableCell>
        <TableCell>{data === null ? ' ' : data.nric}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Age</TableCell>
        <TableCell>{data === null ? ' ' : data.age}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Blood Type</TableCell>
        <TableCell>{data === null ? ' ' : data.bloodType}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Medical Allergies</TableCell>
        <TableCell>{data === null ? ' ' : data.allergy}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Medical Condition</TableCell>
        <TableCell>{data === null ? ' ' : data.medicalCondition}</TableCell>
      </TableRow>
    </>
  );
}
