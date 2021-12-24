import React, { useState } from 'react';
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StaffAppBar from '../components/staffPage/StaffAppBar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { makeStyles } from '@mui/styles';

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'radial-gradient(#FFFFFF, #5EB2FC)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#B9DDFE',
      dark: '#B9DDFE',
    },
  },
});

export default function ChiefDashboard() {
  const [date, setDate] = useState(new Date());
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StaffAppBar />
      <Box
        sx={{
          display: 'flex',
          height: '90vh',
          justifyContent: 'center',
          mt: 1.5,
        }}
      >
        <Card
          elevation={10}
          sx={{ width: '95vw', height: '85vh', borderRadius: 5 }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid
              container
              sx={{
                display: 'flex',
                alignContent: 'center',
                // justifyContent: 'center',
                width: '95vw',
                height: '85vh',
              }}
            >
              <Grid
                item
                sx={{
                  m: 3,
                  borderRadius: 5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              ></Grid>
              <Grid
                item
                sx={{
                  m: 3,
                  borderRadius: 5,
                  flexGrow: 1,
                  bgcolor: '#ededed',
                }}
              >
                <Paper
                  sx={{ m: 2, p: 2, maxHeight: '75vh', overflow: 'auto' }}
                ></Paper>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
