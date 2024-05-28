import React, { useState, useEffect,} from 'react';
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
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { firebaseConfig } from '../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');



// validation 
const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6;
  };

const ForgotPasswordEmail = ({ navigation }) => {
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
  //Back Handler
useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back Login?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => navigation.navigate("Login")},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []); 

//   page params for email 
const route = useRoute();
const Email = route.params.email;
  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordError('');
  };

  // Initialize Firebase outside the component body
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

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

     if(isValid){
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log('Signed In!');
            const user = userCredential.user;
            console.log(user);
            setTimeout(() =>{
                navigation.navigate('Dashboard');
            },2000,)
            
          })
          .catch((error) => {
            console.log(error);
            Alert.alert('Invalid Credentials!');
           
          }).finally(() => {
            // Hide activity indicator
            setIsLoading(false);
          });
     }
    
      
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
      
       
          <View style={styles.container}>
          <Image
        style={styles.tinyLogo}
        source={require('../assets/EmailSendCheck.png')}
      />
          <Text style={styles.EmailMessage}>Your email is on the way</Text>
          <Text style={styles.EmailMessagedown}>Check your email {Email} and</Text>
          <Text style={styles.EmailMessagedown}>follow the instructions to reset your</Text>
          <Text style={styles.EmailMessagedown}>password</Text>
            <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Passcode')}>
            {isLoading ? (<ActivityIndicator size="small" color="#00ff00" />) :(
                <Text style={styles.buttonText}>Set The PIN</Text>
            )}
              
              
            </TouchableOpacity>
            
          </View>


          
        
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical:80,
    backgroundColor: '#FFFFFF',
  },
  EmailMessage:{
textAlign:'center',
fontSize:25,
fontWeight:"500",
marginBottom:15,
  },
  EmailMessagedown:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'500'
    // marginBottom:10,
  },
  
  button: {
    width: '100%',
    backgroundColor: '#7f3dff',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', 
    bottom: 20,
   
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  
});

export default ForgotPasswordEmail;
