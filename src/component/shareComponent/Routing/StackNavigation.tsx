/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginComponent} from '../../screen/LoginComponent/Login-Component';
import {ForgotPasswordComponent} from '../../screen/ForgotPasswordComponent/ForgotPassword-Component';
import { SingupComponent } from '../../screen/SingupComponent/Singup-Component';
const Stack = createNativeStackNavigator();
const StackNavigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SingIn" component={LoginComponent}  options={{headerShown:false}}/>
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordComponent}
        />

        <Stack.Screen name="SignUp" component={SingupComponent}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
