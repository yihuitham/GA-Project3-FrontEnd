import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ResponseModal({
  response,
  handleResponseClose,
  handleRefresh,
}) {
  const handleSubmit = () => {
    handleResponseClose();
    handleRefresh();
  };

  return (
    <>
      <Typography sx={{ textAlign: 'center', mb: 2 }}>{response}</Typography>{' '}
      <Box textAlign='center'>
        <Button variant='outlined' onClick={handleSubmit}>
          Ok
        </Button>{' '}
      </Box>
    </>
  );
}
