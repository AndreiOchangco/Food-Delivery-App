import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';

import HomeStack from './HomeStack';
import MenuStack from './MenuStack';
import DealsStack from './AboutStack';
import SettingsStack from './SettingsStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarStyle: { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'fast-food' : 'fast-food-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFC72C',
        tabBarInactiveTintColor: isDarkMode ? '#999' : 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Menu" component={MenuStack} />
      <Tab.Screen name="About" component={DealsStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;