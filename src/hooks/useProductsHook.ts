import { useCallback, useMemo } from "react";
// vendors
import { useEffect, useState } from "react";

// services
import { getProductsService } from "@/services/productsService";

// types
import { IProductsApiResponse, IProduct } from "../types";

interface IProductsState extends IProductsApiResponse {
  isFetching?: boolean;
  products: IProduct[];
}

export const useProducts = () => {
  const [productsState, setProductsState] = useState<IProductsState>({
    products: [],
  });

  // const data = {
  //   subscription: getProducts$().subscribe({
  //     next: (res: IProductsApiResponse) => {
  //       if (res?.errorMessage) {
  //         setProducts(null);
  //         setProductsError(res.errorMessage);
  //       }
  //       if (res?.products) {
  //         setProductsError(null);
  //         setProducts(res.products);
  //       }
  //     },
  //     complete: () => {
  //       setIsFetchingProducts(false);
  //       data.unsubscribe();
  //     },
  //   }),
  //   unsubscribe: () => {
  //     data.subscription.unsubscribe();
  //   },
  // };

  const getProducts = useCallback(async () => {
    setProductsState({ isFetching: true, products: [] });
    const response = (await getProductsService()) as IProductsApiResponse;
    setProductsState({
      error: response?.error,
      products: response?.products || [],
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return { getProducts, productsState };
};
