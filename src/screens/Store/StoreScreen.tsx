// vendors
import { ScrollView } from "react-native";

// components
import { ProductCard } from "@/components";

// hooks
import { useProducts } from "@/hooks";

export const StoreScreen = () => {
  const { products, addProductToCart, removeProductFromCart } = useProducts();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
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
