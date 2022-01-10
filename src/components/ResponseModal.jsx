import React from 'react';
import Paper from '@mui/material/Paper';
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
    <Paper
      sx={{
        maxHeight: '80vh',
        overflow: 'auto',
        maxWidth: '76vw',
        display: 'flex',
        flex: 1,
        m: 0,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
      elevation={0}
    >
      <Typography>{response}</Typography>
      <Button variant='outlined' onClick={handleSubmit}>
        Ok
      </Button>
    </Paper>
  );
}
