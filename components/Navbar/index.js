import React, { Component } from 'react';
import { View, Text , Button} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import styles from "./styles";
import {BorderlessButton }from "react-native-gesture-handler"
import { DrawerActions,useNavigation } from '@react-navigation/native';


export default function Navbar(props) {
  
  const {dispatch, navigate} = useNavigation();
  return (
    
    <View style={styles.navbar}>     
    {props.icon &&  <BorderlessButton style={styles.button} onPress={() => dispatch(DrawerActions.toggleDrawer())}>
      <Feather name="menu" size={34} color={"#ecedee"}/>
    </BorderlessButton>}
   
    
       
    <View>
      <Text style={styles.textColor}>{props.title}</Text>
    </View>        
        
      
    </View>
  );
}
