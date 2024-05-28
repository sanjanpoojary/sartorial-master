import {
  connect,
  //  useSelector
} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "./index";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../app/store/ConfigureStore";
// import { RootState } from "../../app/store/ConfigureStore";
function Payment({ stripeToken, orderId }: any) {
  // console.log(orderId);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  // const paymentStatus = useAppSelector((state) => state.stripe);
  // console.log(import.meta.env.VITE_STRIPE_KEY);
  const navigate = useNavigate();
  const orderIdRef = useRef(orderId);
  // const paymentStatus = useSelector(
  //   (state: RootState) => state.payment.paymentStatus
  // );

  useEffect(() => {
    fetch("http://localhost:6451/cartlist")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0].grandTotal);
        const totalFromAPI = parseFloat(data[0].grandTotal);
        // console.log(totalFromAPI);
        setGrandTotal(totalFromAPI);
      })
      .catch((error) => {
        console.error("Error fetching grandTotal:", error);
      });
  }, []);

  // useEffect(() => {
  //   if (paymentStatus === "Paid") {
  //     navigate("/OrderConfirm");
  //   }
  // }, [paymentStatus]);
  console.log(import.meta.env.VITE_STRIPE_KEY);
  // console.log(orderId);
  useEffect(() => {
    orderIdRef.current = orderId;
    // console.log("Order ID in useEffect:", orderId);
  }, [orderId]);
  // function handleOrderConfirmation() {

  //   console.log("from handleOrderConfirm()...", paymentStatus);
  //   if (paymentStatus.success) navigate("/orderConfirm");
  // }
  return (
    <>
      <StripeCheckout
        name="Fab Payment"
        description="Payment for Clothing Services"
        amount={Math.round((grandTotal ?? 0) * 100)}
        token={(token) => {
          const currentOrderId = orderIdRef.current;
          // console.log("Stripe token generated:", token);
          // console.log("Order ID:", currentOrderId);
          stripeToken(
            {
              amount: Math.round((grandTotal ?? 0) * 100),
              id: token.id,
              orderId: currentOrderId,
            },
            navigate
          );
        }}
        stripeKey={import.meta.env.VITE_STRIPE_KEY}
      ></StripeCheckout>
      {/* {paymentStatus && handleOrderConfirmation()} */}
    </>
  );
}

export default connect(null, actions)(Payment);
