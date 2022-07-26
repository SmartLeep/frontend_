import react, { useContext } from "react";
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,  TextInput, TouchableOpacity, ImageBackground } from "react-native";

//Screens
import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";
import MenuScreen from "./src/screens/MenuScreen";
import ReservaScreen from "./src/screens/ReservaScreen";

import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import GenerateReservaScreen from "./src/screens/GenerateReservaScreen";
import RoomsAvailableScreen from "./src/screens/RoomsAvailableScreen";
import AccountCreateScreen from "./src/screens/AccountCreateScreen";
import ConfirmReserScreen from "./src/screens/ConfirmReserScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import PaymentConfirmScreen from "./src/screens/PaymentConfirmScreen";
import { AuthContext } from "./context/AuthContext";

import { navigationRef } from './RootNavigation';
import RegisScreen from "./src/screens/RegisScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
const {isLoading, login, userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>      
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#ff9116' },
        }}
      >
        <Stack.Screen 
          name="Home"
          component={Home} 
          options={{headerShown:false}} 
        />
        <Stack.Screen name="Menu" component={MenuScreen}  />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reserva" component={ReservaScreen} />
        <Stack.Screen name="Crearcuenta" component={CreateAccountScreen} />
        <Stack.Screen name="Generar Reserva" component={GenerateReservaScreen} />
        <Stack.Screen name="Habitaciones disponibles" component={RoomsAvailableScreen} />
        <Stack.Screen name="Cuenta creada" component={AccountCreateScreen} />
        <Stack.Screen name="Confirmar reserva" component={ConfirmReserScreen} />
        <Stack.Screen name="Realizar pago" component={PaymentScreen} />
        <Stack.Screen name="Confirmación de pago" component={PaymentConfirmScreen} />
        <Stack.Screen name="Registro" component={RegisScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
