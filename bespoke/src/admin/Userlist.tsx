
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate  } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import StraightenIcon from '@mui/icons-material/Straighten';
import CloseIcon from '@mui/icons-material/Close';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Userlist = ( ) => {

  const navigate = useNavigate();

  const users = [
    { id: 1, name: "ABD", email: "abd@gmail.com", PhoneNo: "12345678890", country: "india" },
    { id: 2, name: "Virat", email: "aaa@gmail.com", PhoneNo: "12345678891", country: "india" },
    { id: 3, name: "Gyle", email: "bbb@gmail.com", PhoneNo: "12345678892", country: "india" },
  ];
  
 
  const handleGoBack = () => {
    navigate('/catalog/Dashboard');
  };

  return (
    <div>
      <Box 
        sx={{
          float: "right",
          marginRight: "100px",
          marginBottom: "20px"
        }}
      >
          <IconButton color="error" size="small" sx={{border:1,}} onClick={handleGoBack}> <CloseIcon/> </IconButton>
      </Box> <br/>
      <Typography variant="h6" sx={{ marginBottom: "15px", marginLeft: "100px" }}> Customers - {users.length} </Typography>
      <TableContainer component={Paper} sx={{ width: "900px", margin: "auto" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> Full Name </StyledTableCell>
              <StyledTableCell align="right"> Email </StyledTableCell>
              <StyledTableCell align="right"> Phone&nbsp;No </StyledTableCell>
              <StyledTableCell align="right"> Country </StyledTableCell>
              <StyledTableCell align="right"> Measurements </StyledTableCell>
              <StyledTableCell align="right"> Edit </StyledTableCell>
              <StyledTableCell align="right"> Delete </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  <Link to='../profile'>
                    {row.name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.PhoneNo}</StyledTableCell>
                <StyledTableCell align="right">{row.country}</StyledTableCell>
                <StyledTableCell align="center">
                  <Link to='../editcustomer'>
                    <IconButton size="small" color="primary"> <StraightenIcon /> </IconButton>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link to='../addprofile'>
                    <IconButton size="small" color="primary"> <EditIcon /> </IconButton>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton size="small" color="error"> <DeleteForeverIcon /> </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Userlist;