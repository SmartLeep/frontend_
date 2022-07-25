import React, { useState,Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, Button,  Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {ModalPicker} from "../../Components/ModelPicker"
import Icons from 'react-native-vector-icons/Fontisto';

import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation(); 

  
  return (
        <View style={styles.container}>
          
          <View style={styles.modalView}>
          
          <Text style={styles.titulo} >Seleccione un método de pago:</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Confirmación de pago')} 
              style={styles.btnStar} >
              <Icons  name='paypal' style={styles.circleIcon}/>
              <Text tyle={styles.textBtn}>PayPal</Text>
            </TouchableOpacity> 
            
            
            
            <TouchableOpacity style={styles.btnStar}  >
              <Icons  name='credit-card' style={styles.circleIcon2}/>
              <Text tyle={styles.textBtn}>TransferWise</Text>
            </TouchableOpacity> 
            
          
          
            
            
          
          </View>

        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
        //backgroundColor: '#716967',
      alignItems: 'center',
      marginTop:150
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 35,
    padding: 35,
   
    shadowColor: "#000",
    
    shadowOpacity: 0.25,
   
    elevation: 5
  }, 
  titulo:{
    color:'#000000',
    fontSize: 19,
    marginTop: 0,
    fontWeight: 'bold',
    textAlign: 'left',
    padding:10,
    marginBottom: 18,
  
},
textBtn:{
  textAlign: 'center',
  
  left: -40,
  color: '#000000',
  fontSize: 15,
  fontWeight: 'bold',
},
circleIcon:{
  backgroundColor: '#fff',
  borderRadius: 50,
  margin: 10,
  position: 'relative',
  fontSize: 25,
  padding: 10,
  left: -40,
  borderColor: '#F9F9F9',// color relleno icono
backgroundColor: '#F9F9F9',
},
circleIcon2:{
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 10,
    position: 'relative',
    fontSize: 21,
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
textItem:{
  fontSize:15
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
fontSize: 18,
textAlign: 'center'
},




  touchableOpacity:{
    alignSelf: "stretch",
    paddingHorizontal:20,
    marginHorizontal:20
  },
  fixToText: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    borderWidth: 1,
    margin:10,
    borderColor:"orange",
    alignItems:"center"
  },
  inner: {
    padding: 0,
    flex: 1,
    justifyContent: "space-around"
  },
  btnRegresar: {
    flexDirection: "row"
  },
  btnContainer:{
    backgroundColor: "orange"
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 200,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "orange",
    flex:-1
  },
  textCombo:{
    marginVertical: 20,
    fontSize:25,
    borderWidth: 1,
  },
  textFinal: {
    color: "white",
    fontSize: 42,
    lineHeight: 200,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#ffffff00"
  }
});

export default PaymentScreen;
