import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuCard = ({ title1, title2, img1, img2, stack1, stack2 }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.imgRow}>
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate(stack1)}>
          <ImageBackground 
            source={img1} 
            style={styles.image} 
            imageStyle={styles.imageStyle}
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{title1}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate(stack2)}>
          <ImageBackground 
            source={img2} 
            style={styles.image} 
            imageStyle={styles.imageStyle}
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{title2}</Text>
            </View>
          </ImageBackground>
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
  cardContainer: {
    width: '48%',
  },
  image: {
    width: '100%',
    height: 162,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default MenuCard;