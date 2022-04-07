import { StatusBar } from 'expo-status-bar';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';

//const Stack = createNativeStackNavigator();
import { 
  StyleSheet,Text,  View } from 'react-native';

export default function App() {

   
  
  return (
    
   <View style={styles.container}>
     
 <HomeScreen/>
 
   </View>
 
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'cornflowerblue',
    borderColor:'#000000',
    borderBottomEndRadius:5,
    backgroundColor: '#fff',
  alignItems: 'center',
    justifyContent: 'center',
    
  },



  
});
