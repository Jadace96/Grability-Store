// vendors
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// constants
import { STORAGE_KEYS } from "@/constants";

// types
import { IProduct, IProducts } from "@/types";

const initialState: IProducts = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.products = [...payload];
    },
  },
});

export const { actions: productsActions } = productsSlice;
export default productsSlice.reducer;
