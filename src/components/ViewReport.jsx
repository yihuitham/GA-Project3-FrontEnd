import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormPropsTextFields({ operationData }) {
  const data = operationData;

  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    if (button) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      {button ? (
        <div>
          <TextField
            id='filled-read-only-input'
            label=''
            multiline
            maxRows={4}
            defaultValue={data}
            InputProps={{
              readOnly: true,
            }}
            variant='filled'
          />
        </div>
      ) : (
        <div>
          <TextField
            id='filled-read-only-input'
            label=''
            multiline
            maxRows={4}
            defaultValue={data}
            InputProps={{
              readOnly: false,
            }}
            variant='filled'
          />
        </div>
      )}

      {button ? (
        <Button onClick={handleClick} variant='contained'>
          Edit
        </Button>
      ) : (
        <Button onClick={handleClick} variant='contained'>
          Save
        </Button>
      )}
    </Box>
  );
}
