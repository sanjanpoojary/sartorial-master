import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../features/auth/authSlice";
import { basketSlice } from "../../features/basket/basketSlice";
import stripeReducer from "../../features/payment/stripeReducer";
// import paymentSlice from "../../features/payment/paymentSlice";
export const store = configureStore({
  reducer: {
    account: authSlice.reducer,
    basket: basketSlice.reducer,
    stripe: stripeReducer,
    // payment: paymentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
