import { configureStore } from "@reduxjs/toolkit";
import CreateUserSlice from "./createUsertSlice";
import CreateProductSlice from "./createProductSlice";
import CreateBasketSlice from "./createBasketSlice";

export const store = configureStore({
  reducer: {
    login: CreateUserSlice,
    pro: CreateProductSlice,
    bas: CreateBasketSlice,
  },
});
