// vendors
import { combineReducers } from "@reduxjs/toolkit";

// reducers
import carReducer from "./features/car/carSlice";

export const rootReducers = combineReducers({ car: carReducer });
