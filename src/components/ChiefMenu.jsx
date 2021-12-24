import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function ChiefMenu({ setSelectedComponent }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index, component) => {
    setSelectedIndex(index);
    setSelectedComponent(component);
  };
  return (
    <>
      <List component='nav' sx={{ p: 0 }}>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0, 'schedule')}
          sx={{ borderRadius: 5 }}
        >
          <ListItemText primary='Schedule' />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1, 'staff')}
          sx={{ borderRadius: 5 }}
        >
          <ListItemText primary='Staff' />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2, 'patient')}
          sx={{ borderRadius: 5 }}
        >
          <ListItemText primary='Patients' />
        </ListItemButton>
      </List>
    </>
  );
}
