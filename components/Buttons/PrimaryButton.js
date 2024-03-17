import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Button = ({ label = "Button", onClick = () => {}, style = {} }) => {
  return (
    <TouchableOpacity onClick={onClick} style={[styles.buttonContainer, style]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.blue,
  },
  text: {
    textAlign: "center",
    color: colors.gray,
    fontSize: 20,
    fontFamily: "poppins-semibold",
  },
});

export default Button;
