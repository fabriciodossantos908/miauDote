import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



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
   ViewText
} from '../style';


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
                     <Icon name='md-paw' size={35} color='#ccc' />
                     <FilterSelect style={{ fontFamily: 'Poppins_400Regular', textAlign: 'center' }}>
                        <FilterSelect.Item label="Raça" value={0} />
                     </FilterSelect>
                  </FilterItem>

                  <FilterItem>
                     <FontAwesome name='transgender' size={35} color='#ccc' />
                     <FilterSelect style={{ fontFamily: 'Poppins_400Regular' }}>
                        <FilterSelect.Item label="Gênero" value={0} />
                     </FilterSelect>
                  </FilterItem>

                  <FilterItem>
                     <Entypo name='ruler' size={35} color='#ccc' />
                     <FilterSelect style={{ fontFamily: 'Poppins_400Regular' }}>
                        <FilterSelect.Item label="Porte" value={0} style={{ textAling: 'center' }} />
                     </FilterSelect>
                  </FilterItem>

               </FiltersView>

               <DivisionView></DivisionView>

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