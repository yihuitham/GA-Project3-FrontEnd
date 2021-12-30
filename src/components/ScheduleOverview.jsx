import React, { useState, useEffect } from 'react';
import { publicFetch } from '../util/fetch';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ActionAreaCard } from './OperationRoomCard';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

export default function ScheduleOverview() {
  const [operation, setOperation] = useState([]);
  let operationRes = [];

  const [date, setDate] = useState(new Date());
  const [ddmmyy, setDDMMYY] = useState(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
  const changeDate = (newDate) => {
    setDate(newDate);
    const newDDMMYY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    setDDMMYY(newDDMMYY);
    getOperationData(newDDMMYY);
  };
  const getOperationData = async (date) => {
    // for (let i = 0; i < 8; i++) {
    //   operationRes.push([i, date]);
    //   console.log(operationRes);
    // }

    for (let i = 1; i < 9; i++) {
      try {
        const res = await publicFetch.get(`operation/${i}/${date}`);
        operationRes.push(res.data);
        console.log(res.data);
      } catch (error) {
        operationRes.push({ operatingRoom: i });
        console.log(error);
      }
    }
    setOperation(operationRes);
    console.log(operationRes);
  };
  useEffect(async () => {
    getOperationData(ddmmyy);
  }, []);
  console.log('Date', date);
  console.log('ddmmyy', ddmmyy);
  console.log('Operation Data', operation);

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        m: 2,
        maxHeight: '85vh',
        overflow: 'auto',
      }}
    >
      <Box sx={{ mt: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label='Date'
            inputFormat='dd/MM/yyyy'
            value={date}
            onChange={(newDate) => changeDate(newDate)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {operation.map((op, index) => {
          return (
            <Grid item xs={3} key={index}>
              <ActionAreaCard op={op} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}
