/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {bgcolor} from './component/shareComponent/ThemeComponent';
import StackNavigation from './component/shareComponent/Routing/StackNavigation';
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{height:'100%'}}>
      <StatusBar backgroundColor={bgcolor.bg_primary_color} />
       <StackNavigation />
    </SafeAreaView>
  );
}

export default App;
