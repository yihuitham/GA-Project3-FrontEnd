import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

export default function TimePicker24hr() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <TimePicker
        inputProps={{ style: { fontSize: 14, m: 0 } }}
        disableOpenPicker
        ampm={false}
        inputFormat='HH:mm'
        mask='__:__'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} variant='standard' sx={{ width: 43 }} />
        )}
      />
    </LocalizationProvider>
  );
}
