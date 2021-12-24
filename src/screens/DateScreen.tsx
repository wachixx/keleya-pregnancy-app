import React, {useState,useEffect,useContext} from 'react';
import {
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import DatePicker from 'react-native-date-picker'

import { containers, textStyles, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import Header from '../components/Header'; 
import {RootStackParamList} from './RootStackParamList';
import { useTranslation } from 'react-i18next';
import {Context}  from '../context/Store';

type dateScreenProp = StackNavigationProp<RootStackParamList, 'NameScreen'>;

const DateScreen = () =>  {

    const navigation = useNavigation<dateScreenProp>();
    const { t } = useTranslation();
    const [state, dispatch] = useContext(Context);

    const [date, setDate] = useState<Date>(new Date())
    const [open, setOpen] = useState<boolean>(false)
    const [btnActive, setBtnActive] = useState<boolean>(false);

    useEffect(() => {
        setBtnActive(false);
        if (date.getTime()  < new Date().getTime() ) {
          return;
        }
        setBtnActive(true);
    }, [date]);

    const saveBtnClick = () =>{
        let user = state.user
        user["dateOfDelivery"] = date;
      
        if(btnActive){
            dispatch({type:"UPDATE", payload:user});
            navigation.navigate('WorkoutFrequencyScreen')
        }else{
            return;
        }
    }

    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/due-date-background-image.jpg')} style={containers.fullContainer}/>
            <View style={containers.midContainer}>
                <Text style={textStyles.textHeader}>{t('date:date_txt')}, {state.user.name}?</Text>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={textStyles.dueDate}>{date.toLocaleString()}</Text>
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                />
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString={t('date:continue')}
                btnActive = {btnActive}
                onClick = {saveBtnClick}/>
            </View>
        </View>
)};

export default DateScreen;
