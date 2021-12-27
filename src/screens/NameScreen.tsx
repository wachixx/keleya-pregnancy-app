import React, {useState, useEffect, useContext} from 'react';
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

import {RootStackParamList} from './RootStackParamList';
import { useTranslation } from 'react-i18next';
import {Context}  from '../context/Store';

type nameScreenProp = StackNavigationProp<RootStackParamList, 'NameScreen'>;

const NameScreen = () =>  {

    const navigation = useNavigation<nameScreenProp>();
    const { t } = useTranslation();
    const [state, dispatch] = useContext(Context);

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


        let user = {
            name: name
        }

        if(btnActive){
            dispatch({type:"UPDATE",key :"userNames", payload:user});
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
            <Text style={textStyles.textHeader}>{t('name:name_txt')} </Text>
                <TextInput
                    style={otherStyles.input}
                    placeholder={t('name:your_name')}
                    onChangeText={name => setName(name)}
                />
            </View>
            <View style={containers.bottomWrapper}>
                <Button
                btnString={t('name:continue')}
                btnActive = {btnActive}
                onClick = {saveBtnClick}/>
            </View>
        </View>
)};

export default NameScreen;
