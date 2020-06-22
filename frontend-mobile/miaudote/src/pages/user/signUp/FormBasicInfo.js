import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import Teste from './Teste'

// import { keyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
	CuteLine, 
	IconPaw,
	LargeButton,   
	SecondaryText,
	TittleBlack,
	SecundaryTittle,
	TextInputForm ,
	Container
} from '../../../components/styles';


import {
	BlueContainer,
	MainContainer,
	HeaderDecoration,
	Header,
	Head,
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
	ButtonSmallNext,
	Body,
	Footer
} from './styles'

import { HelperText, TextInput } from 'react-native-paper';

import { TextInputMask } from 'react-native-masked-text'


export default class FormBasicInfo extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			confirmPassword: ''
			
		}
	}

	validate = () => {
		const { email, password } = this.state
		if (!email || !password) {
			alert('Ops... Todos os campos são obrigatórios')
			return false
		}
		return true
	}

	validatePassword = () => {
		const { password, confirmPassword } = this.state
		if( password != confirmPassword ) {
			alert('As senhas não condizem')
			return false
		}
		return true
	}


	// ***** Teste *****
	// _params = ( props ) => {

    //     // A variavel recebe os valosres do estado
    //     const  _string  = this.state

    //     // alert(_string)
    //     console.log(_string)

    //     // this.props.navigation.navigate('HomeTeste', {
	// 	// 	screen: 'Teste',
	// 	// 	params: { _string }, //passando os valores do state para a próxima pagina
    //     //     }); 
           
        
    // }

	// nextPage = ( props ) => {
	// 	if (!this.validate()) return
	// 	// else if (validar email)
	// 	else if (!this.validatePassword()) return

	// 	console.log(this.state)

	// 	const { email, password } = this.state

	// 	this.props.navigation.navigate('FormPersonalData', {
	// 		screen: 'FormBasicInfo',
	// 		params: { email: email, password: password },
	// 		}); 

	// }

	nextPage = ( props ) => {
		if (!this.validate()) return
		// else if (validar email)
		else if (!this.validatePassword()) return

		const data = this.state

		console.log(data)
 
		this.props.navigation.navigate('FormPersonalData', {
			screen: 'FormBasicInfo',
			params: { data }, 
		    }); 	

	}



	render() {

		return (
			// <KeyboardAvoidingView
			// 	behavior={Platform.OS == "ios" ? "padding" : "height"}
			// 	style={styles.container}
			// >
			//  behavior={Platform.OS == "ios" ? "padding" : "height}"
			<KeyboardAvoidingView style={{flex:1}}>
			
			{/* <Container style={{backgroundColor:'#ccc7', padding:5}}> */}
			
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<MainContainer>
				{/* <ScrollView style={{flex:1}}> */}
					<Header>
						<Head style={{}}>
							<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
							<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
						</Head>

						<DivProgressBar style={{justifyContent:'space-evenly'}}>
							<ActiveStepIconColor/>
							<DesabledStepIconColor/>
							<DesabledStepIconColor/>
							<DesabledStepIconColor/>
						</DivProgressBar>

					</Header>

					<Body style={{top:0}}>
						<SubtittleContainer style={{height: 30}}>
							<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Informações Básicas:</SecundaryTittle>
						</SubtittleContainer>


						<DivForm style={{}}>

							<TextInput
								style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', top:20}}
								label='Email'
								keyboardType='email-address'
								mode={'outlined'}
								value={this.state.email || ''}
								onChangeText={txt => this.setState({email: txt})}
								theme={{
									// roundness: 50,
									colors: {
									primary:'#1bc7cb',
									underlineColor:'transparent',
									}
							}}/>


							<TextInput
								// maxLength={3}
								style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', top:40}}
								label='Senha' 
								returnKeyType='go'
								mode={'outlined'}
								secureTextEntry={true}
								value={this.state.password || ''}
								onChangeText={txt => this.setState({ password: txt })}
								theme={{
									// roundness: 50,
									colors: {
									primary:'#1bc7cb',
									underlineColor:'transparent',
									}
							}}/>

							<TextInput
								// maxLength={3}
								style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', top:50}}
								label='Confirme sua senha' 
								returnKeyType='go'
								mode={'outlined'}
								secureTextEntry={true}
								value={this.state.confirmPassword || ''}
								onChangeText={txt => this.setState({ confirmPassword: txt })}
								theme={{
									// roundness: 50,
									colors: {
									primary:'#1bc7cb',
									underlineColor:'transparent',
									}
							}}/>

						</DivForm>
					</Body>

					<Footer>
						<Div>
							<ButtonSmallNext onPress={this.nextPage}>
								<BtnText>Próximo</BtnText>
							</ButtonSmallNext>
						</Div>

						{/* <DivSignOpions>
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
						</DivSignOpions> */}
					</Footer>
					

					


					{/*<DivSignOpions>
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
					</DivSignOpions> */}
				
				{/* </ScrollView> */}
				</MainContainer>
				</TouchableWithoutFeedback>
				
			{/* </Container> */}
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({  
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

container: {
	flex:1
}
 
 });