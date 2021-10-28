import React , {useState} from 'react';
import { View, Text , TextInput, TouchableOpacity , Alert, ScrollView} from 'react-native';
import Navbar from '../../components/Navbar'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./styles";
import axios from 'axios';
import {FontAwesome} from "@expo/vector-icons"

import MetarList from '../../components/MetarList';
import SkeletonMetar from '../../components/SkeletonMetar';
export default function Metar() {
  
  const [text, setText] = useState("");
  const [searchSt, setSearchSt] = useState(false)
  const [errorSearch, setErrorSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [metar, setMetar] = useState({});
  const [nameAir, setNameAir] = useState("");
  async function loadFreq(dado) {
   
    if(dado.length!=0){
      
      setSearchSt(true)
      setLoading(true)
      setMetar({})
     await axios.get(`https://airrportapi.herokuapp.com/aero/metar/${dado}`)
     .then(resultado => {
       setLoading(false)
       setErrorSearch(false)
       setSearchSt(true)
       setMetar(resultado.data.data[0])
       console.log(nameAir)
       setNameAir(resultado.data.data[0].icao)
       
     })
     .catch(erro => {
       setLoading(false)
       setErrorSearch(true)
       console.log(erro)
       setMetar({})
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
    
    
    

    <SafeAreaView>
      <Navbar title={"METAR"} icon={true}></Navbar>
      <View style={styles.container}>
      <Text style={styles.titleP}>Digite abaixo o ICAO do Aeroporto:</Text>
      <View style={styles.containerSearch}>
        <TextInput
          autoCorrect={false}
          
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


      {loading && <SkeletonMetar/>}
      <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false} bounces={false}>

      
      
      <View>
      {!!metar.station && <Text style={styles.aeroTitle}>{metar.station.name}</Text>}
        
      </View>
      {!!metar.icao && <MetarList data={metar}/>}
      </ScrollView>
      </View>
     </SafeAreaView>
  );
}
