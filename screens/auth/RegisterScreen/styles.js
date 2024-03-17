import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 20,
    fontFamily: "poppins-bold",
    fontSize: 28,
    color: colors.blue,
    border: 2,
    borderColor: "red",
  },
  helperText: {
    fontFamily: "poppins",
    fontSize: 16,
    padding: 20,
    color: colors.orange,
  },
});
