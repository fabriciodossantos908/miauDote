import styled from 'styled-components/native'
import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window')



export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    /* border-width: 1px;
    border-color:#000; */
`;

export const Main = styled.View`
    /* flex:1; */
    padding: 16px;
    background-color:#ffff; 
    /* border-top-right-radius:35px; 
    border-top-left-radius:35px; */
`

export const ContainerCenter = styled.View`
    align-items:center;
`


export const Tittle = styled.Text`
    font-size: 40px;
    margin-bottom: 15px;
    color:#ffffff;
    text-align:center;
`;

export const SubTittle = styled.Text`
    font-size: 15px;
    text-align:center;
    color:#1bc7cb;
    font-weight:bold;
`

export const IconContainer = styled.View`
    align-content:center;
    justify-content:space-evenly;
    flex-direction:row;
    width: 50%;
    margin-top:10px;
`

export const Form = styled.View`
    /* background-color:#ccc; */
    margin-top:50px;
    justify-content:center;
    align-items:center;
`

export const Label = styled.Text`
    font-size: 15px;
    color:#47525E;
    text-align:left;
    align-self:flex-start;
`

export const ContainerGender = styled.View`
    align-content:center;
    justify-content:space-evenly;
    flex-direction:row;
    margin-top:10px; 
    width:100%;
`

export const IconGender = styled.Image`
    height:65px; 
    width:65px;
`

export const GenderView = styled.TouchableOpacity`
    width:90px;
    height: 90px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    margin-top:20px;
`

export const TextGender = styled.Text`
    align-self:center; 
    color:#969FAA;
`

export const UnderlinetText = styled.Text`
    align-self:flex-start;
    color:#FC6B6E; 
    margin-top:20px; 
    font-weight:bold;
    text-decoration-line:underline;
`

export const NextButton = styled.TouchableOpacity`
    align-self:flex-end;
    /* color:#ccc;  */
    background-color:#1bc7cb; 
    height:40px; 
    width:120px;
    justify-content:center;
    border-radius:8px;
    margin-top: 40px;
    /* position: absolute; */
    /* bottom:-110px; */
    /* right:25px; */
`

export const TextButton = styled.Text`
    text-align:center;
    color:#fff;
    font-weight:bold;
    font-size:16px;
`



// export const Container = styled.View ``
// export const Container = styled.View ``
// export const Container = styled.View ``
// export const Container = styled.View ``
// export const Container = styled.View ``
// export const Container = styled.View ``
// export const Container = styled.View ``
// export const Container = styled.View ``