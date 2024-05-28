import { Typography, TextField, Button, IconButton, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from "react";

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

interface Delivery {
    _id: string;
    deliveryType: string;
    price: string;
    days: string;
    handlingFee: string;
    tax: string;
}

interface Discount {
    _id: string;
    discountName: string,
    discountPrice: string,
}

const Updatecharges = () => {
    const navigate = useNavigate();
    const [deliveryTypes, setDeliveryTypes] = useState<Delivery[]>([]);
    const [discount, setDiscount] = useState<Discount[]>([]);

    useEffect(() => {
        const getDelivery = () => {
            fetch("http://localhost:6451/deliveryprice")
                .then((response) => response.json())
                .then((deliveryArray) => {
                    setDeliveryTypes(deliveryArray);
                    // console.log(deliveryArray);
                })
                .catch(error => {
                    console.error("Error fetching delivery data:", error);
                });
        }
        const getDiscount = () => {
            fetch("http://localhost:6451/discount")
                .then((response) => response.json())
                .then((discountArray) => {
                    setDiscount(discountArray);
                    console.log(discountArray);
                })
                .catch(error => {
                    console.error("Error fetching discount data:", error);
                });
        }
        getDelivery();
        getDiscount();
    }, []);

    const handlePriceChange = (field: keyof Delivery, value: string, id: string) => {
        setDeliveryTypes(prevDeliveryTypes => {
            return prevDeliveryTypes.map(delivery => {
                if (delivery._id === id) {
                    return { ...delivery, [field]: value };
                }
                return delivery;
            });
        });
    }

    const handleDiscountChange = (field: keyof Discount, value: string, id: string) => {
        setDiscount(prevDiscountTypes => {
            const updatedDiscounts = prevDiscountTypes.map(discount => {
                if (discount._id === id) {
                    return { ...discount, [field]: value };
                }
                return discount;
            });
            // console.log(updatedDiscounts);
            return updatedDiscounts;
        });
    }

    const handleUpdate = (id: string) => {
        const updatedDelivery = deliveryTypes.find(delivery => delivery._id === id);
        if (updatedDelivery) {
            fetch(`http://localhost:6451/deliveryprice/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedDelivery),
            })
                .then(response => {
                    if (response.ok) {
                        alert("Delivery Charges updated successfully");
                    } else {
                        alert("Failed to update Delivery Charges");
                    }
                })
                .catch(error => {
                    console.error("Error updating Delivery Charges:", error);
                });
        }
    }

    const handleDiscountUpdate = (id: string) => {
        const updatedDiscount = discount.find(discounts => discounts._id === id);
        // console.log(updatedDiscount);
        if (updatedDiscount) {
            fetch(`http://localhost:6451/discount/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedDiscount),
            })
                .then(response => {
                    if (response.ok) {
                        alert("Discount Charges updated successfully");
                    } else {
                        alert("Failed to update Discount Charges");
                    }
                })
                .catch(error => {
                    console.error("Error updating Discount Charges:", error);
                });
        }
    }

    const handleGoBack = () => {
        navigate('/catalog/Dashboard');
    }

    return (
        <Box sx={{ height: "90vh" }}>
            <Box
                sx={{
                    float: "right",
                    marginRight: "20px",
                    marginBottom: "20px",
                }}
            >
                <IconButton color="error" size="small" sx={{ border: 1, }} onClick={handleGoBack}> <CloseIcon /> </IconButton>
            </Box>
            <form>
                <Typography variant="h6" sx={{ marginBottom: "20px" }}> Update Discount charges </Typography>
                <TableContainer component={Paper} sx={{ width: "500px", margin: "auto" }}>
                    <Table sx={{ minWidth: "500px" }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell> Sl No </StyledTableCell>
                                <StyledTableCell> Discount Type </StyledTableCell>
                                <StyledTableCell align="right"> Charges in % </StyledTableCell>
                                <StyledTableCell align="right"> Action </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {discount.map((discounts, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                                    <StyledTableCell>{discounts.discountName}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            label=""
                                            size="small"
                                            sx={{ margin: "5px", width: "120px" }}
                                            value={discounts.discountPrice}
                                            onChange={(event) => handleDiscountChange('discountPrice', event.target.value, discounts._id)}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button variant='contained' size="small" onClick={() => handleDiscountUpdate(discounts._id)}> Update </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>

            <form>
                <Typography variant="h6" sx={{ marginTop: "40px", marginBottom: "20px" }}> Update Delivery charges </Typography>
                <TableContainer component={Paper} sx={{ width: "900px", margin: "auto" }}>
                    <Table sx={{ minWidth: "500px" }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell> Sl No </StyledTableCell>
                                <StyledTableCell> Delivery Type </StyledTableCell>
                                <StyledTableCell align="right"> Days To deliver </StyledTableCell>
                                <StyledTableCell align="right"> Charges </StyledTableCell>
                                <StyledTableCell align="right"> Handeling Fee </StyledTableCell>
                                <StyledTableCell align="right"> Value Added Tax </StyledTableCell>
                                <StyledTableCell align="right"> Action </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {deliveryTypes.map((delivery, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                                    <StyledTableCell>{delivery.deliveryType}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            label=""
                                            size="small"
                                            sx={{ margin: "5px", width: "120px" }}
                                            value={delivery.days}
                                            onChange={(event) => handlePriceChange('days', event.target.value, delivery._id)}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            label=""
                                            size="small"
                                            sx={{ margin: "5px", width: "120px" }}
                                            value={delivery.price}
                                            onChange={(event) => handlePriceChange('price', event.target.value, delivery._id)}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            label=""
                                            size="small"
                                            sx={{ margin: "5px", width: "120px" }}
                                            value={delivery.handlingFee}
                                            onChange={(event) => handlePriceChange('handlingFee', event.target.value, delivery._id)}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <TextField
                                            label=""
                                            size="small"
                                            sx={{ margin: "5px", width: "120px" }}
                                            value={delivery.tax}
                                            onChange={(event) => handlePriceChange('tax', event.target.value, delivery._id)}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button variant='contained' size="small" onClick={() => handleUpdate(delivery._id)}> Update </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
        </Box>
    )
}

export default Updatecharges;