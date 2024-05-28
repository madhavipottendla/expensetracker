import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from './ThemeContext';
import { globalStyles } from './globalStyles';
import { useTranslation } from 'react-i18next';

const Notification = ({}) => {
  const { isDarkMode } = useTheme();
  const { t, i18n } = useTranslation();

  const [toggleState, setToggleState] = useState({
    expanseAlertEnabled: false,
    budgetEnabled: false,
    articlesEnabled: false,
  });

  const handleToggle = (toggleName) => {
    setToggleState((prevState) => ({
      ...prevState,
      [toggleName]: !prevState[toggleName],
      ...(prevState[toggleName] && {
        expanseAlertEnabled: toggleName === 'expanseAlertEnabled' ? false : prevState.expanseAlertEnabled,
        budgetEnabled: toggleName === 'budgetEnabled' ? false : prevState.budgetEnabled,
        articlesEnabled: toggleName === 'articlesEnabled' ? false : prevState.articlesEnabled,
      }),
    }));
  };

  return (
    <View style={[globalStyles.containerNotification, isDarkMode && globalStyles.darkContainer]}>
      <TouchableOpacity style={globalStyles.itemno} onPress={() => handleToggle('expanseAlertEnabled')}>
        <View>
          <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('ExpenseAlert')}</Text>
          <Text style={styles.globalStyles}>{t('Getnotificationaboutyou’re')}</Text>
          <Text style={styles.globalStyles}>{t('Dexpense')}</Text>
        </View>
        <Icon name={toggleState.expanseAlertEnabled ? 'toggle-on' : 'toggle-off'} size={26} color="#7f3dff" style={globalStyles.toggleIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.itemno} onPress={() => handleToggle('budgetEnabled')}>
        <View>
          <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Budget')}</Text>
          <Text style={globalStyles.smallText}>{t('Getnotificationwhenyou’re')}</Text>
          <Text style={globalStyles.smallText}>{t('Dbudgetexceedingthelimit')}</Text>
        </View>
        <Icon name={toggleState.budgetEnabled ? 'toggle-on' : 'toggle-off'} size={26} color="#7f3dff" style={globalStyles.toggleIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.itemno} onPress={() => handleToggle('articlesEnabled')}>
        <View>
          <Text style={[globalStyles.itemText, isDarkMode && globalStyles.darkitemText]}>{t('Tips&Articles')}</Text>
          <Text style={globalStyles.smallText}>{t('Small&usefulpiecesofpractical')}</Text>
          <Text style={globalStyles.smallText}>{t('Dfinancialadvice')}</Text>
        </View>
        <Icon name={toggleState.articlesEnabled ? 'toggle-on' : 'toggle-off'} size={26} color="#7f3dff" style={globalStyles.toggleIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
  