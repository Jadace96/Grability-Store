// vendors
import { ScrollView } from "react-native";

// components
import { ProductCard } from "@/components";

// hooks
import { useProducts } from "@/hooks";

export const StoreScreen = () => {
  const { productsState } = useProducts();

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      {productsState.products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};
