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

export default class FormPersonalData extends Component {

	nextPage = ( e ) => {
		this.props.navigation.navigate('FormUserAddress')
	}

	previousPage = ( e ) => {
		this.props.navigation.navigate('FormBasicInfo')
	}

	render() {
		console.log(this.props.route.params.params.email)
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
						<ActiveStepIconColor/>
						<DesabledStepIconColor/>
						<DesabledStepIconColor/>
					</DivProgressBar>

					<SubtittleContainer>
						<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Diga mais sobre você:</SecundaryTittle>
					</SubtittleContainer>

					<DivForm style={{marginTop:0, bottom:10}}>
						<Form>
							<DivInput> 
								<FormLabel>Nome completo:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'email'} size={20} color={'#000'}/>
									<FormTextInput
										autoCorrect={false}
										placeholder="ex: email@gmail.com"
										keyboardType={'email-address'}
										textContentType={'emailAddress'}
									/>
								</ContainerTxtInput> 
							</DivInput>

							<DivInputRow>
								<DivInputMedium>
									<FormLabel>Data de Nascimento:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
										/>
									</ContainerTxtInput> 
								</DivInputMedium>

								<DivInputMedium>
									<FormLabel>Sexo::</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
										/>
									</ContainerTxtInput> 
								</DivInputMedium>
							</DivInputRow>

							<DivInput>
							<FormLabel>CPF:</FormLabel>
								<ContainerTxtInput>
									<MaterialIcons style={{marginRight:15}} name={'email'} size={20} color={'#000'}/>
									<FormTextInput
										autoCorrect={false}
										placeholder=""
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