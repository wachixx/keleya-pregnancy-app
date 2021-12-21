import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { buttons } from '../styles/Index';  

interface Props {
  btnString : string;
  tealBackgroundColor: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    btnString,
    tealBackgroundColor,
    onClick, 
  }) => { 
  return (
      <TouchableOpacity onPress={onClick}>
          <View style={tealBackgroundColor?buttons.btnActive:buttons.btnInactive}>
              <Text style={buttons.btnTxtWhite}>{btnString}</Text>
          </View>
      </TouchableOpacity>
  );
}

export default Button;