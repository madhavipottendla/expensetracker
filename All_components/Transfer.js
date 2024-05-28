import React, { useState } from 'react';
import { View, TextInput, Button, Alert ,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';



// TransferMoney component
const Transfer = ({}) => {
  
  const [senderAccount, setSenderAccount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  

  
  const handleTransfer = async () => {
  
    // if (!senderAccount || !recipientAccount || !amount) {
    //   Alert.alert('Error', 'Please enter all required information');
    //   return;
     
    // }
    // navigation.navigate('Notification')

    try {
    
      const data = {
        sender: senderAccount,
        recipient: recipientAccount,
        amount: parseFloat(amount),
      };

     
      const response = await fetch('http://192.168.0.183:3800/api/sendingmoney', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
       
    
      if (!response.ok) {
        throw new Error('Failed to transfer money');
      }

    
      const transactionDetails = await response.json();

     
      Alert.alert('Success', 'Money transferred successfully');

     
    } catch (error) {
    
      Alert.alert('Error', `Failed to transfer money: ${error.message}`);
    }
  };

  return (
    <SafeAreaView style = {{backgroundColor:"#0077ff",height:1000}}>
      <View style ={{display:"flex",flexDirection:"row",gap:130,marginTop:52}} >
     <View>
         <Icon  name = "arrow-left" size = {25} color = {"white"}/>
     </View>
     <Text style = {{fontSize:20,color:"white"}}>Transfer</Text>
    </View>
    <View style = {{marginTop:150}}>
         <Text style = {{fontSize:30,color:"white",padding:5}}>
          How much?
          </Text>
          <TextInput style = {{fontSize:40,color:"white"}}
        value={amount}
        onChangeText={setAmount}
        placeholder="$" placeholderTextColor={"white"}
        keyboardType="numeric"
      />

    </View>
    <View style = {{backgroundColor:"white",height:600,borderTopEndRadius: 20, borderTopLeftRadius: 20}}>

    
      
    <View style={{ marginTop: 50 }}>
      <View style = {{display:"flex",flexDirection:"row",padding:5,justifyContent:"space-between"}}>
      {/* Input fields for sender, recipient, and amount */}
      <TextInput style ={{borderWidth:1,width:"40%",height:50,borderRadius:10,padding:10,fontSize:20}}
        value={senderAccount}
        onChangeText={setSenderAccount}
        placeholder="From"
      />
      <TextInput   style ={{borderWidth:1,width:"40%",height:50,borderRadius:10,fontSize:20,padding:10}}
        value={recipientAccount}
        onChangeText={setRecipientAccount}
        placeholder="To"
      />
      </View>
      {/* <TextInput
        value={amount}
        onChangeText={setAmount}
        placeholder="Amount"
        keyboardType="numeric"
      /> */}
      <TextInput  style = {{borderWidth:1,height:60,width:"100%",fontSize:20,marginTop:15,padding:10,borderRadius:10}} 
      placeholder='Description'>

      </TextInput>
      <View>
       
      </View>
      {/* Button to initiate the transfer */}
      <TouchableOpacity  style = {{borderWidth:0,height:60,width:"90%",left:"5%",marginTop:15,padding:10,borderRadius:10,alignItems:"center",backgroundColor:"#7F3DFF",}}  onPress={handleTransfer} >
        <Text style = {{fontSize:20,color:"white"}}>Continue</Text>
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
};

export default Transfer;