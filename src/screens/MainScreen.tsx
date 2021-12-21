import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Image,
    View,
    Text,
    TouchableOpacity
  } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import { containers, textStyles, dots, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import LoginButton from '../components/LoginButton';
import {RootStackParamList} from '../RootStackParamList';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

const slides = [
    {
      text: 'For a fit and relaxed.\npregnancy'
    },
    {
       text: 'Slide 2 Text coming\nsoon'
    },
    {
       text: 'slide 3 text coming\nsoon'
    }
]


const LandingScreen = () =>  {

    const navigation = useNavigation<mainScreenProp>();

    const _renderItem = ({item} : {item:any}) => {
        return (
            <ImageBackground  source={require('../assets/images/first-intro-image.png')} style={containers.fullContainer}>
                
                <Image resizeMode='contain' style={otherStyles.logo} source={require('../assets/images/keleya-logo.png')}/>
                <Text style={textStyles.textHeader}>{item.text}</Text>
    
                <View style={containers.bottomWrapper}>
                    <Button
                    btnString="Get Started"
                    onClick={() => navigation.navigate('SignUpScreen')}
                    tealBackgroundColor = {true}/>
                    <LoginButton
                    btnString="Or Login"
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