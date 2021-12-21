import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { buttons } from '../styles/Index'  

interface Props {
  btnString : string;
  onClick: () => void;
}

const LoginButton: React.FC<Props> = ({ 
    onClick,
    btnString 
  }) => { 
  return (
      <TouchableOpacity onPress={onClick}>
          <View>
              <Text style={buttons.btnTxtBlack}>{btnString}</Text>
          </View>
      </TouchableOpacity>
  );
}

export default LoginButton;