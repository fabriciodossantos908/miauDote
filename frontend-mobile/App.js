import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Bellota_700Bold } from '@expo-google-fonts/bellota';

import { StatusBar } from 'react-native';
import Routes from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Bellota_700Bold,
    Poppins_400Regular,
    Roboto_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <React.Fragment>
      <StatusBar backgroundColor='#369696' barStyle={'light-content'} />
      <Routes />
    </React.Fragment>
  );
}

