import React, { useContext, useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Typography } from '@mui/material';
import { FetchContext } from '../context/FetchContext';
const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function Nursestags({ selectedNurses, setSelectedNurses }) {
  const fetchContext = useContext(FetchContext);
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchContext.authAxios.get(`staff/nurses`);
        const nurses = res.data.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        setNurses(nurses);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleChange = (values) => {
    const IDs = values.map((value) => {
      return value._id;
    });
    console.log(IDs);
    setSelectedNurses(IDs);
  };

  // console.log('selected nurses', selectedNurses);

  return (
    <Autocomplete
      multiple
      id='checkboxes-tags-demo'
      options={nurses}
      disableCloseOnSelect
      autoHighlight
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
