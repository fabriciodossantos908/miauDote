import styled from  'styled-components/native';

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

// Card dos pets
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

// Filtros de listagem
export const FilterTitle = styled.Text`
   font-size: 22px;
   color: #1bc7cb;
   margin-top: 32px;
   font-family: 'Poppins_400Regular';
`;

export const FiltersView = styled.View`
   flex-direction: row;
   justify-content: center;
   padding: 16px;
   border-width: 1px;
   border-color: #ccc;
   margin-bottom: 32px;
`;

export const FilterItem = styled.View`
   flex-direction: column;
   padding: 8px;
   justify-content: center;
   align-items: center;
   /* background-color: green; */
`;

export const FilterSelect = styled.Picker`
   width: 80px;
   height: 32px;
   text-align: center;
   font-family: 'Poppins_400Regular';
   border: none;
`;


export const PetsAroundTitle = styled.Text`
   font-size: 20px;
   color: #4d4f4f;
   font-weight: bold;
   font-family: 'Poppins_400Regular';
   margin-bottom: 16px;
`;

export const DivisionView = styled.View`
   width: 128px;
   border-width: 2px;
   border-color: #ccc;
   align-self: center;
   margin-bottom: 40px;
`;


export const DistanceTitle = styled.Text`
`;