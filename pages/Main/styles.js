import React from 'react';
import { View , StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

// import { Container } from './styles';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      paddingTop: 10,
      paddingRight: 20,
      paddingLeft: 20,
      backgroundColor: "#131E26",
      height: "100%"
    },titleI:{
      
      fontFamily: "Poppins_700Bold",
      fontSize: 32,
      color: "#E8EFF3",
      textAlign: "center"
    },titleS:{
      marginTop: 10,
      padding: 0,
      fontFamily: "Poppins_400Regular",
      fontSize: 14,
      color: "#858585",
      textAlign: "center"
    },textI:{
      marginTop: 5,
      marginBottom: 5,
      padding: 0,
      fontFamily: "Poppins_400Regular",
      fontSize: 14,
      color: "#03BDAF",
      textAlign: "center"
    },
    textIA:{
      
      padding: 0,
      fontFamily: "Poppins_400Regular",
      fontSize: 14,
      color: "#03BDAF",
      textAlign: "center"
    },card1:{
     opacity: 0.2,
      backgroundColor: "#1C2730",
      alignItems: "center",
      padding: 20,
      width: "47%",
      borderRadius: 22,
      
    },textCard:{
      fontFamily: "Poppins_400Regular",
      color: "#FFFF",
      fontSize: 13,
      marginTop: 10,
      textAlign: "center"
    },
    card2:{
    
      backgroundColor: "#1C2730",
      alignItems: "center",
      flexDirection: "column",
      padding: 20,
      width: "47%",
      borderRadius: 22
    },containerCard:{
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
     
    },
    iconFreq:{
      
    },cardSupport:{
      
      backgroundColor: "#1C2730",
      alignItems: "center",
      flexDirection: "column",
      padding: 20,
      width: "47%",
      borderRadius: 22,
      textAlign: "justify"
    },textSup:{
      textAlign: "center",
      fontFamily: "Poppins_400Regular",
      color: "#FFFF",
      fontSize: 20,
      marginTop: 10
    },containerSup:{
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: "center",
      
      alignItems: "center"
    },
  })
  
export default styles;