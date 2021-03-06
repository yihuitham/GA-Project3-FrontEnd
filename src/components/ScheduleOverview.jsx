import React, { useContext, useState, useEffect } from 'react';
import { FetchContext } from '../context/FetchContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { OperationRoomCard } from './OperationRoomCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function ScheduleOverview() {
  let operationRes = [];
  const fetchContext = useContext(FetchContext);
  const [refresh, setRefresh] = useState(true);
  const [operation, setOperation] = useState([]);
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
    for (let i = 1; i < 9; i++) {
      try {
        const res = await fetchContext.authAxios.get(`operation/${i}/${date}`);
        operationRes.push(res.data);
      } catch (error) {
        operationRes.push({ operatingRoom: i });
        console.log(error);
      }
    }
    setOperation(operationRes);
  };

  useEffect(() => {
    getOperationData(ddmmyy);
  }, [refresh]);

  // console.log('Date', date);
  // console.log('ddmmyy', ddmmyy);
  // console.log('Operation Data', operation);

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        m: 2,
        maxHeight: '80vh',
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
              <OperationRoomCard
                op={op}
                date={ddmmyy}
                setRefresh={setRefresh}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}
