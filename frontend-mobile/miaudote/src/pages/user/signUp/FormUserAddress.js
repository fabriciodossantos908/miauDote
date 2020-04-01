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
} from './first-style'

export default class FormUserAddress extends Component {

	render() {
		return (
			<BlueContainer>
				<HeaderDecoration>
						<View style={styles.OvalShapeView}></View>
				</HeaderDecoration>
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
						<Form  style={{justifyContent:"none", top:20}}>
							<DivInputRow>
								<DivInputMedium>
									<FormLabel>CEP:</FormLabel>
									<ContainerTxtInput>
										<MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputMedium
											autoCorrect={false}
											placeholder=""
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
									/>
								</ContainerTxtInput>
							</DivInput>

							<DivInputRow>
								<DivInputSmall>
									<FormLabel>Bairro:</FormLabel>
									<ContainerTxtInput>
										 <MaterialIcons style={{marginRight:15}} name={'vpn-key'} size={20} color={'#000'}/>
										<FormTextInputSmall
											autoCorrect={false}
											placeholder=""
										/>
									</ContainerTxtInput>  
								</DivInputSmall>

								<DivInputMedium>
									<FormLabel>Cidade:</FormLabel>
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
						<ButtonSmallNext>
							<BtnText>Próximo</BtnText>
						</ButtonSmallNext>

						<ButtonSmallPrevious>
							<BtnText>Anterior</BtnText>
						</ButtonSmallPrevious>
					</DivButtons>

				</MainContainer>
			</BlueContainer>
		);
	}
}

const styles = StyleSheet.create({  
	OvalShapeView: {    
	width: '50%',
	height: 40,
	borderBottomEndRadius:'100%',
	borderBottomStartRadius:'100%',
	backgroundColor: '#42a9aa',
	transform: [
	{scaleX: 2}
	]
	 
  },
 
 });