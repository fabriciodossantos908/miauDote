// Global componentes
import styled from 'styled-components/native'

export const Container = styled.View `
    flex: 1;
    backgroundColor: '#FFF';
    justifyContent: center;
    borderWidth: 1;
    borderColor:'#000';

`;

export const CuteLine = styled.View `
    height: 40;
    width: 100%;
    flexDirection: row;
    justifyContent: center;
    marginTop:20
`;

export const LargeButton = styled.TouchableOpacity `
    alignItems: center;
    height:50;
    width:300;
    borderColor:#fc6b6e;
    backgroundColor:#fc6b6e;
    borderWidth: 1.5;
    padding: 14px;
    marginTop:35;
    borderRadius:21;
    alignSelf:center;  
`;

export const SecondaryText = styled.Text `
    fontSize: 20px;
    color: '#5A6978';
    letterSpacing: 0.15
`;

export const IconPaw = styled.Image `
    height:20;
    width:20;
    marginLeft:10;
    marginRight:10;

`;

export const TittleBlue = styled.Text `
    color:#1bc7cb;
    fontSize:30;
    fontWeight: bold;
`;

export const TittleBlack = styled.Text `
    color:#47525E;
    fontSize:30;
    fontWeight: bold;
`;

export const TittleRed = styled.Text `
    color:#fc6b6e;
    fontSize:30;
    fontWeight: bold
`;


// borderWidth: 4;
// borderColor:#000;
export const Div = styled.View `
    flex: 1;
    justifyContent: center;
    
    padding: 10px;
    alignItems: center;
    
`;

export const SecundaryTittle = styled.Text `
    color:#9A9DA3;
    fontSize:15;

`;

export const TextInputForm = styled.TextInput `
    alignSelf: 'center';
    color: 'black';
    fontSize: 18;
    flex: 1;
    minHeight: 40;
`


// inputContainer: theme => ({
//     flexDirection: 'row';
//     borderBottomWidth: 1;
//     alignItems: 'center';
//     borderColor: theme.colors.grey3;
//   });
//   iconContainer: {
//     height: 40;
//     justifyContent: 'center';
//     alignItems: 'center';
//     marginLeft: 15;
//   };
//   input: {
//     alignSelf: 'center';
//     color: 'black';
//     fontSize: 18;
//     flex: 1;
//     minHeight: 40;
//   };
