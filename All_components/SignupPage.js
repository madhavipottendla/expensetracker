import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView, RefreshControl, KeyboardAvoidingView, Alert, ActivityIndicator,BackHandler } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, initializeAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { openDatabase } from 'react-native-sqlite-storage';
// const db = openDatabase({ name: 'UserDatabase2.db' });
const { width } = Dimensions.get('window');

const validateUsername = (username) => {
  return username.length >= 3;
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const SignUpPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  // useEffect(() => {
  //   db.transaction((txn) => {
  //     txn.executeSql(
  //       "SELECT name FROM sqlite_master WHERE type='table' AND name='signup'",
  //       [],
  //       (tx, res) => {
  //         console.log('item:', res.rows.length);
  //         if (res.rows.length == 0) {
  //           txn.executeSql('DROP TABLE IF EXISTS signup', []);
  //           txn.executeSql(
  //             'CREATE TABLE IF NOT EXISTS signup(user_id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(200), email VARCHAR(200), password VARCHAR(200))',
  //             []
  //           );
  //         } else {
  //           console.log('already created table');
  //         }
  //       }
  //     );
  //   });
  // }, []);

  // const saveData = () => {
  //   db.transaction((txn) => {
  //     txn.executeSql(
  //       'INSERT INTO signup (username, email, password) VALUES (?,?,?)',
  //       [username, email, password],
  //       (tex, res) => {
  //         console.log(res);
  //       }
  //     )
  //   });
  // };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app, {
    persistence: AsyncStorage
  });

  const handleUsernameChange = (text) => {
    setUsername(text);
    setUsernameError('');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  const handleSignUp = async () => {
    let isValid = true;
    if (!username || !validateUsername(username)) {
      setUsernameError('Username is required');
      isValid = false;
    }
    if (!email || !validateEmail(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    }
    if (!password || !validatePassword(password)) {
      setPasswordError('Password is required');
      isValid = false;
    }

    
     try {
      const data = { username, email, password };

      const response = await fetch('http://10.68.5.26:3800/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to signup');
      }

      Alert.alert('Success', 'Registered successfully');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      Alert.alert('Error', `Failed to register: ${error.message}`);
    }

    if (isValid) {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setIsLoading(false);
              navigation.navigate('Verification',{email:email});
            })
            .catch(error => {
              setIsLoading(false);
              console.error("Error sending verification email:", error);
              Alert.alert("Error", "Failed to send verification email.");
            });
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
          Alert.alert("Error", error.message);
        });
    }
  };

  
  

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setUsername("");
      setEmail("");
      setPassword("");
      setUsernameError('');
      setEmailError('');
      setPasswordError('');
      setRefreshing(false);
    }, 2000);
  }, []);

 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <View style={styles.container}>
            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
            <TextInput
              style={[styles.input, usernameError ? styles.inputError : null, username && validateUsername(username) ? styles.inputValid : null]}
              placeholder="Name"
              value={username}
              onChangeText={handleUsernameChange}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            <TextInput
              style={[styles.input, emailError ? styles.inputError : null, email && validateEmail(email) ? styles.inputValid : null]}
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            <View style={[styles.input, styles.passwordInput, passwordError ? styles.inputError : null, password && validatePassword(password) ? styles.inputValid : null]}>
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
            <TouchableOpacity
              style={styles.button}
             onPress={handleSignUp}
            >
              {isLoading ? (<ActivityIndicator size="small" color="#00ff00" />) : (
                <Text style={styles.buttonText}>Signup</Text>
              )}
            </TouchableOpacity>
            <Text style={styles.smallText}>Or with</Text>
            <TouchableOpacity style={styles.googleButton}>
              <Image source={{ uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" }} style={styles.googleIcon} />
              <Text style={styles.googleText}>Sign Up with Google</Text>
            </TouchableOpacity>
            <Text style={styles.AlreadyLog}>Already have an account? <Text style={styles.AlreadyLog1} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
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
    backgroundColor: '#FFFFFF'
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
    borderWidth: 2,
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
  passwordToggleIcon: {
    // width: 20,
    // height: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#7f3dff',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  },
  smallText: {
    marginTop: 10,
    marginBottom: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: '600',
    color: 'grey',
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
    flexDirection: 'row'
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
    textDecorationLine: "underline"
  }
});

export default SignUpPage;
