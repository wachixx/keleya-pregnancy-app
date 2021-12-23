import React, {useState, useEffect} from 'react';
import {
    TextInput,
    Image,
    View,
    Text
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../types/RootStackParamList';

import { containers, textStyles, otherStyles } from '../styles/Index'; 
import Button from '../components/Button'; 
import Header from '../components/Header'; 
import PasswordInput from '../components/PasswordInput';
import { useTranslation } from 'react-i18next';

type signInScreenProp = StackNavigationProp<RootStackParamList, 'SignInScreen'>;

const SignInScreen = () =>  {

    const navigation = useNavigation<signInScreenProp>();
    const { t } = useTranslation();

    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, sePassword] = useState<string>("");
    const [btnActive, setBtnActive] = useState<boolean>(false);

    useEffect(() => {
        setBtnActive(false);
        if (emailAddress.length === 0) {
          return;
        }
        setBtnActive(true);
    }, [emailAddress]);

    const loginBtnClick = () =>{
        if(btnActive){
            //dispatch({type:"OVERRIDE",key:"UserObject", payload:null});
            navigation.navigate('SuccessScreen')
        }else{
            return;
        }
    }

    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/authentication-background-image.jpg')} style={containers.fullContainer}/>
            <View style={containers.midContainer}>
                <Text style={textStyles.textHeader}>{t('signin:welcome_back')}</Text>
                <TextInput
                    style={otherStyles.input}
                    placeholder="example@gmail.com"
                    onChangeText={emailAddress => setEmailAddress(emailAddress)}
                />
                <PasswordInput
                 btnString={t('signin:enter_password')}/>
            </View>
            <View style={containers.bottomWrapper}>
                <Text>{t('signin:forgot_password')}</Text>
                <Button
                btnString={t('signin:log_in')}
                btnActive = {btnActive}
                onClick = {loginBtnClick}/>
            </View>
        </View>
)};

export default SignInScreen;
