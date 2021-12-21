import React from "react";
import {
  View
} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Entypo'; 
import { otherStyles } from '../styles/Index'  

interface Props {
  onClick: () => void;
}

const Header: React.FC<Props> = ({ 
    onClick
  }) => { 
  return (
        <View style={otherStyles.header}>
            <Icon onPress={onClick} name="arrow-left" size={20}/>
        </View>
  );
}

export default Header;