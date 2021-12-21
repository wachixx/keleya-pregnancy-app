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

import {RootStackParamList} from '../RootStackParamList';

import { containers, textStyles, dots, otherStyles } from '../styles/Index';  
import {Colors} from '../styles/Colors';
import Button from '../components/Button'; 
import Header from '../components/Header'; 

type signInScreenProp = StackNavigationProp<RootStackParamList, 'SignInScreen'>;

const SignInScreen = () =>  {

    const navigation = useNavigation<signInScreenProp>();

    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/authentication-background-image.jpg')} style={containers.fullContainer}/>
            <View style={containers.midContainer}>
                <Text style={textStyles.textHeader}>Welcome back!</Text>
                <TextInput
                    style={otherStyles.input}
                    value=""
                    placeholder="example@gmail.com"
                />
                <TextInput
                    style={otherStyles.input}
                    value=""
                    placeholder="Enter password"
                />
            </View>
            <View style={containers.bottomWrapper}>
                <Text>Have you forgotten your password?</Text>
                <Button
                btnString="Log in"
                onClick={() => navigation.navigate('SuccessScreen')}
                tealBackgroundColor = {false}/>
            </View>
        </View>
)};

export default SignInScreen;
