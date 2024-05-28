import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from './globalStyles';


const BudgetEmpty = () => {
    const navigation = useNavigation();

    const [currentMonth, setCurrentMonth] = useState('May');

    const goToPreviousMonth = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const currentIndex = months.indexOf(currentMonth);
        const previousIndex = (currentIndex - 1 + months.length) % months.length;
        setCurrentMonth(months[previousIndex]);
    };
    const goToNextMonth = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const currentIndex = months.indexOf(currentMonth);
        const nextIndex = (currentIndex + 1) % months.length;
        setCurrentMonth(months[nextIndex]);
    };

    const navigateToCreateBudget = () => {
        navigation.navigate('Create_budget');
    };

    return (
        <SafeAreaView style={globalStyles.Emptycontainer}>
        <StatusBar backgroundColor="#7F3DFF" barStyle="light-content"></StatusBar>
            <View style={globalStyles.Emptyheader}>
                <TouchableOpacity onPress={goToPreviousMonth}>
                    <Icon name='chevron-left' solid style={globalStyles.Emptyicons}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.Emptymonth}>{currentMonth}</Text>
                <TouchableOpacity onPress={goToNextMonth}>
                    <Icon name='chevron-right' solid style={globalStyles.Emptyicons}></Icon>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.Emptybody}>
                <View style={globalStyles.Emptybody1}>
                    <Text style={globalStyles.Emptylet}>You don't have a budget.</Text>
                    <Text style={globalStyles.Emptylet}>Let's make one so you in control.</Text>
                </View>

                <View style={globalStyles.Emptybutton}>
                    <TouchableOpacity onPress={navigateToCreateBudget}>
                        <Text style={globalStyles.EmptybuttonText}>Create a budget</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BudgetEmpty;

const styles = StyleSheet.create({
    
})