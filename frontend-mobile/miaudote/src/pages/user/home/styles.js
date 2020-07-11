import styled from 'styled-components/native';

export const Container = styled.ScrollView`
   padding: 8px;
   background-color: #fff;
   padding-bottom: 16px;
`;


// View com a informação de localização do usuário
export const LocalView = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const LocalText = styled.Text`
   font-size: 20px;
   margin-left: 10px;
   font-family: 'Poppins_400Regular';
`;


// View com uma saudação ao usuário
export const SalutationView = styled.View`
   margin-top: 48px;
   margin-bottom: 16px;
   justify-content: flex-start;
`;

export const SalutationTitle = styled.Text`
   font-size: 24px;
   font-family: 'Poppins_400Regular';
`;

export const SalutationText = styled.Text`
   font-size: 17px;
   font-family: 'Poppins_400Regular';
   color: #ccc;
`;


// View com o menu de seleção de espécie
export const MenuView = styled.ScrollView`
   flex-direction: row;
   height: 160px;
   padding: 16px;
   padding-left: 0;
   margin-bottom: 56px;
`;

export const MenuOption = styled.TouchableOpacity`
   width: 80px;
   height: 132px;
   margin-right: 20px;
   justify-content: center;
   align-items: center;
`;

export const MenuOptionImage = styled.Image`
   width: 80px;
   height: 80px;
   border-radius: 40px;
`;

export const MenuOptionQuantity = styled.Text`
   font-size: 20px;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
   color: #1bc7cb;
`;

export const MenuOptionName = styled.Text`
   font-size: 16px;
   font-family: 'Poppins_400Regular';
   color: #000;
`;

export const DivisionView = styled.View`
   width: 128px;
   border-width: 2px;
   border-color: #ccc;
   align-self: center;
   margin-bottom: 40px;
`;

export const PetsAroundTitle = styled.Text`
   font-size: 20px;
   color: #4d4f4f;
   font-family: 'Poppins_400Regular';
   margin-bottom: 16px;
`;

// View com a listagem dos pets mais próximos

export const CardPet = styled.View`
   width: 272px;
   height: 368px;
   /* border-width: 2px; */
   padding: 16px;
   align-self: center;
   margin-bottom: 32px;
`;

export const CardPhotoImage = styled.ImageBackground`
   flex: 2;
   border-radius: 15px;
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
   font-size: 20px;
   font-family: 'Poppins_400Regular';
   margin-top: 8px;
`;

export const CardDescriptionText = styled.Text`
   font-size: 15px;
   font-family: 'Poppins_400Regular';
   margin-top: -8px;
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
   font-size: 12px;
   color: #666563;
   margin-left: 8px;
   font-family: 'Poppins_400Regular';
`;

export const CardDescriptionDistance = styled.View`
   flex: 1;
   justify-content: flex-end;
`;

export const CardDistanceText = styled.Text`
   font-size: 14px;
   font-family: 'Poppins_400Regular';
   align-self: flex-end;
   color: #575654;
`;

export const CardButton = styled.TouchableOpacity`
   width: 224px;
   height: 24px;
   background-color: #1bc7cb;
   justify-content: center;
   align-items: center;
   margin-top: 8px;
   border-radius: 3px;
`;

export const CardButtonText = styled.Text`
   font-size: 16px;
   color: #fff;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
`;