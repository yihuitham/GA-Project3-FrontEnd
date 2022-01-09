import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import StaffAppBar from '../components/StaffAppBar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { FetchContext } from '../context/FetchContext';
import { AuthContext } from '../context/AuthContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import ViewOperation from '../components/ViewOperation';
import ViewPatient from '../components/ViewPatient';
import ViewReport from '../components/ViewReport';

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
        const response = await fetchContext.authAxios.get(
          `operation/search/${authContext.authState.userInfo.role}/${authContext.authState.userInfo._id}/${ddmmyy}`
        );
        setOperationData(response.data);
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
                {console.log(
                  'operation data from staffdashboard',
                  operationData
                )}
                <TableContainer>
                  <Table
                    stickyHeader
                    aria-label='view table'
                    sx={{
                      [`& .${tableCellClasses.root}`]: {
                        borderBottom: 'none',
                        p: 0.8,
                      },
                    }}
                  >
                    <TableBody>
                      {operationData === undefined ||
                      operationData.message === 'Not found' ? (
                        '-'
                      ) : (
                        <ViewOperation operationData={operationData} />
                      )}
                      {operationData === undefined ||
                      operationData.message === 'Not found' ? (
                        '-'
                      ) : (
                        <ViewPatient operationData={operationData.patientID} />
                      )}
                      {operationData === undefined ||
                      operationData.message === 'Not found' ? (
                        '-'
                      ) : (
                        <ViewReport operationData={operationData} />
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
