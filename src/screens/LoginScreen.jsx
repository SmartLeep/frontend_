import react,  {useContext, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { ImageBackground } from "react-native";
import { Image } from 'react-native';
import {Colors  } from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';

const LoginScreen= ({route})=>{
    const {PrecioValor} = route.params;
    const {Fechain} = route.params;
    const {Fechafin} = route.params;
    const {HabitacionId} = route.params;
    const {Personas} = route.params;


    const navigation = useNavigation();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login} = useContext(AuthContext);

    return(
    <View style={styles.container}>
        <Spinner /> 
        <ImageBackground style={ styles.backgroundImage } 
                resizeMode='cover' 
                source={require('../../image/fondo_smart.png')}></ImageBackground>
        
        <View style={styles.modalView}>
        
        <Image style={styles.image}
                source={require('../../image/logo_smart.png')}></Image>
            
            <TextInput style={styles.txtInput} 
                      value={username}
                      placeholder="Usuario"
                      onChangeText={text => setUsername(text)}
                      /> 
            <TextInput secureTextEntry={true} style={styles.txtInput} 
                      value={password}
                      placeholder="Contraseña"
                      onChangeText={text => setPassword(text)}
                      />               
            <TouchableOpacity onPress={() =>{login(username, password, PrecioValor, Fechain,Fechafin,HabitacionId,Personas)}}//navigation.navigate('Cuenta creada')}
                  style={styles.colorBtn}>
            <Text style={styles.colorTxtBtn}>Login</Text>
            </TouchableOpacity>  
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}
                  style={styles.colorBtnRegistros}>
                  <Text style={styles.colorTxtBtnRegistro}>Registrarse</Text>
            </TouchableOpacity>
            
        </View>
              
    
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#716967',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{

      width: 300, 
      height: 155, 
      justifyContent: 'center',
      alignItems: 'center',
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
          color:'#FF9116',
          fontSize: 16,
          marginTop: 20,
        
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
     
      txtInput: {
        color: '#000000',
        fontSize: 16,
        marginTop: 40,
        fontWeight: '600',
        paddingLeft: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 0.5,
        paddingRight: 12,
        borderRadius: 30,
        backgroundColor: '#F9F9F9',

        height: 50,
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
      modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 35,
          padding: 35,
          position: 'absolute', 
          shadowColor: "#000",
          
          shadowOpacity: 0.25,
         
          elevation: 5,
          
          
        }
  });


export default LoginScreen