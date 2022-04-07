import * as React from 'react';
import  { useState } from 'react';
//import  App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { 
    StyleSheet,Text,Pressable,  View,Button, } from 'react-native';


    const AboutScreen = ({ navigation }) => {

        const onPressHandeler=()=>{

            navigation.navigate('HomeScreen');
        }
        return (
     
        <View style={styles.container}>
      
        
           <Text>
                  about app
              </Text>
          
       
        
        </View>
     
         
        );
      };


const styles = StyleSheet.create({
    container: {
      //flex: 1,
      borderColor:'#000000',
      borderBottomEndRadius:0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'red',
    },

   
    
  });


  export default AboutScreen;
