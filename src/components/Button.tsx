import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { buttons } from '../styles/Index';  

interface Props {
  btnString : string;
  btnActive: boolean;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    btnString,
    btnActive,
    onClick, 
  }) => { 
  return (
      <TouchableOpacity onPress={onClick}>
          <View style={btnActive?buttons.btnActive:buttons.btnInactive}>
              <Text style={buttons.btnTxtWhite}>{btnString}</Text>
          </View>
      </TouchableOpacity>
  );
}

export default Button;