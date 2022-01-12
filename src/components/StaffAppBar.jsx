import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';

let theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    color: 'black',
  },
});

export default function StaffAppBar() {
  const auth = useContext(AuthContext);
  const { authState } = auth;
  const role = authState.userInfo.role;
  let title;
  switch (role) {
    case 'Doctor':
      title = 'Dr.';
      break;
    case 'Nurse':
      title = 'Nurse';
      break;
    case 'Chief':
      title = 'Chief Dr.';
      break;
    default:
      title = '';
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <AppBar
          position='static'
          elevation={0}
          style={{ background: 'rgba(255,255,255,0)' }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m: 1.2,
              }}
            >
              <img src='healthcare.png' alt='logo' height='55' width='55' />
              <Typography sx={{ fontSize: 10, color: 'black' }}>
                Hospital Management
              </Typography>
            </Box>
            <Typography
              sx={{ padding: '6px 8px', color: 'black' }}
              variant='h5'
            >
              My Dashboard
            </Typography>
            <Box
              sx={{
                boxShadow: 7,
                bgcolor: '#B9DDFE',
                borderRadius: 30,
                display: 'flex',
                alignItems: 'center',
                p: 1,
                pl: 2,
                pr: 2,
              }}
            >
              <FaceIcon fontSize='large' sx={{ color: '#353839' }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  pl: 2,
                  pr: 1,
                }}
              >
                <Typography
                  variant='subtitle1'
                  sx={{ m: 0, p: 0, marginBlockEnd: -0.5, color: '#353839' }}
                >
                  {title} {authState.userInfo.name}
                </Typography>
                <Typography variant='caption' sx={{ color: '#353839' }}>
                  {authState.userInfo.speciality}
                </Typography>
              </Box>
              <IconButton onClick={auth.logout}>
                <LogoutIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
