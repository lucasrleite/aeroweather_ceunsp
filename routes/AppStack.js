import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Octicons } from '@expo/vector-icons';
import {Dimensions, Image, Text} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;
let Width34 = ScreenWidth*0.6;


import Freq from '../pages/Frequencies';
import Metar from '../pages/Metar'

const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    
      <Drawer.Navigator  drawerType="slide" drawerStyle={{
        backgroundColor:"#131E26",
        width: Width34,
        
        }} drawerContentOptions={{
          
        activeTintColor: "#E8EFF3",
        inactiveTintColor: "#858585",
        itemStyle: { },

      }}>
        
         <Drawer.Screen  name="METAR"  options={{
          title: 'METAR',
          
          drawerLabel: ({focused, size}) => (<Text style={{fontFamily: 'Poppins_700Bold',fontSize: 16,color: "#E8EFF3"}}>METAR</Text> ),
          drawerIcon: ({focused, size}) => ( 
            size=23,
            <Image source={require ('../assets/metar.png')}></Image>
            
            
          ),
        }} component={Metar}/>
        <Drawer.Screen   name="Frequências"  options={{ 
          title: 'Frequências',
          
          drawerLabel: ({focused, size}) => (<Text style={{fontFamily: 'Poppins_700Bold',fontSize: 16,color: "#E8EFF3"}}>Frequencias</Text> ),
          drawerIcon: ({focused, size}) => ( 
            size=23,
            <Image style={{margin: 2}}source={require ('../assets/freq.png')}></Image>
            
          ),
        }} component={Freq}/>
        
      
       
      </Drawer.Navigator>
   
    
    
  );
}