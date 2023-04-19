// vendors
import { View } from "react-native";
import { Badge, Button } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLinkTo, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { StoreScreen, CartScreen } from "../screens";

// types
import { TRootStackParamList, TScreenProps } from "../types";
import { useAppSelector } from "@/hooks";

const Stack = createNativeStackNavigator<TRootStackParamList>();

const RootNavigator = ({ navigation }: TScreenProps) => {
  const linkTo = useLinkTo();
  const itemsInCart = useAppSelector(({ cart }) => cart.totalItems);

  return (
    <Stack.Navigator initialRouteName="Store">
      <Stack.Screen
        name="Store"
        component={StoreScreen}
        options={{
          headerRight: () => (
            <Button
              type="clear"
              title={
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                  {itemsInCart > 0 && (
                    <Badge
                      status="primary"
                      value={itemsInCart}
                      badgeStyle={{ left: 5 }}
                    />
                  )}
                  <MaterialCommunityIcons
                    size={24}
                    name="cart-outline"
                    color="black"
                  />
                </View>
              }
              onPress={() => linkTo("/Cart")}
            />
          ),
        }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
