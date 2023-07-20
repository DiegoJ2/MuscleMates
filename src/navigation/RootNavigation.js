import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; 

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";
import CompScreen from "../screens/CompScreen";

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  const getTabBarIcon = (name) => ({ color, size, focused }) => (
    <Icon name={name} color={focused ? "#FFFFFF" : "#00ff00"} size={size} />
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#645F5F", 
            elevation: 0, 
          },
          showLabel: false,
          tabStyle: {
            backgroundColor: "#808080", 
            borderTopColor: "#645F5F", 
            borderTopWidth: 2, 
          },
          activeTintColor: "#00ff00", 
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
            tabBarIcon: getTabBarIcon("trophy"), 
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
            tabBarIcon: getTabBarIcon("user"), 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
