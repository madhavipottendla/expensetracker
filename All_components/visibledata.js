import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Visibledata = ({ route }) => {
    // Extract user data from navigation props
    const { userData } = route.params;
  
    // Debugging: Log the userData object to inspect its structure
    console.log('userData in Visibledata:', userData);
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Dashboard</Text>
        {/* Render user data */}
        <View style={styles.userData}>
          <Text style={styles.label}>Name:{userData.username}</Text>
          
        </View>
        <View style={styles.userData}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userData.email}</Text>
        </View>
        {/* Add more user data fields as needed */}
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userData: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
});

export default Visibledata;
