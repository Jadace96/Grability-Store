// types
import { IProduct } from "./productTypes";

export interface ICarState {
  totalItems: number;
  totalValue: number;
  products: {
    [key: string | number]: {
      quantityInCart: number;
    } & IProduct;
  };
}
