import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import Teste from './Teste'

import { 
	CuteLine, 
	IconPaw, 
	LargeButton,   
	SecondaryText,
	TittleBlack,
	SecundaryTittle,
	TextInputForm 
} from '../../../components/styles';


import {
	BlueContainer,
	MainContainer,
	HeaderDecoration,
	Header,
	Div,
	ActiveStepIconColor,
	DesabledStepIconColor,
	Form,
	DivForm,
	DivProgressBar,
	BtnText,
	HorizontalLine,
	ContainerLine,
	DivSignOpions,
	SignOptions,
	IconSignUpOptions,
	ButtonIcon,
	SubtittleContainer,
	DivInput,
	ContainerTxtInput,
	FormTextInput,
	FormLabel,
	ButtonSmallNext
} from './styles'

export default class FormBasicInfo extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			senha: ''
		}
	}

	validate = () => {
		const { email, senha } = this.state
		if (!email || !senha) {
			alert('Ops... Todos os campos são obrigatórios')
			return false
		}
		return true
	}

	nextPage = ( props ) => {
		if (!this.validate()) return
		console.log(this.state)

		this.props.navigation.navigate('FormPersonalData', {
			screen: 'FormBasicInfo',
			params: { email: this.state.email, senha: this.state.senha },
			});

		// this.props.navigation.navigate('FormPersonalData')
	}

	// teste = () => {
	// 	console.log('eu sou um TESTEEEEEE!!!!')

	// 	console.log(this.state)
	// }

	

	render() {
		// const { teste } = this.props;
		// console.log(teste)

		return (
			<BlueContainer>
				{/* <HeaderDecoration>
						<View style={styles.OvalShapeView, {borderBottomEndRadius:'100%'}}></View>
				</HeaderDecoration> */}
				<MainContainer>
					

					<Header>
						<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
						<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
					</Header>

					<DivProgressBar style={{justifyContent:'space-evenly'}}>
						<ActiveStepIconColor/>
						<DesabledStepIconColor/>
						<DesabledStepIconColor/>
						<DesabledStepIconColor/>
					
					</DivProgressBar>

					<SubtittleContainer>
						<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Informações Básicas:</SecundaryTittle>
					</SubtittleContainer>

					<DivForm>
						<Form>
							<DivInput> 
								<FormLabel>E-mail:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'email'} size={20} color={'#000'}/>
								<FormTextInput
									autoCorrect={false}
									onChangeText={txt => this.setState({ email: txt })}
									// placeholder="ex: email@gmail.com"
									// keyboardType={'email-address'}
									// textContentType={'emailAddress'}
									/>
								</ContainerTxtInput> 
							</DivInput>

							<DivInput> 
								<FormLabel>Senha:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
								<FormTextInput
									autoCorrect={false}
									placeholder=""
									onChangeText={txt => this.setState({ senha: txt })}
									/>
								</ContainerTxtInput> 
							</DivInput>

							<DivInput> 
								<FormLabel>Confirme sua Senha:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
								<FormTextInput
									autoCorrect={false}
									placeholder="ex: email@gmail.com"
									keyboardType={'email-address'}
									textContentType={'emailAddress'}
									/>
								</ContainerTxtInput> 
							</DivInput>
						</Form>
					</DivForm>

					<Div style={{flex:0.4}}>
						<ButtonSmallNext onPress={this.nextPage}>
							<BtnText>Próximo</BtnText>
						</ButtonSmallNext>
					</Div>

					<DivSignOpions>
						<ContainerLine>
							<HorizontalLine/>
								<Text>ou inscreva-se com</Text>
							<HorizontalLine/>
						</ContainerLine> 

						<SignOptions>
							<ButtonIcon>
								<IconSignUpOptions source={require('../../../assets/facebook.png')} ></IconSignUpOptions>
							</ButtonIcon>

							<ButtonIcon>
								<IconSignUpOptions source={require('../../../assets/google.png')} ></IconSignUpOptions>
							</ButtonIcon>
						</SignOptions>
					</DivSignOpions>
				

				</MainContainer>
			</BlueContainer>
		);
	}
}

// const styles = StyleSheet.create({  
// 	OvalShapeView: {    
// 	width: '55%',
// 	height: 45,
// 	borderBottomEndRadius:100,
// 	borderBottomStartRadius:100,
// 	backgroundColor: "#42a9aa",
// 	transform: [
// 	{scaleX: 2}
// 	]
	 
//   },
 
//  });