import React, { useState, useEffect, } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Alert,
  RefreshControl,
  ActivityIndicator
} from 'react-native';


import { firebaseConfig } from '../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const { width } = Dimensions.get('window');

// validation 
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [refreshing, setRefreshing] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);

  // Error state variables Validation for Signup
  const [emailError, setEmailError] = useState('');
 

  // Function to handle text input change
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

 

  // Initialize Firebase outside the component body
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

 
//   Resend password verification
const handleForgotPassword = () => {
    // Validate email address
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }
  
    // Send password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Alert.alert('Password Reset Email Sent', `Check your email ${email} and follow the instructions to reset your password.`);
        navigation.navigate('ForgotPASSWORDEmail',{email:email});
      })
      .catch((error) => {
        // Alert.alert('Error', error.message);
        Alert.alert("Please enter valid email address.");
      });
  };

  // Move onRefresh outside the component body
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setEmail('');
      setRefreshing(false);
      // Here you would typically trigger any data fetching logic to refresh your content
    }, 2000);
  };

  return (
    <SafeAreaView style={{flex:1}}>
    
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
      
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <View style={styles.container}>
          <View style={styles.forgottextcon}>
          <Text style={styles.forgottext}>Don’t worry.</Text>
          <Text style={styles.forgottext}>Enter your email and we’ll</Text>
          <Text style={styles.forgottext}>send you a link to reset your</Text>
          <Text style={styles.forgottext}>password.</Text>
          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <TextInput
            style={[styles.input, emailError ? styles.inputError : null, email && validateEmail(email) ? styles.inputValid : null]}
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            
            <TouchableOpacity style={[styles.button]} onPress={handleForgotPassword}>
            {isLoading ? (<ActivityIndicator size="small" color="#00ff00" />) : (
                <Text style={styles.buttonText}>Continue</Text>
            )}
              
              
            </TouchableOpacity>
            
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    position:'relative',
    width:'100%',
   
    
  },
  forgottextcon:{
  marginBottom:40,
  },
  forgottext:{
    fontSize: 26,
    fontWeight: '500',
    // marginTop:20,
    lineHeight:32,
    
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  inputError: {
    borderColor: 'red',
  },
  inputValid: {
    borderColor: 'green',
    borderWidth:2,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
    position: 'relative',
    textAlign: 'left',
    width: '100%',

  },

  

 
  button: {
    width: '100%',
    backgroundColor: '#7f3dff',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  
});

export default ForgotPassword;
