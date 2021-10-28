import React, {useState} from 'react';
import { View, Text , Image} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import SkeletonContent from 'react-native-skeleton-content';
import styles from './styles'

export default function MetarList() {
  
  return (
    
    <View >
    <View style={{height: 60,marginBottom: 15,alignItems: "center"}}>
      <SkeletonContent
        containerStyle={{flex: 1, width: 300, alignItems: "center",marginTop: 5}}
        animationDirection="horizontalRight"
          boneColor='#1C2730'
          highlightColor="#131E26"
          animationType="shiver"
        layout={[
        // long line
        { width: 350, height: 30, marginBottom: 10,borderRadius: 10 },
        // short line
        { width: 180, height: 25,borderRadius: 10 ,marginBottom: 0 },
        
        ]}
        isLoading={true}>
        
      </SkeletonContent>
    </View>
  
    <View>
    <SkeletonContent
        containerStyle={{flexDirection: "row",backgroundColor: '#1C2730',padding: 20,margin: 5, borderRadius: 12}}
        animationDirection="horizontalRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignSelf: "center",
              width: 40,
              height: 50,
              borderRadius: 5,
              marginRight: 10,
            },
            {
              flexDirection: 'column',
              
              children: [
                {
                  width: 90,
                  height: 25,
                  marginBottom: 5,
                  borderRadius: 10
                },
                {
                  width: 130,
                  height: 15,
                  marginBottom: 15,
                  borderRadius: 10
                },
                {
                  width: 180,
                  height: 15,
                  
                  borderRadius: 10
                },
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>  
    </View>
    <View>
    <SkeletonContent
        containerStyle={{flexDirection: "row",backgroundColor: '#1C2730',padding: 20,margin: 5, borderRadius: 12}}
        animationDirection="horizontalRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignSelf: "center",
              width: 40,
              height: 50,
              borderRadius: 5,
              marginRight: 10,
            },
            {
              flexDirection: 'column',
              
              children: [
                {
                  width: 90,
                  height: 25,
                  marginBottom: 5,
                  borderRadius: 10
                },
                {
                  width: 130,
                  height: 15,
                  marginBottom: 15,
                  borderRadius: 10
                },
                {
                  width: 180,
                  height: 15,
                  
                  borderRadius: 10
                },
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>  
    </View>
    
    </View>
    );
}
