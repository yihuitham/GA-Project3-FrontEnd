import React, { useState, useContext } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ViewOperation from '../components/ViewOperation';
import ViewPatient from '../components/ViewPatient';
import EditOperation from './editOperation/EditOperation';
import { FetchContext } from '../context/FetchContext';

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

export default function ViewSchedule({
  operationData,
  currentID,
  closeViewSchedule,
}) {
  const fetchContext = useContext(FetchContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    deleteOperation();
    closeViewSchedule();
  };

  const deleteOperation = async () => {
    try {
      const response = await fetchContext.authAxios.delete(
        `/operation/${operationData._id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TableContainer sx={{ mb: 7 }}>
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
            <ViewOperation operationData={operationData} />

            <ViewPatient operationData={operationData.patientID} />

            <TableRow>
              <TableCell
                sx={{
                  color: '#4682B4',
                  fontWeight: '600',
                  verticalAlign: 'top',
                }}
              >
                Post Operation Report
              </TableCell>
              <TableCell colSpan={2}>{operationData.postOpReport}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          m: 2,
        }}
      >
        <Fab
          size='medium'
          aria-label='edit'
          onClick={handleOpen}
          sx={{ mr: 2 }}
        >
          <EditIcon />
        </Fab>
        <Fab size='medium' aria-label='delete' onClick={handleDelete}>
          <DeleteIcon />
        </Fab>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <EditOperation
            operationData={operationData}
            handleClose={handleClose}
            currentID={currentID}
            closeViewSchedule={closeViewSchedule}
          />
        </Box>
      </Modal>
    </>
  );
}
