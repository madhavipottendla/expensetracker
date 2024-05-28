import React, { useEffect } from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';

const WelcomeScreen = ({navigation}) => {

useEffect (() =>{
  StatusBar.setBackgroundColor('#7f3dff');
  StatusBar.setBarStyle('dark-content'); 
    const timer = setTimeout(() =>{
        navigation.navigate("SignupCarousel");
    },1000);
    return  () => clearTimeout(timer);
},[navigation]);


// Back handler
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.text} onPress={()=>navigation.navigate('SignupCarousel')}>montra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7f3dff',
  },
  text: {
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'transparent', 
    position: 'absolute',
    zIndex: 1, 
    color:'#ffffff'
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: '#f050f9', 
    position: 'absolute',
    left: '50%', 
    top: '50%', 
    transform: [{ translateX: -60 }, { translateY: -33 }], 
    opacity: 0.5, 
  },
});

export default WelcomeScreen;
