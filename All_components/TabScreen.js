import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Pressable,BackHandler, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { ThemeProvider, useTheme } from './ThemeContext';
import i18next from '../Services/i18next';
import { I18nextProvider } from 'react-i18next';
import Profile from '../All_components/Profile';
import Budget from '../All_components/Budget';
import Transaction from '../All_components/Transaction';
import AppTABHome from '../All_components/AppTABHome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  {globalStyles}  from './globalStyles';






const Tab = createBottomTabNavigator();

const TabScreen = ({navigation,route}) => {
  const { userData } = route.params;
  const [showAdditionalIcons, setShowAdditionalIcons] = useState(false);
  const [iconName, setIconName] = useState("add");
  const { isDarkMode } = useTheme();
 
  const toggleAdditionalIcons = () => {
    setShowAdditionalIcons(!showAdditionalIcons);
    setIconName(showAdditionalIcons ? "add" : "close");
  };

  const translateY = new Animated.Value(70);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: showAdditionalIcons ? 0 : 70,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showAdditionalIcons]);

//Back Handler
useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => navigation.navigate("Signup")},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []); 

  return (
    <I18nextProvider i18next={i18next}>
      <ThemeProvider>
      <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          height: 70, // Adjust the height value according to your preference
        //   position: 'relative',
           // Add default styles
          ...(isDarkMode && globalStyles.darkContainer), // Add dark mode styles conditionally
        },
        tabBarItemStyle: {
          height: 55,
          justifyContent: 'space-around',
        },
        tabBarActiveTintColor: '#7f3dff',
        tabBarInactiveTintColor: '#c6c6c6',
      }}
    >
          <Tab.Screen
            name="Home"
            component={AppTABHome}
            initialParams={{ userData:userData}}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
              headerStyle: {
                backgroundColor: '#fdf7eb',
              },
              headerTitleStyle: {
                marginLeft:5, // Set left margin for the header title
              },
            }}
            
          />
          <Tab.Screen
            name="Transaction"
            component={Transaction}
            initialParams={{ userData:userData}}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="import" size={size} color={color} />
              ),
              headerStyle: {
                backgroundColor: '#7F3DFF',
                
              },
              headerTitleStyle: {
                marginLeft:5, // Set left margin for the header title
              },
              headerTintColor: '#FFFFFF',
            }}
          />
          <Tab.Screen
            name="."
            component={AppTABHome}
            options={{
              tabBarIcon: ({ color, size }) => null,
            }}
          />
          <Tab.Screen
            name="Budget"
            initialParams={{ userData:userData}}
            component={Budget}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="wallet" size={size} color={color} />
                
              ),
              headerTitleStyle: {
                marginLeft:5, // Set left margin for the header title
              },
              headerStyle: {
                backgroundColor: '#7F3DFF',
              },
              headerTintColor: '#FFFFFF',
              // headerTitleAlign: 'center', 
            }}
          />
          <Tab.Screen
            name="Profile"
            initialParams={{ userData:userData}}
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
              headerTitleStyle: {
                marginLeft:5, // Set left margin for the header title
              },
              headerStyle: {
                backgroundColor: '#F6F6F6',
              },
            }}
          />
        </Tab.Navigator>
        <Pressable style={styles.addButton} onPress={toggleAdditionalIcons}>
          <Ionicons name={iconName} size={50} color="#FFFFFF" />
        </Pressable>
        {showAdditionalIcons && (
          <Animated.View style={[styles.additionalIconsContainer, { transform: [{ translateY }] }]}>
            <MaterialCommunityIcons name="import" size={30} color="#FFFFFF" style={styles.additionalIcon1} />
            <MaterialCommunityIcons name="import" size={30} color="#FFFFFF" style={styles.additionalIcon2} />
            <Ionicons name="camera" size={30} color="#FFFFFF" style={styles.additionalIcon3} />
          </Animated.View>
        )}
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
        // zIndex: -1,
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
        marginBottom:30
      },
      additionalIcon3: {
        backgroundColor: '#fd3c4a',
        borderRadius: 15,
        borderRadius: 50,
        padding: 15,
        marginTop:100
      },
    });

export default TabScreen;
