import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function WarningModal({ response, handleDeleteSubmit }) {
  const handleSubmit = () => {
    handleDeleteSubmit();
  };

  return (
    <>
      <Typography sx={{ textAlign: 'center', mb: 2 }}>
        Are you sure you want to delete this record?
      </Typography>
      <Box textAlign='center'>
        <Button variant='outlined' onClick={handleSubmit}>
          Confirm
        </Button>
      </Box>
    </>
  );
}
