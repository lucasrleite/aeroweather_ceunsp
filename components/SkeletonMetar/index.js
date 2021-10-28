import React, {useState} from 'react';
import { View, Text , Image} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import SkeletonContent from 'react-native-skeleton-content';
import styles from './styles'

export default function SkeletonFreq() {
  
  return (
    
    <View >
    <View style={{height: 60,alignItems: "center"}}>
      <SkeletonContent
        containerStyle={{flex: 1, width: 300, alignItems: "center",marginTop: 5}}
        animationDirection="horizontalRight"
          boneColor='#1C2730'
          highlightColor="#131E26"
          animationType="shiver"
        layout={[
        // long line
        { width: 350, height: 40,borderRadius: 10 },
        // short line
        
        
        
        ]}
        isLoading={true}>
        
      </SkeletonContent>
    </View>
  
    <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
    <SkeletonContent
        containerStyle={{flexDirection: "column",backgroundColor: '#1C2730',paddingVertical: 20,margin: 5, borderRadius: 12,width: "47%"}}
        animationDirection="diagonalDownRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignItems: "center",
              
              
              children: [
                {
                  width: 100,
                  height: 20,
                  marginBottom: 15,
                },
                
              ]
            },
            
            {
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: "center",
              children: [
                {
                  width: 45,
                  height: 50,
                  marginLeft: 5,
                },
                {
                  children: [
                  
                  
                  {
                    width: 40,
                    height: 15,
                    marginTop: 10,
                    marginLeft: 5,
                    marginBottom: 5,
                    borderRadius: 5
                  },
                  {
                    width: 40,
                    height: 15,
                    marginLeft: 5,
                    borderRadius: 10
                  },


                
                ]},
                
                
                
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>   
      <SkeletonContent
        containerStyle={{flexDirection: "column",backgroundColor: '#1C2730',paddingVertical: 20,margin: 5, borderRadius: 12,width: "47%"}}
        animationDirection="diagonalDownRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignItems: "center",
              
              
              children: [
                {
                  width: 100,
                  height: 20,
                  marginBottom: 15,
                },
                
              ]
            },
            
            {
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: "center",
              children: [
                {
                  width: 45,
                  height: 50,
                  marginLeft: 5,
                },
                {
                  children: [
                  
                  
                  {
                    width: 40,
                    height: 15,
                    marginTop: 10,
                    marginLeft: 5,
                    marginBottom: 5,
                    borderRadius: 5
                  },
                  {
                    width: 40,
                    height: 15,
                    marginLeft: 5,
                    borderRadius: 10
                  },


                
                ]},
                
                
                
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>   
    </View>
    <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
    <SkeletonContent
        containerStyle={{flexDirection: "column",backgroundColor: '#1C2730',paddingVertical: 20,margin: 5, borderRadius: 12,width: "47%"}}
        animationDirection="diagonalDownRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignItems: "center",
              
              
              children: [
                {
                  width: 100,
                  height: 20,
                  marginBottom: 15,
                },
                
              ]
            },
            
            {
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: "center",
              children: [
                {
                  width: 45,
                  height: 50,
                  marginLeft: 5,
                },
                {
                  children: [
                  
                  
                  {
                    width: 70,
                    height: 15,
                    marginTop: 10,
                    marginLeft: 5,
                    marginBottom: 5,
                    borderRadius: 5
                  },
                  {
                    width: 60,
                    height: 15,
                    marginLeft: 5,
                    borderRadius: 10
                  },


                
                ]},
                
                
                
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>   
      <SkeletonContent
        containerStyle={{flexDirection: "column",backgroundColor: '#1C2730',paddingVertical: 20,margin: 5, borderRadius: 12,width: "47%"}}
        animationDirection="diagonalDownRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignItems: "center",
              
              
              children: [
                {
                  width: 100,
                  height: 20,
                  marginBottom: 15,
                },
                
              ]
            },
            
            {
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: "center",
              children: [
                {
                  width: 45,
                  height: 50,
                  marginLeft: 5,
                },
                {
                  children: [
                  
                  
                  {
                    width: 70,
                    height: 15,
                    marginTop: 10,
                    marginLeft: 5,
                    marginBottom: 5,
                    borderRadius: 5
                  },
                  {
                    width: 60,
                    height: 15,
                    marginLeft: 5,
                    borderRadius: 10
                  },


                
                ]},
                
                
                
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>   
    </View>
    <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
    <SkeletonContent
        containerStyle={{flexDirection: "column",backgroundColor: '#1C2730',paddingVertical: 20,margin: 5, borderRadius: 12,width: "47%"}}
        animationDirection="diagonalDownRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignItems: "center",
              
              
              children: [
                {
                  width: 100,
                  height: 20,
                  marginBottom: 15,
                },
                
              ]
            },
            
            {
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: "center",
              children: [
                {
                  width: 45,
                  height: 50,
                  marginLeft: 5,
                },
                {
                  children: [
                  
                  
                  {
                    width: 70,
                    height: 15,
                    marginTop: 10,
                    marginLeft: 5,
                    marginBottom: 5,
                    borderRadius: 5
                  },
                  {
                    width: 60,
                    height: 15,
                    marginLeft: 5,
                    borderRadius: 10
                  },


                
                ]},
                
                
                
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>   
      <SkeletonContent
        containerStyle={{flexDirection: "column",backgroundColor: '#1C2730',paddingVertical: 20,margin: 5, borderRadius: 12,width: "47%"}}
        animationDirection="diagonalDownRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignItems: "center",
              
              
              children: [
                {
                  width: 100,
                  height: 20,
                  marginBottom: 15,
                },
                
              ]
            },
            
            {
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: "center",
              children: [
                {
                  width: 45,
                  height: 50,
                  marginLeft: 5,
                },
                {
                  children: [
                  
                  
                  {
                    width: 40,
                    height: 15,
                    marginTop: 10,
                    marginLeft: 5,
                    marginBottom: 5,
                    borderRadius: 5
                  },
                  {
                    width: 40,
                    height: 15,
                    marginLeft: 5,
                    borderRadius: 10
                  },


                
                ]},
                
                
                
              ]
            },
          ]}
        isLoading={true}>
      </SkeletonContent>   
    </View>
    <View style={{flexDirection: 'row', alignItems: "center", justifyContent: "center"}}>
    <SkeletonContent
        containerStyle={{flexDirection: "column",backgroundColor: '#1C2730', margin: 5,borderRadius: 12,width: "95%",}}
        animationDirection="horizontalRight"
        boneColor="#131E26"
        highlightColor='#1C2730'
        animationType="shiver"
        layout={
          [
            {
              alignItems: "center",
              
              
              children: [
                {
                  width: 350,
                  height: 60,
                  margin: 10,
                  
                  borderRadius: 5
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
