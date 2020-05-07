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
// import SignUp from './pages/user/signUp/SignUp'
import FormBasicInfo from './pages/user/signUp/FormBasicInfo'
import FormPersonalData from './pages/user/signUp/FormPersonalData'
import FormUserAddress from './pages/user/signUp/FormUserAddress'
import FormUserPhoto from './pages/user/signUp/FormUserPhoto'
import Teste from './pages/user/signUp/Teste'


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
					options = {{title: 'Faça seu login'}}
                />

                <Stack.Screen
                    name="FormBasicInfo"
					component={FormBasicInfo}
					options = {{title: 'Cadastro'}}
                />

                <Stack.Screen
                    name="FormPersonalData"
					component={FormPersonalData}
					options = {{title: 'Segundo passo'}}
                />

                <Stack.Screen
                    name="FormUserAddress"
					component={FormUserAddress}
					options = {{title: 'Terceiro passo'}}
                />

                <Stack.Screen
                    name="FormUserPhoto"
					component={FormUserPhoto}
					options = {{title: 'Quase lá...'}}
                />

                <Stack.Screen
                    name="Teste"
					component={Teste}
					options = {{headerShown: false}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )

}