import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OctiIcons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Text, View } from "react-native";

// Screens
import HomeScreen from "./HomeScreen";
import AnalyticsScreen from "./AnalyticsScreen";
import AddPaymentsScreen from "./AddPaymentsScreen";

// Constants
import colors from "../../constants/colors";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="homeScreen"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            left: 0,
            elevation: 2,
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                icon="octi"
                iconName="home"
                focused={focused}
                label="Home"
              />
            ),
          }}
        />
        <Tab.Screen
          name="walletScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                icon="ion"
                iconName="wallet"
                focused={focused}
                label="Wallet"
              />
            ),
          }}
        />
        <Tab.Screen
          name="addPaymentsScreen"
          component={AddPaymentsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", paddingTop: 20 }}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <OctiIcons name="plus" size={28} color={"white"} />
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="analyticsScreen"
          component={AnalyticsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                icon="material"
                iconName="google-analytics"
                focused={focused}
                label="Expense"
              />
            ),
          }}
        />
        <Tab.Screen
          name="settingsScreen"
          component={AnalyticsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcons
                icon="ion"
                iconName="settings-outline"
                focused={focused}
                label="Settings"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const TabIcons = ({
  focused = false,
  icon = "",
  iconName = "",
  label = "",
}) => {
  const Icon =
    icon === "ion"
      ? IonIcons
      : icon === "material"
      ? MaterialCommunityIcons
      : icon === "octi"
      ? OctiIcons
      : null;

  if (!Icon || !iconName) return null;

  return (
    <View style={{ alignItems: "center", paddingTop: 20 }}>
      <Icon
        name={iconName}
        size={26}
        color={focused ? colors.blue : colors.gray}
      />
      <Text
        color={focused ? colors.blue : colors.gray}
        style={{
          fontFamily: "poppins-semibold",
          fontSize: 12,
          marginTop: 5,
          color: focused ? colors.blue : colors.gray,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default AppStack;
