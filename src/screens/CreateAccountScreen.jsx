import react from "react";
import { Image } from 'react-native';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput, 
    Button,
    
    TouchableOpacity
  } from 'react-native';
  import {
    
    Colors,
   
  } from 'react-native/Libraries/NewAppScreen';
 
const RegisterScreen= ()=>{
    return(
        <View style={styles.container}>
            
              <View style={styles.modalView}>
                <Text style={styles.titulo} >Su cuenta a sido creada con éxito</Text>
                <Image style={{ width: 205, height: 210, marginBottom: 15, }}
                source={require('../../image/icono.png')}></Image>
                

                     
              </View>
              <TouchableOpacity
                  style={styles.colorBtn}>
                  <Text style={styles.colorTxtBtn}>Iniciar Sesión</Text>
                </TouchableOpacity>  
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#716967',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image:{
        width: 200, 
        height: 105, 
        marginBottom: 15
      },
    formulario: {
      color: Colors.black,
      fontSize: 18,
      marginTop: 20,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    },
    titulo:{
        color:'#000000',
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      
    },
   
    nombresyapellidos: {
        color: '#000000',
      fontSize: 16,
      marginTop: 40,
    
      fontWeight: '600',
      paddingLeft: 20,
      borderBottomColor: '#000000',
      borderBottomWidth: 0.5,
      borderColor: Colors.black,
      paddingRight: 12,
    }, 
   
    email: {
      color: '#000000',
      fontSize: 16,
      marginTop: 40,
      
      fontWeight: '600',
      paddingLeft: 20,
      borderBottomColor: '#000000',
      borderBottomWidth: 0.5,
      paddingRight: 12,
    }, 
   
   
    colorBtn: {
        marginTop: 25,
      borderColor: '#FF9116',
      backgroundColor: '#FF9116',
      padding: 15,
      marginLeft: 50,
      marginRight: 50,
      borderRadius: 80,
    },
   
    colorTxtBtn: {
      color: '#FFFFFF',
      fontSize: 14,
      textAlign: 'center'
    },
   
    errorText: {
      fontSize: 14,
      color: 'red',
      marginBottom: 20,
      marginLeft: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 35,
        padding: 35,
       
        shadowColor: "#000",
        
        shadowOpacity: 0.25,
       
        elevation: 5
      }
  });
export default RegisterScreen