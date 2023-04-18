// vendors
import { AntDesign } from "@expo/vector-icons";
import { Text, View, Image, TouchableHighlight } from "react-native";

// types
import { IProduct } from "@/types";

// styles
import { styles } from "./ProductCardComponentStyles";

// iterfaces
interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardImageContainer}>
          {product?.images?.map((image) => (
            <Image
              key={image}
              style={styles.cardImage}
              source={{ uri: image }}
            />
          ))}
          <TouchableHighlight onPress={() => {}}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => {}}>
            <AntDesign name="right" size={24} color="black" />
          </TouchableHighlight>
        </View>

        <Text>{product.name}</Text>
      </View>
    </View>
  );
};
