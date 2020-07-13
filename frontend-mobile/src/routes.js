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

// Importações para telas de cadastro de pets
import PetBasicInfo from './pages/pets/register/PetBasicInfo'
import PetType from './pages/pets/register/PetType'
import BreedList from './pages/pets/register/services/BreedList'
import PetDetailsInfo from './pages/pets/register/PetDetailsInfo'
import PetHealth from './pages/pets/register/PetHealth'
import PetPhoto from './pages/pets/register/PetPhoto'
import PetBreed from './pages/pets/register/PetBreed';





const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                 {/* <Stack.Screen
                    name="PetDetailsInfo"
                    component={PetDetailsInfo}
                    options={{ headerShown: false }}
                /> */}

                {/* <Stack.Screen
                    name="PetBreed"
                    component={PetBreed}
                    options={{ headerShown: false }}
                /> */}


                <Stack.Screen
                    name="PetBasicInfo"
                    component={PetBasicInfo}
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
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="FormBasicInfo"
                    component={FormBasicInfo}
                    options={{ headerShown: false }}
                />

                {/* <Stack.Screen
                    name="FormPersonalData"
                    component={FormPersonalData}
                    options={{ headerShown: false }}
                /> */}

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

                <Stack.Screen
                    name="Home"
                    component={Home}
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

                {/* Cadastro de pet */}

                {/* <Stack.Screen
                    name="PetBasicInfo"
                    component={PetBasicInfo}
                    options={{ headerShown: false }}
                /> */}

                <Stack.Screen
                    name="PetType"
                    component={PetType}
                    options={{headerShown:false}}
                />

                 <Stack.Screen
                    name="BreedList"
                    component={BreedList}
                    options={{ headerShown: false }}
                /> 

                <Stack.Screen
                    name="PetBreed"
                    component={PetBreed}
                    options={{headerShown:false}}
                />

                <Stack.Screen
                    name="PetDetailsInfo"
                    component={PetDetailsInfo}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="PetHealth"
                    component={PetHealth}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="PetPhoto"
                    component={PetPhoto}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )

}