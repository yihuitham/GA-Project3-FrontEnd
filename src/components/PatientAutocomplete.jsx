import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { publicFetch } from '../util/fetch';

export default function PatientAutocomplete({ setPatient }) {
  const [patients, setPatients] = useState([]);

  useEffect(async () => {
    const getData = async () => {
      try {
        const response = await publicFetch.get(`patient/all`);
        setPatients(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <Autocomplete
      options={patients}
      getOptionLabel={(option) => option.name}
      id='auto-complete'
      autoComplete
      onChange={(e, value) => {
        setPatient(value);
      }}
      renderInput={(params) => (
        <TextField {...params} variant='standard' style={{ width: 350 }} />
      )}
    />
  );
}
