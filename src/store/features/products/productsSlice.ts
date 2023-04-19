// vendors
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    update: (state, { payload }: PayloadAction<IProduct>) => {
      state.products = state.products.map((product) =>
        product.id === payload.id ? payload : product
      );
    },
    resetProductsInCart: (state) => {
      state.products = state.products.map((product) => ({
        ...product,
        inCart: 0,
      }));
    },
    reset: (state) =>
      (state = {
        products: [],
      }),
  },
});

export const { actions: productsActions } = productsSlice;
export default productsSlice.reducer;
