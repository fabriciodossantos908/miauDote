import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/pages/HomeScreen';
import ModalHomeScreen from './src/pages/ModalHomeScreen-test'
import SignUp from './src/pages/user/signUp/SignUp'
import Login from './src/pages/user/login/Login'
import FormBasicInfo from './src/pages/user/signUp/FormBasicInfo'
import FormPersonalData from './src/pages/user/signUp/FormPersonalData'
// import Teste from './src/pages/user/signUp/Teste'


export default function App() {
  return (
    <FormPersonalData />
  );
}

