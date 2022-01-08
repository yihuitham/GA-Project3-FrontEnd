import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FetchContext } from '../context/FetchContext';

export default function FormPropsTextFields({ operationData }) {
  const data = operationData;
  const fetchContext = useContext(FetchContext);

  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);
  const [button, setButton] = useState(true);
  const [input, setInput] = useState('');
  const [report, setReport] = useState('');

  const handleClick = () => {
    if (button) {
      setButton(false);
    } else {
      setButton(true);
      updateReportAPI();
    }
  };

  const updateReportAPI = async () => {
    try {
      const response = await fetchContext.authAxios.patch(
        `operation/updateReport/${data.operatingRoom}/${data.date}`,
        { report }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setReport(input);
  }, [input]);

  console.log(report);
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
            id='read'
            label=''
            multiline
            maxRows={4}
            defaultValue={data.postOpReport}
            InputProps={{
              readOnly: true,
            }}
            variant='filled'
          />
        </div>
      ) : (
        <div>
          <TextField
            id='input'
            label=''
            multiline
            maxRows={4}
            defaultValue={data.postOpReport}
            InputProps={{
              readOnly: false,
            }}
            variant='filled'
            onChange={(e) => setInput(e.target.value)}
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
