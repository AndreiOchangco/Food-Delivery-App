import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext.js';
import McDeliveryCard from '../../components/McDeliveryCard.js';
import McDeliveryDetails from '../../data/McDeliveryDetails.js';

const McDeliveryStackScreen = ({ route }) => {
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
                  <>
                    <View style={styles.headerView}>
                        <Text style={[styles.bodyHeader, {color: isDarkMode ? 'white' : 'black' }]}>McDonald's Delivery: Food Delivery Near Me</Text>
                        <Image
                        source={require('../../assets/Home/1PUB_DigitalExperience_McDelivery.jpg')}
                        style={styles.headerLogo}
                        />
                       </View>
                       <View style={styles.bodyView}>
                       <Text style={[styles.bodyTextHeader, {color: isDarkMode ? 'white' : 'black' }]}>McDelivery® is where you get food. And free food</Text>
                        <Text style={[styles.bodyText, {color: isDarkMode ? 'white' : 'black' }]}>
                          Every McDelivery order in the app lets you earn MyMcDonald’s Rewards points—use those to get your free food. And, yup, you can get ‘em delivered, too. Imagine, McD’s you didn’t pay for brought right to you. Check out how easy ordering delivery is in the app.
                        </Text>
                        <Text style={[styles.bodyTextHeader, {color: isDarkMode ? 'white' : 'black' }]}>How you do this McDelivery thing</Text>
                    </View>
                  </>
                  }
                  data={McDeliveryDetails}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                  <McDeliveryCard 
                      title1={item.title1}
                      desc1={item.desc1}
                      title2={item.title2}
                      desc2={item.desc2}
                      img1={item.img1}
                      img2={item.img2}
                      stack1={item.stack1}
                      stack2={item.stack2}
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
    padding: 20,
  },
  headerLogo: {
    width: '100%',
    height: 'auto',
    aspectRatio: 2,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  bodyView: {
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 40,
  },
  bodyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  bodyText: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 20,
    marginBottom: 30,
    marginTop: 15,
  },
  bodyTextHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  });  

export default McDeliveryStackScreen;