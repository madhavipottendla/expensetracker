import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';


import Icon from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from './globalStyles';

const NewAccount = ({navigation}) => {


  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectAccountType = (type) => {
    setAccountType(type);
    setDropdownVisible(false);
  };
  const handleContinue = () => {
    if (accountName && accountType) {
      navigation.navigate('Wallet');
    } else {
      if (!accountType && !accountName) {
        alert('Please select an account type and enter an account name.');
      } else if (!accountType) {
        alert('Please select an account type.');
      } else {
        alert('Please enter an account name.');
      }
    }
  };

  return (
    <View style={globalStyles.NewAccountcontainer}>
    <View style={[globalStyles.NewAccountbox, dropdownVisible && { bottom:0 }]}>
      <TextInput
        style={globalStyles.NewAccountInput}
        placeholder="Name"
        value={accountName}
        onChangeText={setAccountName}
      />
      <TouchableOpacity style={globalStyles.NewAccounttypeDropdown} onPress={toggleDropdown}>
        <Text style={styles.NewAccounttypeText}>{accountType ? accountType : 'Select Account Type'}</Text>
        <Icon name={dropdownVisible ? "caret-up" : "caret-down"} size={20} color="black" />
      </TouchableOpacity>
      {dropdownVisible && (
        <ScrollView style={styles.NewAccountdropdown}>
          <TouchableOpacity style={globalStyles.NewAccountdropdownItem} onPress={() => selectAccountType('Checking')}>
            <Text>Checking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.NewAccountdropdownItem} onPress={() => selectAccountType('Savings')}>
            <Text>Savings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.NewAccountdropdownItem} onPress={() => selectAccountType('Investment')}>
            <Text>Investment</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
      <TouchableOpacity style={globalStyles.NewAccountcontinueButton} onPress={handleContinue}>
        <Text style={globalStyles.NewAccountcontinueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
    <View style={[globalStyles.NewAccountBalancePaisa, dropdownVisible && { bottom: 420 }]}>
      <Text style={globalStyles.NewAccountBalance}>Balance</Text>
      <Text style={globalStyles.NewAccountpaisa}>$00.0</Text>
    </View>
  </View>
  );
};

export default NewAccount;

const styles = StyleSheet.create({
  
});