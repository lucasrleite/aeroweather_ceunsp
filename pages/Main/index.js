import React from 'react';
import { View, Text ,  TouchableOpacity, Image,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton , } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../components/Navbar'


import styles from './styles';

export default function Main() {
  const { navigate } = useNavigation();
  function handleFreq() { 
    navigate('Drawer', {screen: "Frequências" });
  }
  function handleMETAR() { 
    navigate('Drawer', {screen: "METAR" });
  }
  function handleSupport() { 
    navigate('Support');
  }
  return (
    
    <SafeAreaView>
      <Navbar title={"AeroWeather"} icon={false} />
      
       <View style={styles.container}>
          <Text style={styles.titleS}>Olá,
          Seja bem-vindo ao</Text>
          <Text style={styles.titleI}>AEROWEATHER</Text>
          <Text style={styles.textIA}>O Aplicativo para informações aeronáuticas.</Text>
            <Text style={styles.titleS}>Confira as funções:</Text>
          <View style={styles.containerCard}>
            
            <TouchableOpacity  style={styles.card2}onPress={() => handleMETAR()}>
              <Image source={require ('../../assets/metar.png')}></Image>
              <Text style={styles.textCard}>METAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card2}onPress={() => handleFreq()}>
              <Image style={styles.iconFreq} source={require ('../../assets/freq.png')}></Image>
              <Text style={styles.textCard}>Frequências</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.titleS}>Algumas funções podem não estar disponivel...</Text>
          </View>
          <View style={styles.containerSup}>
            <Text style={styles.textI}>Este projeto é desenvolvido com paixão!!!
            Se possível colabore com o projeto, para
            que possamos continuar designando este
            trabalho e oferecendo mais funções!  </Text>
            <TouchableOpacity style={styles.cardSupport}onPress={() => handleSupport()}>
              <Image style={styles.iconFreq} source={require ('../../assets/faq.png')}></Image>
              <Text style={styles.textCard}>Conheça o projeto!!!</Text>
            </TouchableOpacity>
            
          </View>
          
       </View>
       
     
     </SafeAreaView>
  );
}
