import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,ActivityIndicator,Alert } from 'react-native';

const Verification = ({navigation}) => {
 // email params
// const route = useRoute();
// const Email = route.params.email
// loading indicator 
const [loading, setLoading] = useState(true);
const [isLoading, setIsLoading] = useState(false);

 // Generate random 6-digit OTP
 const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const initialOTP = generateOTP(); // Generate OTP when the component mounts

const [otp, setOtp] = useState(initialOTP.split(''));
const [timer, setTimer] = useState(300); 

useEffect(() => {
 // Simulate loading for 5 seconds
 const loadingTimeout = setTimeout(() => {
  setLoading(false);
  startTimer();
}, 5000);

// Cleanup function
return () => clearTimeout(loadingTimeout);
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    if (timer > 0) {
      setTimer(timer - 1);
    } else {
      clearInterval(interval);
      // Handle timer expiration here (e.g., reset the timer or take action)
    }
  }, 1000);

  return () => clearInterval(interval);
}, [timer]);

const startTimer = () => {
  setTimer(300); // Reset timer to 5 minutes when starting
};


const handleVerify = async () => {
  setIsLoading(true);
  // Simulate an asynchronous operation, like fetching data or waiting
  await new Promise(resolve => setTimeout(resolve, 5000)); // 5000 milliseconds = 5 seconds
  setIsLoading(false); // Set loading to false after 5 seconds
  navigation.navigate('SetokVerify'); // Navigate to the next page after loading
};

const handleResend = () => {
  // Add logic to resend OTP
  // console.log('Resending OTP...');
};

const handleChangeOtp = (value, index) => {
  if (value.length > 1) return;

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  if (value.length === 1 && index < 5) {
    // Focus next input field if not the last one
    refs[index + 1].focus();
  }
};

const refs = [];
const createRef = (ref) => {
  if (ref) {
    refs.push(ref);
  }
};

  return (
    <View style={styles.container}>
    {loading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7f3dff" />
        <Text style={styles.waitText}>Wait just a minute...</Text>
      </View>
    ) : (
      <View>
        <Text style={styles.heading1}>Enter your</Text>
        <Text style={styles.heading2}>Verification Code</Text>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={value}
              onChangeText={(text) => handleChangeOtp(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={(ref) => createRef(ref)}
            />
          ))}
        </View>
        <Text style={styles.timerText}>
          {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
        </Text>
        <Text style={styles.info}>
          We sent verification code to your email <Text style={styles.otpemail}>{}</Text>. You can check your
          inbox.
        </Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.resendText}>I didn't receive the code? Send again</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVerify}>
        <View style={styles.verifyButton}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.verifyButtonText}>Verify</Text>
          )}
        </View>
      </TouchableOpacity>
    
      </View>
    )}
  </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
  flex:1,
  position:'relative',
  bottom: 0,
  left: 0,
  right: 0,
  justifyContent: 'flex-end',
  alignItems: 'left',
  paddingHorizontal: 20,
  backgroundColor: '#FFFFFF',
  paddingBottom: 50,
  
    
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitText: {
    marginTop: 10,
    fontSize: 20,
    color: '#555',
    fontWeight:'700'
  },
  heading1: {
    fontSize: 35,
    fontWeight: '500',
    marginTop:20,
  },
  heading2: {
    fontSize: 35,
    fontWeight: '500',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // borderWidth: 
    borderColor: 'black',
    fontSize: 30,
    textAlign: 'center',
    // marginHorizontal: 5,
    marginRight:10,
   
    backgroundColor:'lightgrey'
  },
  timerText: {
    marginBottom: 10,
    color:'#7f3dff',
    fontSize:18,
  },
  info: {
    marginBottom: 10,
    textAlign: 'left',
    fontSize:18,
    lineHeight:23,
  },
  otpemail:{
    color:'#7f3dff',
  },
  resendText: {
    textDecorationLine: 'underline',
    marginBottom: 50,
    fontSize:18,
    color:'#7f3dff',

  },
  verifyButton: {
    backgroundColor: '#7f3dff',
    padding: 15,
    borderRadius: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign:'center',
    fontWeight:'500'
  },
});

export default Verification;
