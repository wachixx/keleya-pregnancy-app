import React from "react";
import {
  View,
  TextInput
} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Colors } from '../styles/Colors';
import {otherStyles} from '../styles/Index'  

interface Props {
  btnString : string;
}

const PasswordInput: React.FC<Props> = ({btnString}) => { 

  const [secure, setSecure] = React.useState<boolean>(true);

  return (
      <View style={otherStyles.passwordFieldWrapper}>
           <TextInput
              style = {otherStyles.input}
              placeholder = {btnString}
              secureTextEntry = {secure} 
            />
            <Icon style={otherStyles.eyeIcon}
              name={secure ? "eye" : 'eye-slash'}
              size={17} color={Colors.GREYISH_BROWN} 
              onPress={() => setSecure(!secure)} />
      </View>    
  );
}

export default PasswordInput;