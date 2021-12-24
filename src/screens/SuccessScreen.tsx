import React, {useContext} from 'react';
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
import {RootStackParamList} from './RootStackParamList';
import { useTranslation } from 'react-i18next';
import { Colors } from '../styles/Colors';
import {Context}  from '../context/Store';

type workoutScreenProp = StackNavigationProp<RootStackParamList, 'WorkoutFrequencyScreen'>;

const SuccessScreen = () =>  {

    const navigation = useNavigation<workoutScreenProp>(); 
    const { t } = useTranslation();
    const [state, dispatch] = useContext(Context);

    console.log(state)

    return (
        <ImageBackground source={require('../assets/images/notifications-background-image.jpg')} style={containers.fullContainer}> 
            <Icon name="bell-o" color={Colors.GREYISH_BROWN} size={40}/>
            <Text style={textStyles.textHeader}>{t('success:notification_txt')}</Text>
            <View style={containers.bottomWrapper}>
                <Text onPress={() => navigation.navigate('MainScreen')}>{t('success:skip')}</Text>
                <Button
                btnString={t('success:allow')}
                onClick={() => navigation.navigate('MainScreen')}
                btnActive = {true}/>
            </View>
        </ImageBackground>
)};

export default SuccessScreen;
