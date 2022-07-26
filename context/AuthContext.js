import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from '../src/config';
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

export const AuthProvider = ({children}) => {
    
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigation = props => (useNavigation());
    // Registro
    const register = (Identificacion, Nombres, Apellidos, Direccion, Email, username, password) =>{
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
                RootNavigation.navigate('Login');
            }
        }).catch(e =>{
            console.log(`error en registro ${e}`);
            setIsLoading(false);
        })
    };

    // Login
    const login = (username, password) =>{
        setIsLoading(true);
        axios.post(`${BASE_URL}/v1/auth/signin`,{
            username,
             password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            const token = AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            if (token!=null){
                console.log("mi token", token);
                useCounter();
                //navigation.navigate('Cuenta creada');Cuenta creada
                RootNavigation.navigate('Confirmar reserva');
            }
            setIsLoading(false);

        }).catch(e => {
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
                register
            }}>
            {children}
        </AuthContext.Provider>
        );
}
