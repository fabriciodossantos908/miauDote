import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

import { 
	CuteLine, 
	IconPaw, 
	LargeButton,   
	SecondaryText, } from '../../../components/styles'

	import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
export default class SignUp extends Component {

	constructor() {
		super()
		this.state = {
			email: ''
		}
	}	

	render() {

		const buttonTextStyle = {
			backgroundColor: '#4DB026',
			height: '45px',
			width: '100px',
			left: '36px',
			color:'#fff'

		}

		const previousButtonStyle = {
			backgroundColor: '#4DB026',
			height: '45px',
			width: '100px',
			right: '36px',
		}

		const btnTextStyle = {
			color: '#fff',
		};

		const progressStepsStyle = {
			activeStepIconBorderColor: '#1bc7cb',
			activeLabelColor: '#1bc7cb',
			activeStepNumColor: 'rgba(0, 0, 0, 0.0)',
			activeStepIconColor: '#1bc7cb',
			completedStepIconColor: '#c9c9d0',
			completedProgressBarColor: '#686868',
			completedCheckColor: '#4bb543', 
		  };

		  const circleStyle = {
			width: 20,
			height: 20,
		  }

			return (
				<View cllassName='conatainer' style={{flex: 1}}>
					<View style={{ alignItems: 'center' }}>
						<Text>Crie sua conta</Text>
						{/* Colocar um icon aqui */}
					</View>
					<ProgressSteps circleStyle={circleStyle} {...progressStepsStyle} >
						<ProgressStep 
							label=""
							nextBtnTextStyle={btnTextStyle} 
							nextBtnStyle={buttonTextStyle} 
						>
							<View style={{ alignItems: 'center' }}>
								<Text>Informações básicas</Text>
								<Input
									placeholder='Digite seu email'
									leftIcon={
										<Icon
										name='email'
										size={18}
										color='black'
										/>
									}
								/>

								<Input
									label='Crie uma senha'
									placeholder='Digite sua senha'
									leftIcon={{ type: 'font-awesome', name: 'e-mail' }}
								/>

								<Input
									placeholder='Confirme sua senha'
									errorStyle={{ color: 'red' }}
									errorMessage='ENTER A VALID ERROR HERE'
								/>
							</View>
						</ProgressStep>

						<ProgressStep 
							label="" 
							previousBtnTextStyle={btnTextStyle} 
							nextBtnTextStyle={btnTextStyle} 
							previousBtnStyle={previousButtonStyle} 
							nextBtnStyle={buttonTextStyle} 
						>
							<View style={{ alignItems: 'center' }}>
								<Text>Diga mais sobre você</Text>
							</View>
						</ProgressStep>

						<ProgressStep 
							label="" 
							previousBtnTextStyle={btnTextStyle} 
							nextBtnTextStyle={btnTextStyle} 
							previousBtnStyle={previousButtonStyle} 
							nextBtnStyle={buttonTextStyle} 
						>
							<View style={{ alignItems: 'center' }}>
								<Text>Informações de endereço</Text>
							</View>
						</ProgressStep>

						<ProgressStep 
							label="" 
							previousBtnTextStyle={btnTextStyle} 
							nextBtnTextStyle={btnTextStyle} 
							previousBtnStyle={previousButtonStyle} 
							nextBtnStyle={buttonTextStyle} 
						>
							<View style={{ alignItems: 'center' }}>
								<Text>Foto</Text>
							</View>
						</ProgressStep>
					</ProgressSteps>
				</View>
			)
		
	}

}
