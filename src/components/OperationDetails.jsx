import React, { useState, useEffect } from 'react';
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
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function OperationDetails(props) {
  const [data, setData] = useState(null);
  const [nurses, setNurses] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setData(props.operationData.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getNurses = async () => {
      try {
        const nursesList = [];
        for (let i = 0; i < data.nursesID.length; i++) {
          nursesList.push(data.nursesID[i].name);
        }
        const nurses = nursesList.join();
        setNurses(nurses);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
    getNurses();
  }, [props]);

  console.log('operationData', data);

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
            <TableCell align='center'> Operation Details </TableCell>
            <TableCell align='left'>Operation Theatre </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.operatingRoom}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Date </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.date}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Time </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.time}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Operation Description </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.operation}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Surgeon </TableCell>
            <TableCell align='left'>
              {data === null ? ' ' : data.surgeonID.name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'> </TableCell>
            <TableCell align='left'>Nurses </TableCell>
            <TableCell align='left'>{data === null ? ' ' : nurses}</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </Paper>
  );
}
