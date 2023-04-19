// vendors
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// types
import { ICarState, IProduct } from "@/types";

const initialState: ICarState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
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

export const { actions: cartActions } = cartSlice;
export default cartSlice.reducer;
