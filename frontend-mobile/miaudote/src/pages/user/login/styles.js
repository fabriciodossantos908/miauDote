import styled from 'styled-components/native'

export const Tittle = styled.Text `
    color:#fc6b6e;
    fontSize:45;
    fontWeight: bold
`;

export const Container = styled.View `

    flex: 1;
    backgroundColor: #FFF;
    justifyContent: center;
    borderWidth: 1;
    borderColor:#000;

`;

export const Div = styled.View `
    flex: 1;
    justifyContent: center;
    padding: 10px;
    alignItems: center;
    
`;

// *********global
export const CuteLine = styled.View `
    height: 40;
    width: 100%;
    flexDirection: row;
    justifyContent: center;
    marginTop:20
`;


export const IconPaw = styled.Image `
    height:20;
    width:20;
    marginLeft:10;
    marginRight:10;

`;


export const LoginForm = styled.View `
    height: 40%;
    margin:10px;
    padding:8px;
    borderRadius: 10;
    alignItems: center;
    backgroundColor:#f7f7f7;
    paddingTop:15px;
`;

export const TxtInputLogin = styled.TextInput `
    height: 50;
    marginTop: 10;
    padding: 8px;
    alignSelf: stretch;
    backgroundColor: white;
    fontSize: 16;
    borderRadius: 10;
    borderColor: #a0a0a0;
    borderWidth: 1;
    marginBottom: 0;
`;

// **********global
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

export const TxtButon = styled.Text `
    fontWeight: bold;
    color: #000;
`;

export const ContainerLine = styled.View `

    width: 100%;
    justifyContent: center;
    alignItems: center;
    flexDirection:row;
    backgroundColor:#fff;

`;

export const HorizontalLine = styled.View `
    borderWidth: 0.5;
    borderColor:#5A6978;
    margin:10px;
    top:3;
    width:100
`;


// *********global
export const SecondaryText = styled.Text `

    fontSize: 20px;
    color: #5A6978;
    letterSpacing: 0.15
`;


export const ContainerSingInOptions = styled.View `
    flex:0.5;	
    justifyContent: center;
    alignItems: center;
    flexDirection:row;
    padding:0
`;

export const IconSingInOptions = styled.Image `
    marginTop:0;
    height: 70;
    width: 70;
    marginLeft:15;
    marginRight:15
`