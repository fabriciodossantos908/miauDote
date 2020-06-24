import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import { exp } from 'react-native-reanimated';


// backgroundColor:#42a9aa;
// padding:8px;
export const BlueContainer = styled.View `
    flex: 1;
`;

// justifyContent: center;
    // alignItems: center
export const MainContainer = styled.View `
    flex: 1;
    backgroundColor:#fff;
    padding:16px;
    
`

// export const Header = styled.View `
//     flex: 1;
// `

export const Body = styled.View `
    flex: 3;
    
`

// backgroundColor: #ccc8;
// borderWidth: 1;
// borderColor:#5A6978;

export const Footer = styled.View `
    flex: 1;
`

export const OvalView = styled.View `
    marginTop: 20;
    width: 100%;
    height: 30;
    backgroundColor: #00BCD4;
    borderRadius: 50;
    transform: {
    scaleX: 2
    }
`

 export const Div = styled.View `
    flex:1;
    justifyContent: center;
    alignItems: center;
`
// height:50

// borderWidth: 1;
    // borderColor:#000;
export const Head = styled.View `
    flex: 0.5;
    justifyContent: center;
    alignItems: center;
    flexDirection: row;
`

// flex: 0.3;
export const HeaderDecoration = styled.View `
    
    backgroundColor:#fff;
    justifyContent: center;
    alignItems: center
`

export const ActiveStepIconColor = styled.View `
    height:15;
    width:15;
    backgroundColor:#FC6B6E;
    borderRadius:1000;    
`


export const DesabledStepIconColor = styled.View `
    height:15;
    width:15;
    backgroundColor:#cccccc;
    borderRadius:1000;
`


// borderColor: #000;
    // borderWidth:1;
export const Form = styled.View `
    flex:1;
    justifyContent:center;
    marginBottom:50;
   
`

 // borderColor: #000;
    // borderWidth:1;
export const DivForm = styled.View `
    flex: 2;
    padding:8px;
    marginTop:20px
`

export const DivProgressBar = styled.View `
    flex: 0.3;
    padding:8px;
    flexDirection:row;
    justifyContent: center;
    alignItems: center;
`



export const BtnText = styled.Text `
    color: #fff;
    fontSize:18px
`

export const DivSignOpions = styled.View `
    flex: 1;
    width: 100%;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #c78

`

export const ContainerLine = styled.View `
    flex:1;
    width: 100%;
    justifyContent: center;
    alignItems: center;
    flexDirection:row;

`;



// top:3;
export const HorizontalLine = styled.View `
    borderWidth: 0.5;
    borderColor:#5A6978;
    margin:10px;
    width:80;
    top:3
`;




export const SignOptions = styled.View `
    height:50;
    width: 100%;
    justifyContent: center;
    alignItems: center;
    flexDirection:row;
    `

export const IconSignUpOptions = styled.Image `
    height: 60;
    width: 60;
`

export const ButtonIcon = styled.TouchableOpacity `
    marginTop:0;
    height: 60;
    width: 60;
    marginLeft:15;
    marginRight:15;
`

    // backgroundColor:#f88c;
    // marginBottom:10

export const SubtittleContainer = styled.View `
    
    padding:8px;
    top:15px;
`


    // borderWidth: 0.5;
    // borderColor:#5A6978;

export const DivInput = styled.View `
    flex:0.3;
    paddingHorizontal:3;
    backgroundColor:#fff;
`

// fontFamily:Arial;
export const FormLabel = styled.Text `
    
    color: #369696;
    fontWeight:bold
`

export const ContainerTxtInput = styled.Text `
    flexDirection: row;
    borderBottomWidth: 1.2;
    borderColor: #B6B6B6;
    paddingHorizontal:3;
    alignItems:center;
`

export const FormTextInput = styled.TextInput `
    flex: 1;
    width:80%;
    minHeight: 40;
    maxHeight:50;
    alignSelf: center;
    fontSize: 18;
`


// ****** Form Personal Data


    // borderWidth: 0.5;
    // borderColor:#5A6978;

export const DivInputRow = styled.View `
    width:100%;
    flexDirection:row;
    
`

export const DivInputMedium = styled.View `
    flex:1;
    paddingHorizontal:3;
    marginRight:10;
`
export const FormTextInputMedium = styled.TextInput `
    flex: 1;
    width:70%;
    minHeight: 40;
    maxHeight:50;
    alignSelf: center;
    fontSize: 18;
`

export const DivInputSmall = styled.View `
    flex:0.5;
    paddingHorizontal:3;
    marginRight:10;
`

export const FormTextInputSmall = styled.TextInput `
    flex: 0.5;
    width:60%;
    minHeight: 40;
    maxHeight:50;
    alignSelf: center;
    fontSize: 18;
`

export const DivButtons = styled.View `
    flex:0.4;
    flexDirection:row;
    padding:8px;
    alignItems: center;
`


export const ButtonSmallPrevious = styled.TouchableOpacity `
    position: absolute; 
    height: 45px;
    width: 130px;
    justifyContent:center;
    alignItems:center;
    backgroundColor:#fc6b6e;
`

export const ButtonSmallNext = styled.TouchableOpacity `
    position: absolute; 
    height: 45px;
	width: 130px;
    right: 10px;
    justifyContent:center;
    alignItems:center;
    backgroundColor:#1bc7cb;
    
`


// FORM BASIC INFO

const { width } = Dimensions.get('window')

export const Inner = styled.View `
    padding:20px;
    flex: 1;
    justifyContent:space-around;
    backgroundColor:#ffffff
`

export const Header = styled.View `
    marginTop: 70px;
    bottom:20px; 
    flexDirection:row; 
    justifyContent:center;
`

export const Title = styled.Text `
    fontSize: 32px;
    marginBottom: 15px;
`

export const ImageIcon = styled.Image `
    height:40px;
    width:40px;
    top: 5px; 
    left:10px
`

export const ProgressBar = styled.View `
    justifyContent: space-evenly;
    flexDirection: row;
    marginTop:-20px

`

export const ActiveIcon = styled.View `
    height:15px;
    width:15px;
    backgroundColor:#FC6B6E;
    borderRadius:100px;

`

export const DisableIcon = styled.View `
    height:15px;
    width:15px;
    backgroundColor:#ccc;
    borderRadius:100px;
`

export const SubTitle = styled.Text `
    fontSize: 17px;
    top:30px
`
// export const Form = styled.Text `
// top:40 ,flex:1, paddingTop:10
// `


export const ButtonNext = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justifyContent:center;
    alignItems:center;
    backgroundColor:#1bc7cb;
`

export const ContainerButton = styled.View `
    marginTop: 60px;
    marginLeft:auto;
    marginRight:0;

`

export const ButtonContainer = styled.View `
    marginTop: 60px;
    flexDirection:row;
    alignItems: center;
    justifyContent:space-between

`

export const ButtonPrevious = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justifyContent:center;
    alignItems:center;
    backgroundColor:#fc6b6e;
`


// export const Title = styled.Text ``
// export const Title = styled.Text ``
// export const Title = styled.Text ``
// export const Title = styled.Text ``
// export const Title = styled.Text ``


// 
//    




