import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext.js';

const SectionCard = ({ title1, desc1, img1 }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Image source={img1} style={styles.image} />
      <View style={styles.textBox}>
        <Text style={[styles.title, {color: isDarkMode ? 'white' : 'black' }]}>{title1}</Text>
        <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black' }]}>{desc1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1.6,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 10,
  },
  textBox: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 20,
  },
});

export default SectionCard;