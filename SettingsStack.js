import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen'; 
import AccountStackScreen from '../navigation/AdditionalStacks/AccountStackScreen';
import AppInfoStackScreen from '../navigation/AdditionalStacks/AppInfoStackScreen';
import ThemeToggleStackScreen from '../navigation/AdditionalStacks/ThemeToggleStackScreen';
import ResetDataStackScreen from '../navigation/AdditionalStacks/ResetDataStackScreen'; 

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="AccountStackScreen"
        component={AccountStackScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="AppInfoStackScreen"
        component={AppInfoStackScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="ThemeToggleStackScreen"
        component={ThemeToggleStackScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="ResetDataStackScreen"
        component={ResetDataStackScreen}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;