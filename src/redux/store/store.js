import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productReducers } from "../reducers/productReducers";
import { userReducers } from "../reducers/userReducers";

const reducer = {
  user: userReducers,
  products: productReducers
};
const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
