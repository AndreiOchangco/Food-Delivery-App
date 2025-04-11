import React, { useContext } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text, StyleSheet, View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import SettingsDetails from '../data/SettingsDetails';
import { ThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useContext(ThemeContext);

  const handlePress = (title) => {
    // Map each title to a screen name.
    switch (title) {
      case 'Account':
        navigation.navigate('AccountStackScreen');
        break;
      case 'App Info':
        navigation.navigate('AppInfoStackScreen');
        break;
      case 'Theme Toggle':
        navigation.navigate('ThemeToggleStackScreen');
        break;
      case 'Reset Data':
        navigation.navigate('ResetDataStackScreen');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <StatusBar barStyle="default" />
      <Header title="McDonald" />
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={styles.headerView}>
              <Image
                source={require('../assets/About/About_Our_Food.jpg')}
                style={styles.headerLogo}
              />
            </View>
            <View style={styles.bodyView}>
              <Text style={[styles.bodyHeader, { color: isDarkMode ? '#fff' : '#000' }]}>
                McDonald's Food Facts
              </Text>
            </View>
          </View>
        }
        data={SettingsDetails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { backgroundColor: isDarkMode ? '#1e1e1e' : 'white' }]}
            onPress={() => handlePress(item.title)}
          >
            <Text style={[styles.itemText, { color: isDarkMode ? '#fff' : 'black' }]}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
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
  headerLogo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  bodyView: {
    paddingHorizontal: 20,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  bodyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContent: {
    paddingVertical: 10,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  itemText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SettingsScreen;