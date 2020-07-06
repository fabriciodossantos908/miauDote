import React, { Component } from 'react'

import { SafeAreaView, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

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

export default class Home extends Component {


  constructor(props) {
    super(props)
  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1 }}>
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

            <MenuOption>
              <MenuOptionImage source={require('../../../assets/dog-icon.png')} />
              <MenuOptionQuantity>
                32
                </MenuOptionQuantity>
              <MenuOptionName>
                Cães
               </MenuOptionName>
            </MenuOption>

            <MenuOption>
              <MenuOptionImage source={require('../../../assets/cat-icon.png')} />
              <MenuOptionQuantity>
                40
                </MenuOptionQuantity>
              <MenuOptionName>
                Gatos
               </MenuOptionName>
            </MenuOption>

            <MenuOption>
              <MenuOptionImage source={require('../../../assets/bird-icon.png')} />
              <MenuOptionQuantity>
                13
                </MenuOptionQuantity>
              <MenuOptionName>
                Pássaros
               </MenuOptionName>
            </MenuOption>

            <MenuOption>
              <MenuOptionImage source={require('../../../assets/rabbit-icon.png')} />
              <MenuOptionQuantity>
                8
                </MenuOptionQuantity>
              <MenuOptionName>
                Coelhos
               </MenuOptionName>
            </MenuOption>

            <MenuOption style={{ marginRight: 0 }}>
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
            Pets a procura de um dono pertinho de você!  ;)
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

          <CardPet style={styles.card}>
            <CardPhotoImage source={require('../../../assets/dog-image.jpeg')} imageStyle={{ borderRadius: 15 }}></CardPhotoImage>
            <CardDescription>
              <CardLikeCount>
                <Icon name="md-eye" size={25} color="#FC6B6E" style={{ marginTop: -4 }} />
                <ViewText>86 Visualizaram</ViewText>
              </CardLikeCount>
              <CardInformations>
                <CardDescriptionInformation>
                  <CardDescriptionTitle>Bernardo</CardDescriptionTitle>
                  <CardDescriptionText>Golden Retriever</CardDescriptionText>
                </CardDescriptionInformation>
                <CardDescriptionDistance>
                  <CardDistanceText>
                    6.2Km
                  </CardDistanceText>
                </CardDescriptionDistance>
              </CardInformations>
            </CardDescription>
            <CardButtonView>
              <CardButton>
                <CardButtonText>Ler mais sobre Bernardo</CardButtonText>
              </CardButton>
            </CardButtonView>
          </CardPet>

          <CardPet style={styles.card}>
            <CardPhotoImage source={require('../../../assets/bird-image.jpg')} imageStyle={{ borderRadius: 15 }}></CardPhotoImage>
            <CardDescription>
              <CardLikeCount>
                <Icon name="md-eye" size={25} color="#FC6B6E" style={{ marginTop: -4 }} />
                <ViewText>133 Visualizaram</ViewText>
              </CardLikeCount>
              <CardInformations>
                <CardDescriptionInformation>
                  <CardDescriptionTitle>Chico</CardDescriptionTitle>
                  <CardDescriptionText>Calopsita</CardDescriptionText>
                </CardDescriptionInformation>
                <CardDescriptionDistance>
                  <CardDistanceText>
                    8.2km
                  </CardDistanceText>
                </CardDescriptionDistance>
              </CardInformations>
            </CardDescription>
            <CardButtonView>
              <CardButton>
                <CardButtonText>Ler mais sobre Chico</CardButtonText>
              </CardButton>
            </CardButtonView>
          </CardPet>

          {/* <PetScrollView></PetScrollView> */}
        </Container>
      </SafeAreaView>

    );
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