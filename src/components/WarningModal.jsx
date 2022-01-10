import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function WarningModal({ response, handleDeleteSubmit }) {
  const handleSubmit = () => {
    handleDeleteSubmit();
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
      <Typography>Are you sure to delete this id?</Typography>
      <Button variant='outlined' onClick={handleSubmit}>
        Ok
      </Button>
    </Paper>
  );
}
