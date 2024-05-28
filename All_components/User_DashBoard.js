import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const User_DashBoard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [data, setData] = useState([
    { id: '1', label: 'Shopping', description:'Buy some grocery', money:'- $120', icon: <MaterialCommunityIcons name='shopping' style={styles.shopping}></MaterialCommunityIcons>,time:'10:00 AM'},
    { id: '2', label: 'Subscription', description:'Disney+ Annual..', money:'- $80', icon: <MaterialCommunityIcons name='note' style={styles.note}></MaterialCommunityIcons>,time:'03:30 PM' },
    { id: '3', label: 'Food', description:'Buy a ramen', money:'- $32', icon: <MaterialCommunityIcons name='food' style={styles.food}></MaterialCommunityIcons>,time:'07:30 PM'},

  ]);

  const renderItem = ({ item }) => (
    <View style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
    <View style={styles.listTransaction}>
      <View style={styles.iconwithlabdes}>
      <View style={styles.TransactionIconView}>
      <View style={styles.TransactionIcon}>{item.icon}</View>
      </View>
      <View style={styles.TransactionLabDes}>
      <Text style={styles.TransactionLable}>{item.label}</Text>
      <Text style={styles.TransactionDescription}>{item.description}</Text>
      </View>
      </View>
      <View style={styles.TransactionMoneyTime}>
      <Text style={styles.TransactionMoney}>{item.money}</Text>
      <Text style={styles.TransactionTime}>{item.time}</Text> 
      </View>
      
      </View>
    </View>
  );

  const handlePeriodChange = (period) => {
    let updatedData = [];
    switch (period) {
      case 'today':
        updatedData = [
            { id: '1', label: 'Shopping', description:'Buy some grocery', money:'- $120', icon: <MaterialCommunityIcons name='shopping' style={styles.shopping}></MaterialCommunityIcons>,time:'10:00 AM'},
            { id: '2', label: 'Subscription', description:'Disney+ Annual..', money:'- $80', icon: <MaterialCommunityIcons name='note' style={styles.note}></MaterialCommunityIcons>,time:'03:30 PM' },
            { id: '3', label: 'Food', description:'Buy a ramen', money:'- $32', icon: <MaterialCommunityIcons name='food' style={styles.food}></MaterialCommunityIcons>,time:'07:30 PM'},
        ];
        break;
      case 'week':
        updatedData = [
            
            { id: '1', label: 'Shopping', description:'Buy some grocery', money:'- $120', icon: <MaterialCommunityIcons name='shopping' style={styles.shopping}></MaterialCommunityIcons>,time:'10:00 AM'},
            { id: '2', label: 'Food', description:'Buy a ramen', money:'- $32', icon: <MaterialCommunityIcons name='food' style={styles.food}></MaterialCommunityIcons>,time:'07:30 PM'},
            { id: '3', label: 'Subscription', description:'Disney+ Annual..', money:'- $80', icon: <MaterialCommunityIcons name='note' style={styles.note}></MaterialCommunityIcons>,time:'03:30 PM' },
            
        ];
        break;
      case 'month':
        updatedData = [
            
            { id: '1', label: 'Food', description:'Buy a ramen', money:'- $32', icon: <MaterialCommunityIcons name='food' style={styles.food}></MaterialCommunityIcons>,time:'07:30 PM'},
            { id: '2', label: 'Shopping', description:'Buy some grocery', money:'- $120', icon: <MaterialCommunityIcons name='shopping' style={styles.shopping}></MaterialCommunityIcons>,time:'10:00 AM'},
            { id: '3', label: 'Subscription', description:'Disney+ Annual..', money:'- $80', icon: <MaterialCommunityIcons name='note' style={styles.note}></MaterialCommunityIcons>,time:'03:30 PM' },
            
        ];
        break;
      case 'year':
        updatedData = [
            { id: '1', label: 'Shopping', description:'Buy some grocery', money:'- $120', icon: <MaterialCommunityIcons name='shopping' style={styles.shopping}></MaterialCommunityIcons>,time:'10:00 AM'},
            { id: '2', label: 'Subscription', description:'Disney+ Annual..', money:'- $80', icon: <MaterialCommunityIcons name='note' style={styles.note}></MaterialCommunityIcons>,time:'03:30 PM' },
            { id: '3', label: 'Food', description:'Buy a ramen', money:'- $32', icon: <MaterialCommunityIcons name='food' style={styles.food}></MaterialCommunityIcons>,time:'07:30 PM'},
        ];
        break;
      default:
        updatedData = [];
    }
    setData(updatedData);
    setSelectedPeriod(period);
  };

  return (
    <ScrollView style={styles.container}>
    <View style={styles.ThreeSectionsJoin}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Profile Image */}
        <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' }} style={styles.profileImage} />
        {/* Text */}
        <Text style={styles.textDrop}><MaterialCommunityIcons name='arrow-down' style={{fontSize:20,color:'#7f3dff'}}></MaterialCommunityIcons> October</Text>
        {/* Notification Icon */}
        <TouchableOpacity onPress={() => console.log('Notification pressed')}>
          {/* Your notification icon here */}
          <MaterialCommunityIcons name='bell' style={styles.userBell}></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>

      {/* Second Section */}
      <View style={styles.secondSection}>
        <Text style={styles.balanceText}>Account Balance</Text>
        <Text style={styles.balanceAmount}>$9400</Text>
      </View>
      
       {/* Second Sub Section */}
       <View style={styles.incomeexpenses}>
       <View style={styles.incomeCard}>
       <MaterialCommunityIcons name='arrow-down' style={styles.incomeIcon}></MaterialCommunityIcons> 
       <View style={styles.incomeCardDetails}>
        <Text style={styles.incomeCardIncome}>Income</Text>
        <Text style={styles.incomeCardMoney}>$5000</Text>
       </View>
       </View>
       <View style={styles.expensesCard}>
       <MaterialCommunityIcons name='arrow-up' style={styles.expenseIcon} ></MaterialCommunityIcons> 
       <View style={styles.expensesCardDetails}>
       <Text style={styles.expensesCardExpense}>Expenses</Text>
       <Text style={styles.expensesCardMoney}>$1200</Text>
       </View>
       </View>
     </View>
     </View>

      {/* Third Section */}
      <View style={styles.thirdSection}>
        <Text style={styles.spendFrequencyText}>Spend Frequency</Text>
        {/* Your graph component here */}
        <View style={{ width: '100%', height: 200, backgroundColor: 'lightgray', marginTop: 10 }} >
        <Image source={require('../assets/UserDashBoardChart.jpg')} style={{ width:"100%", height: 200 }}/>
        </View>
      </View>
      

      {/* Fourth Section (FlatList) */}
      <View style={styles.fourthSection}>
        <TouchableOpacity onPress={() => handlePeriodChange('today')}>
          <Text style={[styles.periodButton, { color: selectedPeriod === 'today' ? '#fcac12' : '#a7a7b2',backgroundColor: selectedPeriod === 'today' ? '#fceed4' : '#ffffff' }]}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePeriodChange('week')}>
          <Text style={[styles.periodButton, { color: selectedPeriod === 'week' ? '#fcac12' : '#a7a7b2',backgroundColor: selectedPeriod === 'week' ? '#fceed4' : '#ffffff' }]}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePeriodChange('month')}>
          <Text style={[styles.periodButton, { color: selectedPeriod === 'month' ? '#fcac12' : '#a7a7b2',backgroundColor: selectedPeriod === 'month' ? '#fceed4' : '#ffffff' }]}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePeriodChange('year')}>
          <Text style={[styles.periodButton, { color: selectedPeriod === 'year' ? '#fcac12' : '#a7a7b2',backgroundColor: selectedPeriod === 'year' ? '#fceed4' : '#ffffff'  }]}>Year</Text>
        </TouchableOpacity>
      </View>

    {/* Fifth Section (See All Transaction) */}
    <View style={styles.RecentTransaction}>
    <Text style={styles.RecentTransactionText}>Recent Transaction</Text>
    <Text style={styles.RecentTransactionSeeAll}>See All</Text>
    </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default User_DashBoard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#ffffff'
    },
    ThreeSectionsJoin:{
    backgroundColor:'#fdf7eb',
    borderBottomRightRadius:45,
    borderBottomLeftRadius:45
    },
    topSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop:60
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    textDrop: {
      fontSize: 20,
      marginRight:30,
      backgroundColor: '#fdf7ea',
      borderWidth:1,
      paddingVertical:10,
      paddingHorizontal:20,
      borderColor:'#f1f1fa',
      borderRadius:20,
    },
    userBell:{
    fontSize:25,
    color:'#7f3dff'
    },
    secondSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems:'center',
    gap:7,
    },
    incomeexpenses:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    gap:10,
    width:'100%',
    paddingHorizontal:30,
    paddingVertical:20
        
    },
    incomeIcon:{
    fontSize:40,
    color:'#00a86b',
    backgroundColor:'#ffffff',
    borderRadius:20,
    padding:5
    },
    expenseIcon:{
    fontSize:40,
    color:'#fd3c4a',
    backgroundColor:'#ffffff',
    borderRadius:20,
    padding:5
    },
    incomeCard:{
    width:'50%',
    backgroundColor:'#00a86b',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    gap:18,
    padding:13,
    borderRadius:30,
    },
    expensesCard:{
    width:'50%',
    backgroundColor:'#fd3c4a',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    gap:18,
    padding:13,
    borderRadius:30,
    },
    incomeCardIncome:{
    fontSize:15,
    fontWeight:'500',
    color:'#ffffff'

    },
    incomeCardMoney:{
    fontSize:25,
    fontWeight:'500',
    color:'#ffffff'
    },
    expensesCardExpense:{
    fontSize:15,
    fontWeight:'500',
    color:'#ffffff'
    },
    expensesCardMoney:{
    fontSize:25,
    fontWeight:'500',
    color:'#ffffff'
    },

    balanceText: {
      fontSize: 18,
      color:'#91919f',
      fontWeight:'500'

    },
    balanceAmount: {
      fontSize: 40  ,
      fontWeight:'700'

    },
    thirdSection: {
      paddingHorizontal: 0,
      paddingTop: 20,
    },
    spendFrequencyText: {
      fontSize: 20,
      fontWeight:'500',
      paddingHorizontal: 20,

    },
    fourthSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    periodButton: {
    fontSize: 16,
    // backgroundColor: '#fceedf',
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:20,
   },
   RecentTransaction:{
   flexDirection:'row',
   justifyContent:'space-between',
   paddingHorizontal:30,
   paddingVertical:20
   },
   RecentTransactionText:{
    fontSize: 20,
    fontWeight:'500',
   },
   RecentTransactionSeeAll:{
    fontSize: 16,
    backgroundColor: '#eee5ff',
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:20,
    color:'#7f3dff'
   },
  // List Transaction
  listTransaction:{
   backgroundColor:'#fcfcfa',
   flexDirection:'row',
   justifyContent:'space-between',
   paddingHorizontal:20,
   paddingVertical:15,
   borderRadius:30,
   
  },
  iconwithlabdes:{
  flexDirection:'row',
  gap:10
  },
  TransactionIcon:{
    color:'#00a86b',
    backgroundColor:'#ffffff',
    borderRadius:20,
    padding:5,
    borderColor:'#f1f1fa',
    borderWidth:1
  },
  shopping:{
    fontSize:45,color:'#fcac12',
  },
  note:{
    fontSize:45,color:'#7f3dff',
  },
  food:{
    fontSize:45,color:'#fd3c4a',
  },
  TransactionLabDes:{
   gap:5,
  },
  TransactionLable:{
  fontSize:20,
  color:'#000000'
  },
  TransactionDescription:{
    color:'#91919f',
    fontSize:16,
  },
  TransactionMoneyTime:{
    gap:5,
   },
   TransactionMoney:{
   fontSize:20,
   color:'#fd3c4a'
   },
   TransactionTime:{
     color:'#91919f',
     fontSize:16,
   }



  });
