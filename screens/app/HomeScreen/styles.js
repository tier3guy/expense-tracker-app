import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  banner: {
    backgroundColor: colors.blue,
    paddingTop: "15%",
    paddingHorizontal: 20,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "#0553",
  },
  card: {
    borderRadius: 20,
    backgroundColor: "white",
    opacity: 0.1,
    height: 200,
    marginVertical: 20,
    padding: 10,
  },
});
