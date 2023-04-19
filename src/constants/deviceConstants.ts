// vendors
import { Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const DEVICE = {
  width,
  height,
  isIOS: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
};
