import React, { Component } from 'react';

import Ionicos from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { StyleSheet, Text, View, Image, Dimensions, PixelRatio } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { faPaw, faPencilAlt, faQuestion, faStar, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import {
   PerfilContainer,
   PerfilName,
   PerfilPhoto,
   Photo,
   ImageBackground,
   UserName,
   PerfilOptions,
   PerfilOptionsLine,
   PerfilSignOutOptionLine,
   ConfigIcon,
   PerfilTextOption,
   PerfilSignOutTextOption,
   NavBar
} from './styles';


const heightPercentageToDP = heightPercent => {
   const screenHeight = Dimensions.get('window').height;
   return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};


function HomeScreen() {
   return (
      <View>
         {/* <Text>Home!</Text> */}
      </View>
   );
}

function SettingsScreen() {
   return (
      <View></View>
   );
}

const Tab = createBottomTabNavigator();

export default class PerfilScreen extends Component {

   constructor(props) {
      super(props);
   }

   render() {

      return (
         <PerfilContainer>

            {/* <PerfilName>Davi Soares</PerfilName> */}
            <PerfilPhoto>
               <Photo>
                  <ImageBackground source={require('../../../../assets/user-icon.png')}></ImageBackground>
               </Photo>
               <UserName>Username</UserName>
            </PerfilPhoto>
            <PerfilOptions>
               <PerfilOptionsLine>
                  <FontAwesomeIcon icon={faPaw} size={28} color={"#cccccc"} />
                  <PerfilTextOption>Meus Pets</PerfilTextOption>
               </PerfilOptionsLine>
               <PerfilOptionsLine>
                  <FontAwesomeIcon icon={faPencilAlt} size={28} color={"#cccccc"} />
                  <PerfilTextOption>Editar Informações pessoais</PerfilTextOption>
               </PerfilOptionsLine>
               <PerfilOptionsLine>
                  <FontAwesomeIcon icon={faQuestion} size={28} color={"#cccccc"} />
                  <PerfilTextOption>Ajuda</PerfilTextOption>
               </PerfilOptionsLine>
               <PerfilOptionsLine>
                  <FontAwesomeIcon icon={faStar} size={28} color={"#cccccc"} />
                  <PerfilTextOption>Avaliar o Miaudote</PerfilTextOption>
               </PerfilOptionsLine>
               <PerfilOptionsLine>
                  <FontAwesomeIcon icon={faCogs} size={28} color={"#cccccc"} />
                  <PerfilTextOption>Configurações</PerfilTextOption>
               </PerfilOptionsLine>
               <PerfilSignOutOptionLine>
                  <FontAwesomeIcon icon={faSignOutAlt} size={28} color={"#fc6b6e"} />
                  <PerfilSignOutTextOption>Sair</PerfilSignOutTextOption>
               </PerfilSignOutOptionLine>
            </PerfilOptions>
            <NavBar>
               <NavigationContainer style={{ height: heightPercentageToDP('50') }} independent={true}>
                  <Tab.Navigator
                     screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                           let iconName;

                           if (route.name === "Home") {
                              iconName = focused
                                 ? 'ios-home'
                                 : 'ios-home';
                           } else if (route.name === "Explorar") {
                              iconName = focused ? 'md-search' : 'md-search';
                           } else if (route.name === 'Adicionar') {
                              iconName = focused ? 'pluscircle' : 'pluscircleo'
                              return <AntDesign style={styles.space} name={iconName} size={35} color={color} />
                           } else if (route.name === 'Desaparecidos') {
                              iconName = focused ? 'ios-paw' : 'ios-paw'
                           } else if (route.name === 'Perfil') {
                              iconName = focused ? 'user' : 'user'
                              return <FontAwesome name={iconName} size={25} color={color} />
                           }

                           return <Ionicos name={iconName} size={30} color={color} />
                        },
                     })}
                  >
                     <Tab.Screen name="Home" component={HomeScreen} />
                     <Tab.Screen name="Explorar" component={SettingsScreen} />
                     <Tab.Screen name="Adicionar" component={HomeScreen} />
                     <Tab.Screen name="Desaparecidos" component={SettingsScreen} />
                     <Tab.Screen name="Perfil" component={SettingsScreen} />
                  </Tab.Navigator>
               </NavigationContainer>
            </NavBar>



         </PerfilContainer>
      )
   }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#ff0',
     alignItems: 'center',
     justifyContent: 'center',
   },
   tabMenu: {
     flex: 0.5,
   },
   space:{
     padding: 1,
     fontSize: 40
   }
 });