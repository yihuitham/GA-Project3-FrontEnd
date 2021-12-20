import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function MainAppBar() {
  return (
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

          <Box sx={{ display: 'inline-flex' }}>
            <Button sx={{ color: 'black' }}>About</Button>
            <Typography sx={{ padding: '6px 8px', color: 'black' }}>
              |
            </Typography>
            <Button sx={{ color: 'black' }} color='inherit'>
              Accounts
            </Button>
            <Typography sx={{ padding: '6px 8px', color: 'black' }}>
              |
            </Typography>
            <Button sx={{ color: 'black' }} color='inherit'>
              Support
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
