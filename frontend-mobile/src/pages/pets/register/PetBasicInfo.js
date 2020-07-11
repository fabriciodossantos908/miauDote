import React, { Component } from 'react';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

// import { Main, Header, Title, ContainerIcon, Form, ContainerCenter, IconView, IconImage } from './teste-styles'
import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Header, Title, ContainerCenter, ContainerIcon, Form, IconView, IconImage } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';

export default class PetBasicInfo extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			gender: '',
			buttonColor: '#60BDEF',
		}
	}

	nextPage = () => {
		// console.log(this.state)
		this.props.navigation.navigate('PetType')
	}

	maleSelected = () => {
		this.state.gender = 'M'
	}

	femaleSelected = () => {
		this.state.gender = 'F'
	}

	// mudando a cor do botão ao clicar
	// onButtonPress = () => {
	// 	const text = 'M'
	// 	const check = '../../../assets/check.png'

	//     this.state.gender = text
	// 	this.setState({ buttonColor: '#ccc' })
	// 	// this.setState({ icon: check})
	// }

	render() {
		return (
			<React.Fragment>

				<StatusBar barStyle={'light-content'} backgroundColor='#FC6B6E' />
				<KeyboardAvoidingView
					// behavior={Platform.OS == "ios" ? "padding" : "height"}
					behavior={"height"}
					style={{ flex: 1 }}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
							<ImageBackground source={require('../../../assets/head.png')} style={{ height: 50 }} imageStyle={{ resizeMode: 'cover' }} />
							<Main>
								<Header>
									<Title>Cadastre seu pet</Title>
								</Header>
								<ContainerCenter>
									<ContainerIcon>
										<View style={{ borderBottomWidth: 1, borderBottomColor: '#1bc7cb', width: '100%' }}></View>
									</ContainerIcon>
								</ContainerCenter>

								<Form>
									<Label>Informe o nome do seu pet:</Label>

									<TextInput
										style={styles.input}
										label='Nome'
										mode={'outlined'}
										value={this.state.name || ''}
										onChangeText={() => { }}
										theme={{
											// roundness: 50,
											colors: {
												primary: '#1bc7cb',
												underlineColor: 'transparent',
											}
										}} />

									<Label>Qual o sexo do pet?</Label>

									<ContainerRow>
										<View>
											<IconView onPress={this.maleSelected} style={{ backgroundColor: '#60BDEF' }}>
												<IconImage source={require('../../../assets/male.png')} ></IconImage>
											</IconView>
											<TextIcon>macho</TextIcon>
										</View>

										<View>
											<IconView onPress={this.femaleSelected} style={{ backgroundColor: '#F68E90' }}>
												<IconImage source={require('../../../assets/female.png')} ></IconImage>
											</IconView>
											<TextIcon>Fêmea</TextIcon>
										</View>
									</ContainerRow>

									<TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 10 }}>
										<UnderlinetText>Sexo não identificado</UnderlinetText>
									</TouchableOpacity>

								</Form>

								<ContainerButton>
									<TouchableOpacity style={styles.btn} onPress={this.nextPage}>
										<BtnText>Próximo</BtnText>
									</TouchableOpacity>
								</ContainerButton>
							</Main>
						</ScrollView>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</React.Fragment>
		)
	}

}

const styles = StyleSheet.create({
	btn: {
		height: 45,
		width: 130,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#1bc7cb',
		borderRadius: 5
	},

	input: {
		backgroundColor: '#ffff',
		height: 40,
		alignSelf: 'stretch',
		marginBottom: 60,
		marginTop: 10
	},
})



