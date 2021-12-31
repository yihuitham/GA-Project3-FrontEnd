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
import StaffAppBar from '../components/StaffAppBar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { makeStyles } from '@mui/styles';
import { FetchContext } from '../context/FetchContext';
import { AuthContext } from '../context/AuthContext';
import OperationDetails from '../components/OperationDetails';
import PatientDetails from '../components/PatientDetails';
import { publicFetch } from '../util/fetch';

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
  // console.log(theme.mixins.toolbar);
  const authContext = useContext(AuthContext);
  const fetchContext = useContext(FetchContext);
  const [date, setDate] = useState(new Date());
  const [ddmmyy, setDDMMYY] = useState(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
  const [staffDashboardData, setStaffDashboardData] = useState();
  const [operationData, setOperationData] = useState();

  const changeDate = (newDate) => {
    setDate(newDate);
    const newDDMMYY = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    setDDMMYY(newDDMMYY);

    const fetchAPI = async () => {
      try {
        const response = await publicFetch.get(
          `operation/search/${authContext.authState.userInfo.role}/${authContext.authState.userInfo._id}/${newDDMMYY}`
        );
        setOperationData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  };

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

    const getOperationData = async () => {
      try {
        const response = await publicFetch.get(
          `operation/search/${authContext.authState.userInfo.role}/${authContext.authState.userInfo._id}/${ddmmyy}`
        );
        setOperationData(response);
      } catch (error) {
        console.log(error);
      }
    };

    getStaffDashboardData();
    getOperationData();
  }, [fetchContext, ddmmyy]);

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
                  onChange={(newDate) => changeDate(newDate)}
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
                  {console.log('operation data', operationData)}
                  {operationData === undefined ||
                  operationData.data.message === 'Not found' ? (
                    '-'
                  ) : (
                    <OperationDetails />
                  )}
                  {operationData === undefined ||
                  operationData.data.message === 'Not found' ? (
                    '-'
                  ) : (
                    <PatientDetails />
                  )}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
