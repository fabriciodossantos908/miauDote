import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button, Alert, AsyncStorage, Dimensions } from 'react-native';


import { 
	Container,
	CuteLine, 
	IconPaw, 
	LargeButton,   
	SecondaryText,
	TittleBlack,
	SecundaryTittle,
	TextInputForm 
} from '../../../components/styles';


import {
	Header,
	Div,
	ProgressBar,
	Form,
	DivForm,
	DivProgressBar,
	ButtonSmallNext,
	BtnText,
	ActiveStepIconColor,
	DesabledStepIconColor,
	Head,
	Title
} from './styles'
import { bold } from 'colorette';

export default class FormUserPhoto extends Component {

	constructor(props){
		
		super(props)
		// const { params } = this.props.route.params

		const { data } = this.props.route.params.params
		this.state = {
			// name: 'joanna regina'
			email: data.email,
			password : data.password,
			name: data.name,
			birthDate : data.birthDate,
			gender: data.gender,
			cpf: data.cpf,
			ddd: data.ddd,
			phone: data.phone,
			cep: data.cep,
			city: data.city,
			address: data.address,
			number: data.number,
			complement: data.complement,
			neighborhood: data.neighborhood,
			state: data.state,
			url: null,

		}
	}
	// nextPage = ( e ) => {
	// 	this.props.navigation.navigate('Teste')
	// }

	skipToHome = ( e ) => {
		const data = this.state
	
				this.props.navigation.navigate('Home', {
					screen: 'FormUserPhoto',
					params: { data }
				}); 	
	}

	cadastrar = async e => {

		const { email, password, name, birthDate, gender, cpf, phone, cep, city, address, number, complement, neighborhood, state } = this.state
		
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: name,
				email: email,
				senha: password,
				data_nascimento: birthDate,
				sexo: gender,
				cpf: cpf,
				celular: phone,
				cep: cep,
				cidade: city,
				bairro: neighborhood,
				logradouro: address,
				numero: number,
				complemento: complement,
				uf: state,
				permissions: 'USER',

			})
		
		}


		try {
			let response =  await fetch('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/registrar',params)
			console.log(JSON.stringify(response))

			console.log(response)

			// ok: status code =  200 - 299
			if(!response.ok){
				return alert("Erro ao cadastrar")
				// return console.log(response.data)

				// .json() captura e tranforma o corpo em json

				const user = await response.json()
				console.log(user)
			 } else {
				alert('Cadastrado com Sucesso')

				// AsyncStorage.setItem( 'token', user.token )

				const data = this.state
	
				this.props.navigation.navigate('Home', {
					screen: 'FormUserPhoto',
					params: { data }
				}); 
			}
			
			

		} catch (e) {
			console.log(e)
		}
		
	}

	previousPage = ( e ) => {
		this.props.navigation.navigate('FormUserAddress')
	}

	render() {

		console.log(this.state)
		
		return (
			<Container style={{ padding:15, justifyContent: "center",alignItems: "center"}}>
				<Header style={{ justifyContent:"flex-start", width:"100%"}}>
					{/* <Title style={{textAlign:"center", flexDirection:"column"}}>Ola, {this.state.name.split(" ")[0]}!</Title> */}
					<Title style={{fontWeight:"600"}}>Foto de perfil</Title>
					<View style={styles.line}></View>
				</Header>

				<View style={{ width:'100%', justifyContent:"flex-start"}}> 
					<Text style={{textAlign:"left", width:'80%', fontSize:15, lineHeight: 23,}}>
						Olá {this.state.name.split(" ")[0]}, seu cadastro já foi concluído! 
						Agora precisamos que envie uma foto para seu perfil no app.
					</Text>
				</View>

				<View style={styles.main}>
					<Image
						// source={require('../../../assets/user-icon.png')}
						style={styles.avatar}
					/>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Escolher imagem</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonFinalize}>
						<Text style={styles.buttonTextFinalize}>Enviar imagem</Text>
					</TouchableOpacity>

					
				</View>	
				<TouchableOpacity style={styles.skipButton} onPress = {this.skipToHome}>
						<Text style = {styles.txtSkip}>
							Agora não
						</Text>
					</TouchableOpacity>			
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		width: 240,
		height: 45,
		borderRadius: 3,
		backgroundColor: '#fff',
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		borderWidth: 1,
		borderColor:'#fc6b6e'
	},
	buttonFinalize: {
		width: 240,
		height: 45,
		borderRadius: 3,
		backgroundColor: "#1bc7cb",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		borderWidth: 1,
		borderColor:'#1bc7cb',
	},
	buttonText: {
		color: "#fc6b6e",
		fontSize:15,
		fontWeight:"500"
	},
	buttonTextFinalize: {
		color: "#ffffff",
		fontSize:15,
		fontWeight:"500"
	},
	avatar: {
		backgroundColor: "#f4f2f2",
		width: 220,
		height: 220,
		borderRadius: 150,
		bottom:50,
		top:20,
		marginBottom:30
	},

	txtSkip: {
		color: '#afafaf',
		fontSize: 20,
		bottom:5,
	},

	skipButton: {
		height:40,
		width:100,
		alignSelf:"flex-end",
		justifyContent:"center",
		alignItems:"center",
		marginTop:20
	},
	line: {
		borderBottomColor:'#1bc7cb',
		borderBottomWidth:1,
		width:'80%'
	}
})