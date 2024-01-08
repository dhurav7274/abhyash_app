/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {textColor} from '../../shareComponent/ThemeComponent';
import {ForgotPasswordCss} from './ForgotPassword-Css';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const ForgotPasswordComponent = (): React.JSX.Element => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1,}}>
      <View style={ForgotPasswordCss.header}>
        <MaterialIcon name='lock-question' size={60} />
      </View>
    </ScrollView>
  );
};

export {ForgotPasswordComponent};
