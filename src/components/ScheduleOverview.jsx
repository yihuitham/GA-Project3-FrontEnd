import React, { useState, useEffect } from 'react';
import { publicFetch } from '../util/fetch';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function ScheduleOverview() {
  const [scheduleData, setScheduleData] = useState([]);
  const [OR1, setOR1] = useState({});
  const [OR2, setOR2] = useState({});
  const [OR3, setOR3] = useState({});
  const [OR4, setOR4] = useState({});
  const [OR5, setOR5] = useState({});
  const [date, setDate] = useState(new Date());
  const [ddmmyy, setDDMMYY] = useState(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
  const testDate = (newDate) => {
    setDate(newDate);
    const newDDMMYY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    setDDMMYY(newDDMMYY);
    const OR1Data = async () => {
      try {
        const response = await publicFetch.get(`operation/1/${newDDMMYY}`);
        setOR1(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    OR1Data();
  };
  useEffect(async () => {
    const OR1Data = async () => {
      try {
        const response = await publicFetch.get(`operation/1/${ddmmyy}`);
        setOR1(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    OR1Data();
  }, [ddmmyy]);
  console.log('Date', date);
  console.log('ddmmyy', ddmmyy);
  console.log('Operation Room 1', OR1);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label='Date'
          inputFormat='dd/MM/yyyy'
          value={date}
          onChange={(newDate) => testDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Typography>
        {Object.keys(OR1).length === 0 ? '-' : OR1.surgeonID.name}
      </Typography>
    </>
  );
}
