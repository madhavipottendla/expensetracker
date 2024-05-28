import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, BackHandler, Alert } from 'react-native';
import { globalStyles } from './globalStyles';
import { useNavigation } from '@react-navigation/native';


const SetokAccountVerify = ({}) => {
    const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Hold on!',
        'Are you sure you want to go back?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => navigation.navigate('SignupCarousel') },
        ],
        { cancelable: false }
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={globalStyles.Setcontainer}>
      <View>
        <Image source={require('../assets/success.png')} style={globalStyles.setimage} />
      </View>
      <Text style={globalStyles.set1}>Verification Successful!</Text>
      <Text>Go To <Text>Login</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SetokAccountVerify;
