import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MenuCategoryOne from './AdditionalStacks/MenuCategoryOne';
import MenuCategoryThree from './AdditionalStacks/MenuCategoryThree';
import MenuCategoryFive from './AdditionalStacks/MenuCategoryFive';
import MenuCategoryTen from './AdditionalStacks/MenuCategoryTen';
import McDeliveryStackScreen from './AdditionalStacks/McDeliveryStackScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
      name="MenuCategoryOne" 
      component={MenuCategoryOne} 
      options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
      name="MenuCategoryThree" 
      component={MenuCategoryThree} 
      options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
      name="MenuCategoryFive" 
      component={MenuCategoryFive} 
      options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
      name="MenuCategoryTen" 
      component={MenuCategoryTen} 
      options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
      name="McDeliveryStackScreen" 
      component={McDeliveryStackScreen} 
      options={{ headerShown: false }} 
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;