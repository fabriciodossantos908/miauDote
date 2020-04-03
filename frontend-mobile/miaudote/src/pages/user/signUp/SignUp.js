// import React, { Component } from 'react';
// import { View, StyleSheet , Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';


// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

// import { Input, Icon  } from 'react-native-elements';
// import { MaterialIcons } from '@expo/vector-icons'


// import { 
// 	CuteLine, 
// 	IconPaw, 
// 	LargeButton,   
// 	SecondaryText,
// 	TittleBlack,
// 	Container,
// 	SecundaryTittle,
// 	TextInputForm } from '../../../components/styles'

// import { 
// 	Header, 
// 	SubtittleContainer,
// 	Form,
// 	DivInput,
// 	Label,
// 	ContainerSignUpOptions,
// 	IconSignUpOptions,
// 	Div,
// 	HorizontalLine,
// 	DivInputMedium,
// 	DivRow,
// 	DivInputSmall,
// 	TxtInputFormSmall,
// 	DivPhoto,
// 	DivButtonPhoto,
// 	LargeButtonGrey} from './styles'




// export default class SignUp extends Component {

// 	constructor() {
// 		super()
// 		this.state = {
// 			email: ''
// 		}
// 	}	

// 	render() {

// 		const buttonTextStyle = {
// 			backgroundColor: '#3EBCBF',
// 			height: '45px',
// 			width: '100px',
// 			left: '36px',
// 			color:'#fff',
// 			// bottom:150

// 		}

// 		const previousButtonStyle = {
// 			backgroundColor: '#FC6B6E',
// 			height: '45px',
// 			width: '100px',
// 			right: '36px',
// 		}

// 		const btnTextStyle = {
// 			color: '#fff',
// 			tittle: 'teste'
// 		};

// 		const progressStepsStyle = {
// 			activeStepIconBorderColor: '#1bc7cb',
// 			activeLabelColor: '#1bc7cb',
// 			activeStepNumColor: 'rgba(0, 0, 0, 0.0)',
// 			activeStepIconColor: '#1bc7cb',
// 			completedStepIconColor: '#1bc8c2',
// 			completedProgressBarColor: '#55d9db',
// 			completedCheckColor: '#fff', 
			
// 		  };

// 		  const circleStyle = {
// 			width: 20,
// 			height: 20,
// 		  }

// 			return (
// 				<Container>
// 					<View style={{height:20, backgroundColor:'#1BC7CB'}}></View>
// 					<Header>
// 						<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>
// 						{/* <MaterialIcons name={'supervisor-account'} size={40} color={'#000'}/>	 */}
// 						<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
// 					</Header>

// 					<ProgressSteps circleStyle={circleStyle} {...progressStepsStyle} >
// 						<ProgressStep
// 							nextBtnTextStyle={btnTextStyle} 
// 							nextBtnStyle={buttonTextStyle}>
								
// 							<SubtittleContainer>
// 								<SecundaryTittle>Informações básicas:</SecundaryTittle>
// 							</SubtittleContainer>

							
// 								<Form>

// 									<DivInput> 
// 										<Label>E-mail</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'email'} size={20} color={'#000'}/>
// 										<TextInput
// 											style={styles.inputStyle}
// 											autoCorrect={false}
// 											placeholder="ex: email@gmail.com"
// 											keyboardType={'email-address'}
// 											textContentType={'emailAddress'}
// 											value={this.state.password}
// 											onChangeText={this.onPasswordEntry}
// 											/>
// 										</View>
// 									</DivInput>


// 									<DivInput> 
// 										<Label>Crie uma senha</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 										<TextInput
// 											style={styles.inputStyle}
// 											autoCorrect={false}
// 											secureTextEntry
// 											placeholder=""
// 											value={this.state.password}
// 											onChangeText={this.onPasswordEntry}
// 											/>
// 										</View>
// 									</DivInput>

