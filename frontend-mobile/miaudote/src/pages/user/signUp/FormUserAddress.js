import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, KeyboardAvoidingView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

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

<script src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>

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

	findCep = () => {
		console.log("ATENÇÃO, CEP CLICADO")
		const { cep } = this.state
		var _cep = cep.replace(/\D/g, '')

      //Verifica se campo cep possui valor informado.
      if (_cep != "") {

        var cepValidate = /^[0-9]{8}$/;

        if(cepValidate.test(_cep)){
          console.log("iguais")
          //Preenche os campos com "..." enquanto consulta webservice.

          this.setState({address: "..."})
          this.setState({neighborhood: "..."})
          this.setState({state: "..."})
          this.setState({city: "..."})

          // const cepp = '01001000'

          const url = `https://viacep.com.br/ws/`+ _cep +`/json/`;

          let viacep = fetch(url)
            .then (response => (response.json()))
            // .then (response => console.log(response))
            .then((json) => {
              console.log(json)
              if(json.erro != true){
                this.setState({address: json.logradouro})
                this.setState({neighborhood: json.bairro})
                this.setState({state: json.uf})
                this.setState({city: json.localidade})
              }else{
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
            

        }else{
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

	render() {
		return (
			<BlueContainer>
				{/* <HeaderDecoration>
						<View style={styles.OvalShapeView}></View>
				</HeaderDecoration> */}
				<KeyboardAvoidingView style={{flex:1}}  behavior={Platform.OS == "ios" ? "padding" : "height"}>
				<MainContainer>
					<Header style={{top:30}}>
						<Head style={{}}>
							<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
							<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
						</Head>

						<DivProgressBar style={{justifyContent:'space-evenly'}}>
							<DesabledStepIconColor/>
							<DesabledStepIconColor/>
							<ActiveStepIconColor/>
							<DesabledStepIconColor/>
						</DivProgressBar>

					</Header>
					{/* <Header>
						<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
						<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
					</Header>

					<DivProgressBar style={{justifyContent:'space-evenly'}}>
						<DesabledStepIconColor/>
						<DesabledStepIconColor/>
						<ActiveStepIconColor/>
						<DesabledStepIconColor/>
					</DivProgressBar> */}

					<SubtittleContainer>
						<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Informações de Endereço:</SecundaryTittle>
					</SubtittleContainer>

					<DivForm style={{marginTop:0, bottom:10}}>
						<Form  style={{top:20}}>
							{/* <DivInputRow style={{ backgroundColor: '#c78'}}> */}
								<TextInput
									maxLength={8}
									onBlur={this.findCep}
									style={{ backgroundColor: '#ffff', height: 40, alignSelf: 'stretch'}}
									label='CEP' 
									returnKeyType='go'
									mode={'outlined'}
									value={this.state.cep || ''}
									ref={(ref) => this.cepField = ref}
									onChangeText={txt => this.setState({ cep: txt })}
									theme={{
										// roundness: 50,
										colors: {
										primary:'#1bc7cb',
										underlineColor:'transparent',
										}
								}}/>

							<DivInputRow>
								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#ffff', width:'60%', height: 40, alignSelf: 'stretch', top:15}}
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
									style={{ backgroundColor: '#ffff', width:'40%', height: 40, alignSelf: 'stretch', top:15}}
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

							</DivInputRow>
								

								
								{/* <DivInputMedium>
									<FormLabel>CEP:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({cep: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium> */}

								{/* <DivInputMedium>
									<FormLabel>Cidade:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
											onChangeText={txt => this.setState({city: txt})}
										/>
									</ContainerTxtInput> 
								</DivInputMedium> */}
							{/* </DivInputRow> */}

							<DivInputRow>
								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#ffff', width:'80%', height: 40, alignSelf: 'stretch', top:25}}
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
									style={{ backgroundColor: '#ffff', width:'20%', height: 40, alignSelf: 'stretch', top:25}}
									label='N°' 
									returnKeyType='go'
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
							</DivInputRow>
							{/* <DivInput style={{marginTop:35, marginBottom:45}}>
							<FormLabel>Enderço:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'email'} size={20} color={'#000'}/>
									<FormTextInput
										autoCorrect={false}
										placeholder=""
										onChangeText={txt => this.setState({address: txt})}
									/>
								</ContainerTxtInput>
							</DivInput> */}
 {/* nova add */}
							<DivInputRow>
								{/* <DivInputMedium>
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
								</DivInputMedium> */}
							</DivInputRow>

							<DivInputRow>
								<TextInput
									// maxLength={3}
									style={{ backgroundColor: '#ffff', width:'30%', height: 40, alignSelf: 'stretch',top:35}}
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
									style={{ backgroundColor: '#ffff', width:'70%', height: 40, alignSelf: 'stretch',top:35}}
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
							</DivInputRow>

							{/*<DivInputRow> */}
								{/* <DivInputMedium>
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
								</DivInputMedium> */}
							{/* </DivInputRow> */}
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