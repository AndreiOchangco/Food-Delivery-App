import React, { useContext } from 'react';
import { SafeAreaView, FlatList, View, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from 'react-native';
import HomeCard from '../components/HomeCard';
import HomeDetails from '../data/HomeDetails';
import Header from '../components/Header';
import { ThemeContext } from '../context/ThemeContext.js';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <Header title="McDonald" />
      <FlatList
        ListHeaderComponent={
          <TouchableOpacity style={styles.headerTouchable}
          onPress={() => navigation.navigate("MenuCategoryTen")} 
            activeOpacity={0.9}
          >
            <View style={styles.headerView}>
              <Image
                source={require('../assets/Home/1PUB_Minecraft_Meal.jpg')}
                style={styles.headerLogo}
              />
              <Text style={[styles.headerText, { color: isDarkMode ? '#fff' : '#000' }]}>
                Dig into Minecraft Movie Meal
              </Text>
              <Text style={[styles.bodyText, { color: isDarkMode ? '#fff' : '#000' }]}>
                Ready to fill your inventory?{"\n"}
                Check out A Minecraft Movie Meal featuring 1 of 6 limited edition collectibles.{"\n"}
                Pick a 10 pc. Chicken McNuggets® to try spicy Nether Flame Sauce or Big Mac® and unlock the McDonald's Add-On in Minecraft after purchase, only when you order in the app.{"\n"}
                Or, get A Minecraft Movie Happy Meal® for your little crafters with 1 of 12 imaginative toys.{"\n"}
                Movie only in theaters.
              </Text>
            </View>
          </TouchableOpacity>
        }
        data={HomeDetails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HomeCard
            title1={item.title1}
            desc1={item.desc1}
            img1={item.img1}
            stack1={item.stack1}
          />
        )}
        initialNumToRender={1}
        removeClippedSubviews={true}
        scrollEventThrottle={16}
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
  },
  headerTouchable: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: 20,
    lineHeight: 20,
  },
});

export default HomeScreen;