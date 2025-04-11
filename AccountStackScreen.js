import React, { useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext.js';

const AccountStackScreen = () => {
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

      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/Account/A-Ochangco.jpg')}
          style={styles.profileImage}
        />
        <Text style={[styles.profileName, { color: isDarkMode ? '#fff' : '#000' }]}>Andrei Ochangco</Text>
        <Text style={[styles.profileEmail, { color: isDarkMode ? '#ccc' : '#555' }]}>23101064@slc-sflu.edu.ph</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={[styles.label, { color: isDarkMode ? '#ccc' : '#888' }]}>Phone Number</Text>
        <Text style={[styles.value, { color: isDarkMode ? '#fff' : '#000' }]}>+63 926 667 5508</Text>

        <Text style={[styles.label, { color: isDarkMode ? '#ccc' : '#888', marginTop: 20 }]}>Address</Text>
        <Text style={[styles.value, { color: isDarkMode ? '#fff' : '#000' }]}>Pagdaraoan, City of San Fernando, La Union</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
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
  },
  logo: {
    width: 100,
    height: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#555',
  },
  infoSection: {
    marginTop: 30,
    paddingHorizontal: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    marginTop: 4,
  },
});

export default AccountStackScreen;