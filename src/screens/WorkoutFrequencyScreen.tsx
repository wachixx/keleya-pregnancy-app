import React,{ useState,useEffect } from 'react';
import {
    Image,
    View,
    Text
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import { containers, textStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import Header from '../components/Header'; 
import {RootStackParamList} from '../types/RootStackParamList';
import { useTranslation } from 'react-i18next';

type workoutScreenProp = StackNavigationProp<RootStackParamList, 'WorkoutFrequencyScreen'>;

const WorkoutFrequencyScreen = () =>  {

    const navigation = useNavigation<workoutScreenProp>(); 
    const { t } = useTranslation();

    const [frequency, setFrequency] = useState<number>(0); 
    const [btnActive, setBtnActive] = useState<boolean>(false);

    useEffect(() => {
        setBtnActive(false);
        if (frequency  === 0) {
          return;
        }
        setBtnActive(true);
    }, [frequency]);

    const saveBtnClick = () =>{
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
            <Image source={require('../assets/images/workout-goal-background-image.jpg')} style={containers.fullContainer}/>
            <Text style={textStyles.textHeaderTop}>{t('frequency:freq_txt')}</Text>
            <View style={[containers.midContainer,{paddingTop:40}]}>
                <Picker
                    selectedValue={frequency}
                    onValueChange={(itemValue, itemIndex) =>
                        setFrequency(itemValue)
                    }>
                    <Picker.Item label={t('frequency:times_1')} value="1" />
                    <Picker.Item label={t('frequency:times_2')} value="2" />
                    <Picker.Item label={t('frequency:times_3')} value="3" />
                    <Picker.Item label={t('frequency:times_4')} value="4" />
                    <Picker.Item label={t('frequency:times_5')} value="5" />
                    <Picker.Item label={t('frequency:times_7')} value="6" />
                    <Picker.Item label={t('frequency:times_7')} value="7" />
                </Picker>
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString={t('frequency:continue')}
                btnActive = {btnActive}
                onClick = {saveBtnClick}/>
            </View>
        </View>
)};

export default WorkoutFrequencyScreen;
