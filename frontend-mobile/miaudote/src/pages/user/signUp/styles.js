import styled from 'styled-components/native'

export const Header = styled.View `
    flex: 0.2;
    justifyContent: center;
    // borderWidth: 1;
    // borderColor:#000;
    alignItems: center;
    flexDirection: row;
`;

export const SubtittleContainer = styled.View `
    flex:1;
    widht:500px;
    padding: 15px;
    // backgroundColor: #cccccc;
    paddingHorizontal:20;
    marginTop:15;
`;

export const Form = styled.View `
    flex:1;
    widht:300px;
    backgroundColor: #cccccc;
    borderColor: #cccccc;
    // borderWidth:1;
    marginTop:10;
    paddingHorizontal:20;
    
`;

export const DivInput = styled.View `
    paddingHorizontal:3;
    // backgroundColor:#c789;
    marginTop:25;
`;

export const Label = styled.Text `
    fontFamily:Arial;
    color: #369696;
`;

export const ContainerSignUpOptions = styled.View `	
    width:100%;
    justifyContent: center;
    alignItems: center;
    flexDirection:row;
    padding:0;
    marginTop:7;
    // background-color:#c9c9c9;
    // borderWidth:1;
    shadowColor: "#000";
    // shadowOffset: {
    //     width: 0;
    //     height: 5;
    // };
    // shadowOpacity: 0.34;
    // shadowRadius: 6.27;

    // elevation: 10;
    
    
`;

export const IconSignUpOptions = styled.Image `
    marginTop:0;
    height: 70;
    width: 70;
    marginLeft:15;
    marginRight:15;
    // backgroundColor:#c789;
`
export const HorizontalLine = styled.View `
    borderWidth: 0.5;
    borderColor:#5A6978;
    margin:10px;
    top:3;
    width:50
`;


export const Div = styled.View `
    height:100;
    // backgroundColor:#c789;
    marginTop:55;

`;

export const DivRow = styled.View `
    width:100%;
    // justifyContent: center;
    // alignItems: center;
    flexDirection:row;
    marginTop:25
`;

export const DivInputMedium = styled.View `
    flex:1;
    paddingHorizontal:3;
    // marginTop:25;
    marginRight:10;

`;

// export const FormTextInput = styled.TextInput `
//     flex: 1;
//     minHeight: 40;
//     alignSelf: center;
//     fontSize: 18;
// `;

export const DivInputSmall = styled.View `
    width:30%;
    paddingHorizontal:3;
    marginRight:10;
`;

export const TxtInputFormSmall = styled.TextInput `
    flex: 1;
    minHeight: 40;
    alignSelf: center;
    fontSize: 18;
    maxWidth: 60%;
`

