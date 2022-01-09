import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function ViewOperation({ operationData }) {
  const data = operationData;

  const nursesList = [];
  for (let i = 0; i < data.nursesID.length; i++) {
    nursesList.push(data.nursesID[i].name);
  }
  const nurses = nursesList.join(', ');

  const surgeonsList = [];
  for (let i = 0; i < data.surgeonID.length; i++) {
    surgeonsList.push(data.surgeonID[i].name);
  }
  const surgeons = surgeonsList.join(', ');

  return (
    <>
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
        <TableCell>{data === null ? ' ' : data.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Operation Time </TableCell>
        <TableCell>{data === null ? ' ' : data.time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Operation Description </TableCell>
        <TableCell>{data === null ? ' ' : data.operation}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Surgeon </TableCell>
        <TableCell>{data === null ? ' ' : surgeons}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align='center'> </TableCell>
        <TableCell>Nurses </TableCell>
        <TableCell>{data === null ? ' ' : nurses}</TableCell>
      </TableRow>
    </>
  );
}
