import { configureStore } from "@reduxjs/toolkit";
import footerSlice from "./slices/footerSlice";
import homeSlice from "./slices/homeSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    footer: footerSlice,
    home: homeSlice,
    product: productSlice
  }
});