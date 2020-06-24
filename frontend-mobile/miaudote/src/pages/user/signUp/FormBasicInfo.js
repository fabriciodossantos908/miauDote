import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
	SecundaryTittle,
} from '../../../components/styles';


import {
	BtnText,
	Inner,
	Title,
	ImageIcon,
	ProgressBar,
	ActiveIcon,
	DisableIcon,
	SubtittleContainer,
	Header,
	ButtonNext,
	ContainerButton
} from './styles';

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

	signUpPage = () => {
		this.props.navigation.navigate('FormPersonalData')
		// Alert.alert('aaaaaa')
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
		if (password != confirmPassword) {
			alert('As senhas não condizem')
			return false
		}
		return true
	}


	nextPage = (props) => {
		if (!this.validate()) return
		// else if (validar email)
		if (!this.validatePassword()) return

		const data = this.state

		console.log(data)

		this.props.navigation.navigate('FormPersonalData', {
			screen: 'FormBasicInfo',
			params: { data },
		});

	}

	render() {

		return (
			<KeyboardAvoidingView
				// behavior={Platform.OS == "ios" ? "padding" : "height"}
				behavior={"height"}
				style={{flex: 1}}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						<Inner>
							<Header>
								<Title>Crie sua conta</Title>
								<ImageIcon source={require('../../../assets/user-account.png')}></ImageIcon>
							</Header>
							<ProgressBar>
								<ActiveIcon></ActiveIcon>
								<DisableIcon></DisableIcon>
								<DisableIcon></DisableIcon>
							</ProgressBar>

							<View>
								<SubtittleContainer style={{ marginBottom: 30 }}>
									<SecundaryTittle style={{ color: '#5A6978' }}>Informações Básicas:</SecundaryTittle>
								</SubtittleContainer>

								<TextInput
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', marginBottom:20}}
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
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', marginBottom:20}}
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
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', marginBottom:20}}
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
								

							</View>

							{/* <View style={styles.btnContainer}> */}
								<ContainerButton>
									<TouchableOpacity style={styles.btn} onPress={this.nextPage}>
										<BtnText>Próximo</BtnText>
									</TouchableOpacity>
								</ContainerButton>
							{/* </View> */}
						</Inner>
					</ScrollView>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	btn: { 
	  	height: 45,
		width: 130,
	  	justifyContent:"center",
	  	alignItems:"center",
	  	backgroundColor:'#1bc7cb',
	},
	btnContainer: {
		// backgroundColor: "white",
		marginTop: 60,
		backgroundColor:'#c78',
		marginLeft:"auto",
		marginRight:0,
		// flex:1
	  },
});