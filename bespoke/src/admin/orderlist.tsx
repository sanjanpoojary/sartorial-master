import { useState, useEffect } from "react";
import { MenuItem, Select, Typography, FormControl, Button, InputLabel, SelectChangeEvent, IconButton, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps, tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
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

const Orderlist = () => {
    const [status, setStatus] = useState<{ [key: number]: string }>({});
    const navigate = useNavigate();
    let [orderList, setOrderList] = useState<any[]>([]);

    const getOrders = () => {
        fetch("http://localhost:6451/orderlist")
            .then((response) => response.json())
            .then((productArray) => {
                setOrderList(productArray);
                // console.log(productArray);
            });
    };

    useEffect(() => {
        getOrders();
    }, [1]);

    const handleStatusChange = (event: SelectChangeEvent<string>, orderId: number) => {
        const { value } = event.target;
        setStatus({ ...status, [orderId]: value });
    };

    const updateStatus = async (orderId: number) => {
        if (status[orderId]) {
            const response = await fetch(`http://localhost:6451/orderlist/${orderId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderStatus: status[orderId]
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update order status');
            }

            setStatus((prevStatus) => {
                const updatedStatus = { ...prevStatus };
                delete updatedStatus[orderId];
                return updatedStatus;
            });

            alert('Order status updated successfully');
        }

        getOrders();
    };


    const handleGoBack = () => {
        navigate('/catalog/Dashboard');
    };

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
            <Typography variant="h6" sx={{ marginBottom: "10px" }}> Orders - {orderList.length} </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: "500px" }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell> Order Id </StyledTableCell>
                            <StyledTableCell> Full Name </StyledTableCell>
                            <StyledTableCell align="right"> Item </StyledTableCell>
                            <StyledTableCell align="right"> Email </StyledTableCell>
                            <StyledTableCell align="right"> Phone&nbsp;No </StyledTableCell>
                            <StyledTableCell align="right"> Country </StyledTableCell>
                            <StyledTableCell align="right"> Delivery Date </StyledTableCell>
                            <StyledTableCell align="center"> Status </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orderList.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">{row._id}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Link to={`../orderdetails/${row._id}`}>
                                        {row.fullName}
                                    </Link>
                                </StyledTableCell>
                                <StyledTableCell align="right">{ }</StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                                <StyledTableCell align="right"> + {row.phone}</StyledTableCell>
                                <StyledTableCell align="right">{row.country}</StyledTableCell>
                                <StyledTableCell align="right">{row.country}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <FormControl>
                                            <InputLabel id={`select-label-${row._id}`}>{row.orderStatus}</InputLabel>
                                            <Select
                                                labelId={`select-label-${row._id}`}
                                                label={row.orderStatus}
                                                value={status[row._id] || ""}
                                                sx={{ width: "150px", alignItems: "center" }}
                                                onChange={(event) => handleStatusChange(event, row._id)}
                                            >
                                                <MenuItem value="Order Placed"> Order Placed </MenuItem>
                                                <MenuItem value="In Production"> In Production </MenuItem>
                                                <MenuItem value="Shipped"> Shipped </MenuItem>
                                                <MenuItem value="Delivered"> Delivered </MenuItem>
                                                <MenuItem value="Awaiting Customer Review"> Awaiting Customer Review </MenuItem>
                                                <MenuItem value="Order Complete"> Order Complete </MenuItem>
                                                <MenuItem value="Return Requested"> Return Requested </MenuItem>
                                                <MenuItem value="Return recived"> Return recived </MenuItem>
                                                <MenuItem value="Refund Processed"> Refund Processed </MenuItem>
                                                <MenuItem value="Alteration Requested"> Alteration Requested </MenuItem>
                                                <MenuItem value="Alteration in Progress"> Alteration in Progress </MenuItem>
                                                <MenuItem value="Alteration Completed"> Alteration Completed </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button
                                            variant='contained'
                                            size="small"
                                            type="button"
                                            sx={{ marginLeft: "10px" }}
                                            onClick={() => updateStatus(row._id)}
                                        >
                                            Update
                                        </Button>
                                    </Box>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default Orderlist;