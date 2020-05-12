import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, AsyncStorage } from 'react-native';

export default class Cadastro extends Component {

	constructor() {
		super()
		this.state = {
			cpf: '',
			senha: ''
		}
	}


	cadastrar = async e => {
		if (!this.validar()) return

		const { email, senha } = this.state

		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				senha: senha,
				nome: 'Joanna teste',
				sexo: 'F',
				cpf: '123456789',
				data_nascimento: '1999-04-20',
				cpf: '45123658792',
				celular: '11999999999',
				cep: '06693600',
				cidade: 'São Paulo',
				bairro: 'Jardim Patriarca',
				logradouro: 'Rua João Gomes de Carvalho',
				"numero": 222,
				"complemento": "Casa 02",
				uf: 'SP',
				url_foto: 'https://localhost.com/image.jpg',
				permissions: 'USER'
			})
		}
		

		try {
			let retorno =  await fetch('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/registrar',params)
			console.log(JSON.stringify(retorno))

			console.log(retorno)

			// ok: status code =  200 - 299
			if(!retorno.ok)
				return Alert.alert('Erro ao cadastrar')

				// .json() captura e tranforma o corpo em json

				const usuario = await retorno.json()
				console.log(usuario)

			Alert.alert('Cadastrado com Sucesso')

			// ASYNCSTORAGE - armazenador
			AsyncStorage.setItem( 'token', usuario.token )

			this.props.navigation.navigate('Home', {nome: usuario.usuario.nome})

		} catch (e) {
			console.log(e)
		}
		
	}

	validar = () => {
		const { email, senha } = this.state
		if (!email || !senha) {
			alert('Ops...', 'Todos os campos são obrigatórios')
			return false
		}
		return true
	}


	render() {
		return (
			<View style={styles.container} >
				<View style={styles.form}>
					<Text style={styles.titulo}>Faça seu cadastro</Text>
					<TextInput style={styles.input} placeholder="Seu e-mail" onChangeText={texto => this.setState({ email: texto })} />
					<TextInput style={styles.input} placeholder="Sua senha" onChangeText={texto => this.setState({ senha: texto })} ></TextInput>

					{/* <TouchableOpacity style={styles.button} onPress = {this.entrar}>
						<Text style={styles.textButton}>Entrar</Text>
					</TouchableOpacity> */}

					<TouchableOpacity style={styles.buttonDarkBlue} onPress={this.cadastrar} >
						<Text style={styles.textButtonBlack}>Salvar</Text>
					</TouchableOpacity>

				</View>
			</View>
		)
	}


}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#01579b',
		justifyContent: "center",
	},

	form: {
		margin: 16,
		backgroundColor: 'white',
		padding: 16,
		borderRadius: 10,
		alignItems: 'center'
	},

	titulo: {
		marginBottom: 20,
		fontSize: 30,
		color: '#01579b',
		fontWeight: 'bold',
		textAlign: "center",
		borderBottomColor: '#2196f3',
		borderBottomWidth: 1,
		width: 200,
		paddingBottom: 12

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

	button: {
		alignItems: 'center',
		alignSelf: 'stretch',
		height: 42,
		marginTop: 16,
		borderRadius: 8,
		borderColor: '#253F5B',
		backgroundColor: '#253F5B',
		borderWidth: 2,
		padding: 8

	},

	buttonDarkBlue: {
		backgroundColor: '#b0bec5',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: 42,
		marginTop: 16,
		borderRadius: 8,
		borderColor: '#b0bec5',
		borderWidth: 2,
		padding: 8
	},

	textButtonBlack: {
		color: 'black',
		fontSize: 15,
		fontWeight: "bold"
	},

	textButton: {
		color: 'white',
		fontSize: 15,

	}

})