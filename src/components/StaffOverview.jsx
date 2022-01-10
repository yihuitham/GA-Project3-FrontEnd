import React, { useEffect, useState, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import EditStaff from '../components/EditStaff';
import NewStaff from '../components/NewStaff';
import { FetchContext } from '../context/FetchContext';

export default function PatientOverview() {
  const [staffData, setStaffData] = useState([]);
  const fetchContext = useContext(FetchContext);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openNewModal, setOpenNewModal] = useState(false);
  const [singleStaffData, setSingleStaffData] = useState('');
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  };

  const handleEditOpen = () => {
    setOpenEditModal(true);
    handleRefresh();
  };

  const handleEditClose = () => {
    setOpenEditModal(false);
    handleRefresh();
  };

  const handleNewOpen = () => {
    setOpenNewModal(true);
    handleRefresh();
  };
  const handleNewClose = () => {
    setOpenNewModal(false);
    handleRefresh();
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

  useEffect(() => {
    const getStaffData = async () => {
      try {
        const response = await fetchContext.authAxios.get(`staff/all`);
        setStaffData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStaffData();
  }, [refresh]);
  // console.log('Staff', staffData);
  // console.log('singledata', singleStaffData);
  console.log(refresh);

  return (
    <Paper
      sx={{
        maxHeight: '80vh',
        overflow: 'auto',
        display: 'flex',
        flex: 1,
        m: 2,
      }}
    >
      <Modal
        open={openEditModal}
        onClose={handleEditClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <EditStaff
            data={singleStaffData}
            handleEditClose={handleEditClose}
            setRefresh={setRefresh}
            handleRefresh={handleRefresh}
          />
        </Box>
      </Modal>
      <Modal
        open={openNewModal}
        onClose={handleNewClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <NewStaff
            handleNewClose={handleNewClose}
            setRefresh={setRefresh}
            refresh={refresh}
            handleRefresh={handleRefresh}
          />
        </Box>
      </Modal>
      <TableContainer>
        <Table stickyHeader aria-label='patient table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>NRIC</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Staff ID
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Role
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Gender
              </TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>
                Contact No.
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Speciality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staffData.map((staff) => (
              <TableRow
                hover
                onClick={(event) => {
                  handleEditOpen();
                  setSingleStaffData(staff);
                }}
                key={staff.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {staff.name}
                </TableCell>
                <TableCell>{staff.NRIC}</TableCell>
                <TableCell align='center'>{staff.staff_id}</TableCell>
                <TableCell align='center'>{staff.role}</TableCell>
                <TableCell align='center'>{staff.gender}</TableCell>
                <TableCell align='center'>{staff.contact}</TableCell>
                <TableCell>{staff.speciality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        size='medium'
        aria-label='add'
        onClick={handleNewOpen}
        sx={{ position: 'absolute', bottom: 0, right: 0, m: 6 }}
      >
        <AddIcon fontSize='medium' />
      </Fab>
    </Paper>
  );
}
