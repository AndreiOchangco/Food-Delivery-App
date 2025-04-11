import React, { useContext } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryCard from '../../components/CategoryCard.js';
import CategoryEightDetails from '../../data/CategoryEightDetails.js';
import { ThemeContext } from '../../context/ThemeContext.js';

const MenuCategoryEight = () => {
    const navigation = useNavigation();
    const canGoBack = navigation.canGoBack();
    const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View style={[styles.headerContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : 'white' }]}>
            {canGoBack && (
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={[styles.backButtonText, { color: isDarkMode ? '#fff' : '#000' }]}>Back</Text>
              </TouchableOpacity>
            )}
            <Image
              source={require('../../assets/Logo/mcdo-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
            <FlatList
                ListHeaderComponent={
                <View style={styles.headerView}>
                    <Image
                    source={require('../../assets/Menu/breakfast.jpg')}
                    style={styles.headerLogo}
                    />
                    <Text style={[styles.headerText, { color: isDarkMode ? '#fff' : '#000' }]}>McCafé®</Text>
                </View>
                }
                data={CategoryEightDetails}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <CategoryCard
                    title1={item.title1}
                    img1={item.img1}
                    price1={item.price1}
                    rating1={item.rating1}
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
    backgroundColor: '#fff',
    paddingBottom: 15,
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: '75%', 
    transform: [{ translateY: -10 }], 
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    width: 100,
    height: 30,
  },
  headerView: {
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
    height: 200,
    resizeMode: 'cover',
  },
});

export default MenuCategoryEight;