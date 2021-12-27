import React, { useState, useContext, useEffect } from 'react';
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
import { FetchContext } from '../context/FetchContext';

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

export default function StaffDashboard() {
  console.log(theme.mixins.toolbar);
  const fetchContext = useContext(FetchContext);
  const [staffDashboardData, setStaffDashboardData] = useState();

  useEffect(() => {
    const getStaffDashboardData = async () => {
      try {
        const { data } = await fetchContext.authAxios.get('staff/');
        setStaffDashboardData(data);
        console.log('staff-data:', staffDashboardData);
      } catch (err) {
        console.log(err);
      }
    };

    getStaffDashboardData();
  }, [fetchContext]);

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
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CalendarPicker
                  date={date}
                  onChange={(newDate) => setDate(newDate)}
                  color='secondary'
                />
              </LocalizationProvider>
            </Grid>
            <Grid
              item
              sx={{
                m: 3,
                borderRadius: 5,
                flexGrow: 1,
                bgcolor: '#ededed',
              }}
            >
              <Paper sx={{ m: 2, p: 2, maxHeight: '75vh', overflow: 'auto' }}>
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
                Operation details go here
                <br />
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
