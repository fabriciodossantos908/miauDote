import React, { Component } from 'react';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

import { ContainerRow, TextIcon, Label, UnderlinetText, Main, Form, IconView, ButtonNext } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { HeaderDecoration, Head } from './services/header';
import { IconFemale, IconMale } from '../../../components/icons';
import colors from '../../../components/colors';
import { showAlertMessage } from '../../../components/alert';

export default class PetBasicInfo extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			gender: '',
			buttonFemale: '#F68E90',
			buttonMale: '#60BDEF',
		}
	}

	validate = () => {
		const { name, gender } = this.state

		if (!name || !gender) {
			showAlertMessage('Ops...Parece que faltou algo!', 'Preencha todos os campos para prosseguir.')
			return false
		}
		return true
	}

	nextPage = (props) => {
		if (!this.validate()) return

		const data = this.state

		this.props.navigation.navigate('PetType', {
			screen: 'PetBasicInfo',
			params: { data },
		});
	}

	FontBold = () => {
		const { gender } = this.state
		gender === 'M' ? 'bold' : 'normal'
	}

	maleSelected = () => {
		const { gender } = this.state

		const text = 'M'
		const blue = '#60BDEF'
		const pink = '#F68E90'

		if (gender != text) {
			this.setState({ gender: text })
			this.setState({ buttonFemale: '#ccc' })
			this.setState({ buttonMale: blue })
		} else {
			this.setState({ gender: '' })
			this.setState({ buttonFemale: pink })
		}
	}

	femaleSelected = () => {
		const text = 'F'
		const pink = '#F68E90'

		this.setState({ gender: text })
		this.setState({ buttonMale: '#ccc' })
		this.setState({ buttonFemale: pink })
	}

	noneSelected = () => {
		const text = 'N'
		const grey = '#ccc'

		this.setState({ gender: text })
		this.setState({ buttonMale: grey })
		this.setState({ buttonFemale: grey })
	}

	render() {
		console.log(this.state)
		const { gender } = this.state

		let colorFont = gender === 'N' ? colors.pink : colors.green
		let maleFontWeight = gender === 'M' ? 'bold' : 'normal'
		let femaleFontWeight = gender === 'F' ? 'bold' : 'normal'

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
							<HeaderDecoration />
							<Main>
								<Head />

								<Form>
									<Label>Informe o nome do seu pet:</Label>

									<TextInput
										style={styles.input}
										label='Nome'
										mode={'outlined'}
										value={this.state.name || ''}
										onChangeText={txt => this.setState({name: txt})}
										theme={{
											colors: {
												primary: '#1bc7cb',
												underlineColor: 'transparent',
											}
										}} />

									<Label>Selecione o sexo do pet:
										<Text
											style={{ color: colorFont, fontWeight: 'bold' }}>
											{gender === 'F' ? ' Fêmea'
												: gender === 'M' ? ' Macho'
													: gender === 'N' ? ' Não identificado'
														: ''}
										</Text>
									</Label>

									<ContainerRow>
										<View>
											<IconView onPress={this.maleSelected} style={{ backgroundColor: this.state.buttonMale }}>
												<IconMale />
											</IconView>
											<TextIcon style={{ fontWeight: maleFontWeight }}>macho</TextIcon>
										</View>

										<View>
											<IconView onPress={this.femaleSelected} style={{ backgroundColor: this.state.buttonFemale }}>
												<IconFemale />
											</IconView>
											<TextIcon style={{ fontWeight: femaleFontWeight }}>Fêmea</TextIcon>
										</View>
									</ContainerRow>

									<TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 10 }} onPress={this.noneSelected}>
										<UnderlinetText>Não sei o sexo do pet</UnderlinetText>
									</TouchableOpacity>

								</Form>

								<ContainerButton>
									<ButtonNext onPress={this.nextPage}>
										<BtnText>Próximo</BtnText>
									</ButtonNext>
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
	input: {
		backgroundColor: '#f7f7f7',
		height: 40,
		alignSelf: 'stretch',
		marginBottom: 60,
		marginTop: 10
	},
})



