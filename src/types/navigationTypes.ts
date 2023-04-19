// vendors
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TRootStackParamList = {
  Store: undefined;
  Cart: undefined;
};

export type TScreenProps = NativeStackScreenProps<TRootStackParamList>;
