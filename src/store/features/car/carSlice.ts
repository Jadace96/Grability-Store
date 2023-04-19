// vendors
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// constants
import { STORAGE_KEYS } from "@/constants";

// types
import { ICarState, IProduct } from "@/types";

const initialState: ICarState = {
  products: [],
};

export const carSlice = createSlice({
  name: STORAGE_KEYS.car,
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<IProduct>) => {
      state.products.push(payload);
    },
    remove: (state, { payload }: PayloadAction<{ productId: number }>) => {
      const filteredProducts = state.products.filter(
        (product) => product.id !== payload.productId
      );
      state.products = [...filteredProducts];
    },
  },
});

export const { actions: carActions } = carSlice;
export default carSlice.reducer;
