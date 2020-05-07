import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';


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
} from './styles'

export default class FormUserPhoto extends Component {

	constructor(props){
		super(props)
		const { params } = this.props.route.params
		this.state = {
			email: params.email,
			password : params.password,
			name: params.name,
			birthDate : params.birthDate,
			gender: params.gender,
			cpf: params.cpf,
			ddd: params.ddd,
			phone: params.phone,
			cep: params.cep,
			city: params.city,
			address: params.address,
			number: params.number,
			complement: params.complement,
			neighborhood: params.neighborhood,
			state: params.state,
			url: ''
		}
	}

	// nextPage = ( e ) => {
	// 	this.props.navigation.navigate('Teste')
	// }

	cadastrar = async e => {

		const { email, password, name, birthDate, gender, cpf, ddd, phone, cep, city, address, number, complement, neighborhood, state } = this.state
		
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: name,
				email: email,
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
				url_foto: 'https://localhost.com/image.jpg',
				permissions: 'USER'

			})
		}
		

		try {
			let response =  await fetch('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/registrar',params)
			console.log(JSON.stringify(response))

			console.log(response)

			// ok: status code =  200 - 299
			if(!response.ok)
				return Alert.alert('Erro ao cadastrar')

				// .json() captura e tranforma o corpo em json

				const user = await response.json()
				console.log(user)

			Alert.alert('Cadastrado com Sucesso')

			// ASYNCSTORAGE - armazenador
			AsyncStorage.setItem( 'token', user.token )

			this.props.navigation.navigate('Teste')

		} catch (e) {
			console.log(e)
		}
		
	}

	previousPage = ( e ) => {
		this.props.navigation.navigate('FormUserAddress')
	}

	render() {

		this.props.route.params
		
		return (
			<Container style={{padding:6}}>
				<Header>
					<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
					<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
				</Header>

				<DivProgressBar style={{justifyContent:'space-evenly'}}>
					<DesabledStepIconColor/>
					<DesabledStepIconColor/>
					<DesabledStepIconColor/>
					<ActiveStepIconColor/>
				</DivProgressBar>

				<DivForm>
					<Form>
						<Text>Formulário</Text>
					</Form>
				</DivForm>

				<Div>
					<ButtonSmallNext onPress={this.cadastrar}>
						<BtnText>Confirmar</BtnText>
					</ButtonSmallNext>
				</Div>

				<Div>
					<Text>Opções de cadastro</Text>
				</Div>

				
			</Container>
		);
	}
}