/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {SingupCss} from './SingupCss';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {textColor} from '../../shareComponent/ThemeComponent';
const SingupComponent = ({navigation}:any): React.JSX.Element => {
  return (
    <ScrollView contentContainerStyle={SingupCss.mainConatiner}>
      <View style={SingupCss.header}>
        <MaterialIcon
          name="person"
          color={textColor.text_primary_color}
          size={150}
        />
        <Text style={SingupCss.header_text}>Register New User</Text>
      </View>

      {/* body conatiner start  */}
      <View style={SingupCss.body}>
        <View style={SingupCss.input_group}>
          <View style={SingupCss.input_group_input_box}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor={textColor.text_secondary_color}
            />
          </View>

          <View style={SingupCss.input_group_input_box}>
            <TextInput
              placeholder="Last Name"
              placeholderTextColor={textColor.text_secondary_color}
            />
          </View>
        </View>

        <View style={SingupCss.input_box}>
          <MaterialIcon
            name="person"
            color={textColor.text_secondary_color}
            style={SingupCss.input_icon}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={textColor.text_secondary_color}
          />
        </View>

        <View style={SingupCss.input_box}>
          <MaterialIcon
            name="email"
            color={textColor.text_secondary_color}
            style={SingupCss.input_icon}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={textColor.text_secondary_color}
          />
        </View>

        <View style={SingupCss.input_box}>
          <MaterialIcon
            name="phone"
            color={textColor.text_secondary_color}
            style={SingupCss.input_icon}
          />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={textColor.text_secondary_color}
          />
        </View>

        <View style={SingupCss.input_box}>
          <MaterialIcon
            name="lock"
            color={textColor.text_secondary_color}
            style={SingupCss.input_icon}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={textColor.text_secondary_color}
            secureTextEntry
          />
        </View>

        <View style={SingupCss.input_box}>
          <MaterialIcon
            name="lock"
            color={textColor.text_secondary_color}
            style={SingupCss.input_icon}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={textColor.text_secondary_color}
            secureTextEntry
          />
        </View>

        <TouchableHighlight
          style={{width: "95%", marginVertical: 20}}>
          <Text style={SingupCss.btn}>Register Now</Text>
        </TouchableHighlight>

        <View style={{ width:'95%',flexDirection:'row',justifyContent:'center',gap:5,marginBottom:40}}>
          <Text style={{color:"red"}}>I have an account?</Text>
          <Text style={{color:textColor.text_secondary_color,fontWeight:'bold'}} onPress={()=>navigation.navigate('SingIn')}>Sign In </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export {SingupComponent};
