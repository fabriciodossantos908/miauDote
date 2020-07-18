import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Slider, ActivityIndicator, View, Text } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-community/picker';

import * as Location from 'expo-location';

import { Container } from '../../user/home/styles';

import { pickerItems } from './Pickers';
import {
   LocalView,
   LocalText,
   FilterTitle,
   FiltersView,
   FilterItem,
   PetsAroundTitle,
   DivisionView,
   CardPet,
   CardButton,
   CardButtonText,
   CardDescription,
   CardButtonView,
   CardDescriptionDistance,
   CardDescriptionInformation,
   CardDescriptionText,
   CardDistanceText,
   CardInformations,
   CardLikeCount,
   CardDescriptionTitle,
   CardPhotoImage,
   ViewText,
} from '../style';

import {
   DistanceTitle,
   DistanceView,
   DistanceQuantity,
   ReturnButton,
   NotFoundTitle,
   NotFoundImage,
   NotFoundText
} from './style';
import { Alert } from 'react-native';


export default class PetList extends Component {

   constructor(props) {
      super(props);
      this.state = {
         especie: this.props.route.params.data,
         raca: '',
         genero: '',
         porte: '',
         pets: [],
         latitude: '',
         longitude: '',
         loading: true,
         pickers: [],
         petsLoading: false,
         distancia: 15
      }
   }

   async componentDidMount() {

      await this.loadingPosition();

      this.loadPickerItems();
      this.handleRequest();
   }

