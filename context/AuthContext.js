import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { Alert} from 'react-native';
import { BASE_URL } from '../src/config';
import { RES_URL } from '../src/config';
import { NavigationContainer, useNavigation } from "@react-navigation/native"; 

import { Navigation } from "../Navigation";
import * as RootNavigation from '../RootNavigation.js';



export const AuthContext = createContext();

function useCounter() {
    // Bien: nivel superior en un componente de función
  //  const navigation = useNavigation();
   //const [navigation] = useNavigation({});
   return console.log("mi token");
 }
 function createTwoButtonAlert (){
    Alert.alert(
      "Campos Inválidos",
      "Los credenciales están vacíos o son incorrectos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
  )};

  function createTwoButtonAlertRegistro (){
    Alert.alert(
      "Campos Inválidos",
      "Los credenciales están vacíos o son incorrectos",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
  )};
  function reservaGeneradaExito (){
    Alert.alert(
      "Aviso",
      "Su reserva ha sido generada con éxito",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
  )};

export const AuthProvider = ({children}) => {
    
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigation = props => (useNavigation());
    // Registro
    const register = (Identificacion, Nombres, Apellidos, Direccion, Email, username, password, Precio, FechaInRes, FechaFinRes, IdHabitaciones, NumPersonas, idCliente) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/cliente`,{
            Identificacion, Nombres, Apellidos, Direccion, Email, username, password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            const usuario = AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            if (usuario!=null){
                console.log("mi usuario", usuario);
                //useCounter();
                //navigation.navigate('Cuenta creada');
                //RootNavigation.navigate('Cuenta creada');
                RootNavigation.navigate('Login',Precio, FechaInRes, FechaFinRes, IdHabitaciones, NumPersonas,idCliente);
            }
        }).catch(e =>{
            createTwoButtonAlertRegistro();
            console.log(`error en registro ${e}`);
            setIsLoading(false);
        })
    };

    //Reserva
    const registerReserva = (idCliente,fechaIngreso, fechaSalida, Habitacion, montoTotal, cantidadPersonas) =>{
        setIsLoading(true);
        console.log(typeof(idCliente)+"--"+typeof(fechaIngreso)+"--"+typeof(FechaSalida)+"--"+typeof(Habitacion)+"--"+typeof(montoTotal)+"--"+typeof(cantidadPersonas))
        axios.post(`${RES_URL}/v1/reserva/habitacion/`+Habitacion,{
            idCliente, fechaIngreso, fechaSalida, Habitacion, montoTotal, cantidadPersonas
        }).then(res => {
            let userInfo = res.data;
            //console.log(idCliente+"--"+FechaIngreso+"--"+FechaSalida+"--"+Habitacion+"--"+montoTotal+"--"+cantidadPersonas)
            setUserInfo(userInfo);
            const usuario = AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
            if (usuario!=null){
                console.log("mi usuario", usuario);
                reservaGeneradaExito();
                //useCounter();
                //navigation.navigate('Cuenta creada');
                //RootNavigation.navigate('Cuenta creada');
                RootNavigation.navigate2('Realizar pago');
            }
        }).catch(e =>{
            
            console.log(`error en la reserva ${e}`);
            setIsLoading(false);
        })
    };
    // Login
    const login = (username, password,PrecioValor, Fechain,Fechafin,HabitacionId,Personas,idCliente) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/v1/auth/signin`,{
            username,
             password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo.user_id);
            setUserInfo(userInfo);
            const token = AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            if (token!=null){
                console.log("mi token", token);
                console.log(PrecioValor);
                useCounter();
                //navigation.navigate('Cuenta creada');Cuenta creada
                RootNavigation.navigate('Confirmar reserva',PrecioValor, Fechain,Fechafin,HabitacionId,Personas,userInfo.user_id);
            }
            setIsLoading(false);

        }).catch(e => {
            
            createTwoButtonAlert();
            console.log(`login error ${e}`);
            setIsLoading(false);
        });
    }


    //
    return(
        <AuthContext.Provider 
            value={{
                isLoading,
                userInfo,
                login,
                register,
                registerReserva
            }}>
            {children}
        </AuthContext.Provider>
        );
}
