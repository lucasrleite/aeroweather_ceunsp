import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { AntDesign, Entypo , MaterialCommunityIcons} from '@expo/vector-icons'; 
import { FloatingAction } from "react-native-floating-action";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from '../Support/style'

export default function Support() {
  const { navigate } = useNavigation();

  const actions = [
    {
      text: "Voltar para a pagina anterior",
      icon: require("../../assets/back.png"),
      name: "bt_back",
      position: 1,
      color: "#03BDAF",
      textBackground:"#1C2730",
      textColor: "#E8EFF3"
    }
  ]
  return (
    <SafeAreaView style={{height: "100%", marginBottom: "100%"}}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{height: "100%", backgroundColor: "#131E26",}}>
      <View style={styles.container}>
        
        <View style={styles.containerPerfil}>
          <Text style={styles.titleN}>Criador do projeto:</Text>
          <Image style={styles.imageP}source={{uri: "https://avatars2.githubusercontent.com/u/49835617?s=400&u=5ff7b08380f4e61c157e891931a0e2056a40fad2&v=4"}}></Image>
          <Text style={styles.titleP}>Lucas Leite</Text>
          <Text style={styles.textU}>Amante da tecnologia, aviação, e automobilismo!{"\n"}
          Desenvolvedor Fullstack{"\n"}
          Analista e desenvolvedor de testes automatizados</Text>
          <View style={styles.containerCards}>
            <TouchableOpacity style={styles.cardSocial} onPress={ ()=>{Linking.openURL('https://github.com/lucasrleite')} }><AntDesign   name="github" size={24} color="#03BDAF" /><Text style={styles.textSocial}>GitHub</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardSocial} onPress={ ()=>{Linking.openURL('https://www.linkedin.com/in/lucas-leite-4ab814183/')} }><Entypo name="linkedin" size={24} color="#03BDAF" /><Text style={styles.textSocial}>Linkedin</Text></TouchableOpacity>
            <TouchableOpacity style={styles.cardSocial} onPress={ ()=>{Linking.openURL('https://www.lucasleite.tech')} }><MaterialCommunityIcons name="face-profile" size={24} color="#03BDAF" /><Text style={styles.textSocial}>Meu site</Text></TouchableOpacity>
          </View>
          
          
        </View>
       <View style={styles.cardTerms}>
          <Text style={styles.titleN}>Leia nosso termo de serviços:</Text>
          <TouchableOpacity onPress={()=>{
            navigate('Termos')
          }} style={styles.cardSocial}><Text style={styles.textSocial}>Termos de serviço!!!</Text></TouchableOpacity>
       </View>
        <View style={styles.cardTerms}>
          <Text style={styles.titleN}>Para fazer esse aplicativo utilizamos:</Text>
          <View style={styles.containerCards}>
            <View style={styles.techCard}>
              <Text style={styles.textU}>CheckWX API</Text>
            </View>
            <View style={styles.techCard}>
              <Text style={styles.textU}>OurAirport Data</Text>
            </View>
           
          </View>
          
        </View>
       
      </View>
      </ScrollView>
      <FloatingAction
          actions={actions}
          color={"#03BDAF"}
          distanceToEdge={{vertical: 70,horizontal: 30}}
          onPressItem={() => {
            navigate('Main')
          }}
        />
    </SafeAreaView>
  );
}
