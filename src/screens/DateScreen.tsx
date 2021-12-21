import React, {useState} from 'react';
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
import {RootStackParamList} from '../utils/RootStackParamList';

type dateScreenProp = StackNavigationProp<RootStackParamList, 'NameScreen'>;

const DateScreen = () =>  {
    const navigation = useNavigation<dateScreenProp>();

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/due-date-background-image.jpg')} style={containers.fullContainer}/>
            <View style={containers.midContainer}>
                <Text style={textStyles.textHeader}>When is your baby due, Sam?</Text>
                <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={textStyles.dueDate}>Aug 21, 2022</Text>
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
                btnString="Continue"
                onClick={() => navigation.navigate('WorkoutFrequencyScreen')}
                tealBackgroundColor = {false}/>
            </View>
        </View>
)};

export default DateScreen;
