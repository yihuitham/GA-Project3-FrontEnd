import React, { useState } from 'react';
import List, { listItemClasses } from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

export default function ChiefMenu({ setSelectedComponent }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index, component) => {
    setSelectedIndex(index);
    setSelectedComponent(component);
  };
  return (
    <>
      <List
        component='nav'
        dense
        sx={{
          mt: 2,
          ml: 3,
          [`& .active, & .Mui-selected:hover, & .Mui-selected`]: {
            bgcolor: '#D4EBFE',
            transition: 'background-color 0.5s',
            borderRight: 3,
            borderRightColor: '#88ACCB',
            // fontWeight: 'bold',
            '& svg': {
              fill: 'red',
            },
          },
        }}
      >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0, 'schedule')}
        >
          <ListItemText primary='Schedule' />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1, 'patient')}
        >
          <ListItemText primary='Patients' />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2, 'staff')}
        >
          <ListItemText primary='Staffs' />
        </ListItemButton>
      </List>
    </>
  );
}
