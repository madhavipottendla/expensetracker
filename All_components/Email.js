import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios'; 

const Email = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const sendEmail = async () => {
    try {
      const response = await axios.post('https://6030d316-710c-4e57-818c-497728cced14.mock.pstmn.io/jobsearch', {
        recipient,
        subject,
        body,
      });
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' ,flex:1}}>
  <TextInput
    placeholder="Recipient"
    value={recipient}
    onChangeText={setRecipient}
  />
  <TextInput
    placeholder="Subject"
    value={subject}
    onChangeText={setSubject}
  />
  <TextInput
    placeholder="Body"
    value={body}
    onChangeText={setBody}
  />
  <Button title="Send Email" onPress={sendEmail} />
</View>

  );
};

export default Email;
