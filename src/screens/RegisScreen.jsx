import react,  {useContext, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { ImageBackground } from "react-native";
import { Image } from 'react-native';
import {Colors  } from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import Spinner from 'react-native-loading-spinner-overlay';

const RegisScreen= ({route})=>{
  
  const {Precio} = route.params;
  const {FechaInRes} = route.params;
  const {FechaFinRes} = route.params;
  const {IdHabitaciones} = route.params;
  const {NumPersonas} = route.params;
  const {Cliente} = route.params;


  const navigation = useNavigation();

  const [Identificacion, setIdentificacion] = useState(null);
  const [Nombres, setNombres] = useState(null);
  const [Apellidos, setApellidos] = useState(null);
  const [Direccion, setDireccion] = useState(null);
  const [Email, setEmail] = useState(null);
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const {isLoading, register} = useContext(AuthContext);

  return(
  <View style={styles.container}>
      <Spinner visible={isLoading} /> 
      <ImageBackground style={ styles.backgroundImage } 
              resizeMode='cover' 
              source={require('../../image/fondo_smart.png')}></ImageBackground>
      
      <View style={styles.modalView}>
      
      <Image style={styles.image}
              source={require('../../image/logo_smart.png')}></Image>
          
          <TextInput style={styles.txtInput} 
                    value={Nombres}
                    placeholder="Nombres"
                    onChangeText={text => setNombres(text)}
                    />
          <TextInput style={styles.txtInput} 
                    value={Apellidos}
                    placeholder="Apellidos"
                    onChangeText={text => setApellidos(text)}
                    /> 
          <TextInput style={styles.txtInput} 
                    value={Identificacion}
                    placeholder="Identificacion"
                    keyboardType='number-pad'
                    onChangeText={text => setIdentificacion(text)}
                    />
          <TextInput style={styles.txtInput} 
                    value={Direccion}
                    placeholder="Direccion"
                    onChangeText={text => setDireccion(text)}
                    />
          <TextInput style={styles.txtInput} 
                    value={Email}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    />
          <TextInput style={styles.txtInput} 
                    value={username}
                    placeholder="Usuario"
                    onChangeText={text => setusername(text)}
                    />
          <TextInput secureTextEntry={true} style={styles.txtInput} 
                    value={password}
                    placeholder="Contraseña"
                    onChangeText={text => setpassword(text)}
                    />               
          <TouchableOpacity onPress={() =>{register(Identificacion, Nombres, Apellidos, Direccion, Email, username, password, Precio, FechaInRes, FechaFinRes,IdHabitaciones, NumPersonas,Cliente)}}//navigation.navigate('Cuenta creada')}
                style={styles.colorBtn}>
          <Text style={styles.colorTxtBtn}>Registrar Cuenta</Text>
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
        marginTop:-10,
        marginBottom:5,
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
        fontSize: 14,
        marginTop: 10,
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


export default RegisScreen