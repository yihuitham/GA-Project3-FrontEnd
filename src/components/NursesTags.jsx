import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { publicFetch } from '../util/fetch';
import { Typography } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const handleChange = (values) => {};

export default function Nursestags() {
  //   const [nurses, setNurses] = useState([]);
  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const res = await publicFetch.get(`staff/nurses`);
  //         setNurses(res.data);
  //         console.log(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getData();
  //   }, []);

  const handleChange = (values) => {
    const IDs = values.map((value) => {
      return value.id;
    });
    console.log(IDs);
  };

  return (
    <Autocomplete
      multiple
      id='checkboxes-tags-demo'
      options={nurses}
      disableCloseOnSelect
      onChange={(event, value) => handleChange(value)}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props} style={{ fontSize: 14 }}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 350 }}
      renderInput={(params) => <TextField {...params} variant='standard' />}
    />
  );
}

const nurses = [
  { name: 'lea', id: 123 },
  { name: 'siewla', id: 456 },
  { name: 'arianne', id: 789 },
];
