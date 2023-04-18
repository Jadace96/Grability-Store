// vendors
import { StyleSheet } from "react-native";

// constants
import { device } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    // backgroundColor: "red",
    // alignItems: "space-between",
  },

  card: {
    backgroundColor: "red",
    width: device.width / 2.2,
    height: device.height / 3,
    justifyContent: "center",
  },

  cardImageContainer: {},

  cardImage: {
    width: "50%",
    height: "50%",
    resizeMode: "cover",
  },
});
