import * as React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import CustomerDetails from "./customerDetails";
// import Paymentpage from "./paymentpage";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import PaymentPage from "../payment/PaymentPage";
// import { stripeToken } from "../payment/index";

const steps = ["Customer Details", "Payment"];

function stepContent(step: any) {
  switch (step) {
    case 0:
      return <CustomerDetails />;

    // case 1:
    //   return <PaymentPage stripeToken={stripeToken} />;
  }
}

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const methods = useForm();
  // const navigate = useNavigate();
  let [productList, setProductList] = useState<any[]>([]);
  const [orderId, setOrderId] = useState();
  // console.log(orderId);

  const getProduct = () => {
    fetch("http://localhost:6451/cartlist")
      .then((response) => response.json())
      .then((productArray) => {
        setProductList(productArray);
      });
  };

  useEffect(() => {
    getProduct();
  }, [1]);

  const handleNext: SubmitHandler<FieldValues> = async () => {
    // if (activeStep === steps.length - 1) {
    const formData = methods.getValues();
    let url = "http://localhost:6451/orderlist";
    let orderdata = {
      address: formData.address,
      country: formData.country,
      email: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      state: formData.state,
      zipCode: formData.zipCode,
      orderStatus: "Order Placed",
      // paymentStatus: "",
      itemlist: productList,
    };
    let postdata = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(orderdata),
    };
    fetch(url, postdata)
      .then((res) => res.json())
      .then((serverReply: any) => {
        // console.log(serverReply);
        let Id = serverReply.orderId;
        // console.log(Id);
        setOrderId(Id);

        // if (serverReply.success) {
        //   console.log(serverReply.success);
        //   orderdata.paymentStatus = "Paid";
        // } else {
        //   orderdata.paymentStatus = "Pending";
        // }
        // console.log(orderdata.paymentStatus);

        //
        // if (serverReply.success || serverReply.status === "success") {
        //   getProduct();
        //   navigate("/orderConfirm");
        // } else {
        //   console.error("Payment failed");
        // }
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(data);
  };
  //    else {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   }
  // };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Box
        sx={{
          marginX: { lg: "50px 20px", xs: "20px 6px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "cenetr",
          alignItems: "ceneter",
          marginY: "50px",
        }}
      >
        <Box>
          <Stepper alternativeLabel activeStep={activeStep} sx={{}}>
            {steps.map((step, index) => {
              const stepProps: { completed?: boolean } = {};
              return (
                <Step key={index} {...stepProps}>
                  <StepLabel sx={{}}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>

        <Box
          sx={{
            margin: { sx: "15px 15px", md: "30px 30px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {stepContent(activeStep)}
              <Box>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Box sx={{ height: "220px" }}>
                      <Typography sx={{ mt: 6, mb: 6 }}>
                        Order Added To Cart
                      </Typography>
                      <Box>
                        <Link to="/catalog" style={{ margin: "10px" }}>
                          {" "}
                          Continue Shopping{" "}
                        </Link>
                      </Box>
                    </Box>
                    {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box> */}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Box
                      sx={{
                        margin: "auto",
                        width: "95%",
                        display: "flex",
                        flexDirection: "row",
                        pt: 2,
                        justifyContent: "spaceBetween",
                      }}
                    >
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />
                      <PaymentPage orderId={orderId} />
                      {/* <Button */}
                      {/* type="submit"
                        variant="contained"
                        // onClick={handleNext} */}
                      {/* > */}
                      {/* {activeStep === steps.length - 1
                          ? "Place Order"
                          : "Next"} */}
                      {/* </Button> */}
                    </Box>
                  </React.Fragment>
                )}
              </Box>
            </form>
          </FormProvider>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutPage;
