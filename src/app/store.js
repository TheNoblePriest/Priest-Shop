import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../../pages/user/userSlice";
import productSlice from "../../src/features/product/productSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
});
