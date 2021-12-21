import React from 'react';
import {
    ImageBackground,
    View,
    Text
} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import { containers, textStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import {RootStackParamList} from '../RootStackParamList';

type workoutScreenProp = StackNavigationProp<RootStackParamList, 'WorkoutFrequencyScreen'>;

const SuccessScreen = () =>  {
    const navigation = useNavigation<workoutScreenProp>();
    return (
        <ImageBackground source={require('../assets/images/notifications-background-image.jpg')} style={containers.fullContainer}> 
            <Icon name="bell-o" size={40}/>
            <Text style={textStyles.textHeader}>Get notification to boost{'\n'} your motivation.</Text>
            <View style={containers.bottomWrapper}>
                <Text onPress={() => navigation.navigate('MainScreen')}>Skip</Text>
                <Button
                btnString="Allow Notifications"
                onClick={() => navigation.navigate('MainScreen')}
                tealBackgroundColor = {true}/>
            </View>
        </ImageBackground>
)};

export default SuccessScreen;
