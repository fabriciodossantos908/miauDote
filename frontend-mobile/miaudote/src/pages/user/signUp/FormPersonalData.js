import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';


import { HelperText, TextInput } from 'react-native-paper';

import { TextInputMask } from 'react-native-masked-text'

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
	ButtonSmallNext,
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
	DivInputRow,
	DivInputMedium,
	FormTextInputMedium,
	DivInputSmall,
	FormTextInputSmall,
	DivButtons,
	ButtonSmallPrevious,
	Head
} from './styles'
import { blue } from 'colorette';



export default class FormPersonalData extends Component {

	constructor(props){
		super(props)
		// const { params } = this.props.route.params
		const { data } = this.props.route.params.params
		this.state = {
			email: data.email,
			password : data.password,
			name: '',
			birthDate : '',
			gender: '',
			cpf: '',
			phone: '' 
		}
	}

	validate = () => {
		const { name, birthDate, gender, cpf, phone } = this.state
		if (!name || !birthDate || !gender || !cpf || !phone ) {
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

        this.setState({birthDate: date})

        console.log(this.state)

	}

	nextPage = ( props ) => {
		this.dateConvert()
		if (!this.validate()) return

		const data = this.state

		this.props.navigation.navigate('FormUserAddress', {
			screen: 'FormPersonalData',
			params: { data },
		}); 

	}

	previousPage = ( e ) => {
		this.props.navigation.navigate('FormBasicInfo')
	}

	unmask = () => {
		const unmasked = this.cpfField.getRawValue()
		console.log(unmasked)
	}

	render() {
		console.log(this.state)
		// console.log(this.props.route.params.params.email)
		// console.log(this.state)
		//   behavior={Platform.OS == "ios" ? "padding" : "height"}
		return (
			<BlueContainer>
				<KeyboardAvoidingView style={{flex:1}}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<MainContainer>
				<Header>
						<Head style={{}}>
							<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
							<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
						</Head>

						<DivProgressBar style={{justifyContent:'space-evenly'}}>
							<DesabledStepIconColor/>
							<ActiveStepIconColor/>
							<DesabledStepIconColor/>
							<DesabledStepIconColor/>
						</DivProgressBar>

					</Header>

					<SubtittleContainer>
						<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Diga mais sobre você:</SecundaryTittle>
					</SubtittleContainer>

					<DivForm style={{marginTop:0, bottom:10}}>
						<Form>
							<TextInput
									// maxLength={3}
									// maxLength={8}
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', top:40}}
									label='Nome completo' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.name || ''}
									onChangeText={txt => this.setState({ name: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
							}}/>
							
						
							 {/* <DivInputRow > */}
							 <TextInput
								style={{ backgroundColor: '#ffff',  height: 40, alignSelf: 'stretch', top:40}}
								label="datanasc"
								mode={'outlined'}
								keyboardType={"numbers-and-punctuation"}
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
								// render={props =>
								// 	<TextInputMask
								// 	{...props}
								// 	type={'datetime'}
								// 	value={this.state.birthDate}
								// 	onChangeText={text => {
								// 		this.setState({
								// 		birthDate: text
								// 		})
								// 	}}
								// 	options={{
								// 		format: 'YYYY/MM/DD'
								// 	}}
								// />
								// }
							/>

							{/* <TextInput
								// maxLength={3}
								style={{ backgroundColor: '#ffff',  height: 40, alignSelf: 'stretch', top:40}}
								label='Sexo' 
								returnKeyType='go'
								mode={'outlined'}
								value={this.state.gender || ''}
								onChangeText={txt => this.setState({ gender: txt })}
								theme={{
									// roundness: 50,
									colors: {
									primary:'#1bc7cb',
									underlineColor:'transparent',
									}
								}}
							/> */}

							<Picker 
								style={{height:50, marginTop:48}}  
								selectedValue={this.state.gender}  
								onValueChange={(itemValue, itemPosition) =>  
								this.setState({gender: itemValue, choosenIndex: itemPosition})}
							>  
								<Picker.Item label="Selecione o sexo" value="O" />  
								<Picker.Item label="Feminino" value="F" />  
								<Picker.Item label="Masculino" value="M" />  
								<Picker.Item label="Prefiro não informar" value="O" />  
							</Picker>  

								
							<TextInput
								// maxLength={3}
								maxLength={11}
								style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', top:0}}
								label='CPF' 
								returnKeyType='go'
								keyboardType="numeric"
								mode={'outlined'}
								value={this.state.cpf || ''}
								ref={(ref) => this.cpfField = ref}
								onChangeText={text => {
											this.setState({
											cpf: text
											})}}
								theme={{
									// roundness: 50,
									colors: {
									primary:'#1bc7cb',
									underlineColor:'transparent',
								}
								}}
								// render={props =>
								// 	<TextInputMask
								// 	{...props}
								// 	type={'cpf'}
								// 	value={this.state.cpf}
								// 	onChangeText={text => {
								// 		this.setState({
								// 		cpf: text
								// 		})
								// 	}}
								// 	options={{
								// 		format: '999.999.999-99'
								// 	}}
								// 	ref={(ref) => this.cpfField = ref}
								//  />
								// }
								
							/>

							{/* <DivInputRow> width:'30%' */}
								{/* <TextInput
									maxLength={4}
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', top:40}}
									label='DDD' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.ddd || ''}
									onChangeText={txt => this.setState({ ddd: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
									}}
								/> */}

								<TextInput
										// maxLength={3}
										// ,width:'70%'
									maxLength={11}
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch', top:1}}
									label='Celular' 
									returnKeyType='go'
									keyboardType="numeric"
									mode={'outlined'}
									value={this.state.phone || ''}
									onChangeText={text => {
												this.setState({
												phone: text
												})}}
									ref={(ref) => this.phoneField = ref}
									// onChangeText={txt => this.setState({ phone: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
									}}
									// render={props =>
									// 	<TextInputMask
									// 	{...props}
									// 	type={'cel-phone'}
									// 	value={this.state.phone}
									// 	onChangeText={text => {
									// 		this.setState({
									// 		phone: text
									// 		})
									// 	}}
									// 	options={{
									// 		maskType: 'BRL',
									// 		withDDD: false,
									// 		// format: '999.999.999-99'
									// 	}}
									//  />
									// }
								
								/>

							{/* </DivInputRow> */}


{/*
							<DivInput>
							<FormLabel>CPF:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'email'} size={20} color={'#000'}/>
									<FormTextInput
										autoCorrect={false}
										placeholder=""
										onChangeText={txt => this.setState({cpf: txt})}
									/>
								</ContainerTxtInput>
							</DivInput>

							<DivInputRow>
								<DivInputSmall>
									<FormLabel>DDD:</FormLabel>
									<ContainerTxtInput>
										 <MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputSmall
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({ddd: txt})}
										/>
									</ContainerTxtInput>  
								</DivInputSmall>

								<DivInputMedium>
									<FormLabel>Celular:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({phone: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium>
							</DivInputRow> */}
						</Form>
					</DivForm>

					<DivButtons style={{justifyContent:"space-between"}}>
						<ButtonSmallNext onPress={this.nextPage}>
							<BtnText>Próximo</BtnText>
						</ButtonSmallNext>

						<ButtonSmallPrevious onPress={this.previousPage}>
							<BtnText>Anterior</BtnText>
						</ButtonSmallPrevious>
					</DivButtons>

				</MainContainer>
				</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</BlueContainer>
		);
	}
}

// const styles = StyleSheet.create({  
// 	OvalShapeView: {    
// 	width: '50%',
// 	height: 40,
// 	borderBottomEndRadius:10000,
// 	borderBottomStartRadius:1000,
// 	backgroundColor: '#42a9aa',
// 	transform: [
// 	{scaleX: 2}
// 	]
	 
//   },
 
//  });