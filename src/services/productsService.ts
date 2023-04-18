// adapters
import { fetcher } from "@/adapters/fetcherAdapter";

// constants
import { ENDPOINTS } from "@/constants";

// types
import { IProducts, IApiErrorResponse } from "@/types";

export const getProductsService = () =>
  fetcher.get<IProducts | IApiErrorResponse>(ENDPOINTS.PRODUCTS);