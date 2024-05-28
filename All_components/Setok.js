import React, { useEffect } from 'react';
import { StyleSheet, Text, Image, View, BackHandler, Alert } from 'react-native';
import { globalStyles } from './globalStyles';

const Setok = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => navigation.navigate('Signup') },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Navigation to home page after 2 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);

    return () => {
      backHandler.remove();
      clearTimeout(timeout); // Clear the timeout to prevent memory leaks
    };
  }, []);

  return (
    <View style={globalStyles.Setcontainer}>
      <View>
        <Image source={require('../assets/success.png')} style={globalStyles.setimage} />
      </View>
      <Text style={globalStyles.set1}>You are set!</Text>
    </View>
  );
};

export default Setok;

const styles = StyleSheet.create({});
