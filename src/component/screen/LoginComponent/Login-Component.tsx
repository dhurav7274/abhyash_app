/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import LoginCss from './Login-Css';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {textColor, widthSize} from '../../shareComponent/ThemeComponent';

const LoginComponent = ({navigation}:any): React.JSX.Element => {
  return (
    <ScrollView contentContainerStyle={LoginCss.main_conatiner}>
      <View style={LoginCss.header_conatiner}>
        <MaterialIcon name="person" size={150} style={LoginCss.header_icon} />
        <Text style={LoginCss.header_text}>Sign In</Text>
      </View>

      <View style={LoginCss.body_conatiner}>
        {/* username conatiner  */}
        <View style={LoginCss.input_conatiner}>
          <MaterialIcon
            name="person"
            size={25}
            color={textColor.text_primary_color}
            style={LoginCss.input_icon}
          />
          <TextInput
            style={LoginCss.text_input_box}
            placeholder="Please Enter Username "
            placeholderTextColor={textColor.text_primary_color}
          />
        </View>

        {/* Password conatiner */}
        <View style={LoginCss.input_conatiner}>
          <MaterialIcon
            name="lock"
            size={25}
            color={textColor.text_primary_color}
            style={LoginCss.input_icon}
          />
          <TextInput
            style={LoginCss.text_input_box}
            placeholder="Please Enter Password "
            placeholderTextColor={textColor.text_primary_color}
          />
        </View>

        {/* hyper link  */}
        <Text
          style={LoginCss.hyper_link}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>

        {/* Login button  */}
        <TouchableHighlight
          style={{width: widthSize.btn_box_size, marginVertical: 40}}>
          <Text style={LoginCss.btn}>Login Now</Text>
        </TouchableHighlight>

        {/* sign up conatiner  */}
        <View style={{ width: widthSize.btn_box_size,flexDirection:'row',justifyContent:'center',gap:5,marginBottom:40}}>
          <Text style={{color:textColor.text_primary_color}}>I have no account?</Text>
          <Text style={{color:textColor.text_primary_color,fontWeight:'bold'}} onPress={()=>navigation.navigate('SignUp')}>Sign Up </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export {LoginComponent};
