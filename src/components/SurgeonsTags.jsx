import React, { useContext, useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchContext } from '../context/FetchContext';
import { Typography } from '@mui/material';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function SurgeonsTags({
  selectedSurgeons,
  setSelectedSurgeons,
}) {
  const fetchContext = useContext(FetchContext);
  const [surgeons, setSurgeons] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchContext.authAxios.get(`staff/surgeons`);
        const surgeons = res.data.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        setSurgeons(surgeons);
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
    setSelectedSurgeons(IDs);
  };

  // console.log('selected surgeons', selectedSurgeons);

  return (
    <Autocomplete
      multiple
      id='checkboxes-tags-demo'
      options={surgeons}
      disableCloseOnSelect
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => handleChange(value)}
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
