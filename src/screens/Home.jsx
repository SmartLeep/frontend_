import react from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path,Rect, Defs, Pattern, Use, Image } from 'react-native-svg';
import { ImageBackground } from "react-native";
import {Colors  } from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from "@react-navigation/native";

const LoginScreen= ()=>{
    const navigation = useNavigation();
    return(
      
        <View style={styles.container}>
            
            <ImageBackground style={ styles.backgroundImage } 
                resizeMode='cover' 
                source={require('../../image/home.jpg')}></ImageBackground>
            <Text style={ styles.titulo }> BIENVENIDO</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Generar Reserva')}
                  style={styles.colorBtn}>
            <Text style={styles.colorTxtBtn}>Iniciar Reservación</Text>
            
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#716967',
      alignItems: 'center',

      position: 'relative'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
    
    },
    logo: {
        width: 200,
        height: 200, 
        //position: 'absolute',
        marginTop:30
      },
    logo2: {
        width: 500,
        height: 200, 
        position: 'absolute',
        marginTop:30
      },

    
      titulo:{
          color:'#FF9116',
          fontSize: 45,
          marginTop: 300

      },
     
     
     
      colorBtn: {
          marginTop: 40,
        borderColor: '#FF9116',
        backgroundColor: '#FF9116',
        padding: 15,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 80,
        
      },
      colorBtnRegistros: {
        marginTop: 25,
      borderColor: '#F9F9F9',
      backgroundColor: '#F9F9F9',
      padding: 15,
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 80,
    },
      colorTxtBtn: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
        width: 150,
      },
      colorTxtBtnRegistro: {
        color: '#FF9116',
        fontSize: 14,
        textAlign: 'center',
        width: 150,
      },
     
      errorText: {
        fontSize: 14,
        color: 'red',
        marginBottom: 20,
        marginLeft: 20
      },
      
  });


export default LoginScreen