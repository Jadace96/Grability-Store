// vendors
import { View, Text, TouchableHighlight } from "react-native";

// components
import { ProductCard } from "../../components";
import { getProducts } from "../../services/productsService";

export const StoreScreen = () => {
  return (
    <View>
      <ProductCard />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={getProducts}
      >
        <Text>Get Products</Text>
      </TouchableHighlight>
    </View>
  );
};
