// vendors
import { ScrollView } from "react-native";

// components
import { ProductCard } from "@/components";

// hooks
import { useAppDispatch, useAppSelector, useProducts } from "@/hooks";

// store
import { cartActions, productsActions } from "@/store";

// types
import { IProduct, TNavigation } from "@/types";

interface IProps {
  navigation: TNavigation;
}

export const StoreScreen = ({ navigation }: IProps) => {
  const { products } = useProducts();
  const dispatch = useAppDispatch();
  const { cart, products: products_ } = useAppSelector((state) => state);

  const onAddProduct = (product: IProduct) => {
    product.stock--;
    dispatch(cartActions.add(product));
    dispatch(productsActions.update(product));
  };

  const onRemoveProduct = (product: IProduct) => {
    product.stock++;
    dispatch(cartActions.remove(product));
    dispatch(productsActions.update(product));
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddProduct={onAddProduct}
          onRemoveProduct={onRemoveProduct}
        />
      ))}
    </ScrollView>
  );
};
