import React from 'react';
import { View, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import styles from "./styles";
export default function FrequenciesAirport(props) {
  return (
    <View  style={styles.card}>
        <View>
          <Octicons style={styles.iconFreq} name="radio-tower" size={36}  />
        </View>
        <View style={styles.rowFreq}>
          <Text style={styles.titleS}>{props.freqType}</Text>
          <Text style={styles.contentP}>Descrição: {props.desc}</Text>
          <Text style={styles.infosT}>Frequencia: {props.frequency} MHz</Text>
        </View>
      
      </View>
  );
}

