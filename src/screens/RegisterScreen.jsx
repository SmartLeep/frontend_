import React, {useEffect, useState} from 'react';
import { Formik } from 'formik';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TextInput, Button,TouchableOpacity} from 'react-native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Image } from 'react-native';

   const RegisterScreen = props => (

    <Formik
      initialValues={{  name: '',
                        lastName:'',
                        email:'',
                        password:'',
                        direccion:'',
                        identificacion:"" }}
      onSubmit={
        values => console.log(values)}
      validate={values=>{
        const errors ={}
        if(!values.name || values.name.length<=2 )errors.name="El campo de nombres esta vacio"
        if(!values.lastName || values.lastName.length<=0 )errors.lastName="El campo de apellidos esta vacio"
        if(!values.email || values.email.length<=0 )errors.email="El campo de correo esta vacio"
        if(!values.password || values.password.length<=0 )errors.password="El campo de contraseña esta vacio"
        if(!values.identificacion || values.identificacion.length<10 )errors.identificacion="El campo de identificación esta vacio"
        if(!values.direccion || values.direccion.length<=0 )errors.direccion="El campo de dirección esta vacio"
        return errors;
      }}

    >
      {({handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid, }) => (
    <View style={styles.container}>
       <ImageBackground style={ styles.backgroundImage } 
                resizeMode='cover' 
                source={require('../../image/fondo_smart.png')}></ImageBackground>
    <View style={styles.modalView}>
    <Image style={styles.image}
                source={require('../../image/logo_smart.png')}></Image>

                
    <TextInput style={styles.txtInput} 
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Nombres"
            keyboardType="default" /> 
            {(errors.name && touched.name) &&
                    <Text style={styles.errorText}>{errors.name}</Text>
                  }
  <TextInput style={styles.txtInput}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            placeholder="Apellidos"
            keyboardType="default" /> 
            {(errors.lastName && touched.lastName) &&
                    <Text style={styles.errorText}>{errors.lastName}</Text>
                  }
    <TextInput style={styles.txtInput}
            onChangeText={handleChange('identificacion')}
            onBlur={handleBlur('identificacion')}
            value={values.identificacion}
            placeholder="Identificación"
            keyboardType='number-pad'
            />
             {(errors.identificacion && touched.identificacion) &&
                    <Text style={styles.errorText}>{errors.identificacion}</Text>
                  } 
       <TextInput style={styles.txtInput}
            onChangeText={handleChange('direccion')}
            onBlur={handleBlur('direccion')}
            value={values.direccion}
            placeholder="Dirección"
            />
             {(errors.direccion && touched.direccion) &&
                    <Text style={styles.errorText}>{errors.direccion}</Text>
                  } 
   <TextInput style={styles.txtInput} 
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"/>
             {(errors.email && touched.email) &&
                    <Text style={styles.errorText}>{errors.email}</Text>
                  }
    <TextInput secureTextEntry={true} style={styles.txtInput}
             onChangeText={handleChange('password')}
             onBlur={handleBlur('password')}
             value={values.password} 
            placeholder="Contraseña"
            />
             {(errors.password && touched.password) &&
                    <Text style={styles.errorText}>{errors.password}</Text>
                  }      
                  <TouchableOpacity
        style={styles.colorBtn}
        onPress={handleSubmit}>
        <Text style={styles.colorTxtBtn}>Registrar Cuenta</Text>
      </TouchableOpacity> 
    </View>
     
</View>
      )}
    </Formik>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  titulo:{
    marginTop:5,
    textAlign: 'center',
      color:'#FF9116',
      fontSize: 25,
      marginTop: 0.1,
      marginBottom:10,
      fontWeight: 'bold'
    
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'relative',

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
   
    nombresyapellidos: {
        color: '#000000',
      fontSize: 14,
      marginTop: 20,
    
      fontWeight: '600',
      paddingLeft: 20,
      borderBottomColor: '#000000',
      borderBottomWidth: 0.5,
      borderColor: Colors.black,
      paddingRight: 12,
    }, 
   
    email: {
      color: '#000000',
      fontSize: 14,
      marginTop: 20,
      
      fontWeight: '600',
      paddingLeft: 20,
      borderBottomColor: '#000000',
      borderBottomWidth: 0.5,
      paddingRight: 12,
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
      fontSize: 14,
      textAlign: 'center'
    },
   
    errorText: {
      fontSize: 10,
      color: 'red',

    },
    modalView: {
      
        margin: 20,
        backgroundColor: "white",
        borderRadius: 35,
        padding: 35,
        position: 'absolute', 
        shadowColor: "#000",
        
        shadowOpacity: 0.25,
       
        elevation: 5
      },
  });
export default RegisterScreen