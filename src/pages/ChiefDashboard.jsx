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
import StaffAppBar from '../components/StaffAppBar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ChiefMenuList from '../components/ChiefMenuList';
import ScheduleOverview from '../components/ScheduleOverview';
import PatientOverview from '../components/PatientOverview';
import StaffOverview from '../components/StaffOverview';

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
});

export default function ChiefDashboard() {
  const [selectedComponent, setSelectedComponent] = useState('schedule');
  console.log(selectedComponent);

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
              <Grid item xs={2}>
                <ChiefMenuList setSelectedComponent={setSelectedComponent} />
              </Grid>
              <Grid
                item
                xs={10}
                sx={{
                  bgcolor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {selectedComponent == 'schedule' && <ScheduleOverview />}
                {selectedComponent == 'staff' && <StaffOverview />}
                {selectedComponent == 'patient' && <PatientOverview />}
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Card>
      </Box>
    </ThemeProvider>
  );
}