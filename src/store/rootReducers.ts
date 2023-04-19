// vendors
import { combineReducers } from "@reduxjs/toolkit";

// reducers
import carReducer from "./features/car/carSlice";
import productsReducer from "./features/products/productsSlice";

export const rootReducers = combineReducers({
  car: carReducer,
  products: productsReducer,
});
