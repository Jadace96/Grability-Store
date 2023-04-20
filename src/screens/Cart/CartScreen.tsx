// vendors
import { useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { Image, ListItem, Button, Text, BottomSheet } from "@rneui/themed";

// hooks
import { useAppDispatch, useAppSelector, useProducts } from "@/hooks";

// utils
import { findProductById, formatCurrency } from "@/utils";

// store
import { cartActions, productsActions } from "@/store";

// constants
import { DEVICE } from "@/constants";

// types
import { TScreenProps } from "@/types";

export const CartScreen = ({ navigation }: TScreenProps) => {
  const dispatch = useAppDispatch();
  const { products: storedProducts, removeProductFromCart } = useProducts();
  const [shouldShowOrderDetails, setShowOrderDetails] = useState(false);
  const { products, totalItems, totalValue } = useAppSelector(
    ({ cart }) => cart
  );

  const onConfirmOrder = () => {
    dispatch(cartActions.reset());
    dispatch(productsActions.resetProductsInCart());
    setShowOrderDetails(false);

    navigation.popToTop();
  };

  const onDeleteProduct = (productId: number) => {
    const productToRemove = findProductById(storedProducts, productId);
    removeProductFromCart(productToRemove);
  };

  const orderDetailsData = useMemo(() => {
    // dispatch(cartActions.reset());
    const data = [
      {
        title: `${totalItems} Items`,
        titleStyle: { fontWeight: "bold" },
      },
      {
        title: `Total ${formatCurrency(totalValue)}`,
        titleStyle: { fontWeight: "bold" },
      },
      {
        title: "Confirm Order and Pay",
        containerStyle: {
          backgroundColor: "#52C41A",
        },
        titleStyle: {
          fontSize: 20,
          color: "white",
          fontWeight: "bold",
          paddingVertical: DEVICE.isIOS ? 10 : 0,
        },
        onPress: onConfirmOrder,
      },
    ];

    Object.values(products).forEach((product) => {
      data.unshift({
        title: `${product.quantityInCart}  ${product.name}`,
        titleStyle: { fontWeight: "normal" },
      });
    });

    return data;
  }, []);

  if (totalItems > 0) {
    return (
      <ScrollView>
        {Object.values(products).map((product) => (
          <ListItem.Swipeable
            topDivider
            bottomDivider
            key={product.id}
            rightContent={(reset) => (
              <Button
                title="Delete 1"
                onPress={() => {
                  onDeleteProduct(product.id);
                  reset();
                }}
                icon={{ name: "delete", color: "white" }}
                buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
              />
            )}
          >
            <Image
              source={{ uri: product.image }}
              PlaceholderContent={<ActivityIndicator />}
              containerStyle={{ aspectRatio: 1, flex: 0.5 }}
            />
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: "bold" }}>
                {product.name}
              </ListItem.Title>
              <ListItem.Subtitle>
                {product.quantityInCart} units
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                {formatCurrency(product.unit_price * product.quantityInCart)}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        ))}

        <Button
          title="Confirm Products"
          onPress={() => setShowOrderDetails(true)}
          buttonStyle={{ margin: 10 }}
        />
        <BottomSheet
          onBackdropPress={() => setShowOrderDetails(false)}
          isVisible={shouldShowOrderDetails}
        >
          {orderDetailsData.map((item, index) => (
            <ListItem
              key={index}
              onPress={item.onPress}
              containerStyle={item.containerStyle}
            >
              <ListItem.Content>
                <ListItem.Title style={item.titleStyle}>
                  {item.title}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
      </ScrollView>
    );
  }

  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Text style={{ textAlign: "center" }} h4>
        Nothing to show, start by adding products from the store!
      </Text>
    </View>
  );
};
