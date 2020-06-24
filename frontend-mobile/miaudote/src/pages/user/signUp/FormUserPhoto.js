import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button, Alert, AsyncStorage } from 'react-native';


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
	Head
} from './styles'

export default class FormUserPhoto extends Component {

	constructor(props){
		super(props)
		// const { params } = this.props.route.params
		const { data } = this.props.route.params.params
		this.state = {
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
				url_foto: null,
				permissions: 'USER',
				email_confirmado: false

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

		this.props.route.params

		console.log(this.state)
		
		return (
			<Container style={{ backgroundColor:'#fff', padding:6, justifyContent: "center",alignItems: "center", flex:1}}>
				<Header>
					<Head style={{}}>
						<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
						<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
					</Head>

					<DivProgressBar style={{justifyContent:'space-evenly'}}>
						<DesabledStepIconColor/>
						<DesabledStepIconColor/>
						<DesabledStepIconColor/>
						<ActiveStepIconColor/>
					</DivProgressBar>

				</Header>

				<View style={styles.main}>
					<Image
						source={require('../../../assets/google.png')}
						style={styles.avatar}
					/>
					{/* onPress={imagePickerCall} */}
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Escolher imagem</Text>
					</TouchableOpacity>
					{/* onPress={uploadImage} */}
					<TouchableOpacity style={styles.button} onPress={this.cadastrar}>
						<Text style={styles.buttonText}>Enviar imagem</Text>
					</TouchableOpacity>

				</View>				
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center"
	},
	button: {
		width: 190,
		height: 50,
		borderRadius: 3,
		backgroundColor: "#369696",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20
	},
	buttonText: {
		color: "#fff"
	},
	avatar: {
		backgroundColor: "#cccccc",
		width: 130,
		height: 130,
		borderRadius: 70,
		bottom:50
	},

	input: {
		marginTop: 8,
		padding: 8,
		alignSelf: 'stretch',
		backgroundColor: 'white',
		fontSize: 16,
		borderRadius: 8,
		borderColor: '#b0bec5',
		borderWidth: 1,
	},
})