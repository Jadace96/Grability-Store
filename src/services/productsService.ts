// adapters
import { fetcher } from "../adapters/fetcherAdapter";

// constants
import { ENDPOINTS } from "../constants/apiConstants";

// types
import { IProductsResponse } from "../types";

export const getProducts = async () =>
  await fetcher.get<IProductsResponse>(ENDPOINTS.PRODUCTS);
