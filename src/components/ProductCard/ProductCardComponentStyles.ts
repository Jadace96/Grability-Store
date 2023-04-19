// vendors
import { StyleSheet } from "react-native";

// constants
import { DEVICE } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    // backgroundColor: "red",
    // alignItems: "space-between",
  },

  card: {
    backgroundColor: "red",
    width: DEVICE.width / 2.2,
    height: DEVICE.height / 3,
    justifyContent: "center",
  },

  cardImageContainer: {},

  cardImage: {
    width: "50%",
    height: "50%",
    resizeMode: "cover",
  },
});
