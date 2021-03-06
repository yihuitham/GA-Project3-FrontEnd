import React, { useContext, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FetchContext } from '../context/FetchContext';

export default function PatientAutocomplete({ setSelectedPatient }) {
  const fetchContext = useContext(FetchContext);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchContext.authAxios.get(`patient/all`);
        const patients = response.data.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        setPatients(patients);
        // console.log(response.data);
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
      autoHighlight
      onChange={(e, value) => {
        setSelectedPatient(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='standard'
          style={{ width: 350 }}
          inputProps={{ ...params.inputProps, style: { fontSize: '0.875rem' } }}
        />
      )}
    />
  );
}
