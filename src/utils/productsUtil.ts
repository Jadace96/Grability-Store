// types
import { IProduct } from "@/types";

export const findProductById = (
  products: IProduct[],
  productId: number
): IProduct => {
  const product = products.find((product) => product.id === productId) || [];

  return product as IProduct;
};
