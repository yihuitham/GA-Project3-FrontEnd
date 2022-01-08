import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

export default function TimePicker24hr({ setTime }) {
  const [value, setValue] = useState(null);
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
          setTime(newValue.getTime());
        }}
        renderInput={(params) => (
          <TextField {...params} variant='standard' sx={{ width: 43 }} />
        )}
      />
    </LocalizationProvider>
  );
}
