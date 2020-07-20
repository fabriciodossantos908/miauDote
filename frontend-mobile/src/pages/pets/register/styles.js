import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import colors from '../../../components/colors';


const { width, height } = Dimensions.get('window')

// const {
//     width: SCREEN_WIDTH,
//     height: SCREEN_HEIGHT,
//   } = Dimensions.get('window');

//   // based on iphone 5s's scale
//   const scale = SCREEN_WIDTH / 320   ;

// export function actuatedNormalize(size) {
// const newSize = size * scale 
// if (Platform.OS === 'ios') {
//  return Math.round(PixelRatio.roundToNearestPixel(newSize))
// } else {
//   return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
// }
// }


// *** Geral ***

export const Main = styled.View`
    padding:20px;
    flex: 1;
    justify-content:space-around;
    background-color:#ffffff;
`;

export const Header = styled.View`
    bottom:20px;
    justify-content:center;
`;

/* font-size: ${0.11 * width}px; */
/* font-size:${actuatedNormalize(38)}px; */
export const Title = styled.Text`
    font-size:40px;
    margin-bottom: 15px;
    color:#47525E;
    font-family: 'Bellota_700Bold';
    text-align:center;

`;

export const ContainerCenter = styled.View`
    align-items:center;
`
export const ContainerIcon = styled.View`
    justify-content: space-evenly;
    flex-direction: row;
    bottom: 35px;
    width: 60%;
`;


export const Form = styled.View`
/* flex:1; */
    /* background-color:#ccc; */
    /* margin-top:40px; */
    /* width: 100%;  */
    justify-content:center;
    align-items:center;
`

export const Label = styled.Text`
    font-size: 15px;
    color:#47525E;
    text-align:left;
    align-self:flex-start;
    font-family: 'Poppins_400Regular';

`

// ***** Pet Basic info *****

export const ContainerRow = styled.View`
    align-content:center;
    justify-content:space-evenly;
    flex-direction:row;
    margin-top:10px; 
    width:100%;
    /* background-color:#ccc; */
`

export const TextIcon = styled.Text`
    align-self:center; 
    color:#969FAA;
`

export const UnderlinetText = styled.Text`
    align-self:flex-start;
    color:${colors.pink}; 
    margin-top:20px; 
    font-weight:bold;
    text-decoration-line:underline;
`

export const ImageIcon = styled.Image`
    height:50px;
    width:50px;
    top: 5px; 
    left:10px;
`;

export const IconView = styled.TouchableOpacity`
    width:70px;
    height: 70px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    margin-top:20px;
`

export const IconImage = styled.Image`
    height:55px; 
    width:55px;
`


export const Texto = styled.Text`
    color:${colors.pink};
`

export const IconViewSmall = styled.TouchableOpacity`
    width:25px;
    height: 25px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    border-width:1px;
    border-color:#efeded;
    background-color:#efeded;

    /* background-color:# */
`

export const IconViewMedium = styled.TouchableOpacity`
    width:30px;
    height: 30px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    border-width:1px;
    background-color:#efeded;
    border-color:#efeded;
`

export const IconViewBig = styled.TouchableOpacity`
    width:40px;
    height: 40px;
    border-radius:50px;
    justify-content:center;
    align-items:center;
    border-width:1px;
    background-color:#efeded;
    border-color:#efeded;
`


// ****** Pet Breed ****** //
export const ListContainer = styled.View`
    height: 300px;
    width: 100%;

`

export const SearchInput = styled.TextInput`
    width :90%;
    height: 40px;
    border-radius:13px;
    font-size:18px;
    padding-left:8px;
    color: ${colors.grey4};
`

export const ContainerSearch = styled.View`
    width: 100%;
    padding:2px;
    flex-direction:row;
    border-width:1px;
    border-color:#ccc;
    border-radius:13px;
    justify-content:center;
    align-items:center;
`

export const ContainerSearchIcon = styled.View`
    margin-right:10px;
    justify-content:center;
    align-items:center;
    left:10px;


`

// ****** Pet Type ****** //
export const IconPetType = styled.Image`
    height: 70px;
    width: 70px;
`
export const ContainerPetLocal = styled.View `
    margin-top: 15%;
    align-self: flex-start; 
    width: 100%;
`

export const ContainerButton = styled.View `
    margin-top: 60px;
    margin-left:auto;
    margin-right:0;
`

export const ButtonNext = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.green};
    border-radius: 5px;

`

export const ButtonPrevious = styled.TouchableOpacity `
    height: 45px;
    width: 130px;
    justify-content:center;
    align-items:center;
    background-color:${colors.pink};
    border-radius: 5px;


`

// ****** Pet Health ****** //

export const ContainerHealth = styled.View `
    flex-direction: row; 
    justify-content: space-between;
`

export const LabelHealth = styled.Text`
    font-size: 15px;
    color:#47525E;
    text-align:left;
    align-self:flex-start;
    font-family: 'Poppins_400Regular';
    top: 7px;

`;

export const DivRow = styled.View `
    flex-direction: row; 
`

export const ContainerRadioButton = styled.View `
    margin-bottom:5px;

`
export const LabelPink = styled.Text `
    font-size: 15px;
    color:${colors.pink};
    text-align:left;
    align-self:flex-start;
    font-family: 'Poppins_400Regular';
    top: 7px;
`

export const LabelGreen = styled.Text `
    font-size: 15px;
    color:${colors.green};
    text-align:left;
    align-self:flex-start;
    font-family: 'Poppins_400Regular';
    top: 7px;
`
export const ContainerQuestion = styled.View `
    margin-top: 20%;
`

export const RowCenter = styled.View `
    flex-direction: row;
    align-self: center;
    margin-top: 1%;
`

/* ****** Pet Details Info ******** */

export const ContainerPetDetails = styled.View `
    flex-direction: row; 
    justify-content: space-between; 
    margin-top: 8%;
` 
export const ContainerCheckbox = styled.View `
    width: 70%; 
    flex-direction: row; 
    justify-content: flex-end;
`

export const ContainerPetAge = styled.View `
    flex-direction: row;
    justify-content: space-between; 
    margin-top: 8%; 
    margin-bottom: 8%;
`
export const DivInputAge = styled.View `
    width: 30%; 
    margin-right: 5%;
`

// ****** Pet Photo ******* //

export const ContainerText = styled.View `
    width: 100%; 
    justify-content: flex-start;
`

export const LabelBold = styled.Text `
    color: #8c8c8c;
    letter-spacing: 0.5px;
    font-size: 17px;
    font-family:'Roboto_400Regular';
`

export const JustifyText = styled.Text `
    text-align: justify; 
    line-height: 23px;
    margin-top:4%;
    font-size:16px;
    font-family:'Poppins_400Regular';
`

export const ContainerPetImager = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
` 
export const PetImage = styled.Image `
    width: 200px;
    height: 200px;
    bottom: 50px;
    top: 20px;
    margin-bottom: 30px;
`

export const ButtonChooseImage = styled.TouchableOpacity `
    width: 240px;
    height: 45px;
    border-radius: 3px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-width: 1px;
    border-color: #fc6b6e;
`

export const TxtButton = styled.Text `
    color: #fc6b6e;
    font-size: 15px;
    font-weight: 500
`


/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */
/* export const RowCenter = styled.View `` */