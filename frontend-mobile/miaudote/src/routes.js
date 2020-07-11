import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen'

// Importações para telas de usuários
import Login from './pages/user/login/Login'
import FormBasicInfo from './pages/user/signUp/FormBasicInfo'
import FormPersonalData from './pages/user/signUp/FormPersonalData'
import FormUserAddress from './pages/user/signUp/FormUserAddress'
import FormUserPhoto from './pages/user/signUp/FormUserPhoto'
import Home from './pages/user/home/Home'
import PerfilScreen from './pages/user/perfil/PerfilScreen';
import EmailConfirm from './pages/user/signUp/EmailConfirm';

// Importações para telas de Sobre
import AboutAdoption from './pages/user/about/AboutAdoption';
import AboutDonation from './pages/user/about/AboutDonation';
import AboutFindingPet from './pages/user/about/AboutFindingPet';

// Importações para tela de pets
import PetDetails from './pages/pets/details/PetDetails';
import PetList from './pages/pets/list/PetList';
import PetRegisterBasicInfo from './pages/pets/register/basicInfo';

import Teste from './pages/pets/register/Teste';



const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                {/* Telas de Login e Cadastro */}

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
                    name="EmailConfirm"
                    component={EmailConfirm}
                    options={{ headerShown: false }}
                />

                {/* Telas mais relacionadas a usuário */}

                {/* <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                /> */}

                <Stack.Screen
                    name="Perfil"
                    component={PerfilScreen}
                    options={{ headerShown: false }}
                />

                {/* Telas mais relacionadas a Pets */}

                <Stack.Screen
                    name="PetDetails"
                    component={PetDetails}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="AboutAdoption"
                    component={AboutAdoption}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="AboutFindingPet"
                    component={AboutFindingPet}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="AboutDonation"
                    component={AboutDonation}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="PetBasicInfo"
                    component={PetRegisterBasicInfo}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="PetList"
                    component={PetList}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )

}