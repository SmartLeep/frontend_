import react from "react";
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,  TextInput, TouchableOpacity, ImageBackground } from "react-native";

//Screens
import LoginScreen from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";
import MenuScreen from "./src/screens/MenuScreen";
import ReservaScreen from "./src/screens/ReservaScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#ff9116' },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Menu" component={MenuScreen}  />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reserva" component={ReservaScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Crearcuenta" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
