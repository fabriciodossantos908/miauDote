import styled from 'styled-components/native';

import { Dimensions, PixelRatio } from 'react-native'

const widthPercentageToDP = widthPercent => {
   const screenWidth = Dimensions.get('window').width;
   return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
 };


export const Container = styled.ScrollView`
   padding: 16px;
   background-color: #fff;
`;

export const PetTitle = styled.Text`
   font-size: 23px;
   color: #575654;
   text-align: center;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
   align-self: center;
   margin-bottom: 8px;
`;

export const DivisionView = styled.View`
   border-width: 1px;
   width: 200px;
   align-self: center;
   border-color: #1bc7cb;
   margin-bottom: 24px;
`;

// Informações do doador

export const OwnerInformationView = styled.View`
   flex-direction: row;
`;

export const OwnerInformationImageView = styled.TouchableOpacity`
`;

export const OwnerPerfilImage = styled.ImageBackground`
   width: 35px;
   height: 35px;
   border-radius: 25px;
`;

export const OwnerInformationDetailsView = styled.View`
   padding-top: 8px;
   padding-left: 8px;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
`;

export const OwnerNameText = styled.Text`
   font-size: 16px;
   font-weight: bold;
   color: #575654;
   font-family: 'Poppins_400Regular';
`;

export const OwnerLocalizationText = styled.Text`
   font-size: 12px;
   color: #ccc;
   font-family: 'Poppins_400Regular';
`;

// Informações do Pet

export const PetImageView = styled.ImageBackground`
   height: 256px;
   margin-top: 8px;
   border-radius: 12px;
   margin-bottom: 32px;
`;

export const PetNameText = styled.Text`
   font-size: 25px;
   color: #1bc7cb;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
`;

export const PetBreedText = styled.Text`
   font-size: 21px;
   color: #ccc;
   margin-top: -8px;
   font-family: 'Poppins_400Regular';
   margin-bottom: 24px;
`;

export const PetDetailsView = styled.View`
   flex-direction: row;
   background-color: #f5f7f6;
   border-radius: 10px;
   justify-content: space-around;
   padding: 8px;
`;

export const PetInformationView = styled.View`
   /* border-width: 1; */
   align-items: center;
`;

export const PetDetailText = styled.Text`
   font-size: 15px;
   font-weight: bold;
   color: #fc6b6e;
   font-family: 'Poppins_400Regular';
`;

export const PetDetailPositiveText = styled.Text`
   font-size: 15px;
   font-weight: bold;
   color: #1bc7cb;
   font-family: 'Poppins_400Regular';
`;

export const PetInformationTypeText = styled.Text`
   font-size: 12px;
   color: #575654;
   font-family: 'Poppins_400Regular';
`;

export const DivisionInformationsView = styled.View`
   height: 35px;
   border-width: 1px;
   align-self: center;
   border-color: #ccc;
`;

export const PetDescriptionText = styled.Text`
   margin-top: 16px;
   font-size: 18px;
   font-family: 'Poppins_400Regular';
   text-align: justify;
   color: #8d8f8e;
`;

export const DivisionViewHealth = styled.View`
   margin-top: 24px;
   border-width: 1px;
   border-color: #ccc;
`;

export const PetHealthView = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const PetHealthTitle = styled.Text`
   font-size: 23px;
   margin-top: 16px;
   color: #1bc7cb;
   font-family: 'Poppins_400Regular';
`;

export const PetHealtTextInformation = styled.Text`
   font-size: 16px;
   font-family: 'Poppins_400Regular';
   color: #fc6b6e;
   margin-bottom: 16px;
`;

export const PetLocalizationView = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const PetLocalizationTitle = styled.Text`
   font-size: 23px;
   margin-top: 16px;
   color: #1bc7cb;
   font-family: 'Poppins_400Regular';
`;

export const PetLocalizationText = styled.Text`
   font-size: 19px;
   margin-top: 8px;
   font-weight: bold;
   color: #575654;
   font-family: 'Poppins_400Regular';
`;

export const PetUfAndCountryText = styled.Text`
   font-size: 14px;
   color: #565756;
   font-family: 'Poppins_400Regular';
`;

export const ButtonAdoptThePet = styled.TouchableOpacity`
   width: 200px;
   background-color: #1bc7cb;
   align-self: center;
   align-items: center;
   border-radius: 10px;
   padding: 8px;
   margin-top: 16px;
   margin-bottom: 32px;
`;

export const ButtonAdoptText = styled.Text`
   color: #ffffff;
   font-family: 'Poppins_400Regular';
   font-size: 20px;
   font-weight: bold;
`;

export const PetHeader = styled.View`
   flex-direction: row;
`;

export const ReturnButton = styled.TouchableOpacity`
   align-self: flex-start;
   margin-right: 32px;
   margin-left: -8px;
   margin-top: -12px;
`;

// Estilização do Modal

export const ModalContainer = styled.View`
   height: 360px;
   width: ${widthPercentageToDP('92')}px;
   background-color: #fff;
   border-radius: 20px;
   padding: 16px;
`;

export const ModalTitle = styled.Text`
   font-family: 'Poppins_400Regular';
   font-size: 24px;
   color: #1bc7cb;
   margin-top: 24px;
   text-align: center;
   margin-top: 24px;
`;

export const ModalText = styled.Text`
   font-family: 'Poppins_400Regular';
   font-size: 14px;
   color: #ccc;
   text-align: justify;
   margin-top: 8px;
`;

export const ContactInformationView = styled.View`
   flex-direction: row;
   margin-top: 16px;
   align-items: center;
   /* padding-left: 16px; */
`;

export const ContactInformationImage = styled.Image`
   width: 55px;
   height: 55px;
`;


export const ContactInformationText = styled.Text`
   font-size: 16px;
   color: #fc6b6e;
   font-family: 'Poppins_400Regular';
   margin-left: 16px;
`;