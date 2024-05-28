import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Animated, Pressable,RefreshControl,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { ThemeProvider } from './All_components/ThemeContext';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Profile from './All_components/Profile';
import Detail from './All_components/Detail';
import Currency from './All_components/Currency';
import Language from './All_components/Language';
import Theme from './All_components/Theme';
import Security from './All_components/Security';
import Notification from './All_components/Notification';


import Signup from './All_components/SignupPage';
import Login from './All_components/Login';
import TabScreen from './All_components/TabScreen';

import Verification from './All_components/Verification';
import ForgotPassword from './All_components/ForgotPassword';
import ForgotPasswordEmail from './All_components/ForgotPasswordEmail';
import SignupCarousel from './All_components/SignupCarousel';
import SetupAccount from './All_components/SetupAccount';
import NewAccount from './All_components/NewAccount';
import Wallet from './All_components/Wallet';
import Setok from './All_components/Setok';
import Passcode from './All_components/Passcode';
import PasscodeConfirm from './All_components/PaascodeConfirm';
import Email from './All_components/Email';
import Transfer from './All_components/Transfer';
import visibledata from './All_components/visibledata';
import BudgetEmpty from './All_components/BudgetEmpty';
import Create_budget from './All_components/Create_budget';
import BudgetAfter from './All_components/BudgetAfter';
import Detail_budget from './All_components/Detail_budget';
import Edit_Budget from './All_components/Edit_Budget';
import Remove_budget from './All_components/Remove_budget';
import Welcome_screen from './All_components/Welcome_Screen';
import SetokVerify from './All_components/SetokVerify';
import CustomSlider from './All_components/CutomSlider';
import SetokAccountVerify from './All_components/SetokAccountVerify';
import User_DashBoard from './All_components/User_DashBoard';
import AddAttachment from '../All_components/AddAttachment';













const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();



function App({navigation}) {

  useEffect(() => {
    StatusBar.setBackgroundColor('#7f3dff'); // Set status bar background color to white
    StatusBar.setBarStyle(''); // Set status bar text color to dark
  }, []);
  // Refresh Control
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
 
  
  
  return (
    <I18nextProvider i18next={i18next}>
      <ThemeProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName='AddAttachment'>
        <Stack.Screen name="Welcome_screen" component={Welcome_screen} options={{headerShown:false}}/>
        <Stack.Screen name="UserProfile" component={Profile}/>
        <Stack.Screen name="Settings" component={Detail}  options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}}/>
        <Stack.Screen name="Currency" component={Currency}
        options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}} />
        <Stack.Screen name="Language" component={Language}
        options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}} />
        <Stack.Screen name="Theme" component={Theme} 
        options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}}/>
        <Stack.Screen name="Security" component={Security} 
        options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}}/>
        <Stack.Screen name="Notification" component={Notification}
        options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}}/>
      <Stack.Screen 
      name="Signup" 
      component={Signup} 
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#000000',
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }} // Adjust the margin as needed
            onPress={() => navigation.navigate('SignupCarousel')} // Navigate to the login page
          >
          
            <MaterialCommunityIcons name="arrow-left" size={24} color="#000000" /> 
          </TouchableOpacity>
        ),
      })}
    />
        <Stack.Screen name="Login" component={Login} 
        options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}}/>
        <Stack.Screen name="Dashboard" component={TabScreen} options={{headerShown:false}} />
        <Stack.Screen name="Verification" component={Verification} options={{headerShown:false}}/>
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#000000'}}/>
        <Stack.Screen name="ForgotPASSWORDEmail" component={ForgotPasswordEmail} options={{headerShown:false}}/>
        <Stack.Screen name="Passcode" component={Passcode} options={{headerShown:false}}/>
        <Stack.Screen name="PasscodeConfirm" component={PasscodeConfirm} options={{headerShown:false}}/>
        <Stack.Screen name="Email" component={Email} options={{headerShown:false}}/>
        <Stack.Screen name="SetokVerify" component={SetokVerify}  options={{headerShown:false}}/>
        <Stack.Screen name="SetokAccountVerify" component={SetokAccountVerify}  options={{headerShown:false}}/>
        <Stack.Screen name="CustomSlider" component={CustomSlider}  options={{headerShown:false}}/>
        <Stack.Screen name="User_DashBoard" component={User_DashBoard}  options={{headerShown:false}}/>
        {/* Sathish*/}
        <Stack.Screen name="SignupCarousel" component={SignupCarousel} options={{headerShown:false}}/>
        {/* Manisha*/}
        <Stack.Screen name="SetupAccount" component={SetupAccount} options={{headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleAlign: 'center',}}/>
        <Stack.Screen name="NewAccount" component={NewAccount}  options={{headerStyle: {
          backgroundColor: '#7f3dff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#ffffff'}}/>
        <Stack.Screen name="Wallet" component={Wallet}  options={{headerStyle: {
          backgroundColor: '#7f3dff',
        },
        headerTitleAlign: 'center',
      headerTintColor:'#ffffff'}}/>
        <Stack.Screen name="Setok" component={Setok}  options={{headerShown:false}}/>
        {/* Madhavi*/}
        <Stack.Screen name="Transfer" component={Transfer}  options={{headerShown:false}}/>
        <Stack.Screen name="Visibledata" component={visibledata}  options={{headerShown:false}}/>
        {/*Praveen   Budget */}
        <Stack.Screen name="BudgetEmpty" component={BudgetEmpty}  options={{headerShown:false, } }/>
        <Stack.Screen name="Create_budget" component={Create_budget}  options={{headerShown:true,headerStyle: {
          backgroundColor: '#7F3DFF',
          
        },
        headerTintColor: '#ffffff', 
        headerTitleAlign: 'center',}}/>
        <Stack.Screen name="BudgetAfter" component={BudgetAfter}  options={{headerShown:false}}/>
        <Stack.Screen name="Detail_budget" component={Detail_budget}  options={{headerShown:false,}}/>
        <Stack.Screen name="Edit_Budget" component={Edit_Budget}  options={{headerShown:false}}/>
        <Stack.Screen name="Remove_budget" component={Remove_budget}  options={{headerShown:false}}/>

        {/*New Work */}
        <Stack.Screen name="AddAttachment" component={AddAttachment}  options={{headerShown:true}}/>
        
        
        
        
      </Stack.Navigator>
      
        </NavigationContainer>
      </ThemeProvider>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#7f3dff',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
    zIndex: 1,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  additionalIconsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 110,
    width: '100%',
    paddingHorizontal: 100,
    zIndex: -1,
  },
  additionalIcon1: {
    backgroundColor: '#00A86B',
    borderRadius: 15,
    borderRadius: 50,
    padding: 15,
    marginTop:100

  },
  additionalIcon2: {
    backgroundColor: '#0077ff',
    borderRadius: 50,
    padding: 16.5,
    marginBottom:40
  },
  additionalIcon3: {
    backgroundColor: '#fd3c4a',
    borderRadius: 15,
    borderRadius: 50,
    padding: 15,
    marginTop:100
  },
});

export default App;
