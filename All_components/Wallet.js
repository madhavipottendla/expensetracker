import React, { useState } from 'react';

import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Image, Alert, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { globalStyles } from './globalStyles';



const Wallet = ({ navigation }) => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showMoreBanks, setShowMoreBanks] = useState(false);
  const [isEighthRemoved, setIsEighthRemoved] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectBank = (bank) => {
    setSelectedBank(bank);
    setDropdownVisible(false);
  };

  const handleSeeMoreToggle = () => {
    let updatedBanks = [...banks];
    if (!showMoreBanks) {
      // If currently showing more banks, remove the 8th bank from the array
      updatedBanks.splice(7, 1); // Remove the 8th bank
    } else {
      // If currently showing less banks, add the 8th bank back
      const eighthBank = {
        name: 'Eighth Bank',
        // Add appropriate image URL for the 8th bank
      };
      updatedBanks.splice(7, 0, eighthBank); // Add the 8th bank back at index 7
    }
    setBanks(updatedBanks);
    setShowMoreBanks(!showMoreBanks);
  };


  
  // show more toggle
  const handleContinuePress = () => {
    if (selectedBank) {
      navigation.navigate('Setok');
    } else {
      alert('Please Select The Bank!');
    }
  };


  


  const [banks, setBanks] = useState([
    { name: 'Chase', image: 'data:image/png;base64,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' },
    { name: 'Paypal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wEa5uopKH5xGOx_oQ7C8v_VZ5Gx2cVoPHlEMX1ifDxSQgS9xClEJNMua4TbXumt2q58&usqp=CAU' },
    { name: 'State Bank Of India', image: 'https://i.pinimg.com/564x/0d/99/81/0d9981f501d6d493421eb736a9b85bd2.jpg' },
    { name: 'HDFC', image: 'https://companieslogo.com/img/orig/HDB-bb6241fe.png?t=1633497370' },
    { name: 'Wells Fargo', image: 'https://logos-world.net/wp-content/uploads/2020/10/Wells-Fargo-Logo-2019-present.jpg' },
    { name: 'Citi Bank', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsEcQtGCKvKv6dLIXQaqg-i7iFse-Y90ib47_PWclPA&s' },
    { name: 'Axis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKogf_l_9IEOBsw9KCnQQdzilulFYB_pKIA3Lh1OkQQ&s' },
    {},
    { name: 'HSBC', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmLDmEi9Dbhpx5tUz_DX1vnHmGsHSJhCpBw&s' },
    { name: 'Bank of Baroda', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQrSvveXm0y-UMXfVpyQGYgeQxgaBpMCfty6O22Tx50hNs9m-jpOz-MHOYyTUmB4m_UU&usqp=CAU' },
    { name: 'Icici Bank', image: 'https://i.pinimg.com/736x/ff/d5/31/ffd531a6a78464512a97848e14506738.jpg' },
    { name: 'Barclays', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_ZMH3bq7sFHY_usalYfZ4qssLvUC5tl_GTmzABf0cwRJUm-r_IDZU3nX5mwn3ALdyXY&usqp=CAU' },
    { name: 'Bank of America', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbj5grVgx1SIVXJKhqhe64InBjLKyvwfhDChqRwIwyO270OCMlpuX__nNz_xX-GK0lDI&usqp=CAU' },
    { name: 'Mastercard', image: 'https://www.finextra.com/finextra-images/top_pics/xl/mastercard-2022.jpg' },
    { name: 'Bandhan', image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/33/c4/69/33c46987-e2cd-acb4-8f51-4cb10b9e2210/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png' },
    { name: 'Axis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKogf_l_9IEOBsw9KCnQQdzilulFYB_pKIA3Lh1OkQQ&s' },
    {},
  ]);

  console.log("Bank Array Length: " + banks.length);


  // Slice the banks array based on showMoreBanks state
  const displayedBanks = showMoreBanks ? banks : banks.slice(0, 8);
  const seeMoreText = showMoreBanks ? 'See less' : 'See more';
 
  
  return (
    <View style={globalStyles.Walletcontainer}>
    <View style={[globalStyles.Walletbox, dropdownVisible && { bottom: 0 }]}>
      <TextInput style={globalStyles.WalletName} value={selectedBank ? selectedBank.name : 'Select Bank'} />
      <TouchableOpacity style={globalStyles.WallettypeDropdown} onPress={toggleDropdown}>
        <Text >Bank</Text>
        <Icon name={dropdownVisible ? "caret-up" : "caret-down"} style={globalStyles.Walletcaret} />
      </TouchableOpacity>

      {dropdownVisible && (
        <ScrollView style={globalStyles.Walletdropdown}>
          <View style={globalStyles.WalletrowContainer}>
            {displayedBanks.map((bank, index) => (
              <TouchableOpacity
                key={index}
                style={globalStyles.WalletdropdownItem}
                onPress={() => selectBank(bank)}>
                <Image source={{ uri: bank.image }} style={globalStyles.WalletbankImage} />
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={{position:'absolute',right:15,bottom:58,Color:'lightgrey'}} onPress={handleSeeMoreToggle} >
            <Text style={{ color: '#7f3dff', fontWeight: '800', fontSize: 14 }} >{seeMoreText}</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      )}
      <TouchableOpacity
        style={globalStyles.WalletcontinueButton}
        onPress={handleContinuePress}
      >

        <Text style={globalStyles.WalletcontinueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
    <View style={[globalStyles.WalletBalancepaisa, dropdownVisible && { bottom: 500 }]}>
      <Text style={globalStyles.WalletBalance}>Balance</Text>
      <Text style={globalStyles.Walletpaisa}>$00.0</Text>
    </View>
  </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({

});