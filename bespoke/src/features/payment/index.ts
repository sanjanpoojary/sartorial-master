import axios from "axios";
import { STRIPE_TOKEN } from "./types";
// import { updatePaymentStatus } from "./paymentSlice";

axios.defaults.baseURL = "http://localhost:6451";

export const stripeToken =
  (token: any, navigate: any) => async (dispatch: any) => {
    try {
      // console.log("Sending token to backend:", token);
      const res = await axios.post("/api/stripe", token);
      // console.log("Backend stripe response", res.data);
      dispatch({ type: STRIPE_TOKEN, payload: res.data });
      if (res.data.success === true && res.data.message === "Payment Success") {
        // dispatch(updatePaymentStatus("Paid"));
        // console.log("Navigating starts to confirm page");
        navigate(`/orderConfirm/${res.data.order._id}`);
        // console.log("Navigating ends to confirm page");
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };
