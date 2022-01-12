import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

const { format } = require('date-fns');

export default function TimePicker24hr({ setSelectedTime }) {
  const value = null;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        inputProps={{ style: { fontSize: 14, m: 0 } }}
        disableOpenPicker
        ampm={false}
        inputFormat='HH:mm'
        mask='__:__'
        value={value}
        onChange={(newValue) => {
          if (newValue === 'Invalid Date') {
            console.log('wrong format');
          } else {
            const newTime = format(new Date(newValue), 'hh:mm');
            setSelectedTime(newTime);
            console.log(newTime);
          }
        }}
        renderInput={(params) => (
          <TextField {...params} variant='standard' sx={{ width: 43 }} />
        )}
      />
    </LocalizationProvider>
  );
}
