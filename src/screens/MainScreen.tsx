import React from 'react';
import {
    ImageBackground,
    Image,
    View,
    Text
  } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import { containers, textStyles, dots, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import LoginButton from '../components/LoginButton';
import {RootStackParamList} from '../types/RootStackParamList';
import { useTranslation } from 'react-i18next';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

const LandingScreen = () =>  {

    const navigation = useNavigation<mainScreenProp>();
    const { t } = useTranslation();

    const slides = [
        {
          text: t('slide_txt1')
        },
        {
           text: t('slide_txt2')
        },
        {
           text: t('slide_txt3')
        }
    ]

    const _renderItem = ({item} : {item:any}) => {
        return (
            <ImageBackground  source={require('../assets/images/first-intro-image.png')} style={containers.fullContainer}>
                
                <Image resizeMode='contain' style={otherStyles.logo} source={require('../assets/images/keleya-logo.png')}/>
                <Text style={textStyles.textHeader}>{item.text}</Text>
    
                <View style={containers.bottomWrapper}>
                    <Button
                    btnString={t('main:get_started')}
                    onClick={() => navigation.navigate('SignUpScreen')}
                    btnActive = {true}/>
                    <LoginButton
                    btnString={t('main:or_login')}
                    onClick={() => navigation.navigate('SignInScreen')}/>
                </View>

            </ImageBackground>
        );
    }
    
    return (
        <AppIntroSlider 
        renderItem={_renderItem} 
        data={slides}
        dotStyle={dots.dotStyle}
        activeDotStyle={dots.activeDotStyle}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        />
)};

export default LandingScreen;