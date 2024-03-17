import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { Image } from "expo-image";
import Icon from "react-native-vector-icons/Ionicons";

// Styles
import { styles } from "./styles";
import colors from "../../../constants/colors";

// Contants
import { blurhash } from "../../../constants";

const Screen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.banner}>
        <View style={styles.profileHeader}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.image}
              source="https://picsum.photos/seed/696/3000/2000"
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: "poppins-light", color: colors.gray }}>
                Welcome Back
              </Text>
              <Text
                style={{ fontFamily: "poppins", color: "white", fontSize: 18 }}
              >
                Steave Paul
              </Text>
            </View>
          </View>
          <Icon name="notifications-outline" size={28} color={"white"} />
        </View>

        <View style={styles.card}>
          <Text>Balance</Text>
        </View>
      </View>
    </View>
  );
};

export default Screen;
