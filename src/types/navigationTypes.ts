// vendors
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TRootStackParamList = {
  Store: undefined;
  Cart: undefined;
};

export type TNavigation = NativeStackNavigationProp<TRootStackParamList>;
