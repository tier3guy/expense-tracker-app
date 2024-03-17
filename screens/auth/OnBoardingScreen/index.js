import { SafeAreaView, View, Text } from "react-native";

// Styles
import { styles } from "./styles";

// Assets
import LoginSvg from "../../../assets/svgs/LoginSvg";

// Components
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

const Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.svgContainer}>
          <LoginSvg />
        </View>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>
            The easiest approach to handle your finances with riches in a wise
            way.
          </Text>
          <Text style={styles.helperText}>
            We'll do our part to give you the most pertinent data.
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton label="Get Started" />
        <View style={styles.registerContainer}>
          <Text style={styles.registerContainerText}>
            Haven't registered yet?
          </Text>
          <Text
            style={[
              styles.registerContainerText,
              styles.registerContainerTextMain,
            ]}
          >
            Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen;
