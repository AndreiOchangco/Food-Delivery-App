import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext.js';

const ThemeToggleStackScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={[styles.container, themeStyles.container]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={[styles.headerContainer, themeStyles.headerContainer]}>
        {canGoBack && (
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={themeStyles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        <Image
          source={require('../../assets/Logo/mcdo-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={[styles.title, themeStyles.text]}>Theme Settings</Text>
      <View style={styles.row}>
        <Text style={[styles.text, themeStyles.text]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 10,
    zIndex: 1,
  },
  logo: {
    width: 100,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
});

// Light theme styles
const lightStyles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff' 
},
  headerContainer: { 
    backgroundColor: 'white' 
},
  text: { 
    color: 'black' 
},
  backButtonText: { 
    color: 'black', 
    fontSize: 16 
},
});

// Dark theme styles
const darkStyles = StyleSheet.create({
  container: { 
    backgroundColor: '#121212' 
},
  headerContainer: { 
    backgroundColor: '#1e1e1e' 
},
  text: { 
    color: '#fff' 
},
  backButtonText: { 
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16 
},
});

export default ThemeToggleStackScreen;