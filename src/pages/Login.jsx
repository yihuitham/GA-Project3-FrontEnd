import React, { useState, useContext } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../components/loginForm/formInput';
// import { AuthContext } from '../context/AuthContext';
import { publicFetch } from './../util/fetch';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

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

const LoginSchema = Yup.object().shape({
  loginID: Yup.string().required('Login ID is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login() {
  // console.log(theme.mixins.toolbar);
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const submitCredentials = async (credentials) => {
    try {
      setLoginLoading(true);
      const { data } = await publicFetch.post(`api/authenticate`, credentials);
      console.log(data);

      authContext.setAuthState(data);
      setLoginSuccess(data.message);
      setLoginError('');
      setTimeout(() => {
        setRedirectOnLogin(true);
      }, 700);
    } catch (error) {
      setLoginLoading(false);
      const { data } = error.response;
      setLoginError(data.message);
      setLoginSuccess(null);
    }
  };

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

              <Formik
                initialValues={{
                  loginID: '',
                  password: '',
                }}
                onSubmit={(values) => submitCredentials(values)}
                validationSchema={LoginSchema}
              >
                {() => (
                  <Form>
                    <div>
                      {loginSuccess} {loginError}
                    </div>
                    <div>
                      <div className='mb-2'>
                        <div className='mb-1'>Login ID</div>
                        <FormInput
                          ariaLabel='loginID'
                          name='loginID'
                          type='text'
                          placeholder='Login ID'
                        />
                      </div>
                      <div>
                        <div className='mb-1'>Password</div>
                        <FormInput
                          ariaLabel='Password'
                          name='password'
                          type='password'
                          placeholder='Password'
                        />
                      </div>
                    </div>
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
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
