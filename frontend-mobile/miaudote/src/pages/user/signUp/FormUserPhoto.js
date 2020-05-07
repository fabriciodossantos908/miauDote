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

	nextPage = ( e ) => {
		this.props.navigation.navigate('Teste')
	}

	previousPage = ( e ) => {
		this.props.navigation.navigate('FormUserAddress')
	}

	render() {
		return (
			<Container style={{padding:6}}>
				<Header>
					<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
					<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
				</Header>

				<DivProgressBar style={{justifyContent:'space-evenly'}}>
					<DesabledStepIconColor/>
					<DesabledStepIconColor/>
					<ActiveStepIconColor/>
					<DesabledStepIconColor/>
				</DivProgressBar>

				<DivForm>
					<Form>
						<Text>Formulário</Text>
					</Form>
				</DivForm>

				<Div>
					<ButtonSmallNext onPress={this.nextPage}>
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