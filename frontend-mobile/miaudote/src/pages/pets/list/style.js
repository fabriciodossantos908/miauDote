import styled from 'styled-components/native';

export const DistanceTitle = styled.Text`
   font-size: 21px;
   color: #4d4f4f;
   font-family: 'Poppins_400Regular';
   margin-top: 16px;
`;

export const DistanceView = styled.View`
   flex-direction: row;
   /* background-color: #ccc; */
   align-items: flex-start;
   margin-bottom: 24px;
   justify-content: space-evenly;
`;

export const DistanceQuantity = styled.Text`
   font-size: 19px;
   margin-top: -4px;
   color: #ccc;
   font-family: 'Poppins_400Regular';
   align-self: flex-end;
`;

export const ReturnButton = styled.TouchableOpacity`
   align-self: flex-start;
   margin-right: 32px;
   margin-left: -8px;
   margin-top: -12px;
`;

export const NotFoundTitle = styled.Text`
   font-size: 19px;
   color: #fc6b6e;
   font-family: 'Poppins_400Regular';
   text-align: center;
`;

export const NotFoundImage = styled.Image`
   width: 200px;
   height: 220px;
   /* background-color: red; */
   align-self: center;
`;

export const NotFoundText = styled.Text`
   font-family: 'Poppins_400Regular';
   font-size: 14px;
   color: #403f3e;
   text-align: center;
   margin-bottom: 32px;
`;
