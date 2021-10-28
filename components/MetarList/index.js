import React, {useState} from 'react';
import { View, Text , Image} from 'react-native';
import { Octicons } from '@expo/vector-icons';

import styles from "./styles";
export default function MetarList(props) {
  let graus = props.data.wind.degrees;
  
  
  return (
    
    <View>

      
      <View style={styles.container}>
        
      <View style={styles.card}>
        <Text style={styles.titleC}>Temperatura</Text>
        <View style={styles.titleDiv}>
          <View>
            <Image style={styles.iconFreq} source={require ('../../assets/termo.png')} />
          </View>{!!props &&
          <View style={styles.rowFreq}>
            <Text style={styles.infosT}>{props.data.temperature.celsius}ºC</Text>
            <Text style={styles.infosT}>{props.data.temperature.fahrenheit}ºF</Text>
          </View>}
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleC}>Vento</Text>
        <View style={styles.titleDiv}>
          <View >
            
            <Image style={[styles.iconFreq, {transform: [{ rotate: graus+"deg" }]}]} source={require ('../../assets/wind.png')} />
          </View>
          <View style={styles.rowFreq}>
            <Text style={styles.infosT}>{props.data.wind.degrees}º</Text>
            <Text style={styles.infosT}>{props.data.wind.speed_kts}Kts</Text>
            
          </View>
        </View>
        
      
      </View>
      </View>
      <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titleC}>Visibilidade</Text>
        <View style={styles.titleDiv}>
          <View>
            <Image style={styles.iconFreq} source={require ('../../assets/visi.png')} />
          </View>
          <View style={styles.rowFreq}>
            <Text style={styles.infosT}>{props.data.visibility.meters}</Text>
            <Text style={styles.infosT}>Meters</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleC}>Teto (AGL)</Text>
        <View style={styles.titleDiv}>
          <View >
            <Image style={styles.iconFreq} source={require ('../../assets/cloud.png')} />
          </View>
          {props.data.clouds[0].code!="CAVOK" &&
          <View style={styles.rowFreq}>        
            <Text style={styles.infosT}>{props.data.clouds[0].base_feet_agl}FTs</Text>
            <Text style={styles.infosT}>{props.data.clouds[0].base_meters_agl}MTs</Text>
          </View>} 
          {props.data.clouds[0].code=="CAVOK" &&
          <View style={styles.rowFreq}>        
            <Text style={styles.infosT}>CAVOK</Text>
            
          </View>} 
        </View>
        
      
      </View>
      </View>
      <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titleC}>Barômetro</Text>
        <View style={styles.titleDiv}>
          <View>
            <Image style={styles.iconFreq} source={require ('../../assets/watch.png')} />
          </View>
          <View style={styles.rowFreq}>
          <Text style={styles.infosT}>{props.data.barometer.hpa}hPa</Text>
            <Text style={styles.infosT}>{props.data.barometer.hg}hg</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.titleC}>Ponto de Orvalho</Text>
        <View style={styles.titleDiv}>
          <View >
            <Image style={styles.iconFreq} source={require ('../../assets/dew.png')} />
          </View>
          <View style={styles.rowFreq}>
            <Text style={styles.infosT}>{props.data.dewpoint.celsius}ºC</Text>
            <Text style={styles.infosT}>{props.data.dewpoint.fahrenheit}ºF</Text>
            
          </View>
        </View>
        
      
      </View>
      </View>
      <View style={styles.cardMetar}>
        <Text style={styles.infosRaw}>{props.data.raw_text}</Text>
      </View>
    </View>
    );
}

