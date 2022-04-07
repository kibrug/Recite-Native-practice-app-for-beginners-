import * as React from 'react';
import  { useState } from 'react';

import AboutScreen from './about';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { 
    StyleSheet,Text,Pressable,  View,Button,image, } from 'react-native';
import { ImageBackground } from 'react-native-web';


    const HomeScreen = () => {

      //  const onPressHandeler=()=>{

          //  navigation.navigate('about');
//}
        return (
         // <View style={styles.container}>
         // <ImageBackground source={'./assets/icon.png'} resizeMode="cover" style={styles.image}>
    
       // </ImageBackground>

       // </View>
       <View style={styles.container}>
     
      <Text>well come</Text>
     </View>
        );
      };



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      borderColor:'#000000',
      borderBottomEndRadius:0,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
     // flex: 1,
      
      borderColor:'#000000',
      borderBottomEndRadius:0,
      backgroundColor: '#fff',
     // alignItems: 'center',
     // justifyContent: 'center',
    },

  
    
  });



  export default HomeScreen;