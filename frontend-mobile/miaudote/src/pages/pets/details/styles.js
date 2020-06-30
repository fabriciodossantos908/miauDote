import styled from 'styled-components/native';

export const Container = styled.ScrollView`
   padding: 16px;
   background-color: #fff;
`;

export const PetTitle = styled.Text`
   font-size: 23;
   color: #575654;
   text-align: center;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
   align-self: center;
   margin-bottom: 8;
`;

export const DivisionView = styled.View`
   border-width: 1px;
   width: 200;
   align-self: center;
   border-color: #1bc7cb;
   margin-bottom: 24;
`;

// Informações do doador

export const OwnerInformationView = styled.View`
   flex-direction: row;
`;

export const OwnerInformationImageView = styled.TouchableOpacity`
`;

export const OwnerPerfilImage = styled.ImageBackground`
   width: 35;
   height: 35;
   border-radius: 25;
`;

export const OwnerInformationDetailsView = styled.View`
   padding-top: 8;
   padding-left: 8;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
`;

export const OwnerNameText = styled.Text`
   font-size: 16;
   font-weight: bold;
   color: #575654;
   font-family: 'Poppins_400Regular';
`;

export const OwnerLocalizationText = styled.Text`
   font-size: 12;
   color: #ccc;
   font-family: 'Poppins_400Regular';
`;

// Informações do Pet

export const PetImageView = styled.ImageBackground`
   height: 256;
   margin-top: 8;
   border-radius: 12;
   margin-bottom: 32;
`;

export const PetNameText = styled.Text`
   font-size: 25;
   color: #1bc7cb;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
`;

export const PetBreedText = styled.Text`
   font-size: 21;
   color: #ccc;
   margin-top: -8;
   font-family: 'Poppins_400Regular';
   margin-bottom: 24;
`;

export const PetDetailsView = styled.View`
   flex-direction: row;
   background-color: #f5f7f6;
   border-radius: 10;
   justify-content: space-around;
   padding: 8px;
`;

export const PetInformationView = styled.View`
   /* border-width: 1; */
   align-items: center;
`;

export const PetDetailText = styled.Text`
   font-size: 15;
   font-weight: bold;
   color: #fc6b6e;
   font-family: 'Poppins_400Regular';
`;

export const PetDetailPositiveText = styled.Text`
   font-size: 15;
   font-weight: bold;
   color: #1bc7cb;
   font-family: 'Poppins_400Regular';
`;

export const PetInformationTypeText = styled.Text`
   font-size: 12;
   color: #575654;
   font-family: 'Poppins_400Regular';
`;

export const DivisionInformationsView = styled.View`
   height: 35;
   border-width: 1;
   align-self: center;
   border-color: #ccc;
`;

export const PetDescriptionText = styled.Text`
   margin-top: 16;
   font-size: 18;
   font-family: 'Poppins_400Regular';
   text-align: justify;
   color: #8d8f8e;
`;

export const DivisionViewHealth = styled.View`
   margin-top: 24;
   border-width: 1;
   border-color: #ccc;
`;

export const PetHealthView = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const PetHealthTitle = styled.Text`
   font-size: 23;
   margin-top: 16;
   color: #1bc7cb;
   font-family: 'Poppins_400Regular';
`;

export const PetHealtTextInformation = styled.Text`
   font-size: 16;
   font-family: 'Poppins_400Regular';
   color: #fc6b6e;
   margin-bottom: 16;
`;

export const PetLocalizationView = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const PetLocalizationTitle = styled.Text`
   font-size: 23;
   margin-top: 16;
   color: #1bc7cb;
   font-family: 'Poppins_400Regular';
`;

export const PetLocalizationText = styled.Text`
   font-size: 19;
   margin-top: 8;
   font-weight: bold;
   color: #575654;
   font-family: 'Poppins_400Regular';
`;

export const PetUfAndCountryText = styled.Text`
   font-size: 14;
   color: #565756;
   font-family: 'Poppins_400Regular';
`;

export const ButtonAdoptThePet = styled.TouchableOpacity`
   width: 200;
   background-color: #1bc7cb;
   align-self: center;
   align-items: center;
   border-radius: 10;
   padding: 8px;
   margin-top: 16;
   margin-bottom: 32;
`;

export const ButtonAdoptText = styled.Text`
   color: #ffffff;
   font-family: 'Poppins_400Regular';
   font-size: 20;
   font-weight: bold;
`;