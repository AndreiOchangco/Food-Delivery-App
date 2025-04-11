import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../screens/AboutScreen.js';
import AboutSectionOne from '../navigation/AdditionalStacks/AboutSectionOne';
import AboutSectionTwo from '../navigation/AdditionalStacks/AboutSectionTwo';
import AboutSectionThree from '../navigation/AdditionalStacks/AboutSectionThree';
import AboutSectionFive from '../navigation/AdditionalStacks/AboutSectionFive';
import AboutSectionSix from '../navigation/AdditionalStacks/AboutSectionSix';
import AboutSectionSeven from '../navigation/AdditionalStacks/AboutSectionSeven';
import AboutSectionEight from '../navigation/AdditionalStacks/AboutSectionEight';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AboutScreen" 
        component={AboutScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AboutSectionOne" 
        component={AboutSectionOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AboutSectionTwo" 
        component={AboutSectionTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AboutSectionThree" 
        component={AboutSectionThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutSectionFive" 
        component={AboutSectionFive}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutSectionSix" 
        component={AboutSectionSix}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutSectionSeven" 
        component={AboutSectionSeven}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutSectionEight" 
        component={AboutSectionEight}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
    padding: 10,
  },
  backButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default AboutStack;