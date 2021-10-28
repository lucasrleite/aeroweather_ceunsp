import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator} from "@react-navigation/stack"


import Freq from '../pages/Frequencies';
import Metar from '../pages/Metar'
import Main from '../pages/Main'
import Routes from "../routes/AppStack"
import Support from '../pages/Support'
import Termos from '../pages/Termos'
const { Navigator, Screen } = createStackNavigator();

export default function StackNavigator() {
  return (
    
    <Navigator screenOptions={{ headerShown: false }}>
       
      <Screen name="Main" component={Main} />
      <Screen name="Support" component={Support} />
      <Screen name="Termos" component={Termos} />
      <Screen name="Drawer" component={Routes} />
      
      
    </Navigator>
 
  );
}
