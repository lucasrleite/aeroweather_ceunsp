import React ,{ useState, useEffect, Suspense }from 'react';
import { View , Image, Text, TextInput, Button, TouchableOpacity, ScrollView,  Alert,ActivityIndicator} from 'react-native';
import {FontAwesome} from "@expo/vector-icons"
import axios from 'axios';
import Navbar from '../../components/Navbar'
import SkeletonContent from 'react-native-skeleton-content';



import FrequenciesAirport from "../../components/FrequenciesAirport"
import SkeletonFreq from '../../components/SkeletonFreq'


import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../services/api';
import styles from "./styles";

export default function Freq() {
  const [freq, setFreq] = useState({});
  const [text, setText] = useState("");
  const [searchSt, setSearchSt] = useState(true)
  const [errorSearch, setErrorSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  async function loadFreq(dado) {
   if(dado.length){
    setErrorSearch(false)
    setSearchSt(true)
     setLoading(true)
     setFreq({"NADA":"NADA"})
    await axios.get(`https://airrportapi.herokuapp.com/aero/teste/${dado}`)
    .then(resultado => {
      setLoading(false)
      setErrorSearch(false)
      setSearchSt(true)
      setFreq(resultado.data.airport);   
      
    })
    .catch(erro => {
      setLoading(false)
      setErrorSearch(true)
      console.log(erro)
      setFreq("")
    });
    
   }else{
    Alert.alert(
      'ERRO', 'Insira algum ICAO', [
      { text: "OK"}
      ],
      { cancelable: true });
   }
    

    
  };

  return (
  <SafeAreaView >
    <Navbar title={"Frequências"}icon={true}></Navbar>
    <View style={styles.container}>
    <Text style={styles.titleP}>Digite abaixo o ICAO do Aeroporto:</Text>
    <View style={styles.containerSearch}>
      <TextInput
        style={styles.inputSearch}
        placeholder="Digite o ICAO"
        onChangeText={text => setText(text)}
        defaultValue={text} 
        maxLength={4}
      />
      <TouchableOpacity  style={styles.buttonSearch} onPress={ ()=>{loadFreq(text)} }><FontAwesome name="search" size={24} color="white" /></TouchableOpacity>
      
  
    </View>
   
   
    
     
    
    {!searchSt && <View style={styles.searchSt}><Text style={styles.searchStTxt}>Pesquise por algum ICAO!!!</Text></View>}
    {errorSearch && <View style={styles.searchSt}>
      <Text style={styles.aeroTitle}>Erro!!! O ICAO digitado pode estar incorreto ou nossos servidores estão fora do ar...</Text>
      <Image style={{width: 400,height: 400}} source={require ('../../assets/404.png')}></Image>
    </View> }
    {loading && <SkeletonFreq/>}
    
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}  style={styles.containerScroll}>
       <View>
        {!!freq.airportName && <Text style={styles.aeroTitle}>{freq.airportName}</Text>}
        {!!freq.airportName && <Text style={styles.aeroCity}>{freq.airportInfo.fullInfo} </Text>}
        </View>
      <View style={{paddingBottom: 20}} >
      {!!freq.freq && freq.freq.map((item, index) => {
        return (
          <FrequenciesAirport key={index} freqType={item.type} desc={item.description} frequency={item.frequency}></FrequenciesAirport>
        )
      })}
      </View >
       
    </ScrollView>
     
    
    </View>
    
  
  </SafeAreaView>
  );

}
