import React, { useState, useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
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
import ResponseModal from './ResponseModal';
import { FetchContext } from '../context/FetchContext';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function EditStaff({ handleNewClose, handleRefresh }) {
  const fetchContext = useContext(FetchContext);
  const [name, setName] = useState('');
  const [nric, setNric] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [allergy, setAllergy] = useState([]);
  const [medicalCondition, setMedicalCondition] = useState('');
  const [openResponseModal, setResponseModal] = useState(false);
  const [response, setResponse] = useState(null);

  const allergyList = [
    {
      allergy: 'Drug',
    },
    {
      allergy: 'Food',
    },
    {
      allergy: 'Insect',
    },
    {
      allergy: 'Latex',
    },
    {
      allergy: 'Mold',
    },
    {
      allergy: 'Pet',
    },
    {
      allergy: 'Pollen',
    },
  ];

  const addPatient = async () => {
    try {
      const response = await fetchContext.authAxios.post('/patient/new', {
        name: name,
        nric: nric,
        age: age,
        bloodType: bloodType,
        gender: gender,
        allergy: allergy,
        medicalCondition: medicalCondition,
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
    if (response === 'New Patient is added successfully!') handleNewClose();
  };

  const handleSubmit = () => {
    addPatient();
    handleResponseOpen();
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleBloodChange = (e) => {
    setBloodType(e.target.value);
  };

  const handleAllergyChange = (e) => {
    const allergyArray = e.map((e) => {
      return e.allergy;
    });
    setAllergy(allergyArray);
  };
  //   console.log('loginID', loginID);
  //   console.log('password', password);
  //   console.log('name', name);
  //   console.log('nric', NRIC);
  //   console.log('role', role);
  //   console.log('gender', gender);
  //   console.log('contact', contact);
  console.log('allergyList', allergyList);
  console.log('allergy', allergy);
  //   console.log('response', response);
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
                New Patient Details
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
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
                  onChange={(e) => {
                    setNric(e.target.value);
                  }}
                />
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
              <TableCell>Age</TableCell>
              <TableCell>
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Blood Type</TableCell>
              <TableCell>
                <Select
                  labelId='select-blood'
                  id='select-blood'
                  value={bloodType}
                  label=''
                  onChange={handleBloodChange}
                >
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>
                  <MenuItem value={'AB'}>AB</MenuItem>
                  <MenuItem value={'O'}>O</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Allergy</TableCell>
              <TableCell>
                <Autocomplete
                  multiple
                  id='checkboxes-tags-demo'
                  options={allergyList}
                  disableCloseOnSelect
                  autoHighlight
                  getOptionLabel={(option) => option.allergy}
                  isOptionEqualToValue={(option, value) =>
                    option.allergy === value.allergy
                  }
                  onChange={(event, value) => handleAllergyChange(value)}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.allergy}
                    </li>
                  )}
                  style={{ width: 500 }}
                  renderInput={(params) => (
                    <TextField {...params} variant='standard' />
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'> </TableCell>
              <TableCell>Medical Condition</TableCell>
              <TableCell>
                <TextField
                  id='input'
                  multiline
                  maxRows={4}
                  variant='outlined'
                  onChange={(e) => setMedicalCondition(e.target.value)}
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
