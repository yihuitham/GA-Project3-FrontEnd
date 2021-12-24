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
import StaffAppBar from '../components/staffPage/StaffAppBar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ChiefMenu from '../components/ChiefMenu';

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
  //   palette: {
  //     primary: {
  //       main: '#B9DDFE',
  //       dark: '#B9DDFE',
  //     },
  //   },
});

export default function ChiefDashboard() {
  const [selectedComponent, setSelectedComponent] = useState('schedule');
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
                width: '95vw',
                height: '85vh',
              }}
            >
              <Grid
                item
                xs={2}
                sx={{
                  borderRight: 1,
                  p: 1,
                }}
              >
                <ChiefMenu setSelectedComponent={setSelectedComponent} />
              </Grid>
              <Grid
                item
                xs={10}
                sx={{
                  borderRadius: 5,
                  bgcolor: '#ededed',
                }}
              ></Grid>
            </Grid>
          </LocalizationProvider>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
