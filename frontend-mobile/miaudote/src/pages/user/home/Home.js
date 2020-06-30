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
            <LocalText> Jandira, SP </LocalText>
          </LocalView>
          <SalutationView>
            <SalutationTitle>
              Olá, Joanna
                        </SalutationTitle>
            <SalutationText>
              Tá afim de encontrar o seu
                        </SalutationText>
            <SalutationText>
              novo melhor amigo?
                        </SalutationText>
          </SalutationView>
          <MenuView>
            <MenuOption>
              <MenuOptionImage source={require('../../../assets/cat-icon.png')} />
              <MenuOptionQuantity>
                50
                        </MenuOptionQuantity>
              <MenuOptionName>
                Gatos
                        </MenuOptionName>
            </MenuOption>
            <MenuOption>
              <MenuOptionImage source={require('../../../assets/dog-icon.png')} />
              <MenuOptionQuantity>
                50
                        </MenuOptionQuantity>
              <MenuOptionName>
                Cães
                        </MenuOptionName>
            </MenuOption>
            <MenuOption>
              <MenuOptionImage source={require('../../../assets/bird-icon.png')} />
              <MenuOptionQuantity>
                50
                        </MenuOptionQuantity>
              <MenuOptionName>
                Pássaros
                        </MenuOptionName>
            </MenuOption>
          </MenuView>
          <DivisionView />
          <PetsAroundTitle>
            Pets próximos de você
                    </PetsAroundTitle>
          <CardPet style={styles.card}>
            <CardPhotoImage source={require('../../../assets/gato-image.jpg')} imageStyle={{ borderRadius: 15 }}></CardPhotoImage>
            <CardDescription>
              <CardLikeCount>
                <Icon name="md-heart" size={25} color="#FC6B6E" />
                <ViewText>126 gostaram</ViewText>
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
                <Icon name="md-heart" size={25} color="#FC6B6E" />
                <ViewText>86 gostaram</ViewText>
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
                <Icon name="md-heart" size={25} color="#FC6B6E" />
                <ViewText>133 gostaram</ViewText>
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderTopColor: '#dedede',
    borderRightColor: '#dedede',
    borderLeftColor: '#dedede',
    borderBottomColor: '#b0b0b0',
  }
})