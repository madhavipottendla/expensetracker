import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Switch, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import { globalStyles } from './globalStyles';


const Edit_Budget = () => {
    const navigation = useNavigation();


    const goBack = () => {
        navigation.goBack();
    };

    const [value, setValue] = useState(null);

    const [isEnabled, setIsEnabled] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);


    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        if (!isEnabled) {
            setSliderValue(0);
        }
    };

    const handleSlidingComplete = value => {
        setSliderValue(value);
    };

    const updateSliderValue = (value) => {
        setSliderValue(value);
    };
    const data = [
        { label: 'Shopping', value: '1' },
        { label: 'Transportation', value: '1' },
    ];

        const navigateToRemoveBudget = () => {
         if (!isEnabled) {
            Alert.alert('Warning!', 'Please activate the switch.');
        } else if (sliderValue == 0) {
            Alert.alert('Warning!', 'Please set a non-zero value on the slider.');
        } else {
            navigation.navigate('Remove_budget');
        }
    };


    return (
        <SafeAreaView style={globalStyles.Edit_Budgetcontainer}>
            <View style={globalStyles.Edit_Budgetheader}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name='arrow-left' solid style={globalStyles.Edit_Budgetleft}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.Edit_Budgetheadertext}>Edit Budget</Text>
            </View>

            <View style={globalStyles.Edit_Budgetamount}>
                <Text style={globalStyles.Edit_Budgetspend}>How much do u want to spend?</Text>
                <Text style={globalStyles.Edit_Budgetamount1}>̥${isEnabled ? sliderValue : 0}</Text>
            </View>

            <View style={globalStyles.Edit_Budgetbottom}>
                <Dropdown style={globalStyles.Edit_Budgetdropdown}
                    placeholderStyle={globalStyles.Edit_BudgetplaceholderStyle}
                    selectedTextStyle={globalStyles.Edit_BudgetselectedTextStyle}
                    inputSearchStyle={globalStyles.Edit_BudgetinputSearchStyle}
                    iconStyle={globalStyles.Edit_BudgeticonStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Shopping"
                    value={value}
                    onChange={item => { setValue(item.value) }}
                />

                <View style={globalStyles.Edit_Budgettoogle}>
                    <View>
                        <Text style={globalStyles.Edit_Budgetalert}>Receive Alert</Text>
                        <Text style={globalStyles.Edit_Budgetalert1}>Receive alert when it reaches{'\n'}some point</Text>
                    </View>
                    <TouchableOpacity style={globalStyles.Edit_Budgetswitch}>
                        <Switch
                            trackColor={{ false: '', true: '#7F3DFF' }}
                            thumbColor={isEnabled ? '' : '#F5F5F5'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </TouchableOpacity>
                    {isEnabled && (
                        <View style={globalStyles.Edit_Budgetslider}>
                            <Slider
                                style={{ width: 350 }}
                                minimumValue={0}
                                maximumValue={1200}
                                minimumTrackTintColor="#7F3DFF"
                                maximumTrackTintColor="#7F3DFF"
                                onSlidingComplete={handleSlidingComplete}
                                value={sliderValue}
                                step={1}
                                thumbTintColor="#7F3DFF"
                                trackStyle={styles.track}
                                thumbStyle={styles.thumb}
                            />
                            <Text style={globalStyles.Edit_BudgetsliderValue}>{sliderValue}</Text>
                        </View>
                    )}
                </View>
                <View style={globalStyles.Edit_Budgetbutton}>
                    <TouchableOpacity onPress={navigateToRemoveBudget}>
                        <Text style={globalStyles.Edit_BudgetbuttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Edit_Budget;

const styles = StyleSheet.create({
    
});