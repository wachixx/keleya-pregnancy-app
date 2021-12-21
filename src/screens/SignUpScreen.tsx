import React from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    View,
    Text,
    ImageBackground
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import CheckBox from 'react-native-check-box';

import {Colors} from '../styles/Colors';
import { containers, textStyles, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import Header from '../components/Header'; 

import {RootStackParamList} from '../utils/RootStackParamList';


type signUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUpScreen'>;

const SignUpScreen = () =>  {

    const navigation = useNavigation<signUpScreenProp>();

    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/authentication-background-image.jpg')} style={containers.fullContainer}/>
            <View style={containers.midContainer}>
                <Text style={textStyles.textHeader}>Add your details below to set{'\n'} up an account.</Text>
                <TextInput
                    style={otherStyles.input}
                    placeholder="example@gmail.com"
                />
                <TextInput
                    style={otherStyles.input}
                    placeholder="Enter password"
                />
                <View style={containers.checkBoxContainer}>
                    <CheckBox
                        style={{marginTop: 10}}
                        checkBoxColor={Colors.PALE_TEAL}/>
                    <Text style={textStyles.termsTxt}>I have read <Text style={textStyles.txtBold}> privacy policy.</Text></Text>
                </View>
                <View style={containers.checkBoxContainer}>
                    <CheckBox
                        style={{marginTop: 10}}
                        checkBoxColor={Colors.PALE_TEAL}/>
                    <Text style={textStyles.termsTxt}>I accept <Text style={textStyles.txtBold}>terms and conditions </Text>and<Text style={textStyles.txtBold}> Keleya's advice.</Text></Text>
                </View>
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString="Create account"
                onClick={() => navigation.navigate('NameScreen')}
                tealBackgroundColor = {false}/>
            </View>
        </View>
)};

export default SignUpScreen;
