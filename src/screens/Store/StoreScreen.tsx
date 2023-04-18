// vendors
import { View, Text, TouchableHighlight, FlatList } from "react-native";

// components
import { ProductCard } from "@/components";

// hooks
import { useProducts } from "@/hooks/useProductsHook";

export const StoreScreen = () => {
  const { productsState } = useProducts();

  return (
    <View>
      <FlatList
        windowSize={1}
        scrollEnabled={productsState?.products?.length > 0}
        data={productsState?.products}
        removeClippedSubviews
        // style={styles.flatlist}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        initialNumToRender={20}
        ListEmptyComponent={<Text>Nothing to show!</Text>}
        ListFooterComponent={<Text>Footer</Text>}
      />
    </View>
  );
};
