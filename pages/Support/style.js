import React from 'react';
import { View , StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

// import { Container } from './styles';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    
    container : {
      padding: 20,
      backgroundColor: "#131E26",
      height: "100%"
    },
    containerScroll:{
      
      marginBottom: 70
      
    }
    ,
    titleP:{
      textAlign: "left",
      fontFamily: "Poppins_700Bold",
      fontSize: 26,
      color: "#E8EFF3"
    },
    titleN: {
      marginTop: 10,
      textAlign: "center",
      fontFamily: "Poppins_700Bold",
      fontSize: 20,
      color: "#E8EFF3"
    },containerPerfil:{
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: "#1C2730",
      paddingBottom: 15
    },imageP:{
      margin: 10,
      width: 150,
      height: 150,
      borderRadius: 200
    },textU:{
      color: "#858585",
      fontFamily: "Nunito_700Bold",
      fontSize: 16,
      textAlign: "center"
    },cardSocial:{
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: "#131E26",
      padding:20,
      margin: 5,
      marginTop: 10,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 1,  
      elevation: 7,
      shadowColor: "#FFFF"
    },textSocial:{
      color: "#E8EFF3",
      fontFamily: "Nunito_700Bold",
      fontSize: 16,
      
    },containerCards:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },techCard:{
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: "#1C2730",
      margin: 10,
      padding: 20
    },
    cardBack:{
      alignItems: "center",
      justifyContent: "center",
      width: 70,
      height: 70,
      borderRadius: 100,
      backgroundColor: "#1C2730",
      margin: 10,
      padding: 20
    },cardTerms:{
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      backgroundColor: "#1C2730",
      marginTop: 20,
      padding: 20      
    },buttonTerms:{

    }
  
  
  
  
  })
export default styles;