import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Picker, ScrollView, Text, ImageBackground } from 'react-native';

import { TextInput } from 'react-native-paper';

import { TextInputMask } from 'react-native-masked-text'

import {
	ButtonSmallNext,
	BtnText,
	Inner,
	Headeer,
	Title,
	ImageIcon,
	ProgressBar,
	ActiveIcon,
	DisableIcon,
	SubTitle,
	SubtittleContainer,
	Header,
	ContainerButton,
	ButtonContainer,
	ButtonNext,
	ButtonPrevious
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SecundaryTittle } from '../../../components/styles';


export default class FormPersonalData extends Component {

	constructor(props) {
		super(props)
		// const { params } = this.props.route.params
		const { data } = this.props.route.params.params
		this.state = {
			email: data.email,
			password: data.password,
			name: '',
			birthDate: '',
			gender: '',
			cpf: '',
			phone: '',
			
		}
	}

	validate = () => {
		const { name, birthDate, gender, cpf, phone } = this.state
		if (!name || !birthDate || !gender || !cpf || !phone) {
			alert('Ops... Todos os campos são obrigatórios')
			return false
		}
		return true
	}

	// nextPage = ( props ) => {
	// 	if (!this.validate()) return

	// 	const { email, password, name, birthDate, gender, cpf, phone } = this.state

	// 	console.log(this.state)

	// 	this.props.navigation.navigate('FormUserAddress', {
	// 		screen: 'FormPersonalData',
	// 		params: { 
	// 			email: email,
	// 			password: password,
	// 			name: name,
	// 			birthDate: birthDate,
	// 			gender: gender,
	// 			cpf: cpf,
	// 			phone: phone

	// 		},
	// 	}); 

	// }

	dateConvert = () => {

		const { birthDate } = this.state

		let date = birthDate.split('/').reverse().join('-');

		this.setState({ birthDate: date })

		// console.log(this.state)

	}

	test = () => {
		const { cpf } = this.state
		this.unmask(cpf)
	}


	previousPage = (e) => {
		this.props.navigation.navigate('FormBasicInfo')
	}

	// unmask = () => {



	// 	// const unmaskedCpf = cpf.getRawValue()
	// 	// // const unmaskedPhone = this.phoneField.getRawValue()
	// 	// console.log(unmaskedCpf)
	// 	// alert(unmaskedCpf)
	// 	// // console.log(unmaskedPhone)


	// 	// this.setState({cpf: unmaskedCpf})
	// 	// // this.setState({phone: unmaskedPhone})
	// 	// console.log(this.state)
	// }

	unmask = () => {

		const { cpf } = this.state

		let result = cpf.replace(/[^A-Z0-9]+/ig, "");
		console.log(result)

		return this.setState({cpf: result})
		// console.log(this.state)
	}

	nextPage = (props) => {
		if (!this.validate()) return
		
		const data = this.state

		this.props.navigation.navigate('FormUserAddress', {
			screen: 'FormPersonalData',
			params: { data },
		});
		

	}


