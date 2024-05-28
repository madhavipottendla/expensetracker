import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from './ThemeContext';
import { globalStyles } from './globalStyles';
import { useTranslation } from 'react-i18next';

const Security = ({}) => {
    const { isDarkMode } = useTheme();
    // for language
    const { t, i18n } = useTranslation();
  return (
    <View style={[globalStyles.container, isDarkMode && globalStyles.darkContainer]}>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('PIN')}</Text>
      <View style={globalStyles.itemWithIcon}>
      <Icon name="check-circle" size={26} color="blue" />
      </View>
      
    </View>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Fingerprint')}</Text>
      <View style={globalStyles.itemWithIcon}>
      <Icon name="check-circle" size={26} color="blue" />
      </View>
    </View>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('FaceID')}</Text>
      <View style={globalStyles.itemWithIcon}>
      <Icon name="check-circle" size={26} color="blue" />
      </View>
    </View>
   
   
  </View>
  )
}
export default Security;

const styles = StyleSheet.create({
   
  });