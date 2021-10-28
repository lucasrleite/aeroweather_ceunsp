import React from 'react';
import {StyleSheet } from 'react-native';



const styles = StyleSheet.create({
   navbar:{
      padding: 15,
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 1,
      

      elevation: 5,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1b2433",
      color: "#ecedee",
   }, textColor: {
      color: "#ecedee",
      fontFamily: "Poppins_700Bold",
      fontSize: 16
   },button:{
      left: 0,
      position: "absolute",
      marginLeft: 10,
   }
   
})





export default styles;