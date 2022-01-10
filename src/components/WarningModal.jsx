import React, { useState, useContext } from 'react';

import {
  Box,
  TextField,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Paper,
} from '@mui/material';

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
