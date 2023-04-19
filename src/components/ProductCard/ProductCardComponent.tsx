// vendors
import { View } from "react-native";
import { Text, Button, Card, Icon } from "@rneui/themed";

// types
import { IProduct } from "@/types";

// styles
import { styles } from "./ProductCardComponentStyles";
import { useState } from "react";

// iterfaces
interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Image
          style={{ padding: 0, resizeMode: "contain" }}
          source={{ uri: product.image }}
        />
        <Card.Divider style={{ marginTop: 20 }} />

        <View>
          <Text>Product: {product.name}</Text>
          <Text>Unit Price: ${product.unit_price}</Text>
          <Text
            style={
              product.stock === 0
                ? { color: "red", textDecorationLine: "line-through" }
                : {}
            }
          >
            Stock: {product.stock}
          </Text>
        </View>

        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button
            disabled={quantity === 0}
            onPress={() => {
              product.stock = product.stock + 1;
              setQuantity(quantity - 1);
            }}
            icon={<Icon name="remove" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 5,
              backgroundColor: "rgba(214, 61, 57, 1)",
            }}
            titleStyle={{ color: "white", marginHorizontal: 20 }}
          />

          <Text
            h3
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {quantity}
          </Text>

          <Button
            buttonStyle={{ borderRadius: 5 }}
            disabled={product.stock === 0}
            icon={<Icon name="add" color="#ffffff" />}
            onPress={() => {
              product.stock = product.stock - 1;
              setQuantity(quantity + 1);
            }}
          />
        </View>
      </Card>
    </View>
  );
};
