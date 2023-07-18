import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CalendarScreen from "../screens/Calendarscreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";

const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />  
      </Tab.Navigator>
    </NavigationContainer>
  );
}
