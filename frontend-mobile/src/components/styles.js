// Global componentes
import styled from 'styled-components/native'

export const Container = styled.View `
    flex: 1;
    background-color: #ffffff;
    justify-content: center;
    border-width: 1px;
    border-color:#000;

`;

export const CuteLine = styled.View `
    height: 40;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top:20;
`;

export const LargeButton = styled.TouchableOpacity `
    align-items: center;
    height:50;
    width:300;
    border-color:#fc6b6e;
    background-color:#fc6b6e;
    border-width: 1.5;
    padding: 14px;
    margin-top:35;
    border-radius:21;
    align-self:center;  
`;

export const SecondaryText = styled.Text `
    font-size: 20px;
    color: #5A6978;
    letter-spacing: 0.15;
`;

export const IconPaw = styled.Image `
    height:20;
    width:20;
    margin-left:10;
    margin-right:10;

`;

export const TittleBlue = styled.Text `
    color:#1bc7cb;
    font-size:30;
    font-weight: bold;
`;

export const TittleBlack = styled.Text `
    color:#47525E;
    font-size:30;
    font-weight: bold;
`;

export const TittleRed = styled.Text `
    color:#fc6b6e;
    font-size:30;
    font-weight: bold;
`;


// border-width: 4;
// border-color:#000;
export const Div = styled.View `
    flex: 1;
    justify-content: center;
    
    padding: 10px;
    align-items: center;
    
`;

export const SecundaryTittle = styled.Text `
    color:#9A9DA3;
    font-size:15;

`;

export const TextInputForm = styled.TextInput `
    align-self: 'center';
    color: 'black';
    font-size: 18;
    flex: 1;
    min-height: 40;
`
export const ContainerButton = styled.View `
    /* background-color:#ccc; */
    margin-top: 55px;
    margin-left:auto;
    margin-right:0;
`

export const ButtonContainer = styled.View `
    margin-top: 60px;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;

`

export const BtnText = styled.Text `
    color: #fff;
    font-size:18px;
    font-weight:bold;
`
export const NextButton = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justify-content: center;
    align-items: center;
    background-color: #1bc7cb;
    border-radius: 5px;
    align-self:flex-end;
    /* margin */
`

export const ButtonPrevious = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justify-content:center;
    align-items:center;
    background-color:#fc6b6e;
`
