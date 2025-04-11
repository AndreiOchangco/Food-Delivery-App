import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoryCard = ({ title1, img1, stack1, price1, rating1 }) => {
  const navigation = useNavigation();
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={`full-${i}`} name="star-sharp" size={25} color="#FFC72C" />);
    }
  
    if (hasHalfStar) {
      stars.push(<Ionicons key="half" name="star-half-sharp" size={25} color="#FFC72C" />);
    }
  
    while (stars.length < 5) {
      stars.push(<Ionicons key={`empty-${stars.length}`} name="star-outline" size={25} color="#FFC72C" />);
    }
  
    return stars;
  };
  

  return (
    <View>
      <TouchableOpacity style={styles.container}>
            <Image source={img1} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title1}</Text>
              <Text style={styles.title}>₱ {price1}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(rating1)}
                <Text style={styles.ratingText}>{rating1}</Text>
              </View>
            </View>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    width: '75%',
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
    height: 305,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 15,
  },
  
});

export default CategoryCard;