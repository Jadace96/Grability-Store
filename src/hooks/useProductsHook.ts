// vendors
import { useEffect, useState, useCallback } from "react";

// services
import { getProductsService } from "@/services/productsService";

// hooks
import { useAppDispatch, useAppSelector } from "./useStoreHooks";

// actions
import { cartActions, productsActions } from "@/store";

// types
import { IApiErrorResponse, IProduct, IProductsApiResponse } from "../types";

interface IProductsState extends Partial<IApiErrorResponse> {
  isFetching?: boolean;
}

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const storedProducts = useAppSelector(({ products }) => products.products);

  const [productsState, setProductsState] = useState<IProductsState>();
  const [products, setProducts] = useState<IProduct[]>(storedProducts || []);

  const getProducts = useCallback(async () => {
    setProductsState({ isFetching: true });

    const response = (await getProductsService()) as IProductsApiResponse;

    if (response?.products) {
      dispatch(productsActions.add(response.products));
      setProducts(response.products);
      setProductsState({ isFetching: false });
    }

    response?.error &&
      setProductsState({ error: response.error, isFetching: false });
  }, []);

  useEffect(() => {
    // storedProducts.length === 0 && getProducts();
    dispatch(cartActions.restore())
    getProducts();
  }, []);

  return { getProducts, productsState, products, setProducts };
};
