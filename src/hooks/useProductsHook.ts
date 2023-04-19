// vendors
import { useEffect, useState, useCallback } from "react";

// services
import { getProductsService } from "@/services/productsService";

// hooks
import { useAppDispatch, useAppSelector } from "./useStoreHooks";

// types
import { IProductsApiResponse, IProduct } from "../types";
import { productsActions } from "@/store";

interface IProductsState extends IProductsApiResponse {
  isFetching?: boolean;
  products: IProduct[];
}

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const storedProducts = useAppSelector(({ products }) => products.products);

  let [productsState, setProductsState] = useState<IProductsState>({
    products: storedProducts || [],
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

    if (response?.products) {
      dispatch(productsActions.add(response.products));
      setProductsState({
        products: response?.products || [],
      });
    }

    response?.error &&
      setProductsState({ products: [], error: response?.error });
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return { getProducts, productsState };
};
