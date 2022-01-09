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
