import React, { useState,Component } from 'react';
import { View, ImageBackground, StyleSheet, Text, Button,  Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {ModalPicker} from "../../Components/ModelPicker"
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const SeleccionFechas = () => {
  const navigation = useNavigation();
  //combo
  const [chooseData, setchoosedata] = useState("Seleccione item....");
    const [isModalVisible, setisModalVisible] = useState(false);
    const [textFechaIn, setTextIn] = useState(new Date);
    const [textFechaFin, setTextFin] = useState(new Date);
    const changeModalVisibility = (bool) =>{
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setchoosedata(option)
    }

  
  //Seleccionar Fecha
  //const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn(date);
    setTextIn(date);
    hideDatePicker();
  };

  //Fecha 2
  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  const handleConfirm2 = (date) => {
    //console.warn("Fecha 2");
    setTextFin(date);
    //console.warn(textFechaFin);
    hideDatePicker2();
  };
  const valor1 = textFechaIn.toLocaleDateString();
  const valor2 = textFechaFin.toLocaleDateString();
  var diff = textFechaFin - textFechaIn;
  const calcular = diff/(1000*60*60*24)
  //console.log(valor)
  return (
        <View style={styles.container}>
          
          <View style={styles.modalView}>
          
          <Text style={styles.titulo} >Seleccione la fecha de su reservación:</Text>
          <Text>{valor1}</Text>
            <TouchableOpacity style={styles.btnStar} title="Fecha Ingreso" onPress={showDatePicker}>
              <Icons  name='date-range' style={styles.circleIcon}/>
              <Text tyle={styles.textBtn}>Fecha Ingreso</Text>
            </TouchableOpacity> 
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            
            <Text>{valor2}</Text>
            <TouchableOpacity style={styles.btnStar} title="Fecha salida" onPress={showDatePicker2}>
              <Icons  name='date-range' style={styles.circleIcon}/>
              <Text tyle={styles.textBtn}>Fecha Salida</Text>
            </TouchableOpacity> 
            <DateTimePickerModal
              isVisible={isDatePickerVisible2}
              mode="date"
              onConfirm={handleConfirm2}
              onCancel={hideDatePicker2}
            />
          
          <Text style={styles.titulo}>Seleccione el numero de personas:</Text>
          
          
          <TouchableOpacity style={styles.btnStar} 
                onPress = {() => changeModalVisibility(true)} >
                  <Icons  name='wc' style={styles.circleIcon}/>
                <Text style={styles.textItem}>
                    {chooseData}
                </Text>
            </TouchableOpacity>
            <Modal
                transparent = {true}
                animationType = "fade"
                visible = {isModalVisible}
                nRequestClose={()=> changeModalVisibility(false)}
            >
            <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData = {setData}
            />
            </Modal>
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Habitaciones disponibles',{capacity:chooseData,
            inicio:textFechaIn.toISOString(), final:textFechaFin.toISOString(), Dias:calcular})}
            style={styles.colorBtn}>
            <Text style={styles.colorTxtBtn}>Continuar</Text>
          </TouchableOpacity>  
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
        //backgroundColor: '#716967',
      alignItems: 'center',
      justifyContent: 'center',
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
    fontSize: 18,
    marginTop: 0,
    fontWeight: 'bold',
    textAlign: 'left',
    padding:10
  
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

export default SeleccionFechas;