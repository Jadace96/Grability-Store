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
  isFetching: boolean;
}

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const storedProducts = useAppSelector(({ products }) => products.products);

  const [productsState, setProductsState] = useState<IProductsState>({
    isFetching: false,
  });

  const getProducts = useCallback(async () => {
    dispatch(cartActions.reset());
    setProductsState({ isFetching: true });

    const response = (await getProductsService()) as IProductsApiResponse;

    if (response?.products) {
      dispatch(productsActions.add(response.products));
      setProductsState({ isFetching: false });
    }

    response?.error &&
      setProductsState({ error: response.error, isFetching: false });
  }, []);

  useEffect(() => {
    storedProducts.length === 0 && getProducts();
  }, []);

  const addProductToCart = (product: IProduct) => {
    const data = {
      ...product,
      stock: product.stock - 1,
      inCart: product.inCart + 1 || 1,
    };

    dispatch(cartActions.add(data));
    dispatch(productsActions.update(data));
  };

  const removeProductFromCart = (product: IProduct) => {
    const data = {
      ...product,
      stock: product.stock + 1,
      inCart: product.inCart - 1 || 0,
    };
    dispatch(cartActions.remove(product));
    dispatch(productsActions.update(data));
  };

  return {
    getProducts,
    productsState,
    addProductToCart,
    removeProductFromCart,
    products: storedProducts,
  };
};