   loadingPosition = async () => {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
         Alert.alert('A sua localização é necessária', 'Nós utilizamos a sua localização para poder trazer os pets mais próximos de ti, facilitando a adoção do seu novo amigo');
         return;
      } else {
         const location = await Location.getCurrentPositionAsync();
         const { latitude, longitude } = location.coords;
         this.setState({ latitude, longitude })
      }
   }

   handleBreedChange = async (breed) => {
      await this.setState({ raca: breed, petsLoading: true });
      this.handleRequest();
   }

   handleGenderChange = async (gender) => {
      await this.setState({ genero: gender, petsLoading: true });
      this.handleRequest();
   }

   handlePortChange = async (port) => {
      await this.setState({ porte: port, petsLoading: true });
      this.handleRequest();
   }

   handleDistanceChange = async (distance) => {
      await this.setState({ petsLoading: true });
      this.handleRequest();
   }

   handleRequest = () => {

      let urlRequest = `http://192.168.0.195:3000/pets/localizacao?latitude=${this.state.latitude}&longitude=${this.state.longitude}&especie=${this.state.especie}`;
      urlRequest = this.state.raca ? urlRequest + `&raca=${this.state.raca}` : urlRequest;
      urlRequest = this.state.genero ? urlRequest + `&sexo=${this.state.genero}` : urlRequest;
      urlRequest = this.state.porte ? urlRequest + `&porte=${this.state.porte}` : urlRequest;
      urlRequest = this.state.distancia ? urlRequest + `&distancia=${this.state.distancia}` : urlRequest;

      console.log(urlRequest);
      axios.get(urlRequest)
         .then(response => {
            console.log(response.data);
            this.setState({ pets: response.data, loading: false });
            if (this.state.petsLoading) {
               this.setState({ petsLoading: false })
            }
         }).catch(error => {
            this.setState({ pets: [], loading: false })
            if (this.state.petsLoading) {
               this.setState({ petsLoading: false })
            }
            return error;
         })
   }

   handleReturnPage = (e) => {
      this.props.navigation.goBack();
   }

   handlePetView = (id) => {
      let pets = this.state.pets.map(pet => {
         if (pet.id == id) {
            pet.visualizacoes += 1;
         }

         return pet;
      });

      this.setState({ pets })

      this.props.navigation.navigate('PetDetails', {
         screen: 'Home',
         data: id
      })
   }

   loadPickerItems = () => {
      let items = [];

      switch (this.state.especie) {
         case 'cao':
            items = pickerItems.caes
            break;

         case 'gato':
            items = pickerItems.gatos
            break;

         case 'passaro':
            items = pickerItems.passaros
            break;

         case 'coelho':
            items = pickerItems.coelhos
            break;

         case 'roedor':
            items = pickerItems.roedores
            break;

         }
         
         this.setState({ pickers: items })
   }
   render() {

      if (this.state.loading == true) {
         return (
            <View style={styles.loadingContainer}>
               <ActivityIndicator size='large' />
               <Text>Carregando...</Text>
            </View>
         )
      }

      return (
         <SafeAreaView>
            <Container>

               <ReturnButton onPress={(e) => this.handleReturnPage(e)}>
                  <FontAwesome name='arrow-left' size={25} color='#ccc' style={{ marginLeft: 8, marginTop: 8 }}></FontAwesome>
               </ReturnButton>

               <LocalView>
                  <LocalText>
                     <Icon name="md-pin" size={25} color='#000' />
                     <LocalText> Itapevi, SP </LocalText>
                  </LocalText>
               </LocalView>

               <FilterTitle>
                  Filtros
               </FilterTitle>

               <FiltersView>

                  <FilterItem>
                     <FontAwesome name='paw' size={30} color='#737475' />
                     <RNPickerSelect
                        onValueChange={(value) => this.handleBreedChange(value)}
                        style={pickerStyle}
                        items={this.state.pickers}
                        placeholder={{
                           label: "Raça",
                           value: null,
                           color: '#737475',
                        }}
                        useNativeAndroidPickerStyle={false}
                     />
                  </FilterItem>

                  <FilterItem>
                     <FontAwesome name='transgender' size={30} color='#737475' />
                     <RNPickerSelect
                        onValueChange={(value) => this.handleGenderChange(value)}
                        style={pickerStyle}
                        items={[
                           { label: 'Macho', value: 'M' },
                           { label: 'Fêmea', value: 'F' }
                        ]}
                        placeholder={{
                           label: "Sexo",
                           value: null,
                           color: '#737475',
                        }}
                        useNativeAndroidPickerStyle={false}
                     />
                  </FilterItem>

                  <FilterItem>
                     <Entypo name='ruler' size={30} color='#737475' />
                     <RNPickerSelect
                        onValueChange={(value) => this.handlePortChange(value)}
                        style={pickerStyle}
                        items={[
                           { label: "Pequeno", value: "P" },
                           { label: "Médio", value: "M" },
                           { label: "Grande", value: "G" }
                        ]}
                        placeholder={{
                           label: "Porte",
                           value: null,
                           color: '#737475',
                        }}
                        useNativeAndroidPickerStyle={false}
                     />
                  </FilterItem>


               </FiltersView>

               <FilterTitle>Distância</FilterTitle>

               <DistanceView>
                  <Slider
                     style={{ width: 270, height: 20, marginLeft: -16 }}
                     step={1}
                     minimumTrackTintColor='#1bc7cb'
                     value={this.state.distancia}
                     minimumValue={1}
                     maximumValue={30}
                     thumbTintColor='#369696'
                     onValueChange={(value) => this.setState({ distancia: value })}
                     onSlidingComplete={(value) => this.handleDistanceChange(value)}
                  />

                  <DistanceQuantity>
                     {this.state.distancia} km
                  </DistanceQuantity>
               </DistanceView>



               {/* <DivisionView></DivisionView> */}

               {this.state.petsLoading != true && this.state.pets.length == 0 && (
                  <>
                     <NotFoundTitle>
                        Opps... Nenhum pet foi encontrado.
                     </NotFoundTitle>

                     <NotFoundImage source={require('../../../assets/corgi.png')} resizeMode='contain' />

                     <NotFoundText>
                        Você pode alterar os filtros ou aumentar a distância para uma busca mais ampla.
                     </NotFoundText>
                  </>
               )}

               {this.state.pets.length !== 0 && (
                  <PetsAroundTitle>
                     Fofurinhas a procura de um novo lar
                  </PetsAroundTitle>

               )}

               {this.state.petsLoading === true && (
                  <View style={styles.petLoading}>
                     <ActivityIndicator size='large' />
                     <Text>Carregando pets...</Text>
                  </View>

               )}

               {this.state.petsLoading != true && this.state.pets.map(card => (
                  <CardPet style={styles.card} key={card.id}>
                     <CardPhotoImage source={{ uri: card.url_foto }} imageStyle={{ borderRadius: 15 }}></CardPhotoImage>
                     <CardDescription>
                        <CardLikeCount>
                           <Icon name="md-eye" size={25} color="#FC6B6E" style={{ marginTop: -4 }} />
                           <ViewText>{card.visualizacoes} Visualizaram</ViewText>
                        </CardLikeCount>
                        <CardInformations>
                           <CardDescriptionInformation>
                              <CardDescriptionTitle>{card.nome}</CardDescriptionTitle>
                              <CardDescriptionText>{card.raca}</CardDescriptionText>
                           </CardDescriptionInformation>
                           <CardDescriptionDistance>
                              <CardDistanceText>
                                 {parseFloat(card.distancia.toFixed(2))} Km
                           </CardDistanceText>
                           </CardDescriptionDistance>
                        </CardInformations>
                     </CardDescription>
                     <CardButtonView>
                        <CardButton
                           onPress={() => this.handlePetView(card.id)}
                        >
                           <CardButtonText>Ler mais sobre {card.nome}</CardButtonText>
                        </CardButton>
                     </CardButtonView>
                  </CardPet>
               ))
               }

            </Container>
         </SafeAreaView>
      )
   }


}

const styles = StyleSheet.create({
   card: {
      borderRadius: 10,
      borderWidth: 1,
      borderTopColor: '#dedede',
      borderRightColor: '#dedede',
      borderLeftColor: '#dedede',
      borderBottomColor: '#b0b0b0',
   },
   loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   picker: {
      width: 75,
      height: 50,
      borderWidth: 0
   },
   petLoading: {
      height: 400,
      width: 200,
      // backgroundColor: 'red',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
   }
})

const pickerStyle = {
   inputIOS: {
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      width: 105,
      color: '#737475',
      fontSize: 13,
      textAlign: 'center',
      fontFamily: 'Poppins_400Regular'
   },
   placeholderColor: "#fc6",
   inputAndroid: {
      width: 105,
      height: 25,
      textAlign: 'center',
      fontSize: 13,
      width: 90,
      color: '#737475',
      fontFamily: 'Poppins_400Regular'
   },
};