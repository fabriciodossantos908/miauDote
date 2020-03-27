import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input } from 'react-native-elements';

import { 
	Tittle,
	Container, 
	Div, 
	CuteLine, 
	IconPaw, 
	LoginForm, 
	TxtInputLogin, 
	LargeButton, 
	TxtButon, 
	ContainerLine, 
	HorizontalLine, 
	SecondaryText,
	ContainerSingInOptions, 
	IconSingInOptions } from './styles'



export default class Login extends Component {

	constructor() {
		super()
		this.state = {
			email: '',
			senha: ''
		}
	}

	// formatText = (text) => {
	// 	return text.replace(/[^+\d]/g, '');
	// };

	validateEmail = (text) => {
		
	};

	render() {
		return (
			<Container>
				<Div>
					<Tittle>Login</Tittle>
					<CuteLine>
						<IconPaw source={require('../../../assets/icon-pegada.png')}></IconPaw>
						<IconPaw source={require('../../../assets/icon-pegada.png')}></IconPaw>
						<IconPaw source={require('../../../assets/icon-pegada.png')}></IconPaw>
						<IconPaw source={require('../../../assets/icon-pegada.png')}></IconPaw>
					</CuteLine>
				</Div>
				<LoginForm>
					<TxtInputLogin
						placeholder="Digite seu e-mail"
						keyboardType='email-address'>
						{/* // formatText={this.validateEmail} */}
					</TxtInputLogin>

					<TxtInputLogin
						placeholder="Digite sua senha"
						keyboardType='email-address'>
					</TxtInputLogin>

					<LargeButton>
						<TxtButon>CONFIRMAR</TxtButon>
					</LargeButton>
					
				</LoginForm>
				<Div>
					<ContainerLine>
						<HorizontalLine />
						<SecondaryText>ou</SecondaryText>
						<HorizontalLine />
					</ContainerLine>
				
					<ContainerSingInOptions >
						<IconSingInOptions source={require('../../../assets/facebook.png')} ></IconSingInOptions>
						<IconSingInOptions source={require('../../../assets/google.png')} ></IconSingInOptions>
					</ContainerSingInOptions>
					
				</Div>
			</Container>
		)
	}

}

const styles = StyleSheet.create({
	// container: {
	// 	flex: 1,
	// 	backgroundColor: '#FFF',
	// 	justifyContent: "center",
	// 	borderWidth: 1,
	// 	borderColor:'#000'
		
	// },

	// tittleContainer: {
	// 	flex: 1,
	// 	justifyContent: "center",
	// 	borderWidth: 1,
	// 	borderColor:'#000',
	// 	alignItems: "center"
	// },


	// txtTittle: {
	// 	color:'#fc6b6e',
	// 	fontSize:30,
	// 	fontWeight: "bold"

	// },

	// lineTittle: {
	// 	height: 40,
	// 	width: '100%',
	// 	flexDirection: 'row',
	// 	justifyContent: 'center',
	// 	marginTop:20
	// },

	// iconPegada: {
	// 	height:20,
	// 	width:20,
	// 	marginLeft:10,
	// 	marginRight:10
	// },


	// form:{
	// 	height: '40%',
	// 	margin:10,
	// 	backgroundColor:'white',
	// 	padding:8,
	// 	borderRadius: 10,
	// 	alignItems: 'center',
	// 	backgroundColor:'#eaeaea',
	// 	paddingTop:15
	// },

	// txtInput: {
	// 	height: 50,
	// 	marginTop: 10,
	// 	padding: 8,
	// 	alignSelf: 'stretch',
	// 	backgroundColor: 'white',
	// 	fontSize: 16,
	// 	borderRadius: 10,
	// 	borderColor: '#a0a0a0',
	// 	borderWidth: 1,
	// 	marginBottom: 40,
			
	// },

	// confirmButton: {
	// 	alignItems: 'center',
	// 	height:50,
	// 	width:300,
	// 	borderColor:'#fc6b6e',
	// 	backgroundColor:'#fc6b6e',
	// 	borderWidth: 1.5,
	// 	padding: 14,
	// 	marginTop:35,
	// 	borderRadius:21,
	// 	alignSelf:"center"
	// },

	// txtConfirm: {
	// 	fontWeight: 'bold',
	// 	color: '#000',
	// },

	// buttonContainer:{
	// 	flex: 1,
	// 	justifyContent: "center",
	// 	borderWidth: 1,
	// 	borderColor:'#000',
	// 	padding: 10,
	// 	alignItems: 'center',
	// },

	// containerLine:{
	// 	// flex:0.5,		
	// 	width:'100%',
	// 	justifyContent: "center",
	// 	alignItems: 'center',
	// 	flexDirection:'row',
	// 	backgroundColor:'#fff',
	// },

	// singInOptions:{
	// 	flex:0.5,	
	// 	width:'100%',
	// 	justifyContent: "center",
	// 	alignItems: 'center',
	// 	flexDirection:'row',
	// 	padding:0
	// },

	// lineStyle: {
	// 	borderWidth: 0.5,
    //     borderColor:'#5A6978',
	// 	margin:10,
	// 	top:3,
	// 	width:100
	// },

	// txtSecondary: {
	// 	fontSize: 19,
	// 	color: '#5A6978',
	// 	letterSpacing: 0.15
	// },

	// icon: {
	// 	marginTop:0,
	// 	height: 70,
	// 	width: 70,
	// 	marginLeft:15,
	// 	marginRight:15
	// }


})