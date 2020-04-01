import React, { Component } from 'react';
import { View, StyleSheet , Text, TextInput, Image } from 'react-native';


import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import { Input, Icon  } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'

import { 
	CuteLine, 
	IconPaw, 
	LargeButton,   
	SecondaryText,
	TittleBlack,
	Container,
	SecundaryTittle,
	TextInputForm } from '../../../components/styles'

import { 
	Header, 
	SubtittleContainer,
	Form,
	DivInput,
	Label,
	ContainerSignUpOptions,
	IconSignUpOptions,
	Div,
	HorizontalLine} from './styles'




export default class SignUp extends Component {

	constructor() {
		super()
		this.state = {
			email: ''
		}
	}	

	render() {

		const buttonTextStyle = {
			backgroundColor: '#3EBCBF',
			height: '45px',
			width: '100px',
			left: '36px',
			color:'#fff',
			// bottom:150

		}

		const previousButtonStyle = {
			backgroundColor: '#FC6B6E',
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
			completedStepIconColor: '#1bc8c2',
			completedProgressBarColor: '#55d9db',
			completedCheckColor: '#fff', 
			
		  };

		  const circleStyle = {
			width: 20,
			height: 20,
		  }

			return (
				<Container>
					<View style={{height:20, backgroundColor:'#1BC7CB'}}></View>
					<Header>
						<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>
						{/* <MaterialIcons name={'supervisor-account'} size={40} color={'#000'}/>	 */}
						<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
					</Header>

					<ProgressSteps circleStyle={circleStyle} {...progressStepsStyle} >
						<ProgressStep
							nextBtnTextStyle={btnTextStyle} 
							nextBtnStyle={buttonTextStyle}>

							<SubtittleContainer>
								<SecundaryTittle>Informações básicas:</SecundaryTittle>
							</SubtittleContainer>

							
								<Form>

									<DivInput> 
										<Label>E-mail</Label>
										<View style={styles.passwordContainer}>
											<MaterialIcons style={styles.inputIcon} name={'email'} size={20} color={'#000'}/>
										<TextInput
											style={styles.inputStyle}
											autoCorrect={false}
											placeholder="ex: email@gmail.com"
											keyboardType={'email-address'}
											textContentType={'emailAddress'}
											value={this.state.password}
											onChangeText={this.onPasswordEntry}
											/>
										</View>
									</DivInput>


									<DivInput> 
										<Label>Crie uma senha</Label>
										<View style={styles.passwordContainer}>
											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
										<TextInput
											style={styles.inputStyle}
											autoCorrect={false}
											secureTextEntry
											placeholder=""
											value={this.state.password}
											onChangeText={this.onPasswordEntry}
											/>
										</View>
									</DivInput>

									<DivInput> 
										<Label>Confirme sua senha</Label>
										<View style={styles.passwordContainer}>
											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
										<TextInput
											style={styles.inputStyle}
											autoCorrect={false}
											secureTextEntry
											placeholder=""
											value={this.state.password}
											onChangeText={this.onPasswordEntry}
											/>
										</View>
									</DivInput>
									<Div style={{justifyContent: 'center',
											alignItems: 'center',borderWidth: 0.5,
    										borderColor:'#e2e2e2', borderTopLeftRadius:15, marginTop:50, minHeight:110, padding:10}}>
										<View style={{width: '100%',
											justifyContent: 'center',
											alignItems: 'center',
											flexDirection:'row',
											}}>
											<HorizontalLine/>
											<Text>ou inscreva-se com:</Text>
											<HorizontalLine/>

										</View>
										<ContainerSignUpOptions>
											<IconSignUpOptions source={require('../../../assets/facebook.png')} ></IconSignUpOptions>
											<IconSignUpOptions source={require('../../../assets/google.png')} ></IconSignUpOptions>
										</ContainerSignUpOptions> 
									</Div>
									
								</Form>

								
							
						</ProgressStep>

						<ProgressStep 
							label="" 
							previousBtnTextStyle={btnTextStyle} 
							nextBtnTextStyle={btnTextStyle} 
							previousBtnStyle={previousButtonStyle} 
							nextBtnStyle={buttonTextStyle} 
						>
							<Header style={{ alignItems: 'center' }}>
								<Text>Diga mais sobre você</Text>
							</Header>
						</ProgressStep>

						<ProgressStep 
							label="" 
							previousBtnTextStyle={btnTextStyle} 
							nextBtnTextStyle={btnTextStyle} 
							previousBtnStyle={previousButtonStyle} 
							nextBtnStyle={buttonTextStyle} 
						>
							<Header>
								<Text>Informações de endereço</Text>
							</Header>
						</ProgressStep>

						<ProgressStep 
							label="" 
							previousBtnTextStyle={btnTextStyle} 
							nextBtnTextStyle={btnTextStyle} 
							previousBtnStyle={previousButtonStyle} 
							nextBtnStyle={buttonTextStyle} 
						>
							<Header>
								<Text>Foto</Text>
							</Header>
						</ProgressStep>
					</ProgressSteps>
				</Container>
			)
		
	}

}


const styles = StyleSheet.create({
	passwordContainer: {
		flexDirection: 'row',
		borderBottomWidth: 1.2,
		borderColor: '#B6B6B6',
		paddingHorizontal:3,
		alignItems:'center',
		// backgroundColor:'#c78'

	  },
	  inputStyle: {
		flex: 1,
		minHeight: 40,
		alignSelf: 'center',
		fontSize: 18,
	  },

	  inputIcon:{
		  marginRight:15,
		//   marginLeft:-15
	  }


	  
 });
