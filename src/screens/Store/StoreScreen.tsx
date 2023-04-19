// vendors
import { RefreshControl, ScrollView } from "react-native";

// components
import { ProductCard } from "@/components";

// hooks
import { useProducts } from "@/hooks";

export const StoreScreen = () => {
  const {
    products,
    getProducts,
    productsState,
    addProductToCart,
    removeProductFromCart,
  } = useProducts();

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 40 }}
      refreshControl={
        <RefreshControl
          refreshing={productsState.isFetching}
          onRefresh={getProducts}
        />
      }
    >
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddProduct={addProductToCart}
          onRemoveProduct={removeProductFromCart}
        />
      ))}
    </ScrollView>
  );
};
