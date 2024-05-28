import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

interface OrderDetails {
  _id: string;
  fullName: string;
  orderdata: {
    _id: string;
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
    bodyType: string;
    item: string;
    bodyFitting: string;
    fabric: string;
    lapelStyle: string;
    trousePleat: string;
    trouserBuckle: string;
    trouserLoop: string;
    trouserPocket: string;
  }[];
}

const OrderConfirm = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    if (orderId) {
      fetch(`http://localhost:6451/orderlist/${orderId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setOrderDetails(data);
          // console.log(data);
        })
        .catch((error) =>
          console.error("Error fetching order details:", error)
        );
    }
  }, [orderId]);

  return (
    <div>
      <Box
        sx={{
          width: "75%",
          margin: "80px auto",
          height: "100vh",
        }}
      >
        <Typography variant="h3" align="center" marginBottom={"20px"}>
          {" "}
          Order Confirmed{" "}
        </Typography>
        <Box>
          {orderDetails ? (
            <>
              <Typography variant="body1" align="left" fontWeight={"bold"}>
                Hi {orderDetails.fullName}, <br />
                We are glad that your order has been successfully placed with
                us. We will keep you updated on the progress.
              </Typography>
              <br />
              <Typography variant="body1" align="left" fontWeight={"bold"}>
                {" "}
                Order Id: {orderDetails._id}{" "}
              </Typography>
              {orderDetails.orderdata && (
                <>
                  <Typography variant="body1" align="left" fontWeight={"bold"}>
                    {" "}
                    Items:{" "}
                    {orderDetails.orderdata
                      .map((item) => item.item)
                      .join(", ")}{" "}
                  </Typography>
                  <br />
                  <br />
                  <br />
                  <Typography variant="body1" align="center">
                    For more information Contact Us :{" "}
                    <b> support@talossolutionsllc.com </b>{" "}
                  </Typography>
                </>
              )}
            </>
          ) : (
            <Box>
              <Typography variant="body1" align="center">
                {" "}
                Unable to fetch order details...
              </Typography>
              <Typography variant="body1" align="center">
                To know more Contact Us : <b> support@talossolutionsllc.com </b>{" "}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default OrderConfirm;
