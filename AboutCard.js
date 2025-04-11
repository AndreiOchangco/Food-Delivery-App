import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext.js';

const AboutCard = ({ title1, desc1, title2, desc2, img1, img2, stack1, stack2 }) => {
  const navigation = useNavigation();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View>
      <View style={styles.imgRow}>
        <Image source={img1} style={styles.image} />
        <Image source={img2} style={styles.image} />
      </View>
      <View style={styles.textRow}>
        <View style={styles.textBox}>
          <Text style={[styles.title, {color: isDarkMode ? 'white' : 'black' }]}>{title1}</Text>
          <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black' }]}>{desc1}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={[styles.title, {color: isDarkMode ? 'white' : 'black' }]}>{title2}</Text>
          <Text style={[styles.text, {color: isDarkMode ? 'white' : 'black' }]}>{desc2}</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(stack1)}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(stack2)}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  image: {
    width: '48%',
    height: 'auto',
    aspectRatio: 1.5,
    resizeMode: 'cover',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  textBox: {
    width: '48%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginVertical: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffbc0d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default AboutCard;