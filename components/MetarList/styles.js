import React from 'react';
import {StyleSheet } from 'react-native';



const styles = StyleSheet.create({
   container:{
     justifyContent: "space-between",
     alignItems: "stretch",
     flexWrap: "wrap",
     flexDirection: "row"
   },
   card: {
    width: "47%",
    margin: 5,
    display: "flex",
    borderRadius: 10,
    backgroundColor: '#1C2730',
    alignItems: "center",  
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexGrow: 1,
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
     
   },iconFreq:{
    marginRight: 20,
    resizeMode: "contain",
    height: 60
    
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
    fontSize: 18,
    color: "#8C8C8C"
  },titleC:{
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    color: "#E8EFF3",
    textAlign: "center",
    marginTop: 10
    
  },titleDiv:{
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },cardMetar:{
    backgroundColor: '#1C2730',
    borderRadius: 10,
    margin: 5,
    padding: 10,alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },infosRaw:{
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#8C8C8C",
    textAlign: "center"

  }
   

})





export default styles;