// vendors
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// types
import { ICarState, IProduct } from "@/types";

const initialState: ICarState = {
  products: {},
  totalItems: 0,
  totalValue: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<IProduct>) => {
      state.totalItems++;
      state.totalValue += payload.unit_price;

      const productInCart = state.products[payload.id];
      state.products = {
        ...state.products,
        [payload.id]: {
          ...payload,
          quantityInCart: productInCart?.quantityInCart + 1 || 1,
        },
      };
    },
    remove: (state, { payload }: PayloadAction<IProduct>) => {
      state.totalItems--;
      state.totalValue -= payload.unit_price;

      const productInCart = state.products[payload.id];
      if (productInCart?.quantityInCart === 1) {
        delete state.products[payload.id];
      } else {
        state.products[payload.id] = {
          ...payload,
          quantityInCart: productInCart?.quantityInCart - 1,
        };
      }
    },
    restore: (state) =>
      (state = {
        products: {},
        totalItems: 0,
        totalValue: 0,
      }),
  },
});

export const { actions: cartActions } = cartSlice;
export default cartSlice.reducer;
