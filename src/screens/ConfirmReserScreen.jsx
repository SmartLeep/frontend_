import react,{useContext,useState} from "react";
import { Image } from 'react-native';

import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput,  Button, TouchableOpacity} from 'react-native';
import { Colors,} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";


const ConfirmReserScreen= ({route})=>{
  const {PrecioFin} = route.params;
  const {FechaInicio} = route.params;
  const {FechaFinal} = route.params;
  const {Id_Habitaciones} = route.params;
  const {NUMPerson} = route.params;
  const {idCliente} = route.params;
  
  const valor = ""; 
  const navigation = useNavigation();

  const {isLoading, registerReserva} = useContext(AuthContext);
    return(
        <View style={styles.container}>
            
              <View style={styles.modalView}>
                <Text style={styles.titulo} >Confirma la reserva para realizar el pago</Text>
                
                <Text style={styles.subtitulo}>Precio a pagar: </Text><Text style={styles.subtitulo2}>{PrecioFin}</Text>
                <Text style={styles.subtitulo}>Su reserva inicia: </Text><Text style={styles.subtitulo2}>{FechaInicio.substring(0, 10)}</Text>
                <Text style={styles.subtitulo}>Su reserva finaliza: </Text><Text style={styles.subtitulo2}>{FechaFinal.substring(0, 10)}</Text>
                <Text style={styles.subtitulo}>Total de personas a ingresar: </Text><Text style={styles.subtitulo2}>{NUMPerson}</Text>


                
                
                <Image style={styles.image}
                source={require('../../image/pago_smart.png')}></Image>
                     
              </View>
              
              <TouchableOpacity onPress={() => {registerReserva(idCliente,FechaInicio,FechaFinal,Id_Habitaciones,""+PrecioFin,parseInt(NUMPerson))}}
                  style={styles.colorBtn}>
                  <Text style={styles.colorTxtBtn}>Confirmar reserva</Text>
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
        marginTop: 40,
        width: 150, 
        height: 100, 
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center'
      
    },
    subtitulo:{
      color:'#000000',
      fontSize: 15,
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: "justify"
    
  },
    nombresyapellidos: {
        color: '#000000',
      fontSize: 14,
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
      marginTop: 40,
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
       
        shadowColor: "#000",
        
        shadowOpacity: 0.25,
       
        elevation: 5,

        alignItems: 'center',
        justifyContent: 'center',
      }
  });
export default ConfirmReserScreen