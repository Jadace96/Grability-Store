// vendors
import { combineReducers } from "@reduxjs/toolkit";

// reducers
import cartReducer from "./features/cart/cartSlice";
import productsReducer from "./features/products/productsSlice";

export const rootReducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
