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
	IconSingInOptions
} from './styles'



export default class Login extends Component {

	constructor() {
		super()
		this.state = {
			email: '',
			senha: ''
		}
	}

	signIn = () => {

		const data = this.state;

		fetch('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/autenticar', {
			method: 'POST',
			body: JSON.stringify(data),
		}).then(res => {
			if(!res.ok){
				alert('My message');
			}
		}).catch(error => {
			console.log(error);
		})
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
						keyboardType='email-address'
						value={this.state.email}
						onChangeText={txt => { this.setState({ email: txt }) }}
					>
					</TxtInputLogin>

					<TxtInputLogin
						placeholder="Digite sua senha"
						keyboardType='email-address'
						value={this.state.senha}
						onChangeText={txt => { this.setState({ senha: txt }) }}
					>
					</TxtInputLogin>

					<LargeButton
						onPress={this.signIn}>
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

