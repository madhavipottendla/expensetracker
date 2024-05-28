import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,PanResponder } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect ,useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { globalStyles } from './globalStyles';


const Detail_budget = ({ route }) => {
    const navigation = useNavigation();

    const { sliderValue1} = route.params;
    const [sliderValue, setSliderValue] = useState(sliderValue1 );


    const goBack = () => {
        navigation.navigate('BudgetAfter', { sliderValue1: sliderValue });
    };

    const handleSlidingComplete1 = value => {
        setSliderValue(value);
    };

    const getSliderColor1 = () => {
        if (sliderValue <= 350) {
            return '#008000';
        } else if (sliderValue <= 700) {
            return '#0000FF';
        } else if (sliderValue <= 1000) {
            return '#FFA500';
        } else {
            return '#FF0000';
        }
    };

    const getLimitMessage1 = () => {
        if (sliderValue > 1000) {
            return (
                <View style={globalStyles.Detail_budgetlimit}>
                <Icon name="exclamation-circle" style={styles.exclamationIcon} />
                <Text style={globalStyles.limitTextofdetail}>You've exceeded the limit</Text>
            </View>
               
             
            )
            
        } else {
            return '';
        }
    };

    const navigateToEditBudget = () => {
        navigation.navigate('Create_budget');
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
        <SafeAreaView style={globalStyles.Detail_budgetcontainer}>
            <View style={globalStyles.Detail_budgetheader}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name='arrow-left' solid style={globalStyles.Detail_budgeticons}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.Detail_budgetheadertext}>Detail Budget</Text>
                <TouchableOpacity>
                    <Icon name='trash' solid style={globalStyles.Detail_budgeticons}></Icon>
                </TouchableOpacity>
            </View>
            <View style={globalStyles.Detail_budgetshopkart}>
                <Text style={globalStyles.Detail_budgetshopping}>
                <Icon name='suitcase' style={globalStyles.Detail_budgetbag}></Icon> Shopping</Text>
            </View>
            <View style={globalStyles.Detail_budgetRemainamount}>
                <View>
                    <Text style={globalStyles.Detail_budgetRemaining1}>Remaining</Text>
                </View>
                <View>
                    <Text style={globalStyles.Detail_budgetamnt}>${Math.max(Math.round(sliderValue), 0)}</Text>
                </View>
            </View>
            <View style={globalStyles.Detail_budgetslider}>
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
                
                <Text style={globalStyles.Detail_budgetamount}>${Math.round(sliderValue)} of $1000</Text>
                <Text  >
                 
                 
                 {getLimitMessage1()}
                </Text>
            </View>
            <View style={globalStyles.Detail_budgetbutton}>
                <TouchableOpacity onPress={navigateToEditBudget}>
                    <Text style={globalStyles.Detail_budgetbuttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Detail_budget;

const styles = StyleSheet.create({
    containercus: {
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        paddingLeft:20,
        paddingTop:50,
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
        backgroundColor: '#fcac12',
        borderRadius: 10,
        marginLeft:-10
      },
      thumb: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#fcac12',
        borderRadius: 20,
        zIndex: 1,
        marginLeft:-5, 
        marginTop:-10,
        borderColor:'#ffffff',
        borderWidth:2,
      },
      percentageText: {
        fontSize: 0,
        color: '#fff',
        fontWeight:'700'
      },
      exclamationIcon: {
        color: '#ffffff',
        fontSize: 25,},
});