import React, { useState,Component } from 'react';
import { View, ImageBackground,TouchableOpacity, StyleSheet, Text, Button, SafeAreaView, ScrollView, Image, ActivityIndicator} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const image = { uri: "https://fondosmil.com/fondo/17538.jpg"};

const Habitaciones = () => {
  const navigation = useNavigation();
  const [habit, sethabitaciones] = React.useState([]);
  React.useEffect(()=>{
    obtenerHabit()
    console.log("hola")
  },[])

  function obtenerHabit(){
    const response =  fetch("http://35.185.207.90:8080/api/v1/habitacion", {
      method: 'GET',
      headers: {
        accept: 'application/json'}
      }).then((response) => response.json())
    .then((responseJson) => {
      //alert(JSON.stringify(responseJson));
      //console.log(typeof responseJson);
      sethabitaciones(responseJson);
    })
    .catch((error) => {
      //Error
      //alert(JSON.stringify(error));
      console.error(error);
    });
  }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {habit.map(item=>(
            <View style={styles.Cuadro}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-doble-catalonia-620x412.jpg',
                }}
              />
              <Text style={styles.titulo}>{item.name}</Text>
              <Text style={styles.titulo}>Costo</Text>
              <Text style={styles.Descripcion}>{item.price}</Text>
              <Text style={styles.titulo}>Descripción </Text>
              <Text style={styles.Descripcion}>{item.description}
              </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Reserva')}
                style={styles.colorBtn}>
                <Text style={styles.colorTxtBtn}>Seleccionar</Text>
                </TouchableOpacity> 
          </View>
          ))}
          
        </View>
        </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F9F9F9"
  },
  colorBtn: {

    borderColor: '#FF9116',
    backgroundColor: '#FF9116',
    padding: 5,
    marginLeft: 250,
    
    borderRadius: 80,
    marginBottom: 10
  
},
colorTxtBtn: {
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center',
  },



  Cuadro: {
    margin: 10,
    borderWidth: 0.2,
    borderColor:"#FF9116",
    borderRadius:10,
    backgroundColor:"white"
  },
  Descripcion: {
    color:"black",
    fontSize:15,
    marginRight: 150,
    marginLeft:10,
    padding:1
 },
  header: {
    fontSize: 20,
    flex:0.5,
    flexDirection: 'column',
  },
  btnRegresar: {
    flexDirection: "row"
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 200,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#ff9116"
  },
  titulo: {
    color: "#ff9116",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#ffffff00",
    marginRight: 150,
    marginLeft:10,
    padding:1
  },
  input: {
    height: 40,
    margin: 22,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    
  },
  tinyLogo: {
    width: 100,
    height: 100,
    //position:"absolute",
    right:10,
    top:10,
    position:"absolute"
  },
});

export default Habitaciones;