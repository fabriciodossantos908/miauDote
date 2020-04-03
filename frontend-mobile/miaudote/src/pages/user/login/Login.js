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

