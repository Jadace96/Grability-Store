import { IApiErrorResponse } from "./apiTypes";

export interface IProductsResponse {
  products: IProduct[];
}

export interface IProduct {
  nombre: string;
  unidad_precio: number;
  cantidad: number;
  name: string;
  unit_price: number;
  stock: number;
}
