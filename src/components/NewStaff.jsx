import React, { useState, useContext } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import SaveIcon from '@mui/icons-material/Save';
import Fab from '@mui/material/Fab';
import ResponseModal from './ResponseModal';
import { FetchContext } from '../context/FetchContext';

export default function EditStaff({ handleNewClose, handleRefresh }) {
  const fetchContext = useContext(FetchContext);
  const [loginID, setLoginID] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [NRIC, setNRIC] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [openResponseModal, setResponseModal] = useState(false);
  const [response, setResponse] = useState(null);

  const addStaff = async () => {
    try {
      const response = await fetchContext.authAxios.post('/staff/new', {
        name: name,
        loginID: loginID,
        password: password,
        NRIC: NRIC,
        role: role,
        gender: gender,
        contact: contact,
        speciality: speciality,
      });
      console.log('response', response.data.message);
      setResponse(response.data.message);
    } catch (error) {
      console.log(error.response);
      setResponse(error.response.data.message);
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '76vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 2,
  };

  const handleResponseOpen = () => {
    setResponseModal(true);
    handleRefresh();
  };

  const handleResponseClose = () => {
    setResponseModal(false);
    handleRefresh();
    if (response === 'New user is added successfully!') handleNewClose();
  };

  const handleSubmit = () => {
    addStaff();
    handleResponseOpen();
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
      <Modal
        open={openResponseModal}
        onClose={handleResponseClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <ResponseModal
            response={response}
            handleResponseClose={handleResponseClose}
            handleRefresh={handleRefresh}
          />
        </Box>
      </Modal>
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
                New Staff Details
              </TableCell>
              <TableCell>Login ID</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
                  onChange={(e) => {
                    setLoginID(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Password</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  type='password'
                  variant='standard'
                  sx={{ width: 350 }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
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
                  variant='standard'
                  sx={{ width: 350, fontSize: 14 }}
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
                  variant='standard'
                  sx={{ width: 350, fontSize: 14 }}
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
                  variant='standard'
                  sx={{ width: 350, fontSize: 14 }}
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