// 									<DivInput> 
// 										<Label>Confirme sua senha</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 										<TextInput
// 											style={styles.inputStyle}
// 											autoCorrect={false}
// 											secureTextEntry
// 											placeholder=""
// 											value={this.state.password}
// 											onChangeText={this.onPasswordEntry}
// 											/>
// 										</View>
// 									</DivInput>
// 									<Div style={{justifyContent: 'center',
// 											alignItems: 'center',borderWidth: 0.5,
//     										borderColor:'#e2e2e2', borderTopLeftRadius:15, marginTop:50, minHeight:110, padding:10}}>
// 										<View style={{width: '100%',
// 											justifyContent: 'center',
// 											alignItems: 'center',
// 											flexDirection:'row',
// 											}}>
// 											<HorizontalLine/>
// 											<Text>ou inscreva-se com:</Text>
// 											<HorizontalLine/>

// 										</View>
// 										<ContainerSignUpOptions>
// 											<IconSignUpOptions source={require('../../../assets/facebook.png')} ></IconSignUpOptions>
// 											<IconSignUpOptions source={require('../../../assets/google.png')} ></IconSignUpOptions>
// 										</ContainerSignUpOptions> 
// 									</Div>
									
// 								</Form>
// 						</ProgressStep>

// 						<ProgressStep 
// 							label="" 
// 							previousBtnTextStyle={btnTextStyle} 
// 							nextBtnTextStyle={btnTextStyle} 
// 							previousBtnStyle={previousButtonStyle} 
// 							nextBtnStyle={buttonTextStyle} 
// 						>
// 							<SubtittleContainer>
// 								<SecundaryTittle>Diga mais sobre você:</SecundaryTittle>
// 							</SubtittleContainer>

// 							<Form>

// 								<DivInput> 
// 									<Label>Nome completo</Label>
// 									<View style={styles.passwordContainer}>
// 										<MaterialIcons style={styles.inputIcon} name={'user'} size={20} color={'#000'}/>
// 									<TextInput
// 										style={styles.inputStyle}
// 										autoCorrect={false}
// 										placeholder="ex: email@gmail.com"
// 										keyboardType={'email-address'}
// 										textContentType={'emailAddress'}
// 										value={this.state.password}
// 										onChangeText={this.onPasswordEntry}
// 										/>
// 									</View>
// 								</DivInput>

// 							<DivRow>
// 								<DivInputMedium> 
// 									<Label>Data de Nascimento</Label>
// 									<View style={styles.passwordContainer}>
// 										<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 									<TextInput
// 										style={styles.inputStyle}
// 										autoCorrect={false}
// 										secureTextEntry
// 										placeholder=""
// 										value={this.state.password}
// 										onChangeText={this.onPasswordEntry}
// 										/>
// 									</View>
// 								</DivInputMedium>
								
// 								<DivInputMedium> 
// 									<Label>Sexo</Label>
// 									<View style={styles.passwordContainer}>
// 										<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 									<TextInput
// 										style={styles.inputStyle}
// 										autoCorrect={false}
// 										secureTextEntry
// 										placeholder=""
// 										value={this.state.password}
// 										onChangeText={this.onPasswordEntry}
// 										/>
// 									</View>
// 								</DivInputMedium>

// 							</DivRow>

// 								<DivInput> 
// 									<Label>CPF</Label>
// 									<View style={styles.passwordContainer}>
// 										<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 									<TextInput
// 										style={styles.inputStyle}
// 										autoCorrect={false}
// 										placeholder=""
// 										/>
// 									</View>
// 								</DivInput>

// 								<DivRow>
// 									<DivInputSmall>
// 										<Label>DDD</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 										<TxtInputFormSmall
// 											autoCorrect={false}
// 											placeholder=""
// 											/>
// 										</View>
// 									</DivInputSmall>

// 									<DivInputMedium> 
// 										<Label>Celular</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 											<TextInput
// 												style={styles.inputStyle}
// 												autoCorrect={false}
// 												placeholder=""
// 												/>
// 										</View>
// 									</DivInputMedium>

// 								</DivRow>
								
// 							</Form>
// 						</ProgressStep>


// 						{/* INFORMAÇÕES DE ENDEREÇO */}

