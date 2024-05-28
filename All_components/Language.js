import { StyleSheet, Text, View,ScrollView,Pressable } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from './ThemeContext';
import { globalStyles } from './globalStyles';
import i18next from '../Services/i18next';
import { useTranslation } from 'react-i18next';



const Language = ({}) => {
    const { isDarkMode } = useTheme();
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
      };

  return (
    <ScrollView style={[globalStyles.containerScroll, isDarkMode && globalStyles.darkContainer]}>
     <Pressable  onPress={() => handleLanguageChange('en')}>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>English (EN)</Text>
      <View style={globalStyles.itemWithIcon}>
      {i18n.language === 'en' && <Icon name="check-circle" size={26} color="blue" />}
      </View>
      
    </View>
    </Pressable>
    <Pressable  onPress={() => handleLanguageChange('id')}>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Indonesian (ID)</Text>
      <View style={globalStyles.itemWithIcon}>
      {i18n.language === 'id' && <Icon name="check-circle" size={26} color="blue" />}
      </View>
    </View>
   </Pressable>
   <Pressable  onPress={() => handleLanguageChange('ar')}>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Arabic (AR)</Text>
      <View style={globalStyles.itemWithIcon}>
      {i18n.language === 'ar' && <Icon name="check-circle" size={26} color="blue" />}
      </View>
    </View>
    </Pressable>
    <Pressable  onPress={() => handleLanguageChange('zh')}>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Chinese (ZH)</Text>
      <View style={globalStyles.itemWithIcon}>
      {i18n.language === 'zh' && <Icon name="check-circle" size={26} color="blue" />}
      </View>
    </View>
    </Pressable>
    <Pressable  onPress={() => handleLanguageChange('nl')}>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Dutch (NL)</Text>
      {i18n.language === 'nl' && <Icon name="check-circle" size={26} color="blue" />}
    </View>
    </Pressable>
    <Pressable onPress={() => handleLanguageChange('fr')}>
    <View style={globalStyles.item}>
      <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>French (FR)</Text>
      {i18n.language === 'fr' && <Icon name="check-circle" size={26} color="blue" />}
    </View>
    </Pressable>
    <Pressable  onPress={() => handleLanguageChange('de')}>
    <View style={globalStyles.item}>
    <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>German (DE)</Text>
    {i18n.language === 'de' && <Icon name="check-circle" size={26} color="blue" />}
  </View>
  </Pressable>
  <Pressable  onPress={() => handleLanguageChange('it')}>
  <View style={globalStyles.item}>
  <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Italian (IT)</Text>
  {i18n.language === 'it' && <Icon name="check-circle" size={26} color="blue" />}
</View>
</Pressable>
<Pressable  onPress={() => handleLanguageChange('ko')}>
<View style={globalStyles.item}>
<Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Korean (KO)</Text>
{i18n.language === 'ko' && <Icon name="check-circle" size={26} color="blue" />}
</View>
</Pressable>
<Pressable  onPress={() => handleLanguageChange('pt')}>
<View style={globalStyles.item}>
<Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Portuguese (PT)</Text>
{i18n.language === 'pt' && <Icon name="check-circle" size={26} color="blue" />}
</View>
</Pressable>
<Pressable  onPress={() => handleLanguageChange('ru')}>
<View style={globalStyles.item}>
<Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Russian (RU)</Text>
{i18n.language === 'ru' && <Icon name="check-circle" size={26} color="blue" />}
</View>
</Pressable>
<Pressable  onPress={() => handleLanguageChange('es')}>
<View style={globalStyles.item}>
<Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>Spanish (ES)</Text>
{i18n.language === 'es' && <Icon name="check-circle" size={26} color="blue" />}
</View>
</Pressable>
  </ScrollView>
  )
}
export default Language;

const styles = StyleSheet.create({
  
    
  });