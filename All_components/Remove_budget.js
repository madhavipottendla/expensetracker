import { StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { globalStyles } from './globalStyles';


const Remove_budget = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const [sliderValue1, setSliderValue1] = useState(1200);

    const handleSlidingComplete1 = value => {
        setSliderValue1(value);
    };

    const getSliderColor1 = () => {
        if (sliderValue1 <= 350) {
            return '#008000';
        } else if (sliderValue1 <= 700) {
            return '#0000FF';
        } else if (sliderValue1 <= 1000) {
            return '#FFA500';
        } else {
            return '#FF0000';
        }
    };

    const getLimitMessage1 = () => {
        if (sliderValue1 > 1000) {
            return '! You\'ve exceed the limit';
        }
        else {
            return '';
        }
    };


    const showAlert = () => {
        Alert.alert(
            'Remove this budget?',
            'Are you sure do you wanna remove this budget?',
            [
                { text: 'No', onPress: () => {} },
                { text: 'Yes', onPress: () => {navigation.navigate('BudgetAfter');} }
            ]
        );
    };
       
    return (
        <SafeAreaView style={globalStyles.Remove_budgetcontainer}>
            <View style={globalStyles.Remove_budgetheader}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name='arrow-left' solid style={globalStyles.Remove_budgeticons}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.Remove_budgetheadertext}>Remove Budget</Text>
                <TouchableOpacity onPress={showAlert}>
                    <Icon name='trash' solid style={globalStyles.Remove_budgeticons}></Icon>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.Remove_budgetshopkart}>
                <Text style={globalStyles.Remove_budgetshopping}><Icon name='suitcase' style={globalStyles.Remove_budgetbag}></Icon> Shopping</Text>
            </View>
            <View style={globalStyles.Remove_budgetRemainamount}>
                <View>
                    <Text style={globalStyles.Remove_budgetRemaining1}>Remaining </Text>
                </View>
                <View>
                    <Text style={globalStyles.Remove_budgetamnt}>${Math.max(1200 - Math.round(sliderValue1), 0)}</Text>
                </View>
            </View>
            <View style={globalStyles.Remove_budgetslider}>
                <Slider                   
                    minimumValue={1}
                    maximumValue={1200}
                    minimumTrackTintColor={getSliderColor1()}
                    maximumTrackTintColor={getSliderColor1()}
                    onSlidingComplete={handleSlidingComplete1}
                    value={sliderValue1}
                />
                <Text style={globalStyles.Remove_budgetamount}>${Math.round(sliderValue1)} of $1000</Text>
                <Text style={[globalStyles.Remove_budgetlimit,     { color: getSliderColor1()}]} >
                    {getLimitMessage1()}
                </Text>
            </View>
            <View style={globalStyles.Remove_budgetbutton}>
                    <TouchableOpacity>
                        <Text style={globalStyles.Remove_budgetbuttonText}>Edit</Text>
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    )
}

export default Remove_budget;

const styles = StyleSheet.create({

})