// 						<ProgressStep 
// 							label="" 
// 							previousBtnTextStyle={btnTextStyle} 
// 							nextBtnTextStyle={btnTextStyle} 
// 							previousBtnStyle={previousButtonStyle} 
// 							nextBtnStyle={buttonTextStyle} 
// 						>
// 							<SubtittleContainer>
// 								<SecundaryTittle>Informações de endereço:</SecundaryTittle>
// 							</SubtittleContainer>


// 							<Form>
// 								<DivRow>
// 									<DivInputMedium style={{backgroundColor:'#c78'}}>
// 										<Label>CEP:</Label>
// 											<View style={styles.passwordContainer}>
// 												<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 												<TextInput
// 													style={styles.inputStyle}
// 													autoCorrect={false}
// 													placeholder=""
// 												/>
// 											</View>
// 									</DivInputMedium>

// 									<DivInputMedium style={{backgroundColor:'#c78'}}>
// 									<Label>Cidade:</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 											<TextInput
// 												style={styles.inputStyle}
// 												autoCorrect={false}
// 												placeholder=""
// 											/>
// 										</View>
// 									</DivInputMedium>
// 								</DivRow>

								
// 								<DivInput>
// 									<Label>Endereço:</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 											<TextInput
// 												style={styles.inputStyle}
// 												autoCorrect={false}
// 												placeholder=""
// 											/>
// 										</View>
// 								</DivInput>

// 								<DivRow>

// 									<DivInputMedium>
// 										<Label>Bairro</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 											<TextInput
// 												style={styles.inputStyle}
// 												autoCorrect={false}
// 												placeholder=""
// 											/>
// 										</View>
// 									</DivInputMedium>

// 									<DivInputMedium>
// 										<Label>UF</Label>
// 										<View style={styles.passwordContainer}>
// 											<MaterialIcons style={styles.inputIcon} name={'vpn-key'} size={20} color={'#000'}/>
// 												<TextInput
// 													style={styles.inputStyle}
// 													autoCorrect={false}
// 													placeholder=""
// 												/>
// 										</View>
// 									</DivInputMedium>
								
// 								</DivRow>

// 							</Form>
// 						</ProgressStep>

// 						<ProgressStep 
// 							label="" 
// 							previousBtnTextStyle={btnTextStyle} 
// 							nextBtnTextStyle={btnTextStyle} 
// 							previousBtnStyle={previousButtonStyle} 
// 							nextBtnStyle={buttonTextStyle} 
// 						>
// 							<SubtittleContainer>
// 								<SecundaryTittle>Escolha sua melhor foto:</SecundaryTittle>
// 							</SubtittleContainer>

// 							<Form>
// 								<DivPhoto style={{backgroundColor:'#c78'}} > 
// 									<MaterialIcons  name={'vpn-key'} size={20} color={'#000'}></MaterialIcons>
// 								</DivPhoto>

// 								<DivButtonPhoto>
// 									<LargeButtonGrey>
// 										<Text>Adicionar uma foto</Text>
// 									</LargeButtonGrey>
// 								</DivButtonPhoto>
// 							</Form>
							
							

// 						</ProgressStep>
// 					</ProgressSteps>
// 				</Container>
// 			)
		
// 	}

// }


// const styles = StyleSheet.create({
// 	passwordContainer: {
// 		flexDirection: 'row',
// 		borderBottomWidth: 1.2,
// 		borderColor: '#B6B6B6',
// 		paddingHorizontal:3,
// 		alignItems:'center',
// 		// backgroundColor:'#c78'

// 	  },
// 	  inputStyle: {
// 		flex: 1,
// 		minHeight: 40,
// 		alignSelf: 'center',
// 		fontSize: 18,
// 		maxWidth: '80%'
		
// 	  },

// 	//   inputStyleMedium: {
// 	// 	// flex: 0.5,
// 	// 	minHeight: 40,
// 	// 	// width:
// 	// 	alignSelf: 'center',
// 	// 	fontSize: 18,
// 	// 	width:'50%'

// 	//   },

// 	  inputIcon:{
// 		  marginRight:15,
// 		//   marginLeft:-15
// 	  }


	  
//  });
