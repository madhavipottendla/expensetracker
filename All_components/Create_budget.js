import { StyleSheet, Text, View, TouchableOpacity, Switch, SafeAreaView, Alert,PanResponder } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState,useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { globalStyles } from './globalStyles';
import { Dropdown } from 'react-native-element-dropdown';


const Create_budget = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const data = [
        { label: 'shopping', value: '1' },
        { label: 'Transportation', value: '1' },
    ];

    const [value, setValue] = useState(null);


    const [categorySelected, setCategorySelected] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);


    const toggleSwitch = () => {
        if (!value) {
            Alert.alert('Warning!', 'Please select a category.');
        } else {
            setIsEnabled(previousState => !previousState);
        }
    };

    const handleSlidingComplete = value => {
        setSliderValue(value);
    };

    const updateSliderValue = (value) => {
        setSliderValue(value);
    };
    const navigateToBudget = () => {
        if (!value) {
            Alert.alert('Warning!', 'Please select a category.');
        }
        else if (!isEnabled) {
            Alert.alert('Warning!', 'Please activate the switch.');
        } else if (sliderValue == 0) {
            Alert.alert('Warning!', 'Please set a non-zero value on the slider.');
        } else {
            navigation.navigate('BudgetAfter');
        }
    };

    // custom slider 
    const [percentage, setPercentage] = useState(0); // Initial percentage value
    const [trackWidth, setTrackWidth] = useState(null);
    const [thumbWidth, setThumbWidth] = useState(null); // Define thumbWidth state
    const trackRef = useRef(null);
    const thumbRef = useRef(null);
  
    const thumbPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
          const newX = Math.min(trackWidth - (thumbWidth || 0), Math.max(0, gestureState.moveX - (thumbWidth || 0) / 2));
          const newPercentage = (newX / (trackWidth - (thumbWidth || 0))) * 100;
          const newValue = Math.floor((newPercentage / 100) * 1200);
          setSliderValue(newValue); // Update the slider value
          setPercentage(Math.min(100, Math.max(0, newPercentage))); // Update the percentage
        },
      });
      
      const handlePress = (event) => {
        if (!trackWidth) return; // Check if track width is available
        const locationX = event.nativeEvent.locationX || event.nativeEvent.pageX - trackRef.current.pageX;
        const newPercentage = (locationX / trackWidth) * 100;
        const newValue = Math.floor((newPercentage / 100) * 1200);
        setSliderValue(newValue); // Update the slider value
        setPercentage(Math.min(100, Math.max(0, newPercentage))); // Update the percentage
      };
      

    return (
        <SafeAreaView style={globalStyles.Create_budgetcontainer}>
         <View style={globalStyles.Create_budgetamount}>
                <Text style={globalStyles.Create_budgetspend}>How much do u want to spend?</Text>
                <Text style={globalStyles.Create_budgetamount1}>̥${isEnabled ? sliderValue : 0}</Text>
            </View>

            <View style={globalStyles.Create_budgetbottom}>
                <Dropdown style={globalStyles.Create_budgetdropdown}
                    placeholderStyle={globalStyles.Create_budgetplaceholderStyle}
                    selectedTextStyle={globalStyles.Create_budgetselectedTextStyle}
                    inputSearchStyle={globalStyles.Create_budgetinputSearchStyle}
                    iconStyle={globalStyles.iconStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Category"
                    value={value}
                    onChange={item => {
                        if (item.value !== '') { setValue(item.value); setCategorySelected(true); }
                    }}
                />
                <View style={globalStyles.Create_budgettoogle}>
                    <View>
                        <Text style={globalStyles.Create_budgetalert}>Receive Alert</Text>
                        <Text style={globalStyles.Create_budgetalert1}>Receive alert when it reaches{'\n'}some point</Text>
                    </View>
                    <TouchableOpacity style={globalStyles.Create_budgetswitch}>
                        <Switch
                            trackColor={{ false: '', true: '#7F3DFF' }}
                            thumbColor={isEnabled ? '' : '#F5F5F5'}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </TouchableOpacity>
                   
                </View>
                {isEnabled && (
                    <View style={styles.containercus}>
                    <TouchableOpacity
                      ref={trackRef}
                      style={styles.sliderTrack}
                      onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
                      onPress={(event) => handlePress(event)}
                    >
                      <View style={[styles.sliderBar, { width: `${percentage}%` }]} />
                    </TouchableOpacity>
                    <View
                      ref={thumbRef}
                      style={[styles.thumb, { left: `${percentage}%` }]}
                      onLayout={(event) => setThumbWidth(event.nativeEvent.layout.width)} // Measure thumb width
                      {...thumbPanResponder.panHandlers}
                    >
                      <Text style={styles.percentageText}>{Math.round(percentage)}%</Text>
                    </View>
                  </View>
                )}
                <View style={globalStyles.Create_budgetbutton}>
                    <TouchableOpacity onPress={navigateToBudget}>

                        <Text style={globalStyles.Create_budgetbuttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Create_budget;

const styles = StyleSheet.create({

    containercus: {
       
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        padding:20,
      },
    sliderTrack: {
        backgroundColor: '#ddd',
        height: 10,
        borderRadius: 10,
        width: '100%',
        position:'absolute',
      },
      sliderBar: {
        height: '100%',
        backgroundColor: '#7f3dff',
        borderRadius: 10,
        marginLeft:-10
      },
      thumb: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 30,
        backgroundColor: '#7f3dff',
        borderRadius: 20,
        zIndex: 1,
        marginLeft:-5, 
        marginTop:-10,
        borderColor:'#ffffff',
        borderWidth:2,
      },
      percentageText: {
        fontSize: 12,
        color: '#fff',
        fontWeight:'700'
      },
});