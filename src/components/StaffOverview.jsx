import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import EditStaff from '../components/EditStaff';
import { FetchContext } from '../context/FetchContext';

export default function PatientOverview() {
  const [staffData, setStaffData] = useState([]);
  const fetchContext = useContext(FetchContext);
  const [open, setOpen] = useState(false);
  const [singleStaffData, setSingleStaffData] = useState('');
  const [refresh, setRefresh] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setRefresh(false);
  };
  const handleClose = () => {
    setOpen(false);
    setRefresh(true);
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
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <EditStaff
            data={singleStaffData}
            handleClose={handleClose}
            setRefresh={setRefresh}
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
                  handleOpen();
                  setSingleStaffData(staff);
                }}
                key={staff.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {staff.name}
                </TableCell>
                <TableCell>{staff.NRIC}</TableCell>
                <TableCell align='center'>{staff.role}</TableCell>
                <TableCell align='center'>{staff.gender}</TableCell>
                <TableCell align='center'>{staff.contact}</TableCell>
                <TableCell>{staff.speciality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
