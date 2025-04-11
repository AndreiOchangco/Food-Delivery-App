import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, Alert, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext.js';
import { useNavigation } from '@react-navigation/native';

const ResetDataScreen = () => {
  const { resetTheme } = useContext(ThemeContext);

  const handleReset = () => {
    // Reset theme and other data if required
    resetTheme();
    Alert.alert("Reset", "All settings have been reset to default.");
  };
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
        <Text style={[styles.title, {color: isDarkMode ? 'white' : 'black' }]}>Reset Data</Text>
        <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black' }]}>This will clear all saved data and reset theme to default.</Text>
        <Button title="Reset Data" onPress={handleReset} color="#d9534f" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default ResetDataScreen;