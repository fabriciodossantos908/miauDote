import styled from 'styled-components/native';

import { Dimensions, PixelRatio } from 'react-native';


const widthPercentageToDP = widthPercent => {
   const screenWidth = Dimensions.get('window').width;
   return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
 };
 
 const heightPercentageToDP = heightPercent => {
   const screenHeight = Dimensions.get('window').height;
 return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
 };

export const PerfilContainer = styled.View`
  flex: 1;
  /* justify-content: space-between; */
  background-color: #fff;
`;

// Barra inicial com o nome do usuário logado
export const PerfilName = styled.Text`
   font-size: ${heightPercentageToDP('4')}px;
   padding-left: ${widthPercentageToDP('2')}px;
   border-bottom-width: 1px;
   border-color: #ccc;
   
`

// Componente com a foto e nome completo do usuário
export const PerfilPhoto = styled.View`
   flex: 3;
   justify-content: center;
   align-items: center;
   /* background-color:red; */
`;

export const Photo = styled.View`
   height: 125px;
   width: 125px;
   background-color: #fff;
   border-radius: 70px;
   justify-content: center;
   align-items: center;
`;

export const ImageBackground = styled.Image`
   height: 125px;
   width: 125px;
   border-radius: 70px;
`;

export const UserName = styled.Text`
   font-size: ${heightPercentageToDP('4')}px;
   color: #6b6a67;
`;

// Componente com todas as configurações disponíveis para um usuário
export const PerfilOptions = styled.View`
   flex: 5;
   padding-top: ${widthPercentageToDP('4')}px;
   border-top-width: 1px;
   border-color: #ccc;
`;

export const PerfilOptionsLine = styled.TouchableOpacity`
   flex: 0.19;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-end;
   padding-left: ${widthPercentageToDP('10')}px;
   margin-bottom: ${widthPercentageToDP('7')}px;
   /* background-color: blue; */
`;

export const PerfilSignOutOptionLine = styled.TouchableOpacity`
   flex: 0.14;
   flex-direction: row;
   justify-content: flex-start;
   align-items: flex-end;
   margin-top: ${widthPercentageToDP('10')}px;
   padding-left: ${widthPercentageToDP('10')}px;
   margin-bottom: ${widthPercentageToDP('7')}px;
   /* background-color: blue; */
`;


export const ConfigIcon = styled.Image`
   width: 50px;
   height: 40px;
`;

export const PerfilTextOption = styled.Text`
   font-size: ${heightPercentageToDP('2.8')}px;
   color: #7a807c;
   margin-left: ${widthPercentageToDP('7')}px;
`;

export const PerfilSignOutTextOption = styled.Text`
   font-size: ${heightPercentageToDP('2.8')}px;
   color: #fc6b6e;
   margin-left: ${widthPercentageToDP('7')}px;
`;

// Componente para navegação no aplicativo
export const NavBar = styled.View`
   flex: 0.75;
   /* background-color: green; */
`;