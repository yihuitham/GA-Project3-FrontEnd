import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';

let theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    color: 'black',
  },
});

export default function StaffAppBar() {
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
              <img src='healthcare.png' alt='logo' height='50' width='50' />
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
                width: 200,
                height: 60,
                borderRadius: 30,
                display: 'flex',
                alignItems: 'center',
                p: 2,
              }}
            >
              <FaceIcon fontSize='large' sx={{ color: '#353839' }} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  pl: 2,
                }}
              >
                <Typography
                  variant='subtitle1'
                  sx={{ m: 0, p: 0, marginBlockEnd: -0.5, color: '#353839' }}
                >
                  Dr Sheena
                </Typography>
                <Typography variant='caption' sx={{ color: '#353839' }}>
                  Neurosurgeon
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
