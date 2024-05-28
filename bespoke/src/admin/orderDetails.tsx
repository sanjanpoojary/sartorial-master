import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, List, ListItemText, ListItem } from "@mui/material";

interface Order {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    country: string;
    deliveryDate: string;
    orderStatus: string;
    orderdata: Array<OrderData>;
}

interface OrderData {
    Back_Jacket_length: string;
    Back_Width: string;
    BreastStyle: string;
    ButtonStyle: string;
    Chest_Circumference: string;
    Front_Jacket_length: string;
    Head_Circumference: string;
    Height: string;
    Hip_Circumference: string;
    Inside_Length: string;
    Message: string;
    Neck_Circumference: string;
    ShoulderType: string;
    Sleeve_length: string;
    Trouser_Length: string;
    Type: string;
    VentStyle: string;
    Waist_Circumference: string;
    bodyFitting: string;
    bodyType: string;
    deliveryType: string;
    fabric: string;
    grandTotal: string;
    item: string;
    lapelStyle: string;
    trousePleat: string;
    trouserBuckle: string;
    trouserLoop: string;
    trouserPocket: string;
    _id: string;
}


const OrderDetails = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const [order, setOrder] = useState<Order | null>(null);

    const fetchOrderDetails = async () => {
        // let postdata = { method: "put" };
        fetch(
            `http://localhost:6451/orderlist/${orderId}`
            // postdata
        )
            .then((res) => res.json())
            .then((orderArray) => {
                setOrder(orderArray);
                // console.log(orderArray);
            });
    };

    useEffect(() => {
        fetchOrderDetails();
    }, [orderId]);

    return (
        <Box sx={{ textAlign: "left" }}>
            <Typography variant="h4" gutterBottom>
                Order Details for {order?.fullName}
            </Typography>
            <Typography variant="body1"><b>Order ID: </b>{order?._id}</Typography>
            <Typography variant="body1"><b>Email:</b> {order?.email}</Typography>
            <Typography variant="body1"><b>Phone:</b> +{order?.phone}</Typography>
            <Typography variant="body1"><b>Country:</b> {order?.country}</Typography>
            <Typography variant="body1">
                <b>Delivery Date:</b> {order?.deliveryDate}
            </Typography>
            <Typography variant="body1"><b>Status:</b> {order?.orderStatus}</Typography>
            <Typography variant="h6" gutterBottom>
                Order Items:
            </Typography>
            {order?.orderdata && (
                <List>
                    {order.orderdata.map((item, index) => (
                        <ListItem key={item._id} alignItems="flex-start">
                            <ListItemText
                                primary={`Item ${index + 1}: ${item.item}`}
                                secondary={
                                    <>
                                        <Typography variant="body2">
                                            <b>Back Jacket Length:</b> {item.Back_Jacket_length}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Back Width:</b> {item.Back_Width}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Breast Style:</b> {item.BreastStyle}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Button Style:</b> {item.ButtonStyle}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Chest Circumference:</b> {item.Chest_Circumference}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Front Jacket Length:</b> {item.Front_Jacket_length}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Head Circumference:</b> {item.Head_Circumference}
                                        </Typography>
                                        <Typography variant="body2"> <b>Height:</b> {item.Height}</Typography>
                                        <Typography variant="body2">
                                            <b>Hip Circumference:</b> {item.Hip_Circumference}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Inside Length:</b> {item.Inside_Length}
                                        </Typography>
                                        <Typography variant="body2"> <b>Message:</b> {item.Message}</Typography>
                                        <Typography variant="body2">
                                            <b>Neck Circumference:</b> {item.Neck_Circumference}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Shoulder Type:</b> {item.ShoulderType}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Sleeve Length:</b> {item.Sleeve_length}
                                        </Typography>
                                        <Typography variant="body2">
                                            <b>Trouser Length:</b> {item.Trouser_Length}
                                        </Typography>
                                        <Typography variant="body2"> <b>Type:</b>{item.Type}</Typography>
                                        <Typography variant="body2"> <b>Vent Style:</b> {item.VentStyle}</Typography>
                                        <Typography variant="body2">
                                            <b>Waist Circumference:</b> {item.Waist_Circumference}
                                        </Typography>
                                        <Typography variant="body2"><b>Body Fitting:</b> {item.bodyFitting}</Typography>
                                        <Typography variant="body2"> <b>Body Type:</b> {item.bodyType}</Typography>
                                        <Typography variant="body2">
                                            <b>Delivery Type:</b> {item.deliveryType}
                                        </Typography>
                                        <Typography variant="body2"> <b>Fabric:</b> {item.fabric}</Typography>
                                        <Typography variant="body2"> <b>Grand Total:</b> {item.grandTotal}</Typography>
                                        <Typography variant="body2"> <b>Lapel Style:</b> {item.lapelStyle}</Typography>
                                        <Typography variant="body2"> <b>Trouser Pleat:</b> {item.trousePleat}</Typography>
                                        <Typography variant="body2"> <b>Trouser Buckle:</b> {item.trouserBuckle}</Typography>
                                        <Typography variant="body2"> <b>Trouser Loop:</b> {item.trouserLoop}</Typography>
                                        <Typography variant="body2"> <b>Trouser Pocket:</b> {item.trouserPocket}</Typography>
                                    </>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default OrderDetails;
