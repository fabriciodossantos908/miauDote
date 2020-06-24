// import 'react-native-gesture-handler'
// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen'
import Login from './pages/user/login/Login'
import FormBasicInfo from './pages/user/signUp/FormBasicInfo'
import FormPersonalData from './pages/user/signUp/FormPersonalData'
import FormUserAddress from './pages/user/signUp/FormUserAddress'
import FormUserPhoto from './pages/user/signUp/FormUserPhoto'
import Teste from './pages/user/signUp/Teste'
import HomeTeste from './pages/user/home/HomeTeste'
import Home from './pages/user/home/Home'
// import KeyboardAvoidingComponent from './pages/user/signUp/KeyboardAvoidingComponent'
// import FormBasicInfoTeste from './pages/user/signUp/FormBasicInfoTeste'
import PerfilScreen from './pages/user/perfil/PerfilScreen';




const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Faça seu login' }}
                />

                <Stack.Screen
                    name="FormBasicInfo"
                    component={FormBasicInfo}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="FormPersonalData"
                    component={FormPersonalData}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="FormUserAddress"
                    component={FormUserAddress}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="FormUserPhoto"
                    component={FormUserPhoto}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Teste"
                    component={Teste}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="HomeTeste"
                    component={HomeTeste}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                {/* <Stack.Screen
                    name="KeyboardAvoidingComponent"
                    component={KeyboardAvoidingComponent}
                    options={{ headerShown: false }}
                /> */}

               {/* <Stack.Screen
                    name="FormBasicInfoTeste"
                    component={FormBasicInfoTeste}
                    options={{ headerShown: false }}
                /> */}
 
                <Stack.Screen
                    name="Perfil"
                    component={PerfilScreen}
                    options={{ headerShown: false }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )

}