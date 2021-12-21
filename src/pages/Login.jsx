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
import MainAppBar from '../components/landingPage/LoginAppBar';

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
      <MainAppBar />
      <Grid container sx={{ width: '100vw', height: '95vh' }}>
        <Grid
          item
          xs={7}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src='health-professional-team.png'
            alt='health team'
            height='700'
            width='700'
          />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component='form'
            sx={{
              marginTop: -18,
              p: 3,
              pb: 1,
              borderRadius: 2.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            noValidate
            autoComplete='off'
          >
            <Typography
              variant='h2'
              sx={{
                mb: 2,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 72,
                textAlign: 'center',
              }}
            >
              Hospital Management
            </Typography>
            <TextField
              id='outlined-basic'
              label='Username'
              variant='outlined'
              sx={{ m: 1, backgroundColor: 'white', borderRadius: 1 }}
            />
            <TextField
              id='outlined-basic'
              label='Password'
              variant='outlined'
              sx={{ m: 1, backgroundColor: 'white', borderRadius: 1 }}
            />
            <Button
              variant='contained'
              sx={{ m: 1, backgroundColor: '#355576', fontWeight: 'bold' }}
            >
              Sign in
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
