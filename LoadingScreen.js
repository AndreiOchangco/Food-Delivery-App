import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const LoadingScreen = () => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 2,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [progressAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={require('../assets/Logo/McDonalds.mp4')}
          style={styles.video}
          resizeMode="contain"
          shouldPlay
          isLooping
          isMuted
        />
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: 'auto',
    aspectRatio: 2,
    alignItems: 'center',
  },
  video: {
    width: '80%',
    height: 150,
  },
  progressBarContainer: {
    width: '80%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FFC72C',
  },
});

export default LoadingScreen;
