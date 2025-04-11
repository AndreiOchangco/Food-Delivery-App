// MenuStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from '../screens/MenuScreen';
import MenuCategoryOne from '../navigation/AdditionalStacks/MenuCategoryOne.js';
import MenuCategoryTwo from '../navigation/AdditionalStacks/MenuCategoryTwo.js';
import MenuCategoryThree from '../navigation/AdditionalStacks/MenuCategoryThree.js';
import MenuCategoryFour from '../navigation/AdditionalStacks/MenuCategoryFour.js';
import MenuCategoryFive from '../navigation/AdditionalStacks/MenuCategoryFive.js';
import MenuCategorySix from '../navigation/AdditionalStacks/MenuCategorySix.js';
import MenuCategorySeven from '../navigation/AdditionalStacks/MenuCategorySeven.js';
import MenuCategoryEight from '../navigation/AdditionalStacks/MenuCategoryEight.js';
import MenuCategoryNine from '../navigation/AdditionalStacks/MenuCategoryNine.js';
import MenuCategoryTen from '../navigation/AdditionalStacks/MenuCategoryTen.js';

const MenuStack = createStackNavigator();

const MenuStackScreen = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryOne"
        component={MenuCategoryOne}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryTwo"
        component={MenuCategoryTwo}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryThree"
        component={MenuCategoryThree}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryFour"
        component={MenuCategoryFour}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryFive"
        component={MenuCategoryFive}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategorySix"
        component={MenuCategorySix}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategorySeven"
        component={MenuCategorySeven}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryEight"
        component={MenuCategoryEight}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryNine"
        component={MenuCategoryNine}
        options={{ headerShown: false }}
      />
      <MenuStack.Screen
        name="MenuCategoryTen"
        component={MenuCategoryTen}
        options={{ headerShown: false }}
      />
    </MenuStack.Navigator>
  );
};

export default MenuStackScreen;
