import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './Detail'; // Import the Detail component
import Currency from './Currency';
import Language from './Language';
import Theme from './Theme';
import Security from './Security';
import Notification from './Notification';

const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Detail" component={Detail} options={{ headerBackTitleVisible: false }} />
//       <Stack.Screen name="Currency" component={Currency} />
//       <Stack.Screen name="Language" component={Language} />
//       <Stack.Screen name="Theme" component={Theme} />
//       <Stack.Screen name="Security" component={Security} />
//       <Stack.Screen name="Notification" component={Notification} />
//     </Stack.Navigator>
//   );
// }

export default HomeStack;
