import React, { useState, useRef,useEffect } from 'react';
import { Text, View, FlatList, Animated, TouchableOpacity, useWindowDimensions, Image ,BackHandler,Alert} from 'react-native';
import { globalStyles } from './globalStyles';


const slides = [
    {
        id: '1',
        title: 'Gain total control of your money',
        description: 'Become your own money manager and make every cent count',
        image: require("../assets/Carousel1.png"),
    },
    {
        id: '2',
        title: 'Know where your money goes',
        description: 'Track your transaction easily,with categories and financial report',
        image: require("../assets/Carousel2.png")
    },
    {
        id: '3',
        title: 'Planning ahead',
        description: 'Setup your budget for each category so you in control',
        image: require("../assets/Carousel1.png")
    }
   
];

const SignupCarousel = ({navigation}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollx = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 20 }).current;

    return (

        <View style={[globalStyles.Onbordingcontainer]}>

        
            <FlatList
                data={slides}
                renderItem={({ item }) => <Onboardingitem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={20}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
            
            <Paginator data={slides} scrollX={scrollx} />
            
            <View style={[globalStyles.Onbordingsiglogbtn]}>
                <TouchableOpacity style={[globalStyles.Onbordingsignin]} onPress={()=> navigation.navigate('Signup')}>
                    <Text style={[globalStyles.Onbordingsignintxt]}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.Onbordinglogin]}  onPress={()=> navigation.navigate('Login')}>
                    <Text style={[globalStyles.Onbordinglogintxt]}>Login</Text>
                </TouchableOpacity>
            </View> 
        
        </View>

    )
}

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.1, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View
                        style={[
                            globalStyles.onboardingdot,
                            {
                                width: dotWidth,
                                opacity,
                            },
                        ]}
                        key={i.toString()}
                    />
                );
            })}
        </View>
    );
};

const Onboardingitem = ({ item }) => {
    const { width } = useWindowDimensions();

     // Back handler
//   useEffect(() => {
//     const backAction = () => {
//       Alert.alert('Hold on!', 'Are you sure you want to go back?', [
//         {
//           text: 'Cancel',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         {text: 'YES', onPress: () => BackHandler.exitApp()},
//       ]);
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();
//   }, []);

    return (
        <View style={[globalStyles.Onbordingcontainer1, { width }]}>
            <Image source={item.image} style={[globalStyles.Onbordingimage, { width, resizeMode: 'contain' }]} />
            <View style={[globalStyles.OnbordingtextContainer]}>
                <Text style={[globalStyles.Onbordingtitle]}>{item.title}</Text>
                <Text style={[globalStyles.Onbordingdescription]}>{item.description}</Text>
            </View>
        </View>
    );
};



export default SignupCarousel;