	render() {
		// console.log(this.state)

		return (
			<KeyboardAvoidingView
				// behavior={Platform.OS == "ios" ? "padding" : "height"}
				behavior={"height"}
				style={styles.container}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						{/* <ImageBackground  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} source={require('../../../assets/thumb.png')}> */}
						
						<Inner>

							<Header>
								<Title style={{fontSize:32}}>Informações pessoais</Title>
								{/* <ImageIcon source={require('../../../assets/user-account.png')}></ImageIcon> */}
							</Header>

							<ProgressBar>
								<DisableIcon></DisableIcon>
								<ActiveIcon></ActiveIcon>
								<DisableIcon></DisableIcon>
							</ProgressBar>


							<View style={{top:50}}>

								{/* <SubtittleContainer style={{ marginBottom: 30 }}>
									<SecundaryTittle style={{ color: '#5A6978' }}>Informações pessoais:</SecundaryTittle> */}
								{/* </SubtittleContainer> */}

								<TextInput
									// maxLength={3}
									// maxLength={8}
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch',  marginBottom:20}}
									label='Nome completo' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.name || ''}
									maxLength={130}
									onChangeText={txt => this.setState({ name: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>



								 <TextInput
									style={{ backgroundColor: '#ffff',  height: 40, alignSelf: 'stretch',marginBottom:20}}
									label="Data de Nascimento"
									// maxLength={1}
									mode={'outlined'}
									keyboardType={"numeric"}
									returnKeyType='go'
									value={this.state.birthDate || ''}
									ref={(ref) => this.birthDateField = ref}
									onChangeText={text => {
												this.setState({
												birthDate: text
												})}}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
									}}}
									render={props =>
										<TextInputMask
										{...props}
										type={'datetime'}
										// value={this.state.birthDate}
										onChangeText={text => {
											this.setState({
											birthDate: text
											})
										}}
										options={{
											format: 'DD/MM/YYYY'
										}}
									/>
								}
							/>

								<TextInput
									maxLength={14}
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch',  marginBottom:20}}
									label='CPF' 
									returnKeyType='go'
									keyboardType="numeric"
									ref={(ref) => this.cpfField = ref}
									mode={'outlined'}
									value={this.state.cpf || ''}
									onChangeText={text => {
										this.setState({
										cpf: text
										})
									}}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
									}
									}}
									render={props =>
										<TextInputMask
											{...props}
											type={'cpf'}
											value={this.state.cpf}
											onChangeText={text => {
												this.setState({
												cpf: text
												})
											}}
											options={{
												format: '999.999.999-99'
											}}
											
								 		/>
									}

								/> 

								<TextInput
										// maxLength={3}
										// ,width:'70%'
									// maxLength={12}
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch',  marginBottom:20}}
									label='Celular' 
									returnKeyType='go'
									keyboardType="numeric"
									value={this.state.phone || ''}
									mode={'outlined'}
									
									onChangeText={txt => this.setState({ phone: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
									}}
									render={props =>
										<TextInputMask
										{...props}
										type={'cel-phone'}
										value={this.state.phone}
										onChangeText={text => {
											this.setState({
											phone: text
											})
										}}
										options={{
											maskType: 'BRL',
											withDDD: true,
										}}
										ref={(ref) => this.phoneField = ref}
									 />
									}
			 					/>

								 <Picker 
									style={{height:50}}  
									selectedValue={this.state.gender}  
									onValueChange={(itemValue, itemPosition) =>  
									this.setState({gender: itemValue, choosenIndex: itemPosition})}
								>  
									<Picker.Item label="Selecione o sexo" value="NAN" />  
									<Picker.Item label="Feminino" value="F" />  
									<Picker.Item label="Masculino" value="M" />  
									<Picker.Item label="Prefiro não informar" value="O" />  
								</Picker>
							

                
							</View>

							<Text style={{color:'#2966b5', textAlign:"center", top:50}}>
								Por que precisamos das suas informações pessoais?
							</Text>

							<ButtonContainer>
								
								<ButtonPrevious onPress={this.previousPage}>
									<BtnText>Voltar</BtnText>
								</ButtonPrevious>

								<ButtonNext onPress={this.nextPage}>
									<BtnText>Próximo</BtnText>
								</ButtonNext>

							</ButtonContainer>
							{/* </View> */}


						</Inner>
						{/* </ImageBackground> */}
					</ScrollView>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	inner: {
		padding: 24,
		flex: 1,
		justifyContent: "space-around"
	},
	header: {
		fontSize: 36,
		marginBottom: 15
	},
	sub: {
		fontSize: 17,
		top: 30
	},
	textInput: {
		height: 40,
		borderColor: "#000000",
		borderBottomWidth: 1,
		marginBottom: 36,
		top: 10
	},
	btnContainer: {
		// backgroundColor: "white",
		marginTop: 60,
		backgroundColor: '#c78',
		marginLeft: "auto",
		marginRight: 0,
		// flex:1
	},

	DivProgressBar: {
		justifyContent: 'space-evenly',
		flexDirection: "row",
	},
	ActiveStepIconColor: {
		height: 15,
		width: 15,
		backgroundColor: '#c78',
		borderRadius: 100
	},

	DesabledStepIconColor: {
		height: 15,
		width: 15,
		backgroundColor: '#ccc',
		borderRadius: 100,
		// alignItems:"flex-end"
	},
	btn: {
		height: 45,
		width: 130,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#1bc7cb',
	}
});
