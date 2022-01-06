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

export default function SurgeonsTags() {
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

  return (
    <Autocomplete
      multiple
      id='checkboxes-tags-demo'
      options={surgeons}
      disableCloseOnSelect
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

const surgeons = [
  { name: 'john', id: 123 },
  { name: 'johnny', id: 456 },
  { name: 'jon', id: 789 },
];
