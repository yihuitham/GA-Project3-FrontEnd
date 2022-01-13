import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { publicFetch } from './../util/fetch';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainAppBar from '../components/landingPage/LoginAppBar';

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

const LoginSchema = yup.object({
  loginID: yup.string().required('Login ID is required'),
  password: yup.string().required('Password is required'),
});

export default function Login() {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const submitCredentials = async (credentials) => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post(`authenticate`, credentials);

      authContext.setAuthState(data);
      // setLoginSuccess(data.message);
      setLoginError('');
      setTimeout(() => {
        setRedirectOnLogin(true);
      });
    } catch (error) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message);
      setLoginSuccess(null);
    }
  };

  const formik = useFormik({
    initialValues: {
      loginID: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      submitCredentials(values);
    },
  });

  return (
    <>
      {redirectOnLogin && !authContext.isAdmin() && (
        <Navigate to='/dashboard' replace={true} />
      )}
      {redirectOnLogin && authContext.isAdmin() && (
        <Navigate to='/chief' replace={true} />
      )}

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainAppBar />
        <Grid container sx={{ width: '100vw', height: '95vh' }}>
          <Grid
            item
            xs={7.5}
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
            xs={4.5}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                marginTop: -20,
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
                  textAlign: 'center',
                }}
              >
                Hospital Management
              </Typography>

              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    size='small'
                    id='loginID'
                    name='loginID'
                    type='text'
                    label='Login ID'
                    variant='outlined'
                    value={formik.values.loginID}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.loginID && Boolean(formik.errors.loginID)
                    }
                    helperText={formik.touched.loginID && formik.errors.loginID}
                  />

                  <TextField
                    size='small'
                    id='Password'
                    name='password'
                    type='password'
                    label='Password'
                    variant='outlined'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  {loginError}
                  <Button
                    type='submit'
                    variant='contained'
                    sx={{
                      m: 1,
                      backgroundColor: '#355576',
                      fontWeight: 'bold',
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
