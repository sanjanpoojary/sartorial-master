import { Typography, IconButton, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
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

const Customermeasurments = () => {

    const navigate = useNavigate();

    const users = [
        { id: 1, name: "ABD", email: "abd@gmail.com", PhoneNo: "12345678890", country: "india", order: "suit", delivery: "30 Mar 24" },
        { id: 2, name: "Virat", email: "aaa@gmail.com", PhoneNo: "12345678891", country: "india", order: "Tuxedo", delivery: "8 Apr 24" },
        { id: 3, name: "Gyle", email: "bbb@gmail.com", PhoneNo: "12345678892", country: "india", order: "Blazer", delivery: "15 Apr 24" },
    ];

    const handleGoBack = () => {
        navigate('/catalog/Dashboard');
    }

    return (
        <div>
            <Box
                sx={{
                    float: "right",
                    marginRight: "20px",
                    marginBottom: "20px"
                }}
            >
                <IconButton color="error" size="small" sx={{ border: 1, }} onClick={handleGoBack}> <CloseIcon /> </IconButton>
            </Box> <br />
            <Typography variant="h6" sx={{ marginBottom: "10px" }}> Order Management </Typography>
            <TableContainer component={Paper} sx={{ width: "700px", margin: "auto" }}>
                <Table sx={{ minWidth: "500px" }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell> Order Id </StyledTableCell>
                            <StyledTableCell> Full Name </StyledTableCell>
                            <StyledTableCell align="right"> Delivery Date </StyledTableCell>
                            <StyledTableCell align="right"> Edit Order </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.delivery}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Link to='../editorder'>
                                        <IconButton size="small" color="primary"> <EditIcon /> </IconButton>
                                    </Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Customermeasurments;