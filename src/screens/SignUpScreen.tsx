import React, {useState, useEffect, useContext} from 'react';
import {
    TextInput,
    Image,
    View,
    Text
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import CheckBox from 'react-native-check-box';

import {Colors} from '../styles/Colors';
import { containers, textStyles, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import PasswordInput from '../components/PasswordInput';
import Header from '../components/Header'; 

import {RootStackParamList} from './RootStackParamList';
import {Context}  from '../context/Store';
import { useTranslation } from 'react-i18next';
import {validateEmail} from '../utils/EmailValidator';

type signUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUpScreen'>;

const SignUpScreen = () =>  {

    const navigation = useNavigation<signUpScreenProp>(); 
    const { t } = useTranslation();
    const [state, dispatch] = useContext(Context);

    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, sePassword] = useState<string>("");
    const [btnActive, setBtnActive] = useState<boolean>(false);
    const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState<boolean>(false);
    const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

    const handleCheckBoxClickBoxes = (checkBoxName:string)=>{
        if(checkBoxName === "terms"){
            setAcceptedTerms(!acceptedTerms);
        }else{
            setAcceptedPrivacyPolicy(!acceptedPrivacyPolicy)
        }
    }

    const saveBtnClick = () =>{
        let user = {
            emailAddress: emailAddress,
            password: password
        }
        if(btnActive){
            dispatch({type:"CREATE",key:"logins",payload: user});
            navigation.navigate('NameScreen')
        }else{
            return;
        }
    }

    useEffect(() => {
        setBtnActive(false);
        if (!validateEmail(emailAddress) || password.length == 0 || !acceptedPrivacyPolicy || !acceptedTerms) {
          return;
        }
        setBtnActive(true);
    }, [emailAddress, password, acceptedTerms, acceptedPrivacyPolicy]);

    
    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/authentication-background-image.jpg')} style={containers.fullContainer}/>
            <View style={containers.midContainer}>
                <Text style={textStyles.textHeader}>{t('signup:signup_txt')}</Text>
                <TextInput
                    style={otherStyles.input}
                    placeholder="example@gmail.com"
                    onChangeText={emailAddress => setEmailAddress(emailAddress)}
                />
                <PasswordInput
                 btnString={t('signup:enter_password')}
                 onChangeText={password => sePassword(password)}/>
                 
                <View style={containers.checkBoxContainer}>
                    <CheckBox
                        isChecked={acceptedPrivacyPolicy ? true : false}
                        style={{marginTop: 10}}
                        checkBoxColor={Colors.PALE_TEAL}
                        onClick={() => handleCheckBoxClickBoxes("")}/>
                    <Text style={textStyles.termsTxt}>{t('signup:have_read')} <Text style={textStyles.txtBold}> {t('signup:privacy_policy')}.</Text></Text>
                </View>
                <View style={containers.checkBoxContainer}>
                    <CheckBox
                        isChecked={acceptedTerms ? true : false}
                        style={{marginTop: 10}}
                        checkBoxColor={Colors.PALE_TEAL}
                        onClick={() => handleCheckBoxClickBoxes("terms")}/>
                    <Text style={textStyles.termsTxt}>{t('signup:i_accept')} <Text style={textStyles.txtBold}>{t('signup:terms')} </Text>{t('signup:and')}<Text style={textStyles.txtBold}> {t('signup:advice')}.</Text></Text>
                </View>
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString={t('signup:create_account')}
                btnActive = {btnActive}
                onClick = {saveBtnClick}
                />
            </View>
        </View>
)};

export default SignUpScreen;
