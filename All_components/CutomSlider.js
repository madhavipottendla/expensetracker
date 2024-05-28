import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanResponder } from 'react-native';

const CustomSlider = () => {
    const [percentage, setPercentage] = useState(10); // Initial percentage value
    const [trackWidth, setTrackWidth] = useState(null);
    const [thumbWidth, setThumbWidth] = useState(null); // Define thumbWidth state
    const trackRef = useRef(null);
    const thumbRef = useRef(null);
  
    const handlePress = (event) => {
      if (!trackWidth) return; // Check if track width is available
      const locationX = event.nativeEvent.locationX || event.nativeEvent.pageX - trackRef.current.pageX;
      const newPercentage = (locationX / trackWidth) * 100;
      setPercentage(Math.min(100, Math.max(0, newPercentage))); // Ensure percentage stays within bounds
    };
  
    const thumbPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newX = Math.min(trackWidth - (thumbWidth || 0), Math.max(0, gestureState.moveX - (thumbWidth || 0) / 2));
        const newPercentage = (newX / (trackWidth - (thumbWidth || 0))) *100;
        setPercentage(Math.min(100, Math.max(0, newPercentage))); // Ensure percentage stays within bounds
      },
    });
    
  
    return (
      <View style={styles.container}>
        <TouchableOpacity
          ref={trackRef}
          style={styles.sliderTrack}
          onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
          onPress={(event) => handlePress(event)}
        >
          <View style={[styles.sliderBar, { width: `${percentage}%` }]} />
        </TouchableOpacity>
        <View
          ref={thumbRef}
          style={[styles.thumb, { left: `${percentage}%` }]}
          onLayout={(event) => setThumbWidth(event.nativeEvent.layout.width)} // Measure thumb width
          {...thumbPanResponder.panHandlers}
        >
          <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    padding:50,
  },
  sliderTrack: {
    backgroundColor: '#ddd',
    height: 20,
    borderRadius: 10,
    width: '100%',
    position:'absolute'
  },
  sliderBar: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  thumb: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 30,
    backgroundColor: '#007bff',
    borderRadius: 20,
    zIndex: 1,
    marginLeft: 25, 
  },
  percentageText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default CustomSlider;
