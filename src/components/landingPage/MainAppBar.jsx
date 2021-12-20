import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function MainAppBar() {
  return (
    <Box>
      <AppBar position='static' style={{ background: '#2E3B55' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src='healthcare.png' alt='logo' height='50' width='50' />
          <Box sx={{ display: 'inline-flex' }}>
            <Button color='inherit'>About</Button>
            <Typography sx={{ padding: '6px 8px' }}>|</Typography>
            <Button color='inherit'>Accounts</Button>
            <Typography sx={{ padding: '6px 8px' }}>|</Typography>
            <Button color='inherit'>Support</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
