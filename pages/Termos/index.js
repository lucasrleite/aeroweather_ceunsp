import React from 'react';
import { View, Text } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import styles from '../Termos/styles'
import { ScrollView } from 'react-native-gesture-handler';

export default function Termos() {
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
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>

     
      <View style={styles.container}>
      <Text style={styles.titleP}>LEIA COM ATENÇÃO!!!</Text>
        <View style={styles.cardSocial}>
          <Text style={styles.titleP}>1 - Serviços e Links de Terceiros</Text>
          <Text style={styles.textU}>
          Certos produtos, conteúdos e serviços disponíveis pelo nosso Serviço podem incluir materiais de terceiros. links de terceiros nesse site podem te direcionar para sites de terceiros que não são afiliados a nós. Não nresponsabilizamos por examinar ou avaliar o conteúdo ou precisão. Não garantimos e nem temos obrigação responsabilidade por quaisquer materiais ou sites de terceiros, ou por quaisquer outros materiais, produtos serviços de terceiros. Não somos responsáveis por quaisquer danos ou prejuízos relacionados com a compra ou uso mercadorias, serviços, recursos, conteúdo, ou quaisquer outras transações feitas em conexão com quaisquer sites terceiros. Por favor, revise com cuidado as políticas e práticas de terceiros e certifique-se que você as entenantes de efetuar qualquer transação. As queixas, reclamações, preocupações ou questões relativas a produtos terceiros devem ser direcionadas ao terceiro.
          </Text>
        </View>
        <View style={styles.cardSocial}>
          <Text style={styles.titleP}>2 - Isenção de Responsabilidade de garantias; Limitação de Responsabilidade</Text>
          <Text style={styles.textU}>Nós não garantimos, representamos ou justificamos que o seu uso do nosso serviço será pontual, seguro, sem erros ou interrupções. Não garantimos que os resultados que possam ser obtidos pelo uso do serviço serão precisos ou confiáveis. Você concorda que de tempos em tempos, podemos remover o serviço por períodos indefinidos de tempo ou cancelar a qualquer momento, sem te notificar. Em nenhuma circunstância o AeroWeather, nossos diretores, oficiais, funcionários, afiliados, agentes, contratantes, estagiários, fornecedores, prestadores de serviços ou licenciadores serão responsáveis por qualquer prejuízo, perda, reclamação ou danos diretos, indiretos, incidentais, punitivos, especiais ou consequentes de qualquer tipo, incluindo, sem limitação, perda de dados, custos de reposição, ou quaisquer danos semelhantes, seja com base em contrato, ato ilícito (incluindo negligência), responsabilidade objetiva ou de outra forma, decorrentes do seu uso de qualquer um dos serviços ou quaisquer produtos adquiridos usando o serviço, ou para qualquer outra reclamação relacionada de alguma forma ao seu uso do serviço ou qualquer produto, incluindo, mas não limitado a, quaisquer erros ou omissões em qualquer conteúdo, ou qualquer perda ou dano de qualquer tipo como resultado do uso do serviço ou qualquer conteúdo (ou produto) publicado, transmitido ou de outra forma disponível através do serviço, mesmo se alertado ​​de tal possibilidade. Como alguns estados ou jurisdições não permitem a exclusão ou a limitação de responsabilidade por danos consequentes ou incidentais, em tais estados ou jurisdições, a nossa responsabilidade será limitada à extensão máxima permitida por lei.

          </Text>

        </View>
        <View style={styles.cardSocial}>
          <Text style={styles.titleP}>3 - Modificações do serviço</Text>
          <Text style={styles.textU}>Reservamos o direito de, a qualquer momento, modificar ou descontinuar o Serviço (ou qualquer parte ou conteúdo do mesmo) sem notificação em qualquer momento. Não nos responsabilizados por você ou por qualquer terceiro por qualquer modificação, suspensão ou descontinuação do Serviço.</Text>
        </View>
      </View>
      </ScrollView>
      <FloatingAction
          actions={actions}
          color={"#03BDAF"}
          distanceToEdge={{vertical: 70,horizontal: 30}}
          onPressItem={() => {
            navigate('Support')
          }}
        />
    </SafeAreaView>
    
  );
}
