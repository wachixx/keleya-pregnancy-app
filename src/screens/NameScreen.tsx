import React, {useState, useEffect} from 'react';
import {
    TextInput,
    Image,
    View,
    Text
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import { containers, textStyles, otherStyles } from '../styles/Index';  
import Button from '../components/Button'; 
import Header from '../components/Header'; 

import {RootStackParamList} from '../types/RootStackParamList';
import { useTranslation } from 'react-i18next';

type nameScreenProp = StackNavigationProp<RootStackParamList, 'NameScreen'>;

const NameScreen = () =>  {

    const navigation = useNavigation<nameScreenProp>();
    const { t } = useTranslation();
    
    const [name, setName] = useState<string>("");
    const [btnActive, setBtnActive] = useState<boolean>(false);

    useEffect(() => {
        setBtnActive(false);
        if (name.length === 0) {
          return;
        }
        setBtnActive(true);
    }, [name]);

    const saveBtnClick = () =>{
        if(btnActive){
            //dispatch({type:"OVERRIDE",key:"UserObject", payload:null});
            navigation.navigate('DateScreen')
        }else{
            return;
        }
    }

    return (
        <View style={containers.bgWhite}>
        <Header onClick={() => navigation.goBack()}/>
        <Image source={require('../assets/images/authentication-background-image.jpg')} style={containers.fullContainer}/>
        <View style={containers.midContainer}>
            <Text style={textStyles.textHeader}>It is great that your are here. First{'\n'} things first, what should we{'\n'} call you.</Text>
                <TextInput
                    style={otherStyles.input}
                    placeholder="Your name" 
                    onChangeText={name => setName(name)}
                />
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString="Continue"
                btnActive = {btnActive}
                onClick = {saveBtnClick}/>
            </View>
        </View>
)};

export default NameScreen;
