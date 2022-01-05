import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

export default function TimePicker24hr() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        disableOpenPicker
        ampm={false}
        inputFormat='HH:mm'
        mask='__:__'
        label='24hr format'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        sx={{ p: 0 }}
      />
    </LocalizationProvider>
  );
}
