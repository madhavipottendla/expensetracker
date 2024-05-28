import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from './globalStyles';
const SetupAccount = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.containerSetupAccount}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainerSetupAccount}>
        <View style={globalStyles.headingContainerSetupAccount}>
          <Text style={globalStyles.headingSetupAccount}>Let’s setup your account!</Text>
        </View>
        <View style={globalStyles.contentContainerSetupAccount}>
          <Text style={globalStyles.contentSetupAccount}>
            Account can be your bank, credit card, or
          </Text>
          <Text style={globalStyles.contentSetupAccount}>your wallet.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={globalStyles.buttonSetupAccount}  onPress={() => navigation.navigate('NewAccount')}>
        <Text style={globalStyles.buttonTextSetupAccount}>Let’s go</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default SetupAccount;
