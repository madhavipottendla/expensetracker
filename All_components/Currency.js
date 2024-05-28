import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from './globalStyles';
import { useTheme } from './ThemeContext';
import { useTranslation } from 'react-i18next';


const Currency = ({}) => {
    const { isDarkMode } = useTheme();
    // for language
    const { t, i18n } = useTranslation();
  return (
    <View style={[globalStyles.container, isDarkMode && globalStyles.darkContainer]}>
    <View style={globalStyles.item}>
      <Text  style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('UnitedStates')}</Text>
      <View style={globalStyles.itemWithIcon}>
      <Icon name="check-circle" size={26} color="blue"/>
      </View>
      
    </View>
    <View style={globalStyles.item}>
      <Text  style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Indonesia')}</Text>
      <View style={globalStyles.itemWithIcon}>
      <Icon name="check-circle" size={26} color="blue" />
      </View>
    </View>
    <View style={globalStyles.item}>
      <Text  style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Japan')}</Text>
      <View style={globalStyles.itemWithIcon}>
      <Icon name="check-circle" size={26} color="blue" />
      </View>
    </View>
    <View style={globalStyles.item}>
      <Text  style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Russia')}</Text>
      <View style={globalStyles.itemWithIcon}>
      <Icon name="check-circle" size={26} color="blue" />
      </View>
    </View>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Germany')}</Text>
      <Icon name="check-circle" size={26} color="blue" />
    </View>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Korea')}</Text>
      <Icon name="check-circle" size={26} color="blue" />
    </View>
  </View>
  )
}
export default Currency;

const styles = StyleSheet.create({
   
  });