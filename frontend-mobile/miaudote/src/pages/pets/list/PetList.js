import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Slider } from 'react-native';
// import Slider from '@react-native-community/slider';

import Icon from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';



import { Container } from '../../user/home/styles';
import {
   LocalView,
   LocalText,
   FilterTitle,
   FiltersView,
   FilterItem,
   FilterSelect,
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
   DistanceQuantity
} from './style';


export default class PetList extends Component {

   constructor(props) {
      super(props);
   }


   render() {

      return (
         <SafeAreaView>
            <Container>

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
                     <Icon name='md-paw' size={32} color='#ccc' />
                     <DropDownPicker
                        // style={{  padding: 16 }}
                        items={[
                           { label: 'Pequeno', value: 'P'},
                           { label: 'Médio', value: 'M'},
                           { label: 'Grande', value: 'G'}
                        ]}
                        placeholder='Raça'
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fff', width: 90, borderWidth: 0 }}
                        itemStyle={{
                           justifyContent: 'flex-start'
                        }}
                        labelStyle={{
                           fontSize: 12,
                           textAlign: 'center',
                           color: '#000', 
                           fontFamily: 'Poppins_400Regular'
                       }}
                        dropDownStyle={{ backgroundColor: '#fafafa'}}
                     />
                  </FilterItem>

                  <FilterItem>
                     <FontAwesome name='transgender' size={32} color='#ccc' />
                     <DropDownPicker
                        // style={{  padding: 16 }}
                        items={[
                           { label: 'Macho', value: 'M'},
                           { label: 'Fêmea', value: 'F'}
                        ]}
                        placeholder='Gênero'
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fff', width: 90, borderWidth: 0 }}
                        itemStyle={{
                           justifyContent: 'flex-start'
                        }}
                        labelStyle={{
                           fontSize: 12,
                           textAlign: 'center',
                           color: '#000', 
                           fontFamily: 'Poppins_400Regular'
                       }}
                        dropDownStyle={{ backgroundColor: '#fafafa'}}
                     />
                  </FilterItem>

                  <FilterItem>
                     <Entypo name='ruler' size={32} color='#ccc' />
                     <DropDownPicker
                        // style={{  padding: 16 }}
                        items={[
                           { label: 'Pequeno', value: 'P'},
                           { label: 'Médio', value: 'M'},
                           { label: 'Grande', value: 'G'}
                        ]}
                        placeholder='Porte'
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fff', width: 90, borderWidth: 0 }}
                        itemStyle={{
                           justifyContent: 'flex-start'
                        }}
                        labelStyle={{
                           fontSize: 12,
                           textAlign: 'center',
                           color: '#000', 
                           fontFamily: 'Poppins_400Regular'
                       }}
                        dropDownStyle={{ backgroundColor: '#fafafa'}}
                     />
                  </FilterItem>

               </FiltersView>

               <DistanceTitle>Distância</DistanceTitle>

               <DistanceView>
                  <Slider
                     style={{ width: 240, height: 20, marginLeft: -8 }}
                     step={1}
                     minimumTrackTintColor='#1bc7cb'
                     minimumValue={1}
                     maximumValue={30}
                     thumbTintColor='#369696'
                  />

                  <DistanceQuantity>
                     4.5 km
                  </DistanceQuantity>
               </DistanceView>



               {/* <DivisionView></DivisionView> */}

               <PetsAroundTitle>
                  Gatos a procura de um novo lar
               </PetsAroundTitle>

               <CardPet style={styles.card}>
                  <CardPhotoImage source={require('../../../assets/gato-image.jpg')} imageStyle={{ borderRadius: 15 }}></CardPhotoImage>
                  <CardDescription>
                     <CardLikeCount>
                        <Icon name="md-eye" size={25} color="#FC6B6E" style={{ marginTop: -4 }} />
                        <ViewText>126 Visualizaram</ViewText>
                     </CardLikeCount>
                     <CardInformations>
                        <CardDescriptionInformation>
                           <CardDescriptionTitle>Jubileu</CardDescriptionTitle>
                           <CardDescriptionText>Vira-lata</CardDescriptionText>
                        </CardDescriptionInformation>
                        <CardDescriptionDistance>
                           <CardDistanceText>
                              4.5Km
                  </CardDistanceText>
                        </CardDescriptionDistance>
                     </CardInformations>
                  </CardDescription>
                  <CardButtonView>
                     <CardButton>
                        <CardButtonText>Ler mais sobre Jubileu</CardButtonText>
                     </CardButton>
                  </CardButtonView>
               </CardPet>

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
   }
})