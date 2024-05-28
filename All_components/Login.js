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
import { Ionicons } from '@expo/vector-icons';

import { firebaseConfig } from '../firebaseConfig';
import { initializeApp } from 'firebase/app';

import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth';
const { width } = Dimensions.get('window');

// validation 
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6;
  };

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // Moved refreshing state to the top
  const [isLoading, setIsLoading] = useState(false);
  

  // Error state variables Validation for Signup
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to handle text input change
  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  // Initialize Firebase outside the component body
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage),
  });

  const handleSignIn = () => {
    // Validation
    let isValid = true;
    if (!email || !validateEmail(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    }
    if (!password || !validatePassword(password)) {
      setPasswordError('Password is required');
      isValid = false;
    }
  
    if (isValid) {
      setIsLoading(true);
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Signed In!');
          const user = userCredential.user;
          console.log(user);
          fetchUserData(email); // Fetch user data after successful login
        })
        .catch((error) => {
          console.log(error);
          Alert.alert('Invalid Credentials!');
        })
        .finally(() => {
          // Hide activity indicator
          setIsLoading(false);
        });
    }
  };
  
  // Fetch user data from backend server
  const fetchUserData = (email) => {
    fetch(`http://10.68.5.26:3800/api/user/${email}`)
      .then(response => response.json())
      .then(userData => {
        if (userData.error) {
          // Show error if user data is not found
          Alert.alert('Error', userData.error);
        } else {
          // Navigate to Dashboard and pass user data as props
          // navigation.navigate('Visibledata', { userData});
          navigation.navigate('Dashboard', {userData});
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        Alert.alert('Error', 'Failed to fetch user data');
      });
  };
  
 
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
        Alert.alert('Password Reset Email Sent', `Check your email ${email} and follow the instructions to reset your password.`);
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  // Move onRefresh outside the component body
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setEmail('');
      setPassword('');
      setRefreshing(false);
      // Here you would typically trigger any data fetching logic to refresh your content
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
      
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <View style={styles.container}>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <TextInput
            style={[styles.input, emailError ? styles.inputError : null, email && validateEmail(email) ? styles.inputValid : null]}
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            <View style={[styles.input, styles.passwordInput, passwordError ? styles.inputError : null,password && validatePassword(password) ? styles.inputValid : null]}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
               
              />
              <TouchableOpacity
                style={styles.passwordToggle}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="grey"
                  style={styles.passwordToggleIcon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.button]} onPress={handleSignIn}>
            {isLoading ? (<ActivityIndicator size="small" color="#00ff00" />) : (
                <Text style={styles.buttonText}>Login</Text>
            )}
              
              
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
            <Text style={styles.smallText}>Forgot Password?</Text>
            </TouchableOpacity>
            <Text style={styles.AlreadyLog}>
              Already have an account?{' '}
              <Text style={styles.AlreadyLog1} onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
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
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordToggle: {
    marginLeft: 10,
  },
  passwordToggleIcon: {},
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#7f3dff',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
  checkboxText1: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: '#7f3dff',
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
  smallText: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#7f3dff',
  },
  googleButton: {
    width: '100%',
    borderColor: 'lightgrey',
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  AlreadyLog: {
    fontSize: 16,
    color: 'grey',
    paddingTop: 5,
  },
  AlreadyLog1: {
    fontSize: 16,
    color: '#7f3dff',
    textDecorationLine: 'underline',
  },
});

export default Login;
