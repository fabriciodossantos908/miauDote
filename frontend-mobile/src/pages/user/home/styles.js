import styled from 'styled-components/native';

export const Container = styled.ScrollView`
   padding: 16px;
   background-color: #fff;
   padding-bottom: 16;
`;


// View com a informação de localização do usuário
export const LocalView = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const LocalText = styled.Text`
   font-size: 20;
   margin-left: 10;
   font-family: 'Poppins_400Regular';
`;


// View com uma saudação ao usuário
export const SalutationView = styled.View`
   margin-top: 48;
   margin-bottom: 16;
   justify-content: flex-start;
`;

export const SalutationTitle = styled.Text`
   font-size: 24;
   font-family: 'Poppins_400Regular';
`;

export const SalutationText = styled.Text`
   font-size: 17;
   font-family: 'Poppins_400Regular';
   color: #ccc;
`;


// View com o menu de seleção de espécie
export const MenuView = styled.ScrollView`
   /* margin-top: 24; */
   flex-direction: row;
   /* justify-content: space-between; */
   /* padding: 16px; */
   margin-bottom: 56;
`;

export const MenuOption = styled.TouchableOpacity`
   width: 100px;
   height: 146px;
   margin-top: 25px;
   /* margin-left: -8px; */
   justify-content: center;
   align-items: center;
   /* background-color: red; */
`;

export const MenuOptionImage = styled.Image`
   width: 80;
   height: 80;
   border-radius: 40;
`;

export const MenuOptionQuantity = styled.Text`
   /* margin-top: 10; */
   font-size: 20;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
   color: #1bc7cb;
`;

export const MenuOptionName = styled.Text`
   font-size: 16;
   font-family: 'Poppins_400Regular';
   color: #000;
`;

export const DivisionView = styled.View`
   width: 128;
   border-width: 2px;
   border-color: #ccc;
   align-self: center;
   margin-bottom: 40;
`;

export const PetsAroundTitle = styled.Text`
   font-size: 20;
   color: #4d4f4f;
   font-family: 'Poppins_400Regular';
   margin-bottom: 16;
`;

// View com a listagem dos pets mais próximos
export const PetScrollView = styled.ScrollView`
   flex: 11;
   background-color: purple;
`;

export const CardPet = styled.View`
   width: 272;
   height: 368;
   /* border-width: 2px; */
   padding: 16px;
   align-self: center;
   margin-bottom: 32;
`;

export const CardPhotoImage = styled.ImageBackground`
   flex: 2;
   border-radius: 15;
`;

export const CardDescription = styled.View`
   flex: 0.75;
   flex-direction: column;
   margin-top: 8px;
`;

export const CardButtonView = styled.View`
   flex: 0.35;
   justify-content: flex-end;
   align-items: center;
   /* background-color: red; */
`;

export const CardDescriptionTitle = styled.Text`
   font-size: 20;
   font-family: 'Poppins_400Regular';
   margin-top: 8;
`;

export const CardDescriptionText = styled.Text`
   font-size: 15;
   font-family: 'Poppins_400Regular';
   margin-top: -8;
   color: #666563;
`;

export const CardLikeCount = styled.View`
   flex: 1.5;
   flex-direction: row;
   align-items: center;
`;

export const CardInformations = styled.View`
   flex: 3;
   flex-direction: row;
`;

export const CardDescriptionInformation = styled.View`
   flex: 3;
`;

export const ViewText = styled.Text`
   font-size: 12;
   color: #666563;
   margin-left: 8;
   font-family: 'Poppins_400Regular';
`;

export const CardDescriptionDistance = styled.View`
   flex: 1;
   justify-content: flex-end;
`;

export const CardDistanceText = styled.Text`
   font-size: 14;
   font-family: 'Poppins_400Regular';
   align-self: flex-end;
   color: #575654;
`;

export const CardButton = styled.TouchableOpacity`
   width: 224;
   height: 24;
   background-color: #1bc7cb;
   justify-content: center;
   align-items: center;
   margin-top: 8;
   border-radius: 3px;
`;

export const CardButtonText = styled.Text`
   font-size: 16;
   color: #fff;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
`;