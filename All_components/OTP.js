import { firebase } from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const OTP = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [code, setCode] = useState('');

  const sendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setVerificationId(confirmation.verificationId);
      Alert.alert('OTP Sent!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to send OTP');
    }
  };

  const verifyOTP = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        code
      );
      await auth().signInWithCredential(credential);
      Alert.alert('Success', 'Phone Number Verified!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to verify OTP');
    }
  };

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
      <TextInput
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send OTP" onPress={sendOTP} />
      <TextInput
        placeholder="Enter OTP"
        value={code}
        onChangeText={setCode}
      />
      <Button title="Verify OTP" onPress={verifyOTP} />
    </View>
  );
};

export default OTP;
