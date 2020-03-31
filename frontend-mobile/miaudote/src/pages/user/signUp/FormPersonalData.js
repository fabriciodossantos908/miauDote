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
	ButtonSmall,
	BtnText
} from './first-style'

export default class FormPersonalData extends Component {

	render() {
		return (
			<Container style={{padding:6}}>
				<Header>
					<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
					<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
				</Header>

				<DivProgressBar>
					<ProgressBar>
						<Text>PregressBar</Text>
					</ProgressBar>
				</DivProgressBar>

				<DivForm>
					<Form>
						<Text>Formulário</Text>
					</Form>
				</DivForm>

				<Div>
					<ButtonSmall>
						<BtnText>Próximo</BtnText>
					</ButtonSmall>
				</Div>

				<Div>
					<Text>Opcçoes de cadastro</Text>
				</Div>

				
			</Container>
		);
	}
}