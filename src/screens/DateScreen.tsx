import React from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../styles/Colors';
import { containers, textStyles, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import Header from '../components/Header'; 
import {RootStackParamList} from '../RootStackParamList';

type dateScreenProp = StackNavigationProp<RootStackParamList, 'NameScreen'>;

const DateScreen = () =>  {
    const navigation = useNavigation<dateScreenProp>();

    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/due-date-background-image.jpg')} style={containers.fullContainer}/>
            <View style={containers.midContainer}>
                <Text style={textStyles.textHeader}>When is your baby due, Sam?</Text>
                <Text style={textStyles.dueDate}>Aug 21, 2022</Text>
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString="Continue"
                onClick={() => navigation.navigate('WorkoutFrequencyScreen')}
                tealBackgroundColor = {false}/>
            </View>
        </View>
)};

export default DateScreen;
