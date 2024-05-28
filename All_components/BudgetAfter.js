import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView,PanResponder } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect,useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from './globalStyles';

const BudgetAfter = ({ route }) => {
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

    const [sliderValue1, setSliderValue1] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(0);

    const handleSlidingComplete1 = value => {
        setSliderValue1(value);
    };

    const handleSlidingComplete2 = value => {
        setSliderValue2(value);
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
            return 'You\'ve exceeded the limit!';
        }
        else {
            return '';
        }
    };

    const getSliderColor2 = () => {
        if (sliderValue2 <= 349) {
            return '#008000';
        } else if (sliderValue2 <= 600) {
            return '#0000FF';
        } else {
            return '#FF0000';
        }
    };

    const getLimitMessage2 = () => {
        if (sliderValue2 > 600) {
            return 'you\'ve close to the limit!';
        } else {
            return '';
        }
    };

    const navigateToDetailBudget = () => {
        navigation.navigate('Detail_budget', { sliderValue1});
    };

    useEffect(() => {
        if (route.params && route.params.sliderValue1) {
            setSliderValue1(route.params.sliderValue1);
        }
    }, [route.params]);

    const isExceedLimit1 = sliderValue1 > 1000;
    const isExceedLimit2 = sliderValue2 > 600;

    // custom slider 
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);
    const [trackWidth, setTrackWidth] = useState(null);
    const [thumbWidth, setThumbWidth] = useState(null);
    const trackRef = useRef(null);
    const thumbRef = useRef(null);

    const thumbPanResponder1 = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            const newX = Math.min(trackWidth - (thumbWidth || 0), Math.max(0, gestureState.moveX - (thumbWidth || 0) / 2));
            const newPercentage = (newX / (trackWidth - (thumbWidth || 0))) * 100;
            const newValue = Math.floor((newPercentage / 100) * 1200);
            setSliderValue1(newValue);
            setPercentage1(Math.min(100, Math.max(0, newPercentage)));
        },
    });

    const thumbPanResponder2 = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            const newX = Math.min(trackWidth - (thumbWidth || 0), Math.max(0, gestureState.moveX - (thumbWidth || 0) / 2));
            const newPercentage = (newX / (trackWidth - (thumbWidth || 0))) * 100;
            const newValue = Math.floor((newPercentage / 100) * 700);
            setSliderValue2(newValue);
            setPercentage2(Math.min(100, Math.max(0, newPercentage)));
        },
    });

    const handlePress1 = (event) => {
        if (!trackWidth) return;
        const locationX = event.nativeEvent.locationX || event.nativeEvent.pageX - trackRef.current.pageX;
        const newPercentage = (locationX / trackWidth) * 100;
        const newValue = Math.floor((newPercentage / 100) * 1200);
        setSliderValue1(newValue);
        setPercentage1(Math.min(100, Math.max(0, newPercentage)));
    };

    const handlePress2 = (event) => {
        if (!trackWidth) return;
        const locationX = event.nativeEvent.locationX || event.nativeEvent.pageX - trackRef.current.pageX;
        const newPercentage = (locationX / trackWidth) * 100;
        const newValue = Math.floor((newPercentage / 100) * 700);
        setSliderValue2(newValue);
        setPercentage2(Math.min(100, Math.max(0, newPercentage)));
    };

    return (
        <SafeAreaView style={globalStyles.Budgetcontainer}>
            <View style={globalStyles.Budgetheader}>
                <TouchableOpacity onPress={goToPreviousMonth}>
                    <Icon name='chevron-left' solid style={globalStyles.Budgeticons}></Icon>
                </TouchableOpacity>
                <Text style={globalStyles.Budgetmonth}>{currentMonth}</Text>
                <TouchableOpacity onPress={goToNextMonth}>
                    <Icon name='chevron-right' solid style={globalStyles.Budgeticons}></Icon>
                </TouchableOpacity>
            </View>

            <View style={globalStyles.Budgetbody}>
                <TouchableOpacity onPress={navigateToDetailBudget}>
                    <View style={globalStyles.Budgetcard1}>
                        <View style={globalStyles.Budgetbody1}>
                            <Text style={globalStyles.Budgetshopping}><Icon name='circle' style={globalStyles.Budgetdot}></Icon> Shopping</Text>
                            {isExceedLimit1 && <Icon name="exclamation-circle" style={styles.exclamationIcon} />}
                        </View>
                        <View style={globalStyles.Budgetbody11}>
                            <Text style={globalStyles.BudgetRemaining}>Remaining ${Math.max(Math.round(sliderValue1), 0)}</Text>
                            
                            <View style={styles.containercus}>
                                <TouchableOpacity
                                    ref={trackRef}
                                    style={styles.sliderTrack}
                                    onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
                                    onPress={(event) => handlePress1(event)}
                                >
                                    <View style={[styles.sliderBar, { width: `${percentage1}%` }]} />
                                </TouchableOpacity>
                                <View
                                    ref={thumbRef}
                                    style={[styles.thumb, { left: `${percentage1}%` }]}
                                    onLayout={(event) => setThumbWidth(event.nativeEvent.layout.width)}
                                    {...thumbPanResponder1.panHandlers}
                                >
                                    <Text style={styles.percentageText}>{Math.round(percentage1)}%</Text>
                                </View>
                            </View>
                            <Text style={globalStyles.Budgetamount}>${Math.round(sliderValue1)} of $1000</Text>
                            <Text style={[globalStyles.Budgetlimit, { color: getSliderColor1() }]}>
                                {getLimitMessage1()}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={globalStyles.Budgetcard2}>
                    <View style={globalStyles.Budgetbody2}>
                        <Text style={globalStyles.Budgettransport}><Icon name='circle' style={globalStyles.Budgetdot1}></Icon> Transportation</Text>
                        {isExceedLimit2 && <Icon name="exclamation-circle" style={styles.exclamationIcon} />}
                    </View>
                    <View style={globalStyles.Budgetbody21}>
                        <Text style={globalStyles.BudgetRemaining}>Remaining ${Math.max(Math.round(sliderValue2), 0)}</Text>
                        
                        <View style={styles.containercusT}>
                            <TouchableOpacity
                                ref={trackRef}
                                style={styles.sliderTrackT}
                                onLayout={(event) => setTrackWidth(event.nativeEvent.layout.width)}
                                onPress={(event) => handlePress2(event)}
                            >
                                <View style={[styles.sliderBarT, { width: `${percentage2}%` }]} />
                            </TouchableOpacity>
                            <View
                                ref={thumbRef}
                                style={[styles.thumbT, { left: `${percentage2}%` }]}
                                onLayout={(event) => setThumbWidth(event.nativeEvent.layout.width)}
                                {...thumbPanResponder2.panHandlers}
                            >
                                <Text style={styles.percentageTextT}>{Math.round(percentage2)}%</Text>
                            </View>
                        </View>
                        <Text style={globalStyles.Budgetamount}>${Math.round(sliderValue2)} of $700</Text>
                        <Text style={[globalStyles.Budgetlimit, { color: getSliderColor2()}]}>
                            {getLimitMessage2()}
                        </Text>
                    </View>
                </View>
                <View style={globalStyles.Budgetbutton}>
                    <TouchableOpacity >
                        <Text style={globalStyles.BudgetbuttonText}>Create a budget</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BudgetAfter;

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
      containercusT: {
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        paddingLeft:20,
        paddingTop:50,
      },
    sliderTrackT: {
        backgroundColor: '#ddd',
        height: 10,
        borderRadius: 10,
        width: '100%',
        position:'absolute',
      },
      sliderBarT: {
        height: '100%',
        backgroundColor: '#0077ff',
        borderRadius: 10,
        marginLeft:-10
      },
      thumbT: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        backgroundColor: '#0077ff',
        borderRadius: 20,
        zIndex: 1,
        marginLeft:-5, 
        marginTop:-10,
        borderColor:'#ffffff',
        borderWidth:2,
      },
      percentageTextT: {
        fontSize: 0,
        color: '#fff',
        fontWeight:'700'
      },
      exclamationIcon: {
        color: 'red',
        fontSize: 25,
        position: 'absolute',
        top: 5,
        right: 10,
    },
});
