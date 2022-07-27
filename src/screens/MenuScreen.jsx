import react, { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path,Rect, Defs, Pattern, Use, Image } from 'react-native-svg';
import { ImageBackground } from "react-native";
import {Colors  } from 'react-native/Libraries/NewAppScreen';

import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

const MenuScreen= ()=>{
    const navigation = useNavigation();
    const {userInfo, logout, isLoading } = useContext(AuthContext);
    return(
        <View style={styles.container}>
            
            <ImageBackground style={ styles.backgroundImage } 
                resizeMode='cover' 
                source={require('../../image/fondo_unido.png')}></ImageBackground>
                
            <View style={styles.modalView}>

                <Text style={ styles.titulo } > Bienvenido</Text>
                
                <TouchableOpacity onPress={() => navigation.navigate('Generar Reserva')}
                    style={styles.btnStar}>
                    <Icons  name='business-center' style={styles.circleIcon}/>
                    <Text style={styles.textBtn}>Generar Reserva</Text>
                    <Icons  name='arrow-forward-ios' style={styles.flechaIcon} />
                </TouchableOpacity>  
                
                <TouchableOpacity 
                    style={styles.btnStar}>
                    <Icons  name='person' style={styles.circleIcon}/>
                    <Text style={styles.textBtn}>Mis Reservas</Text>
                    <Icons  name='arrow-forward-ios' style={styles.flechaIcon2} />
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
      //justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'relative',
    
    },
    avatar:{
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    iconos:{
        textAlign:'center',
        padding: 10,
        fontSize: 22,
        position: 'relative'
        
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
        textAlign: 'center',
          color:'#FF9116',
          fontSize: 25,
          marginTop: 0.1,
          marginBottom:10,
          fontWeight: 'bold'
        
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
      colorBtnMenu: {
        flexDirection: 'row',
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
      colorTxtBtnMenu: {
        color: '#000000',
        fontSize: 14,
        textAlign: 'center',
        //width: 150,
        fontWeight: 'bold',
        position: 'relative'
      },
     
      errorText: {
        fontSize: 14,
        color: 'red',
        marginBottom: 20,
        marginLeft: 20
      },
      modalView: {
        marginTop:320,
          margin: 20,
          backgroundColor: "white",
          borderRadius: 35,
          padding: 35,
          position: 'absolute', 
          shadowColor: "#000",
          
          shadowOpacity: 0.25,
         
          elevation: 5
        },
        textBtn:{
            textAlign: 'center',
            position: 'relative',
            left: -50,
            color: '#000000',
            fontSize: 15,
            fontWeight: 'bold',
        },
        circleIcon:{
            backgroundColor: '#fff',
            borderRadius: 50,
            margin: 10,
            position: 'relative',
            fontSize: 20,
            padding: 10,
            left: -40,
            borderColor: '#F9F9F9',// color relleno icono
        backgroundColor: '#F9F9F9',
        },
        btnStar: {
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            paddingHorizontal:40,
            borderRadius: 40,
            borderColor: '#F9F9F9',
        backgroundColor: '#F9F9F9',
        },
        flechaIcon:{
            fontSize: 15,
    
        },
        flechaIcon2:{
            fontSize: 15,
            left: 22,
        }
  });



export default MenuScreen