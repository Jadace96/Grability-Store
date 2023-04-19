import { IApiErrorResponse } from "./apiTypes";

export interface IProducts {
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  stock: number;
  image: string;
  inCart: number;
  unit_price: number;
}

export interface IProductsApiResponse
  extends Partial<IProducts>,
    Partial<IApiErrorResponse> {}