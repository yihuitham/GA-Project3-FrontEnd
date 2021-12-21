import React from 'react';
import {
  Box,
  TextField,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
  Button,
  Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StaffAppBar from '../components/staffPage/StaffAppBar';
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import idLocale from 'date-fns/locale/id';
import Paper from '@mui/material/Paper';

let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // apply theme's border-radius instead of component's default
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

export default function Login() {
  console.log(theme.mixins.toolbar);
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
          <CardContent>
            // still trying to fix the calender component
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils} locale={idLocale}>
              <Paper style={{ overflow: 'hidden' }}>
                <Calendar />
              </Paper>
            </MuiPickersUtilsProvider> */}
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
