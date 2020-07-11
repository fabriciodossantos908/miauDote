import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export const Container = styled.ScrollView `
    background-color:#ffffff;
`;

export const Div = styled.View `
    /* flex: 1; */
    align-items: center;
    justify-content:center; 
    margin-top: 8px;
`;

export const Title = styled.Text `
    font-size:35px;
    /* font-weight:bold; */
    margin-bottom:10px;
    color:#1cc3c7;
    font-family: 'Poppins_400Regular';
`;

export const Description = styled.Text `
    font-size: 15px;
    text-align:center;
    color:#55606b;
    padding:10px;
    margin-bottom: 16;
    font-family: 'Poppins_400Regular';
`;

export const StepView = styled.View `
    flex-direction:row;
    margin-top: 16;
    align-items:center;
    justify-content:space-evenly;
    margin-bottom: 16;
`

export const ActiveStep = styled.View `
    height:5px;
    width: 45px;
    background-color:#1ab5b8;
    /* height:'10%'; */
`;

export const DisableStep = styled.View `
    height:5px;
    width: 45px;
    background-color:#ccc;
`;

export const ButtonNext = styled.TouchableOpacity `
    height:50px;
    width: 90px;
    /* background-color:# */
`;

export const ImageContainer = styled.View `
    height:${height * 0.5}px;
    width: ${width * 0.9}px;
`;

export const IconContainer = styled.View `
    align-items:flex-end; 
    padding-right:8px;
`;
