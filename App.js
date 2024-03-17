import "react-native-gesture-handler";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

// Screens
import AppStack from "./screens/app";
import OnBoardingScreen from "./screens/auth/OnBoardingScreen";

export default function Main() {
  const [fontsLoaded, fontError] = useFonts({
    poppins: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "poppins-light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" />
      <AppStack />
    </View>
  );
}
