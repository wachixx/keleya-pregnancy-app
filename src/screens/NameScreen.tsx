import React from 'react';
import {
    TextInput,
    Image,
    View,
    Text
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import { containers, textStyles, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import Header from '../components/Header'; 

import {RootStackParamList} from '../utils/RootStackParamList';

type nameScreenProp = StackNavigationProp<RootStackParamList, 'NameScreen'>;

const NameScreen = () =>  {
    const navigation = useNavigation<nameScreenProp>();
    return (
        <View style={containers.bgWhite}>
        <Header onClick={() => navigation.goBack()}/>
        <Image source={require('../assets/images/authentication-background-image.jpg')} style={containers.fullContainer}/>
        <View style={containers.midContainer}>
            <Text style={textStyles.textHeader}>It is great that your are here. First{'\n'} things first, what should we{'\n'} call you.</Text>
                <TextInput
                    style={otherStyles.input}
                    placeholder="Your name"
                />
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString="Continue"
                onClick={() => navigation.navigate('DateScreen')}
                tealBackgroundColor = {false}/>
            </View>
        </View>
)};

export default NameScreen;
