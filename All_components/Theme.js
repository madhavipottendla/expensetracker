import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from './ThemeContext';
import { globalStyles } from './globalStyles';
import { useTranslation } from 'react-i18next';

const Theme = ({}) => {
  const { isDarkMode, toggleTheme } = useTheme();
   // for language
   const { t, i18n } = useTranslation();

  const handleLightModePress = () => {
    if (isDarkMode) {
      toggleTheme();
    }
  };

  const handleDarkModePress = () => {
    if (!isDarkMode) {
      toggleTheme();
    }
  };

  return (
    <View style={[globalStyles.container, isDarkMode && globalStyles.darkContainer]}>
      <TouchableOpacity onPress={handleLightModePress}>
        <View style={globalStyles.item}>
          <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkText]}>{t('Light')}</Text>
          <View style={globalStyles.itemWithIcon}>
            {isDarkMode ? null : <Icon name="check-circle" size={26} color={isDarkMode ? 'white' : 'blue'} />}
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDarkModePress}>
        <View style={globalStyles.item}>
          <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkText]}>{t('Dark')}</Text>
          <View style={globalStyles.itemWithIcon}>
            {isDarkMode ? <Icon name="check-circle" size={26} color={isDarkMode ? 'blue' : 'white'} /> : null}
          </View>
        </View>
      </TouchableOpacity>
      <View style={globalStyles.item}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkText]}>{t('Usedevicetheme')}</Text>
        <View style={globalStyles.itemWithIcon}>
          {/* <Icon name="check-circle" size={26} color="blue" /> */}
        </View>
      </View>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  
});
