import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import { exp } from 'react-native-reanimated';


// background-color:#42a9aa;
// padding:8px;
export const BlueContainer = styled.View `
    flex: 1;
`;

// justify-content: center;
    // align-items: center
export const MainContainer = styled.View `
    flex: 1;
    background-color:#fff;
    padding:16px;
`

// export const Header = styled.View `
//     flex: 1;
// `

export const Body = styled.View `
    flex: 3;
    
`

// background-color: #ccc8;
// border-width: 1;
// border-color:#5A6978;

export const Footer = styled.View `
    flex: 1;
`

export const OvalView = styled.View `
    margin-top: 20;
    width: 100%;
    height: 30;
    background-color: #00BCD4;
    border-radius: 50;
    transform: {
    scaleX: 2;
    }
`

 export const Div = styled.View `
    flex:1;
    justify-content: center;
    align-items: center;
`
// height:50

// border-width: 1;
    // border-color:#000;
export const Head = styled.View `
    flex: 0.5;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

// flex: 0.3;
export const HeaderDecoration = styled.View `
    
    background-color:#fff;
    justify-content: center;
    align-items: center;
`

export const ActiveStepIconColor = styled.View `
    height:15;
    width:15;
    background-color:#FC6B6E;
    border-radius:1000;   
`

export const DesabledStepIconColor = styled.View `
    height:15;
    width:15;
    background-color:#cccccc;
    border-radius:1000;
`


/* // border-color: #000;
    // border-width:1; */
export const Form = styled.View `
    flex:1;
    justify-content:center;
    margin-bottom:50;
   
`

 /* // border-color: #000; */
    // border-width:1;
export const DivForm = styled.View `
    flex: 2;
    padding:8px;
    margin-top:20px;
`

export const DivProgressBar = styled.View `
    flex: 0.3;
    padding:8px;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`



export const BtnText = styled.Text `
    color: #fff;
    font-size:18px;
    font-weight:bold;
`

export const DivSignOpions = styled.View `
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #c78;

`

export const ContainerLine = styled.View `
    flex:1;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction:row;

`;



/* // top:3; */
export const HorizontalLine = styled.View `
    border-width: 0.5;
    border-color:#5A6978;
    margin:10px;
    width:80;
    top:3;
`;




export const SignOptions = styled.View `
    height:50;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    `;

export const IconSignUpOptions = styled.Image `
    height: 60;
    width: 60;
`

export const ButtonIcon = styled.TouchableOpacity `
    margin-top:0;
    height: 60;
    width: 60;
    margin-left:15;
    margin-right:15;
`

    /* // background-color:#f88c;
    // margin-bottom:10 */

export const SubtittleContainer = styled.View `
    
    padding:8px;
    top:15px;
`


    /* // border-width: 0.5;
    // border-color:#5A6978; */

export const DivInput = styled.View `
    flex:0.3;
    paddingHorizontal:3;
    background-color:#fff;
`

/* // fontFamily:Arial; */
export const FormLabel = styled.Text `
    
    color: #369696;
    font-weight:bold;
`

export const ContainerTxtInput = styled.Text `
    flex-direction: row;
    border-bottom-width: 1.2;
    border-color: #B6B6B6;
    paddingHorizontal:3;
    align-items:center;
`

export const FormTextInput = styled.TextInput `
    flex: 1;
    width:80%;
    min-height: 40;
    max-height:50;
    align-self: center;
    font-size: 18;
`


/* // ****** Form Personal Data */


    /* // border-width: 0.5;
    // border-color:#5A6978; */

export const DivInputRow = styled.View `
    width:100%;
    flex-direction:row;
    
`

export const DivInputMedium = styled.View `
    flex:1;
    paddingHorizontal:3;
    margin-right:10;
`
export const FormTextInputMedium = styled.TextInput `
    flex: 1;
    width:70%;
    min-height: 40;
    max-height:50;
    align-self: center;
    font-size: 18;
`

export const DivInputSmall = styled.View `
    flex:0.5;
    paddingHorizontal:3;
    margin-right:10;
`

export const FormTextInputSmall = styled.TextInput `
    flex: 0.5;
    width:60%;
    min-height: 40;
    max-height:50;
    align-self: center;
    font-size: 18;
`

export const DivButtons = styled.View `
    flex:0.4;
    flex-direction:row;
    padding:8px;
    align-items: center;
`


export const ButtonSmallPrevious = styled.TouchableOpacity `
    position: absolute; 
    height: 45px;
    width: 130px;
    justify-content:center;
    align-items:center;
    background-color:#fc6b6e;
`

export const ButtonSmallNext = styled.TouchableOpacity `
    position: absolute; 
    height: 45px;
	width: 130px;
    right: 10px;
    justify-content:center;
    align-items:center;
    background-color:#1bc7cb;
    
`


// FORM BASIC INFO

const { width } = Dimensions.get('window')

export const Inner = styled.View `
    padding:20px;
    flex: 1;
    justify-content:space-around;
    background-color:#ffffff;
`;

export const Header = styled.View `
    margin-top: 70px;
    bottom:20px; 
    /* flex-direction:row;  */
    justify-content:center;
`;

export const Title = styled.Text `
    font-size: 40px;
    margin-bottom: 15px;
    color:#47525E;
`;

export const ImageIcon = styled.Image `
    height:50px;
    width:50px;
    top: 5px; 
    left:10px;
`;

export const ProgressBar = styled.View `
    justify-content: space-evenly;
    flex-direction: row;
    margin-top:-20px;

`;

export const ActiveIcon = styled.View `
    height:15px;
    width:15px;
    background-color:#FC6B6E;
    border-radius:100px;

`;

export const DisableIcon = styled.View `
    height:15px;
    width:15px;
    background-color:#ccc;
    border-radius:100px;
`;

export const SubTitle = styled.Text `
    font-size: 17px;
    top:30px;
`;
// export const Form = styled.Text `
// top:40 ,flex:1, paddingTop:10;
// `


export const ButtonNext = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justify-content:center;
    align-items:center;
    background-color:#1bc7cb;
`

export const ContainerButton = styled.View `
    margin-top: 60px;
    margin-left:auto;
    margin-right:0;

`

export const ButtonContainer = styled.View `
    margin-top: 60px;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;

`

export const ButtonPrevious = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justify-content:center;
    align-items:center;
    background-color:#fc6b6e;
`


export const ImageEmail = styled.ImageBackground `
    flex: 3.5;
    margin-top: 16;
`

export const TitleEmailConfirm = styled.Text`
    font-size: 27;
    flex: 1;
    color: #369696;
    text-align: center;
`;

export const TextEmailConfirm = styled.Text`
    font-size: 16;
    text-align: justify;
    flex: 2;
    color: #ccc;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 32px;
`;


// export const Title = styled.Text `

// `

// export const Title = styled.Text ``
// export const Title = styled.Text ``
// export const Title = styled.Text ``
// 
//    




