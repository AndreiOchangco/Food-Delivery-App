import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext.js';
import SectionCard from '../../components/SectionCard';
import SectionOneDetails from '../../data/SectionOneDetails.js';

const AboutSectionOne = ({ route }) => {
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
                          <Text style={[styles.bodyHeader, {color: isDarkMode ? 'white' : 'black' }]}>Ingredients</Text>
                          <Image
                          source={require('../../assets/About/Header_2PUB_Ingredients.jpg')}
                          style={styles.headerLogo}
                          />
                      </View>
                      <View style={styles.bodyView}>
                          <Text style={[styles.bodyText, {color: isDarkMode ? 'white' : 'black' }]}>
                          At McDonald’s, we take great care to ensure that what we serve every day is safe, quality food. That means we use 100% real beef patties seasoned with just a pinch of salt and pepper. 
                          It means our Egg McMuffin® is made with a freshly cracked egg. And, our Filet-O-Fish® sandwich is made with 100% whitefish sourced from sustainably managed fisheries. 
                          It means our Chicken McNuggets® are made with white meat chicken. Simply put, it means real, quality ingredients and always evolving what matters to you.
                          </Text>
                      </View>
                  </>
                  }
                  data={SectionOneDetails}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                  <SectionCard 
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
    aspectRatio: 1.6,
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
  },
  });  

export default AboutSectionOne;