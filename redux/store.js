import { configureStore } from "@reduxjs/toolkit";
import invoiceSliceReducer from "./invoiceSlice";

const store = configureStore({
  reducer: {
    invoices: invoiceSliceReducer,
  },
});

export default store;
