import React from 'react';
import { View , StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

// import { Container } from './styles';

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    
    container : {
      padding: 15,
      backgroundColor: "#131E26",
      height: "100%",
      
    },
    containerScroll:{
      marginBottom: 100,
      height: "100%"
    },
    aeroTitle :{
      
      textAlign: "center",
      marginLeft: 5,
    marginRight: 5,
      fontFamily: 'Poppins_700Bold',
      fontSize: 25,
      color: "#E8EFF3"
    },
    aeroCity: {
      textAlign: "center",
      marginLeft: 5,
    marginRight: 5,
      fontFamily: 'Poppins_400Regular',
      fontSize: 20,
      color: "#858585"
      
    },
    containerSearch: {
      display: "flex",
      flexDirection : "row",
      height: 40,
      borderWidth: 2,
      marginTop: 5,
      borderColor:"#03BDAF",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      elevation: 3

    },
    inputSearch :{
      paddingLeft: 10,
      alignItems: "center",
      fontSize: 18,
      flex: 4,
      fontFamily: "Poppins_400Regular",
      height: 40,
      color: "#E8EFF3",
      
    },buttonSearch :{
      color: '#FFFF',
      fontFamily: 'Nunito_800ExtraBold_Italic',
      flex: 1,
      borderRadius: 10,
      padding: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"#03BDAF",
      height: 40
    },
    label:{
      fontFamily: "Nunito_700Bold",
      fontSize: 22
    },navbar:{
      
      padding: 10,
      alignItems: "center",
      backgroundColor: "#707070"
    },navbarChild:{
      fontFamily: "Nunito_700Bold",
      fontSize: 24,
      color: "#ffff"
    },titleP:{
      textAlign: "center",
      fontFamily: "Poppins_400Regular",
      fontSize: 18,
      color: "#E8EFF3"
    },titleS:{
      
      fontFamily: "Nunito_700Bold",
      fontSize: 18
    },contentP:{
      fontFamily: 'Nunito_400Regular',
      fontSize: 16
    },infosT:{
      fontFamily: "Nunito_300Light",
      fontSize: 14
    },searchSt:{
      alignItems: 'center',
      marginTop: 10
    },searchStTxt:{
      fontFamily: "Nunito_700Bold",
      fontSize: 18,
      color: "#E8EFF3"
    },card: {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      display: "flex",
      borderRadius: 10,
      backgroundColor: '#1C2730',
      alignItems: "center",
      justifyContent: "space-between",
      flex: 2,
      flexDirection: "row",
      padding: 20,
     },

})





export default styles;