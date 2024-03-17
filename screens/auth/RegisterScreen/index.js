import { SafeAreaView, View, Text } from "react-native";

// Styles
import { styles } from "./styles";

// Components
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

const Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Login to Expense</Text>
        <Text style={styles.helperText}>
          Welcome back, you have been missed
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
