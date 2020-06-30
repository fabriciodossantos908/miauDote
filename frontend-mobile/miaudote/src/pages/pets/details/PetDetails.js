import React, { Component } from 'react';

import { SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Constants from 'expo-constants';

import {
   PetTitle,
   Container,
   DivisionView,
   OwnerInformationView,
   OwnerInformationImageView,
   OwnerPerfilImage,
   OwnerInformationDetailsView,
   OwnerNameText,
   OwnerLocalizationText,
   PetImageView,
   PetNameText,
   PetBreedText,
   PetDetailsView,
   PetInformationView,
   PetDetailText,
   PetDetailPositiveText,
   PetInformationTypeText,
   DivisionInformationsView,
   PetDescriptionText,
   DivisionViewHealth,
   PetHealthView,
   PetHealtTextInformation,
   PetHealthTitle,
   PetLocalizationTitle,
   PetLocalizationText,
   PetUfAndCountryText,
   ButtonAdoptThePet,
   ButtonAdoptText,
   PetLocalizationView
} from './styles';




export default class PetDetails extends Component {

   constructor(props) {
      super(props);
   }

   render() {

      return (
         <SafeAreaView style={{ flex: 1 }}>
            <Container>

               <PetTitle>Oi, eu sou o Tom!</PetTitle>

               <DivisionView></DivisionView>

               <OwnerInformationView>
                  <OwnerInformationImageView>
                     <OwnerPerfilImage source={require('../../../assets/user-icon.png')} imageStyle={{borderRadius: 25}}/>
                  </OwnerInformationImageView>
                  <OwnerInformationDetailsView>
                     <OwnerNameText>
                        Davi Soares
                     </OwnerNameText>
                     <OwnerLocalizationText>
                        Itapevi, SP
                     </OwnerLocalizationText>
                  </OwnerInformationDetailsView>
               </OwnerInformationView>

               <PetImageView source={require('../../../assets/cat-image.jpg')} imageStyle={{ borderRadius: 15 }} />

               <PetNameText>
                  Tom
               </PetNameText>
               <PetBreedText>
                  Vira-lata
               </PetBreedText>

               <PetDetailsView>
                  <PetInformationView>
                     <PetDetailText>
                        5 meses
                     </PetDetailText>
                     <PetInformationTypeText>
                        Idade
                     </PetInformationTypeText>
                  </PetInformationView>

                  <DivisionInformationsView />

                  <PetInformationView>
                     <PetDetailText>
                        Macho
                     </PetDetailText>
                     <PetInformationTypeText>
                        Sexo
                     </PetInformationTypeText>
                  </PetInformationView>

                  <DivisionInformationsView />

                  <PetInformationView>
                     <PetDetailText>
                        Cinza
                     </PetDetailText>
                     <PetInformationTypeText>
                        Cor
                     </PetInformationTypeText>
                  </PetInformationView>
               </PetDetailsView>

               <PetDescriptionText>
                  Esse é o bebê Tom, ele tem 5 meses, muito brincalhão e carinhoso! Gosta de beijinhos e colinho! Se dá super bem com outros gatos!
                  Será doado castrado e vermifugado.
                  Para adotantes com apto. telado ou casa sem acesso a rua e telhados.
               </PetDescriptionText>

               <DivisionViewHealth />

               <PetHealthView>
                  <PetHealthTitle>Saúde</PetHealthTitle>
                  <Icon name='heartbeat' size={25} color='#fc6b6e' style={{ marginLeft: 16, marginTop: 16 }}></Icon>
               </PetHealthView>

               <PetHealtTextInformation>
                  Esse animal precisa de cuidados veterinários!
               </PetHealtTextInformation>

               <PetDetailsView>
                  <PetInformationView>
                     <PetDetailText>
                        Não
                     </PetDetailText>
                     <PetInformationTypeText>
                        Vermifugado
                     </PetInformationTypeText>
                  </PetInformationView>

                  <DivisionInformationsView />

                  <PetInformationView>
                     <PetDetailPositiveText>
                        Sim
                     </PetDetailPositiveText>
                     <PetInformationTypeText>
                        Vacinado
                     </PetInformationTypeText>
                  </PetInformationView>

                  <DivisionInformationsView />

                  <PetInformationView>
                     <PetDetailText>
                        Não
                     </PetDetailText>
                     <PetInformationTypeText>
                        Castrado
                     </PetInformationTypeText>
                  </PetInformationView>
               </PetDetailsView>

               <DivisionViewHealth />

               <PetLocalizationView>
                  <PetLocalizationTitle>Localização</PetLocalizationTitle>
                  <Ionicons name='md-pin' size={27} color='#fc6b6e' style={{marginLeft: 8, marginTop: 8}}></Ionicons>
               </PetLocalizationView>


               <PetLocalizationText>
                  Av. Paulista, 37
               </PetLocalizationText>

               <PetUfAndCountryText>
                  São Paulo, Brasil
               </PetUfAndCountryText>

               <DivisionViewHealth />

               <ButtonAdoptThePet>
                  <ButtonAdoptText>
                     Quero adotar!
                  </ButtonAdoptText>
               </ButtonAdoptThePet>

            </Container>
         </SafeAreaView>
      )

   }

}

