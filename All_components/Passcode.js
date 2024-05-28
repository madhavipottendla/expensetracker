import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomKeyboard = ({ onPress, onBackspace,storePasscode }) => {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9',  <TouchableOpacity style={styles.key} onPress={onBackspace}>
  <MaterialIcons  name="backspace" size={44} color="#FFFFFF" />
</TouchableOpacity>,'0'];

// Handle press event for the arrow-right button
const handleArrowRightPress = () => {
    storePasscode();
  };

  return (
    <View style={styles.keyboardContainer}>
      {keys.map((key) => (
        <TouchableOpacity
          key={key} 
          style={styles.key}
          onPress={() => onPress(key)}
        >
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity style={styles.key} onPress={handleArrowRightPress}>
        <MaterialCommunityIcons  name="arrow-right"  size={44} color="#FFFFFF" />
      </TouchableOpacity>
     
    </View>
  );
};

const PasscodeScreen = ({navigation}) => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#7f3dff'); // Set status bar background color to white
    StatusBar.setBarStyle('dark-content'); // Set status bar text color to dark
  }, []);
  const [passcode, setPasscode] = React.useState('');
  const [error, setError] = React.useState('');

  const handleKeyPress = (key) => {
    if (passcode.length < 4) {
      setPasscode(passcode + key);
    }
  };

  const handleBackspace = () => {
    setPasscode(passcode.slice(0, -1));
  };
//   print in console
React.useEffect(() =>{
 console.log("Passcode Entered:", passcode)   
},[passcode]);

const storePasscode = () => {
    if(passcode.length === 4){
        console.log("Stored passcode:", passcode);
        setError("")
        navigation.navigate("PasscodeConfirm", {storedPasscode :passcode})
    }else{
    setError('Please enter a 4-digit passcode')
    }
   
    // You can do further processing with the passcode here, like saving it to AsyncStorage or sending it to a server
  };
  return (
    <View style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.title}>Let’s  setup your PIN</Text>
      <View style={styles.passcodeContainer}>
        {Array.from({ length: 4 }).map((_, index) => (
          <View key={index} style={styles.passcodeDigit}>
            <Text style={styles.passcodeDigitText}>
              {passcode.length > index ? '●' : ''}
            </Text>
          </View>
        ))}
        
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text>:null}
      </View>
      <CustomKeyboard onPress={handleKeyPress} onBackspace={handleBackspace}  storePasscode={storePasscode}/>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'#7f3dff',
   
  },
  container2:{
    alignItems: 'center',
    backgroundColor:'#7f3dff'
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color:'#ffffff'
  },
  passcodeContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  passcodeDigit: {
    borderWidth: 3,
    borderColor: '#AB80FF',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    overflow: 'hidden', 
  },
  passcodeDigitText: {
    fontSize: 68,
    textAlign: 'center',
    position:'absolute',
    bottom:-26,
    color:'#ffffff'
  },
  errorText:{
   color:'yellow',
   fontWeight:'600',
   fontSize:18,
   paddingVertical:20,
  },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  key: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    margin: 6,
   
    
  },
  keyText: {
    fontSize: 44,
    color:'#FFFFFF'
  },
});

export default PasscodeScreen;
