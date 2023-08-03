import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome"; 

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";
import CompScreen from "../screens/CompScreen";

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  const getTabBarIcon = (name) => ({ size, color }) => {
    return <MaterialCommunityIcons name={name} color={color} size={size} />;
  };

  return (
    <NavigationContainer>
    <Tab.Navigator
        tabBarOptions={{
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#DFC5FE", 
            elevation: 0, 
          },
          showLabel: false,
          tabStyle: {
            backgroundColor: "#383838", 
            borderTopColor: "#383838", 
            borderTopWidth: 2,
          },
          activeTintColor: "#FFFFFF", // Set the active tint color to white
          inactiveTintColor: "#3A81FF", // Set the inactive tint color to blue (#3A81FF)
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: getTabBarIcon("home"), 
          }}
        />
<Tab.Screen
  name="Competitve"
  component={CompScreen}
  options={{
    headerShown: false,
    tabBarIcon: getTabBarIcon("stadium-variant"), // Use the stadium icon for the "Competitve" tab
  }}
/>
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown: false,
            tabBarIcon: getTabBarIcon("comment"), 
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: getTabBarIcon("account"), // Use the user icon for the "Profile" tab
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
