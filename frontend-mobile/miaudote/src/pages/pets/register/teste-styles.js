import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export const Inner = styled.View `
    padding:20px;
    flex: 1;
    justify-content:space-around;
    background-color:#ffffff;
`;

export const Header = styled.View `
    /* margin-top: 70px; */
    bottom:20px;
    /* background-color:#c78; */
    justify-content:center;
`;

export const ImageIcon = styled.Image `
    height:50px;
    width:50px;
    top: 5px; 
    left:10px;
`;

export const Title = styled.Text `
    font-size: 40px;
    margin-bottom: 15px;
    color:#47525E;
   font-family: 'Bellota_700Bold';

`;

export const ContainerIcon = styled.View `
    justify-content: space-evenly;
    flex-direction: row;
    bottom: 35px;
    width: 100%;
    /* margin-top:-20px; */

`;

export const Form = styled.View `
/* flex:1; */
    /* background-color:#ccc; */
    /* margin-top:40px; */
    justify-content:center;
    align-items:center;
`

export const ContainerCenter = styled.View `
    align-items:center;
    /* bottom:20px;  */
`

export const GenderView = styled.TouchableOpacity `
    width:80px;
    height: 80px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    margin-top:20px;
`

export const IconGender = styled.Image `
    height:55px; 
    width:55px;
`






