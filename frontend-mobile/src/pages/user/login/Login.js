import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, StatusBar, ActivityIndicator, AsyncStorage } from 'react-native';

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
	IconSingInOptions,
	LoginImage
} from './styles'
import { Alert } from 'react-native';

export default class Login extends Component {

	constructor() {
		super()
		this.state = {
			email: '',
			senha: '',
			usuario: {},
			token: '',
			loading: false
		}
	}


	signIn = () => {

		const data = this.state;

		fetch('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/autenticar', {
			method: 'POST',
			body: JSON.stringify(data),
		}).then(res => {
			res.json().then(data => ({ status: res.status, body: data }))
				.then( obj => {
					if (obj.body.aviso) {
						Alert.alert('Confirmação de email necessária', 'Enviamos uma mensagem ao seu email. Por favor, confirme-a para prosseguirmos.')
						return;
					} else if (obj.body.erro) {
						Alert.alert(
							'Falha na autenticação',
							'Usuário e/ou senha inválidos!'
						)
					} else {
						this.setState({usuario: obj.body.usuario, token: obj.body.token})
						Alert.alert(
							'Login realizado com sucesso!',
							'Suas informações são válidas, clique em OK para prosseguir.'
							[
							{ text: 'OK', onPress: this.saveUser(obj.body) }
							])
					}
				});
		}).catch(error => {
			console.log(error);
		})
	}

	saveUser = async (user) => {
		// console.log(user);
		try {
			console.log(this.state.usuario.numero);
			await AsyncStorage.setItem('@USER_NAME', this.state.usuario.nome );
			await AsyncStorage.setItem('@USER_TOKEN', this.state.token);
			await AsyncStorage.setItem('@USER_LOCALIZATION', `${this.state.usuario.cidade}, ${this.state.usuario.uf}`);
			await AsyncStorage.setItem('@USER_NUMBER', toString(this.state.usuario.numero));
			await AsyncStorage.setItem('@USER_EMAIL', this.state.usuario.email);
			await AsyncStorage.setItem('@USER_CELLPHONE', this.state.usuario.celular);
			await AsyncStorage.setItem('@USER_PHOTO', this.state.usuario.url_foto);
		} catch (error) {
			console.log(error);
		}

		this.perfilPage();
	}

	perfilPage = (e) => {
		this.props.navigation.navigate('Home');
	}

	validateEmail = (text) => {

	};

	render() {
		return (
			<>
				<StatusBar backgroundColor='#fc6b6e' />
				<Container>
					<Div>
						<Image source={require('../../../assets/login2.png')}></Image>
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
							keyboardType='email-address'
							value={this.state.email}
							onChangeText={txt => { this.setState({ email: txt }) }}
						>
						</TxtInputLogin>

						<TxtInputLogin
							placeholder="Digite sua senha"
							keyboardType='default'
							secureTextEntry={true}
							value={this.state.senha}
							onChangeText={txt => { this.setState({ senha: txt }) }}
						>
						</TxtInputLogin>

						<LargeButton
							onPress={this.signIn}>
							<TxtButon>CONFIRMAR</TxtButon>
						</LargeButton>

					</LoginForm>
					{/* <Div>
					<ContainerLine>
						<HorizontalLine />
						<SecondaryText>ou</SecondaryText>
						<HorizontalLine />
					</ContainerLine>

					<ContainerSingInOptions >
						<IconSingInOptions source={require('../../../assets/facebook.png')} ></IconSingInOptions>
						<IconSingInOptions source={require('../../../assets/google.png')} ></IconSingInOptions>
					</ContainerSingInOptions>

				</Div> */}
				</Container>
			</>
		)
	}

}

