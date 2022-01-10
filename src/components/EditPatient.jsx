import React, { useState, useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
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
import { FetchContext } from '../context/FetchContext';
import ResponseModal from './ResponseModal';
import WarningModal from './WarningModal';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function EditPatient({ data, handleEditClose, handleRefresh }) {
  const fetchContext = useContext(FetchContext);
  const [name, setName] = useState(data.name);
  const [nric, setNric] = useState(data.nric);
  const [gender, setGender] = useState(data.gender);
  const [age, setAge] = useState(data.age);
  const [bloodType, setBloodType] = useState(data.bloodType);
  const [allergy, setAllergy] = useState(data.allergy);
  const [medicalCondition, setMedicalCondition] = useState(
    data.medicalCondition
  );
  const [response, setResponse] = useState(null);
  const [openResponseModal, setResponseModal] = useState(false);
  const [openWarningModal, setWarningModal] = useState(false);

  const allergyList = [
    'Drug',
    'Food',
    'Insect',
    'Latex',
    'Mold',
    'Pet',
    'Pollen',
  ];

  const editPatient = async () => {
    try {
      const response = await fetchContext.authAxios.post('/patient/edit', {
        id: data._id,
        name: name,
        gender: gender,
        age: age,
        bloodType: bloodType,
        allergy: allergy,
        medicalCondition: medicalCondition,
      });
      setResponse(response.data.message);
    } catch (error) {
      console.log(error);
      setResponse(error.response.data.message);
    }
  };

  const deletePatient = async () => {
    try {
      const response = await fetchContext.authAxios.delete(
        `/patient/delete/${data._id}`
      );
      setResponse(response.data.message);
    } catch (error) {
      console.log(error);
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

  const handleWarningOpen = () => {
    setWarningModal(true);
  };
  const handleResponseOpen = () => {
    setResponseModal(true);
    handleRefresh();
  };

  const handleResponseClose = () => {
    setResponseModal(false);
    handleRefresh();
    if (response === 'Patient details updated successfully!') handleEditClose();
  };

  const handleWarningClose = () => {
    setWarningModal(false);
    handleRefresh();
    handleEditClose();
  };

  const handleSubmit = () => {
    editPatient();
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

  const handleDeleteSubmit = () => {
    deletePatient();
    handleWarningClose();
  };
  console.log('allergy', allergy);
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
      <Modal
        open={openWarningModal}
        onClose={handleWarningClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <WarningModal
            response={response}
            handleRefresh={handleRefresh}
            handleDeleteSubmit={handleDeleteSubmit}
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
                Patient Details
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
                  inputProps={{ style: { fontSize: 14 }, readOnly: true }}
                  size='small'
                  variant='standard'
                  sx={{ width: 350 }}
                  defaultValue={nric}
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
                  variant='standard'
                  sx={{ width: 350 }}
                  value={gender}
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
                  defaultValue={age}
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
                  variant='standard'
                  sx={{ width: 350 }}
                  onChange={handleBloodChange}
                >
                  <MenuItem value={'A+'}>A+</MenuItem>
                  <MenuItem value={'A-'}>A-</MenuItem>
                  <MenuItem value={'B+'}>B+</MenuItem>
                  <MenuItem value={'B-'}>B-</MenuItem>
                  <MenuItem value={'AB+'}>AB+</MenuItem>
                  <MenuItem value={'AB-'}>AB-</MenuItem>
                  <MenuItem value={'O+'}>O+</MenuItem>
                  <MenuItem value={'O-'}>O-</MenuItem>
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
                  defaultValue={allergy}
                  disableCloseOnSelect
                  autoHighlight
                  getOptionLabel={(option) => option}
                  isOptionEqualToValue={(option, value) => option === value}
                  onChange={(event, value) => handleAllergyChange(value)}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option}
                    </li>
                  )}
                  style={{ width: 350 }}
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
                  defaultValue={medicalCondition}
                  multiline
                  maxRows={4}
                  variant='standard'
                  sx={{ width: 350 }}
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
        sx={{ position: 'absolute', bottom: 0, right: 70, m: 2 }}
      >
        <SaveIcon fontSize='medium' />
      </Fab>
      <Fab
        size='medium'
        aria-label='edit'
        onClick={handleWarningOpen}
        sx={{ position: 'absolute', bottom: 0, right: 0, m: 2 }}
      >
        <DeleteIcon />
      </Fab>
    </Paper>
  );
}
