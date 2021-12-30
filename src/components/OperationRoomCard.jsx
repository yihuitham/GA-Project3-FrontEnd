import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Content(info) {
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant='subtitle1' sx={{ color: 'lightblack' }}>
          {info.operation}
        </Typography>

        <TableContainer sx={{ mt: 1 }}>
          <Table>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ p: 0 }} variant='caption'>
                  Patient:
                </TableCell>
                <TableCell sx={{ p: 0 }} variant='caption' align='center'>
                  {info.patientID.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 0 }} variant='caption'>
                  Surgeon:
                </TableCell>
                <TableCell sx={{ p: 0 }} variant='caption' align='center'>
                  {info.surgeonID.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ p: 0 }} variant='caption'>
                  Nurses:
                </TableCell>
                <TableCell sx={{ p: 0 }} variant='caption' align='center'>
                  {info.nursesID[0].name}, ..
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

function ActionAreaCard({ op }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
          <Typography variant='body2' color='text.secondary'>
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
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { ActionAreaCard };
