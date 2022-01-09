import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/styles';
import NewOperation from './NewOperation';
import ViewSchedule from './ViewSchedule';

const CardTableCell = styled(TableCell)({
  padding: 0,
  color: '#3A3B3C',
});

function Content(info) {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant='body1'>{info.operation}</Typography>

        <TableContainer sx={{ mt: 1 }}>
          <Table>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <CardTableCell variant='footer'>Patient:</CardTableCell>
                <CardTableCell variant='footer' align='center'>
                  {info.patientID.name}
                </CardTableCell>
              </TableRow>
              <TableRow>
                <CardTableCell variant='footer'>Surgeon:</CardTableCell>
                <CardTableCell variant='footer' align='center'>
                  {info.surgeonID.name}
                </CardTableCell>
              </TableRow>
              <TableRow>
                <CardTableCell variant='footer'>Nurses:</CardTableCell>
                <CardTableCell variant='footer' align='center'>
                  {info.nursesID[0].name}, ..
                </CardTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
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

function OperationRoomCard({ op, date, refresh, setRefresh }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setRefresh(true);
  };
  const handleClose = () => {
    setOpen(false);
    setRefresh(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          {op._id ? (
            <ViewSchedule operationData={op} />
          ) : (
            <NewOperation
              operationData={op}
              date={date}
              handleClose={handleClose}
            />
          )}
        </Box>
      </Modal>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '255px',
              pl: '10px',
              pr: '10px',
            }}
          >
            <Typography>Operating Room</Typography>
            <Typography variant='h2' sx={{ m: 2 }}>
              {op.operatingRoom}
            </Typography>
            {op._id ? (
              Content(op)
            ) : (
              <Typography
                variant='caption'
                sx={{
                  p: '1px',
                  pl: 1,
                  pr: 1,
                  color: '#18A558',
                  border: 1,
                  borderColor: '#18A558',
                  borderRadius: 2,
                }}
              >
                Available
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export { OperationRoomCard };
