import React, { useContext } from 'react';
import { SafeAreaView, FlatList, View, Text, Image, StyleSheet } from 'react-native';
import AboutCard from '../components/AboutCard';
import AboutDetails from '../data/AboutDetails.js';
import Header from '../components/Header';
import { ThemeContext } from '../context/ThemeContext.js';



const AboutScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <Header title="McDonald" />
      <FlatList
        ListHeaderComponent={
          <>
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
              <Text style={[styles.bodyText, { color: isDarkMode ? '#fff' : '#000' }]}>
                Explore McDonald's food facts, including calorie and dietary info.
                Learn about nutrition facts and the ingredients used to deliver quality in every meal,
                including more balanced options for a Happy Meal® and each fresh beef Quarter Pounder®* burger is cooked when you order.
              </Text>
            </View>
          </>
        }
        data={AboutDetails}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AboutCard 
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
  headerView: {
  },
  headerLogo: {
    width: '100%',
    height: 'auto',
    aspectRatio: 2,
    resizeMode: 'cover',
  },
  bodyView: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  bodyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 20,
  },
});

export default AboutScreen;