import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

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
	ButtonSmallPrevious
} from './styles'

export default class FormUserAddress extends Component {


	constructor(props){
		super(props)
		const { params } = this.props.route.params
		this.state = {
			email: params.email,
			password : params.password,
			name: params.name,
			birthDate : params.birthDate,
			gender: params.gender,
			cpf: params.cpf,
			ddd: params.ddd,
			phone: params.phone,
			cep: '',
			city: '',
			address: '',
			number: '',
			complement: '',
			neighborhood: '',
			state: ''
		}
	}

	validate = () => {
		const { cep, city, address, number, complement, neighborhood, state } = this.state
		if (!cep || !city || !address || !number || !complement || !neighborhood || !state ) {
			alert('Ops... Todos os campos são obrigatórios')
			return false
		}
		return true
	}

	nextPage = ( props ) => {
		if (!this.validate()) return

		const { 
			email, 
			password, 
			name, 
			birthDate, 
			gender, 
			cpf, 
			ddd, 
			phone, 
			cep, city, address, number, complement, neighborhood, state } = this.state

		console.log(this.state)

		this.props.navigation.navigate('FormUserPhoto', {
			screen: 'FormUserAddress',
			params: { 
				email: email,
				password: password,
				name: name,
				birthDate: birthDate,
				gender: gender,
				cpf: cpf,
				ddd: ddd,
				phone: phone,
				cep: cep,
				city: city,
				address: address,
				number: number,
				complement: complement,
				neighborhood: neighborhood,
				state: state

			},
		}); 

	}

	previousPage = ( e ) => {
		this.props.navigation.navigate('FormPersonalData')
	}

	render() {
		return (
			<BlueContainer>
				{/* <HeaderDecoration>
						<View style={styles.OvalShapeView}></View>
				</HeaderDecoration> */}
				<MainContainer>
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

					<SubtittleContainer>
						<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Informações de Endereço:</SecundaryTittle>
					</SubtittleContainer>

					<DivForm style={{marginTop:0, bottom:10}}>
						<Form  style={{top:20}}>
							<DivInputRow>
								<DivInputMedium>
									<FormLabel>CEP:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({cep: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium>

								<DivInputMedium>
									<FormLabel>Cidade:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({city: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium>
							</DivInputRow>

							<DivInput style={{marginTop:35, marginBottom:45}}>
							<FormLabel>Enderço:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'email'} size={20} color={'#000'}/>
									<FormTextInput
										autoCorrect={false}
										placeholder=""
										onChangeText={txt => this.setState({address: txt})}
									/>
								</ContainerTxtInput>
							</DivInput>
 {/* nova add */}
							<DivInputRow>
								<DivInputMedium>
									<FormLabel>Número:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({number: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium>

								<DivInputMedium>
									<FormLabel>Complemento:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											// style={{backgroundColor:'#d54'}}
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({complement: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium>
							</DivInputRow>

							<DivInputRow>
								<DivInputMedium>
									<FormLabel>Bairro:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({neighborhood: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium>

								<DivInputMedium>
									<FormLabel>Estado:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											// style={{backgroundColor:'#d54'}}
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({state: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium>
							</DivInputRow>
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