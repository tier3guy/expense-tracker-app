import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  svgContainer: {
    alignItems: "center",
  },
  bannerTextContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  bannerText: {
    textAlign: "center",
    fontFamily: "poppins-bold",
    fontSize: 24,
    color: colors.blue,
  },
  helperText: {
    textAlign: "center",
    fontFamily: "poppins",
    fontSize: 16,
    marginTop: 20,
    color: colors.orange,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 10,
  },
  registerContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  registerContainerText: {
    fontFamily: "poppins",
    fontSize: 16,
  },
  registerContainerTextMain: {
    color: colors.blue,
    fontFamily: "poppins-semibold",
  },
});
