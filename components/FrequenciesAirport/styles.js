import React from 'react';
import {StyleSheet } from 'react-native';



const styles = StyleSheet.create({
   card: {
    margin: 5,
    display: "flex",
    borderRadius: 10,
    backgroundColor: '#1C2730',
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    padding: 20,  
   },
   typeFreq:{
    textAlign: "center",
    fontFamily: 'Nunito_700Bold',
    fontSize: 16
   },
   frequency:{
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: "#707070",
   
   },rowFreq:{
     flex: 4
   },iconFreq:{
    marginRight: 20,
    color: "#03BDAF"
   },titleP:{
    fontFamily: 'Nunito_800ExtraBold_Italic',
    fontSize: 20
  },titleS:{
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: "#E8EFF3"
  },contentP:{
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#03BDAF"
  },infosT:{
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#8C8C8C"
  }
   

})





export default styles;