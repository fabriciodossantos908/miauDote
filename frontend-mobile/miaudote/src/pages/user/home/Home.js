import React, { Component } from 'react';
import { useIsFocused } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, ActivityIndicator, Text, View, AppState } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  Container,
  LocalView,
  LocalText,
  SalutationView,
  SalutationTitle,
  SalutationText,
  MenuView,
  MenuOption,
  MenuOptionImage,
  MenuOptionQuantity,
  MenuOptionName,
  DivisionView,
  PetsAroundTitle,
  CardPet,
  CardPhotoImage,
  CardDescription,
  CardDescriptionTitle,
  CardDescriptionText,
  CardInformations,
  CardLikeCount,
  CardDescriptionInformation,
  ViewText,
  CardDescriptionDistance,
  CardDistanceText,
  CardButtonView,
  CardButton,
  CardButtonText
} from './styles.js';

import api from '../../../services/api';

export default class Home extends Component {


  constructor(props) {
    super(props)
    this.state = {
      petList: [],
      loading: true
    }
  }

  handlePetView = (id) => {
    let petList = this.state.petList.map(pet => {
      if (pet.id == id) {
        pet.visualizacoes += 1;
      }

      return pet;
    });

    this.setState({ petList })

    this.props.navigation.navigate('PetDetails', {
      screen: 'Home',
      data: id
    })
  }

  openPetList = (especie) =>{
    this.props.navigation.navigate('PetList', {
      screen: 'Home',
      data: especie
    })
  }

  componentDidMount() {

    api.get('http://192.168.0.195:3000/pets/localizacao?latitude=23.5249890&longitude=46.925571').then(response => {
      const petList = response.data;
      this.setState({ petList, loading: false });
      console.log(this.state);
    }).catch(error => {
      console.log(error);
    })
  }

  render() {

    if (useIsFocused == true) {
      console.log('Opaaaaaaa');
    }

    if (this.state.loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' />
          <Text>Carregando...</Text>
        </View>
      )
    } else {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <Container >
            <LocalView>
              <Icon name="md-pin" size={25} color='#000' />
              <LocalText> Itapevi, SP </LocalText>
            </LocalView>
            <SalutationView>
              <SalutationTitle>
                Olá, Davi
                </SalutationTitle>
              <SalutationText>
                Tá afim de encontrar o seu
                </SalutationText>
              <SalutationText>
                novo melhor amigo?
                </SalutationText>
            </SalutationView>

            <MenuView horizontal={true} centerContent={true} showsHorizontalScrollIndicator={false}>

              <MenuOption onPress={()=> this.openPetList('cao')}>
                <MenuOptionImage source={require('../../../assets/dog-icon.png')} />
                <MenuOptionQuantity>
                  32
                  </MenuOptionQuantity>
                <MenuOptionName>
                  Cães
                 </MenuOptionName>
              </MenuOption>

              <MenuOption onPress={()=> this.openPetList('gato')}>
                <MenuOptionImage source={require('../../../assets/cat-icon.png')} />
                <MenuOptionQuantity>
                  40
                  </MenuOptionQuantity>
                <MenuOptionName>
                  Gatos
                 </MenuOptionName>
              </MenuOption>

              <MenuOption onPress={()=> this.openPetList('passaro')}>
                <MenuOptionImage source={require('../../../assets/bird-icon.png')} />
                <MenuOptionQuantity>
                  13
                  </MenuOptionQuantity>
                <MenuOptionName>
                  Pássaros
                 </MenuOptionName>
              </MenuOption>

              <MenuOption onPress={()=> this.openPetList('coelho')}>
                <MenuOptionImage source={require('../../../assets/rabbit-icon.png')} />
                <MenuOptionQuantity>
                  8
                  </MenuOptionQuantity>
                <MenuOptionName>
                  Coelhos
                 </MenuOptionName>
              </MenuOption>

              <MenuOption style={{ marginRight: 0 }} onPress={()=> this.openPetList('roedor')}>
                <MenuOptionImage source={require('../../../assets/hamster-icon.png')} />
                <MenuOptionQuantity>
                  2
                  </MenuOptionQuantity>
                <MenuOptionName>
                  Roedores
                  </MenuOptionName>
              </MenuOption>

            </MenuView>

            <DivisionView />

            <PetsAroundTitle>
              Pets em busca de um novo lar
            </PetsAroundTitle>

            {
              this.state.petList.map(card => (
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

      );
    }


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
  }
})