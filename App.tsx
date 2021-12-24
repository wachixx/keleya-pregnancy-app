/**
 * Keleya onboarding screens
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from "./src/screens/MainScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import NameScreen from "./src/screens/NameScreen";
import DateScreen from './src/screens/DateScreen';
import WorkoutFrequencyScreen from './src/screens/WorkoutFrequencyScreen';
import SuccessScreen from "./src/screens/SuccessScreen";
import {RootStackParamList} from './src/screens/RootStackParamList';
import Store from './src/context/Store';
import './src/translations/Localize';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    // @ts-ignore
    <Store>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown:false}}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="NameScreen" component={NameScreen} />
          <Stack.Screen name="DateScreen" component={DateScreen} />
          <Stack.Screen name="WorkoutFrequencyScreen" component={WorkoutFrequencyScreen} />
          <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Store>
  );
}
export default App;
