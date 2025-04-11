import React, { useContext } from 'react';
import { SafeAreaView, View, StatusBar, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#121212' : 'white' }]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={[styles.headerContainer, { backgroundColor: isDarkMode ? '#1e1e1e' : 'white' }]}>
        <Image
          source={require('../assets/Logo/mcdo-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
  },
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 30,
  },
});

export default Header;