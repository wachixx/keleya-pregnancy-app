import React,{ useState } from 'react';
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
import {Picker} from '@react-native-picker/picker';

import {Colors} from '../styles/Colors';
import { containers, textStyles, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import Header from '../components/Header'; 
import {RootStackParamList} from '../RootStackParamList';

type workoutScreenProp = StackNavigationProp<RootStackParamList, 'WorkoutFrequencyScreen'>;

const WorkoutFrequencyScreen = () =>  {

    const navigation = useNavigation<workoutScreenProp>();
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={containers.bgWhite}>
            <Header onClick={() => navigation.goBack()}/>
            <Image source={require('../assets/images/workout-goal-background-image.jpg')} style={containers.fullContainer}/>
            <Text style={textStyles.textHeaderTop}>How many times a week do{'\n'} you want to be active?</Text>
            <View style={[containers.midContainer,{paddingTop:40}]}>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Once a week" value="1" />
                    <Picker.Item label="2 times a week" value="2" />
                    <Picker.Item label="3 times a week" value="3" />
                    <Picker.Item label="4 times a week" value="4" />
                    <Picker.Item label="5 times a week" value="5" />
                    <Picker.Item label="6 times a week" value="6" />
                    <Picker.Item label="7 times a week" value="7" />
                </Picker>
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString="Continue"
                onClick={() => navigation.navigate('SuccessScreen')}
                tealBackgroundColor = {false}/>
            </View>
        </View>
)};

export default WorkoutFrequencyScreen;
