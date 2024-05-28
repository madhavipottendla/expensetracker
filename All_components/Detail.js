import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import { useTheme } from './ThemeContext';
import { globalStyles } from './globalStyles';
import { useTranslation } from 'react-i18next';


const Detail = ({navigation}) => {
  const { isDarkMode } = useTheme();
  // for language
  const { t, i18n } = useTranslation();
  return (
    <ScrollView  style={[globalStyles.container, isDarkMode && globalStyles.darkContainer]}>
    <TouchableOpacity onPress={() => navigation.navigate('Currency')}>
      <View style={globalStyles.item}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Currency')}</Text>
        <View style={[globalStyles.itemWithIcon, isDarkMode && globalStyles.itemWithIcon]}>
        <Text style={[globalStyles.itemTextright, isDarkMode && globalStyles.itemTextright]}>USD</Text>
        <Icon name="angle-right" size={26} color="blue" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Language')}>
      <View style={globalStyles.item}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Language</Text>
        <View style={globalStyles.itemWithIcon}>
        <Text style={globalStyles.itemTextright}>{t('English')}</Text>
        <Icon name="angle-right" size={26} color="blue" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
      <View style={globalStyles.item}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Theme')}</Text>
        <View style={globalStyles.itemWithIcon}>
        <Text style={globalStyles.itemTextright}>{t('Dark')}</Text>
        <Icon name="angle-right" size={26} color="blue" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Security')}>
      <View style={globalStyles.item}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Security')}</Text>
        <View style={globalStyles.itemWithIcon}>
        <Text style={globalStyles.itemTextright}>{t('Fingerprint')}</Text>
        <Icon name="angle-right" size={26} color="blue" />
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
      <View style={globalStyles.item}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Notification')}</Text>
        <Icon name="angle-right" size={26} color="blue" />
      </View>
      </TouchableOpacity>
      <View style={{ ...globalStyles.item, marginTop:40}}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('About')}</Text>
        <Icon name="angle-right" size={26} color="blue" />
      </View>
      <View style={globalStyles.item}>
        <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Help')}</Text>
        <Icon name="angle-right" size={26} color="blue" />
      </View>
      
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
 
});
