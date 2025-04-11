import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeCard = ({ title1, desc1, img1,stack1 }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(stack1);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={img1} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title1}</Text>
        <Text style={styles.text}>{desc1}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { 
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: 'auto',
    aspectRatio: 1.5,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 20,
  },
});

export default HomeCard;