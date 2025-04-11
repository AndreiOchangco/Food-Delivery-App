import React, { useContext } from 'react';
import { SafeAreaView, FlatList, View, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuCard from '../components/MenuCard';
import MenuDetails from '../data/MenuDetails';
import Header from '../components/Header';
import { ThemeContext } from '../context/ThemeContext.js';

const MenuScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Header title="McDonald" />
      <FlatList
        ListHeaderComponent={
          <View style={styles.headerView}>
            <Image
              source={require('../assets/Home/1PUB_Minecraft_Meal.jpg')}
              style={styles.headerLogo}
            />
            <Text style={[styles.headerText, { color: isDarkMode ? '#fff' : '#000' }]}>
              McDonald’s Menu
            </Text>
          </View>
        }
        data={MenuDetails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuCard
            title1={item.title1}
            title2={item.title2}
            img1={item.img1}
            img2={item.img2}
            stack1={item.stack1}
            stack2={item.stack2}
          />
        )}
        initialNumToRender={1}
        removeClippedSubviews={true}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    paddingBottom: 15,
  },
  headerView: {
    // You can add additional styling here if needed
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  headerLogo: {
    width: '100%',
    height: 'auto',
    aspectRatio: 2,
    resizeMode: 'cover',
  },
  bodyText: {
    fontSize: 15,
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginBottom: 50,
    lineHeight: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default MenuScreen;