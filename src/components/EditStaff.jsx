import React, { useState, useContext } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  Box,
  TextField,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';
import { FetchContext } from '../context/FetchContext';

export default function EditStaff({ data, handleClose, setRefresh }) {
  const fetchContext = useContext(FetchContext);
  const [name, setName] = useState(data.name);
  const [NRIC, setNRIC] = useState(data.NRIC);
  const [role, setRole] = useState(data.role);
  const [gender, setGender] = useState(data.gender);
  const [contact, setContact] = useState(data.contact);
  const [speciality, setSpeciality] = useState(data.speciality);

  const editStaff = async () => {
    try {
      const response = await fetchContext.authAxios.post('/staff/edit', {
        id: data._id,
        name: name,
        NRIC: NRIC,
        role: role,
        gender: gender,
        contact: contact,
        speciality: speciality,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    editStaff();
    handleClose();
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSpecialityChange = (e) => {
    setSpeciality(e.target.value);
  };

  //   console.log('name', name);
  //   console.log('nric', NRIC);
  //   console.log('role', role);
  //   console.log('gender', gender);
  //   console.log('contact', contact);
  //   console.log('speciality', speciality);

  return (
    <Paper
      sx={{
        maxHeight: '80vh',
        overflow: 'auto',
        maxWidth: '76vw',
        display: 'flex',
        flex: 1,
        m: 0,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
      elevation={0}
    >
      <TableContainer>
        <Table
          stickyHeader
          aria-label='view table'
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
              p: 0.8,
            },
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: '#4682B4', fontWeight: '600' }}>
                Staff Details
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
                  defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>NRIC</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
                  defaultValue={NRIC}
                  onChange={(e) => {
                    setNRIC(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Role</TableCell>
              <TableCell>
                <Select
                  labelId='select-role'
                  id='select-role'
                  value={role}
                  label=''
                  onChange={handleRoleChange}
                >
                  <MenuItem value={'Chief'}>Chief</MenuItem>
                  <MenuItem value={'Surgeon'}>Surgeon</MenuItem>
                  <MenuItem value={'Nurse'}>Nurse</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>
                <Select
                  labelId='select-gender'
                  id='select-gender'
                  value={gender}
                  label=''
                  onChange={handleGenderChange}
                >
                  <MenuItem value={'F'}>Female</MenuItem>
                  <MenuItem value={'M'}>Male</MenuItem>
                  <MenuItem value={'O'}>Others</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Contact No.</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
                  defaultValue={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Speciality</TableCell>
              <TableCell>
                <Select
                  labelId='select-speciality'
                  id='select-speciality'
                  value={speciality}
                  label=''
                  onChange={handleSpecialityChange}
                >
                  <MenuItem value={'General'}>General</MenuItem>
                  <MenuItem value={'Urology'}>Urology</MenuItem>
                  <MenuItem value={'Neurological'}>Neurological</MenuItem>
                  <MenuItem value={'Thoracic'}>Thoracic</MenuItem>
                  <MenuItem value={'Cardiologists'}>Cardiologists</MenuItem>
                  <MenuItem value={'Orthopaedic'}>Orthopaedic</MenuItem>
                  <MenuItem value={'Oral and Maxillofacial'}>
                    Oral and Maxillofacial
                  </MenuItem>
                  <MenuItem value={'Cophthalmic'}>Cophthalmic</MenuItem>
                  <MenuItem value={'Gynecologic Oncology'}>
                    Gynecologic Oncology
                  </MenuItem>
                  <MenuItem value={'Colon and Rectal'}>
                    Colon and Rectal
                  </MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Login ID</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 }, readOnly: true }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
                  defaultValue={data.loginID}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        size='medium'
        aria-label='edit'
        onClick={handleSubmit}
        sx={{ position: 'absolute', bottom: 0, right: 0, m: 2 }}
      >
        <SaveIcon fontSize='medium' />
      </Fab>
    </Paper>
  );
}
