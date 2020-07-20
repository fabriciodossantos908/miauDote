import React, { Component } from 'react';
import { View, KeyboardAvoidingView, ScrollView, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, Image, ImageBackground, Dimensions, Alert, TouchableOpacityBase } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

import { TextInput } from 'react-native-paper';

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
	ButtonPrevious,
	ButtonNext
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

<script src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"></script>

export default class FormUserAddress extends Component {


	constructor(props) {
		super(props)
		// const { params } = this.props.route.params

		const { data } = this.props.route.params.params
		this.state = {
			email: data.email,
			password: data.password,
			name: data.name,
			birthDate: data.birthDate.split('/').reverse().join('-'),
			gender: data.gender,
			cpf: data.cpf.replace(/[^A-Z0-9]+/ig, ""),
			ddd: data.ddd,
			phone: data.phone.replace(/[^A-Z0-9]+/ig, ""),
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
		if (!cep || !city || !address || !number || !complement || !neighborhood || !state) {
			alert('Ops... Todos os campos são obrigatórios')
			return false
		}
		return true
	}

	// nextPage = ( props ) => {
	// 	if (!this.validate()) return

	// 	const { 
	// 		email, 
	// 		password, 
	// 		name, 
	// 		birthDate, 
	// 		gender, 
	// 		cpf, 
	// 		ddd, 
	// 		phone, 
	// 		cep, city, address, number, complement, neighborhood, state } = this.state

	// 	console.log(this.state)

	// 	this.props.navigation.navigate('FormUserPhoto', {
	// 		screen: 'FormUserAddress',
	// 		params: { 
	// 			email: email,
	// 			password: password,
	// 			name: name,
	// 			birthDate: birthDate,
	// 			gender: gender,
	// 			cpf: cpf,
	// 			ddd: ddd,
	// 			phone: phone,
	// 			cep: cep,
	// 			city: city,
	// 			address: address,
	// 			number: number,
	// 			complement: complement,
	// 			neighborhood: neighborhood,
	// 			state: state

	// 		},
	// 	}); 

	// }

	nextPage = (props) => {
		if (!this.validate()) return

		const data = this.state

		this.props.navigation.navigate('FormUserPhoto', {
			screen: 'FormUserAddress',
			params: { data },
		});

	}

	previousPage = (e) => {
		this.props.navigation.navigate('FormPersonalData')
	}

	// findCep = () => {
	// 	const { cep } = this.state

	// 	// viaCep

	// }

	findCep = () => {
		console.log("ATENÇÃO, CEP CLICADO")
		const { cep } = this.state
		var _cep = cep.replace(/\D/g, '')

		//Verifica se campo cep possui valor informado.
		if (_cep != "") {

			var cepValidate = /^[0-9]{8}$/;

			if (cepValidate.test(_cep)) {
				console.log("iguais")
				//Preenche os campos com "..." enquanto consulta webservice.

				this.setState({ address: "..." })
				this.setState({ neighborhood: "..." })
				this.setState({ state: "..." })
				this.setState({ city: "..." })

				// const cepp = '01001000'

				const url = `https://viacep.com.br/ws/` + _cep + `/json/`;

				let viacep = fetch(url)
					.then(response => (response.json()))
					// .then (response => console.log(response))
					.then((json) => {
						console.log(json)
						if (json.erro != true) {
							this.setState({ address: json.logradouro })
							this.setState({ neighborhood: json.bairro })
							this.setState({ state: json.uf })
							this.setState({ city: json.localidade })
						} else {
							Alert.alert(
								'Algo deu errado',
								'Cep não encontrado. Por favor verifique',
								[
									{ text: 'OK', onPress: () => console.log('OK Pressed') }
								],
								{ cancelable: false }
							);
						}


					})
					.catch((json) => {
						console.log(json.erro)
						// if(json.erro == true){
						//   console.log("Cep inválido")
						// }
					})


			} else {
				Alert.alert(
					'Algo deu errado',
					'Cep inválido. Por favor verifique',
					[
						{ text: 'OK', onPress: () => console.log('OK Pressed') }
					],
					{ cancelable: false }
				);
			}



		}

		console.log(cep)
		console.log(_cep)

	}


	cadastrar = async e => {

		const { email, password, name, birthDate, gender, cpf, phone, cep, city, address, number, complement, neighborhood, state } = this.state
		const _cep = cep.replace(/[^A-Z0-9]+/ig, "")
		const params = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome: name,
				email: email,
				senha: password,
				data_nascimento: birthDate,
				sexo: gender,
				cpf: cpf,
				celular: phone,
				cep: _cep,
				cidade: city,
				bairro: neighborhood,
				logradouro: address,
				numero: number,
				complemento: complement,
				uf: state,
				permissions: 'USER',

			})
		
		}


		try {
			let response =  await fetch('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/registrar',params)
			// console.log(JSON.stringify(response))

			// console.log(response)

			// ok: status code =  200 - 299
			if(!response.ok){
				return alert("Erro ao cadastrar")
				// return console.log(response.data)

				// .json() captura e tranforma o corpo em json

				const user = await response.json()
				// console.log(user)
			 } else {
				alert('Cadastrado com Sucesso')

				// this.props.navigation.navigate('FormUserPhoto')

				// AsyncStorage.setItem( 'token', user.token )

				const data = this.state
	
				this.props.navigation.navigate('FormUserPhoto', {
					screen: 'FormUserAddress',
					params: { data }
				}); 
			}
			
			

		} catch (e) {
			console.log(e)
		}
		
	}

	

	render() {
		// console.log(this.state)
		return (

			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"}
				// behavior={"height"}
				style={styles.container}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
						{/* <ImageBackground  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} source={require('../../../assets/thumb.png')}> */}
						<Inner>

							<Header>
								<Title  style={{fontSize:32}}>Informe seu endereço</Title>
								{/* <ImageIcon source={require('../../../assets/user-account.png')}></ImageIcon> */}
							</Header>

							<ProgressBar>
								<DisableIcon></DisableIcon>
								<DisableIcon></DisableIcon>
								<ActiveIcon></ActiveIcon>
							</ProgressBar>

							
							<View style={{marginTop:30}}>

								<TextInput
									maxLength={9}
									onBlur={this.findCep}
									style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch'}}
									label='CEP' 
									returnKeyType='go'
									keyboardType="numeric"
									mode={'outlined'}
									value={this.state.cep || ''}
									onChangeText={txt => this.setState({ cep: txt })}
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
										ref={(ref) => this.cepField = ref}
										type={'custom'}
										value={this.state.cep}
										onChangeText={text => {
											this.setState({
											cep: text
											})
										}}
										options={{
											mask: 'SSSSS-SSS'
										}}
									/>
									}
								/>

								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch', top:15}}
									label='Cidade' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.city || ''}
									onChangeText={txt => this.setState({ city: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>

								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch', top:15}}
									label='Estado' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.state || ''}
									onChangeText={txt => this.setState({ state: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>

								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch', top:25}}
									label='Endereço' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.address || ''}
									onChangeText={txt => this.setState({ address: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>

								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch', top:25}}
									label='N°' 
									returnKeyType='go'
									keyboardType="numeric"
									mode={'outlined'}
									value={this.state.number || ''}
									onChangeText={txt => this.setState({ number: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>

								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch',top:35}}
									label='Complemento' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.complement || ''}
									onChangeText={txt => this.setState({ complement: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>

								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch',top:35}}
									label='Bairro' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.neighborhood || ''}
									onChangeText={txt => this.setState({ neighborhood: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>

				
							</View>

							<Text style={{color:'#2966b5', textAlign:"center", top:50}}>
								Por que precisamos das suas informações pessoais?
							</Text>

							<ButtonContainer>
								<ButtonPrevious onPress={this.previousPage}>
									<BtnText>Voltar</BtnText>
								</ButtonPrevious>

								<ButtonNext onPress={this.cadastrar}>
									<BtnText>Próximo</BtnText>
								</ButtonNext>

							</ButtonContainer>
							{/* </View> */}


						</Inner>
						{/* </ImageBackground> */}
					</ScrollView>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>

			// <BlueContainer>
			// 	{/* <HeaderDecoration>
			// 			<View style={styles.OvalShapeView}></View>
			// 	</HeaderDecoration> */}
			// 	{/*   behavior={Platform.OS == "ios" ? "padding" : "height"} */}
			// 	<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
			// 	<MainContainer>
			// 		<Header style={{top:30}}>
			// 			<Head style={{}}>
			// 				<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
			// 				<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
			// 			</Head>

			// 			<DivProgressBar style={{justifyContent:'space-evenly'}}>
			// 				<DesabledStepIconColor/>
			// 				<DesabledStepIconColor/>
			// 				<ActiveStepIconColor/>
			// 				<DesabledStepIconColor/>
			// 			</DivProgressBar>

			// 		</Header>

			// 		<SubtittleContainer>
			// 			<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Informações de Endereço:</SecundaryTittle>
			// 		</SubtittleContainer>

			// 		<DivForm style={{marginTop:0, bottom:10}}>
			// 			<Form  style={{top:20}}>
			// 				{/* <DivInputRow style={{ backgroundColor: '#c78'}}> */}
			// 					<TextInput
			// 						maxLength={9}
			// 						onBlur={this.findCep}
			// 						style={{ backgroundColor: '#fff', height: 40, alignSelf: 'stretch'}}
			// 						label='CEP' 
			// 						returnKeyType='go'
			// 						keyboardType="numeric"
			// 						mode={'outlined'}
			// 						// value={this.state.cep || ''}
			// 						ref={(ref) => this.cepField = ref}
			// 						onChangeText={txt => this.setState({ cep: txt })}
			// 						theme={{
			// 							// roundness: 50,
			// 							colors: {
			// 							primary:'#1bc7cb',
			// 							underlineColor:'transparent',
			// 							}
			// 						}}
			// 						render={props =>
			// 							<TextInputMask
			// 							{...props}
			// 							type={'custom'}
			// 							value={this.state.cep}
			// 							onChangeText={text => {
			// 								this.setState({
			// 								cep: text
			// 								})
			// 							}}
			// 							options={{
			// 								mask: 'SSSSS-SSS'
			// 							}}
			// 						/>
			// 						}
			// 					/>

			// 				<DivInputRow>
			// 					<TextInput
			// 						// maxLength={3}
			// 						style={{ backgroundColor: '#fff', width:'60%', height: 40, alignSelf: 'stretch', top:15}}
			// 						label='Cidade' 
			// 						returnKeyType='go'
			// 						mode={'outlined'}
			// 						value={this.state.city || ''}
			// 						onChangeText={txt => this.setState({ city: txt })}
			// 						theme={{
			// 							// roundness: 50,
			// 							colors: {
			// 							primary:'#1bc7cb',
			// 							underlineColor:'transparent',
			// 							}
			// 					}}/>

			// 					<TextInput
			// 						// maxLength={3}
			// 						style={{ backgroundColor: '#fff', width:'40%', height: 40, alignSelf: 'stretch', top:15}}
			// 						label='Estado' 
			// 						returnKeyType='go'
			// 						mode={'outlined'}
			// 						value={this.state.state || ''}
			// 						onChangeText={txt => this.setState({ state: txt })}
			// 						theme={{
			// 							// roundness: 50,
			// 							colors: {
			// 							primary:'#1bc7cb',
			// 							underlineColor:'transparent',
			// 							}
			// 					}}/>

			// 				</DivInputRow>

			// 				<DivInputRow>
			// 					<TextInput
			// 						// maxLength={3}
			// 						style={{ backgroundColor: '#fff', width:'80%', height: 40, alignSelf: 'stretch', top:25}}
			// 						label='Endereço' 
			// 						returnKeyType='go'
			// 						mode={'outlined'}
			// 						value={this.state.address || ''}
			// 						onChangeText={txt => this.setState({ address: txt })}
			// 						theme={{
			// 							// roundness: 50,
			// 							colors: {
			// 							primary:'#1bc7cb',
			// 							underlineColor:'transparent',
			// 							}
			// 					}}/>

			// 					<TextInput
			// 						// maxLength={3}
			// 						style={{ backgroundColor: '#fff', width:'20%', height: 40, alignSelf: 'stretch', top:25}}
			// 						label='N°' 
			// 						returnKeyType='go'
			// 						keyboardType="numeric"
			// 						mode={'outlined'}
			// 						value={this.state.number || ''}
			// 						onChangeText={txt => this.setState({ number: txt })}
			// 						theme={{
			// 							// roundness: 50,
			// 							colors: {
			// 							primary:'#1bc7cb',
			// 							underlineColor:'transparent',
			// 							}
			// 					}}/>
			// 				</DivInputRow>

			// 				{/* <DivInputRow>

			// 				</DivInputRow> */}

			// 				<DivInputRow>
			// 					<TextInput
			// 						// maxLength={3}
			// 						style={{ backgroundColor: '#fff', width:'30%', height: 40, alignSelf: 'stretch',top:35}}
			// 						label='Complemento' 
			// 						returnKeyType='go'
			// 						mode={'outlined'}
			// 						value={this.state.complement || ''}
			// 						onChangeText={txt => this.setState({ complement: txt })}
			// 						theme={{
			// 							// roundness: 50,
			// 							colors: {
			// 							primary:'#1bc7cb',
			// 							underlineColor:'transparent',
			// 							}
			// 					}}/>

			// 					<TextInput
			// 						// maxLength={3}
			// 						style={{ backgroundColor: '#fff', width:'70%', height: 40, alignSelf: 'stretch',top:35}}
			// 						label='Bairro' 
			// 						returnKeyType='go'
			// 						mode={'outlined'}
			// 						value={this.state.neighborhood || ''}
			// 						onChangeText={txt => this.setState({ neighborhood: txt })}
			// 						theme={{
			// 							// roundness: 50,
			// 							colors: {
			// 							primary:'#1bc7cb',
			// 							underlineColor:'transparent',
			// 							}
			// 					}}/>
			// 				</DivInputRow>


			// 			</Form>
			// 		</DivForm>

			// 		<DivButtons style={{justifyContent:"space-between"}}>
			// 			<ButtonSmallNext onPress={this.nextPage}>
			// 				<BtnText>Próximo</BtnText>
			// 			</ButtonSmallNext>

			// 			<ButtonSmallPrevious onPress={this.previousPage}>
			// 				<BtnText>Anterior</BtnText>
			// 			</ButtonSmallPrevious>
			// 		</DivButtons>

			// 	</MainContainer>
			// 	</KeyboardAvoidingView>
			// </BlueContainer>
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

// export default KeyboardAvoidingComponent;
