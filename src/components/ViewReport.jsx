import React, { useState, useEffect, useContext } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FetchContext } from '../context/FetchContext';

export default function FormPropsTextFields({ operationData }) {
  const data = operationData;
  const fetchContext = useContext(FetchContext);

  const [read, setRead] = useState(true);
  const [input, setInput] = useState('');
  const [report, setReport] = useState('');

  const handleClick = () => {
    if (read) {
      setRead(false);
    } else {
      setRead(true);
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
    <TableRow>
      <TableCell
        sx={{ color: '#4682B4', fontWeight: '600', verticalAlign: 'top' }}
      >
        Post Operation Report
      </TableCell>
      <TableCell colSpan={2}>
        <Box
          component='form'
          sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}
          noValidate
          autoComplete='off'
        >
          <TextField
            disabled={read}
            id='input'
            multiline
            maxRows={4}
            defaultValue={data.postOpReport}
            variant='outlined'
            onChange={(e) => setInput(e.target.value)}
          />

          {read ? (
            <Button onClick={handleClick} variant='contained'>
              Edit
            </Button>
          ) : (
            <Button onClick={handleClick} variant='contained'>
              Save
            </Button>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}
