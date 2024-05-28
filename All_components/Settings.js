import { Button, View, Text,StyleSheet } from 'react-native';
import React from 'react'
import { useTheme } from './ThemeContext';
import { globalStyles } from './globalStyles';


const Settings = ({navigation}) => {
    const { isDarkMode } = useTheme();
  return (
    <View  style={[globalStyles.containerHomeSetting, isDarkMode && globalStyles.darkContainer]}>
    <Text  style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Home Screen</Text>
    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
  )
}

export default Settings

const styles = StyleSheet.create({})