import React, { Component } from 'react';

import { SafeAreaView, ActivityIndicator, View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Constants from 'expo-constants';

import axios from 'axios';

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
   PetLocalizationView,
   PetHeader,
   ReturnButton
} from './styles';




export default class PetDetails extends Component {

   constructor(props) {
      super(props);
      this.state = {
         pet: {},
         id: this.props.route.params.data,
         doador: {},
         loading: true
      }

   }

   componentDidMount() {
      axios.get('http://192.168.0.195:3000/pets/' + this.state.id).then(response => {
         let pet = response.data;
         let doador = pet.doador;
         pet.doador = undefined;

         this.setState({ pet, doador, loading: false })

      }).catch(error => {
         console.log(error);
      })
   }

   handleReturnPage = (e) => {
      this.props.navigation.goBack();
   }


   render() {

      if (this.state.loading) {
         return (
            <View style={styles.loadingContainer}>
               <ActivityIndicator size='large' />
               <Text>Carregando...</Text>
            </View>
         )
      } else {
         return (
            <React.Fragment>
               
               <SafeAreaView style={{ flex: 1 }}>
                  <Container>


                     <ReturnButton onPress={(e) => this.handleReturnPage(e)}>
                        <Icon name='arrow-left' size={25} color='#ccc' style={{ marginLeft: 8, marginTop: 8 }}></Icon>
                     </ReturnButton>

                     <View style={{ alignSelf: "center" }}>
                        <PetTitle>Oi, eu sou o {this.state.pet.nome}!</PetTitle>
                        <DivisionView></DivisionView>
                     </View>


                     <OwnerInformationView>
                        <OwnerInformationImageView>
                           <OwnerPerfilImage source={{ uri: this.state.doador.url_foto }} imageStyle={{ borderRadius: 25 }} />
                        </OwnerInformationImageView>
                        <OwnerInformationDetailsView>
                           <OwnerNameText>
                              {this.state.doador.nome}
                           </OwnerNameText>
                           <OwnerLocalizationText>
                              {this.state.doador.cidade}, {this.state.doador.uf}
                           </OwnerLocalizationText>
                        </OwnerInformationDetailsView>
                     </OwnerInformationView>

                     <PetImageView source={{ uri: this.state.pet.url_foto }} imageStyle={{ borderRadius: 15 }} />

                     <PetNameText>
                        {this.state.pet.nome}
                     </PetNameText>
                     <PetBreedText>
                        {this.state.pet.raca}
                     </PetBreedText>

                     <PetDetailsView>
                        <PetInformationView>
                           <PetDetailText>
                              {this.state.pet.idade}
                           </PetDetailText>
                           <PetInformationTypeText>
                              Idade
                        </PetInformationTypeText>
                        </PetInformationView>

                        <DivisionInformationsView />

                        <PetInformationView>
                           <PetDetailText>
                              {this.state.pet.sexo == "M" ? 'Macho' : 'Fêmea'}
                           </PetDetailText>
                           <PetInformationTypeText>
                              Sexo
                        </PetInformationTypeText>
                        </PetInformationView>

                        <DivisionInformationsView />

                        <PetInformationView>
                           <PetDetailText>
                              {this.state.pet.cor}
                           </PetDetailText>
                           <PetInformationTypeText>
                              Cor
                        </PetInformationTypeText>
                        </PetInformationView>
                     </PetDetailsView>

                     <PetDescriptionText>
                        {this.state.pet.descricao}
                     </PetDescriptionText>

                     <DivisionViewHealth />

                     <PetHealthView>
                        <PetHealthTitle>Saúde</PetHealthTitle>
                        <Icon name='heartbeat' size={25} color='#fc6b6e' style={{ marginLeft: 16, marginTop: 16 }}></Icon>
                     </PetHealthView>

                     {this.state.pet.cuidados_veterinarios === true && (

                        <PetHealtTextInformation>
                           Esse animal precisa de cuidados veterinários!
                        </PetHealtTextInformation>
                     )}

                     <PetDetailsView style={{ marginTop: 16 }}>
                        <PetInformationView>
                           {this.state.pet.vermifugado == false && (
                              <PetDetailText>
                                 Não
                              </PetDetailText>
                           )}

                           {this.state.pet.vermifugado == true && (
                              <PetDetailPositiveText>
                                 Sim
                              </PetDetailPositiveText>
                           )}
                           <PetInformationTypeText>
                              Vermifugado
                        </PetInformationTypeText>
                        </PetInformationView>

                        <DivisionInformationsView />

                        <PetInformationView>
                           <PetDetailPositiveText>
                              {this.state.pet.vacinado == false && (
                                 <PetDetailText>
                                    Não
                                 </PetDetailText>
                              )}

                              {this.state.pet.vacinado == true && (
                                 <PetDetailPositiveText>
                                    Sim
                                 </PetDetailPositiveText>
                              )}
                           </PetDetailPositiveText>
                           <PetInformationTypeText>
                              Vacinado
                        </PetInformationTypeText>
                        </PetInformationView>

                        <DivisionInformationsView />

                        <PetInformationView>
                           <PetDetailText>
                              {this.state.pet.castrado == false && (
                                 <PetDetailText>
                                    Não
                                 </PetDetailText>
                              )}

                              {this.state.pet.castrado == true && (
                                 <PetDetailPositiveText>
                                    Sim
                                 </PetDetailPositiveText>
                              )}
                           </PetDetailText>
                           <PetInformationTypeText>
                              Castrado
                        </PetInformationTypeText>
                        </PetInformationView>
                     </PetDetailsView>

                     <DivisionViewHealth />

                     <PetLocalizationView>
                        <PetLocalizationTitle>Localização</PetLocalizationTitle>
                        <Ionicons name='md-pin' size={27} color='#fc6b6e' style={{ marginLeft: 8, marginTop: 8 }}></Ionicons>
                     </PetLocalizationView>


                     <PetLocalizationText>
                        {this.state.doador.logradouro}, {this.state.doador.numero}
                     </PetLocalizationText>

                     <PetUfAndCountryText>
                        {this.state.doador.uf}, Brasil
                  </PetUfAndCountryText>

                     <DivisionViewHealth />

                     <ButtonAdoptThePet>
                        <ButtonAdoptText>
                           Quero adotar!
                     </ButtonAdoptText>
                     </ButtonAdoptThePet>

                  </Container>
               </SafeAreaView>
            </React.Fragment>

         )
      }



   }

}

const styles = StyleSheet.create({
   loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

