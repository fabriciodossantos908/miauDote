import React, { Component } from 'react';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { TextInput } from 'react-native-paper';

import { Inner, Header, ImageIcon, Title, ProgressBar, ContainerIcon, Form, ContainerCenter, GenderView, IconGender } from './teste-styles'
import { ContainerGender, TextGender, Label, UnderlinetText } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';

export default class Teste extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			gender: '',
		}
	}

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
						<ImageBackground source={require('../../../assets/teste2.png')} style={{ height: 50 }} imageStyle={{ resizeMode: 'cover' }} />
						<Inner>
							<Header>
								<Title>Cadastre seu pet</Title>
								{/* <ImageIcon source={require('../../../assets/user-account1.png')}></ImageIcon> */}
							</Header>
							<ContainerCenter>
							<ContainerIcon>
								{/* <Icon name="paw" size={20} color="#ccc"> </Icon>
								<Icon name="paw" size={20} color="#ccc"> </Icon>
								<Icon name="paw" size={20} color="#ccc"> </Icon> */}
								<View style={{borderBottomWidth:1, marginRight: 10, borderBottomColor:'#1bc7cb', width:'45%'}}></View>
								<View style={{borderBottomWidth:1, borderBottomColor:'#1bc7cb', width:'45%'}}></View>
							</ContainerIcon>
							</ContainerCenter>

							<Form>
								{/* <SubtittleContainer style={{ marginBottom: 30 }}>
									<SecundaryTittle style={{ color: '#5A6978' }}>Informações Básicas:</SecundaryTittle>
								</SubtittleContainer> */}

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

								<ContainerGender>
									<View>
										<GenderView style={{ backgroundColor: '#60BDEF' }}>
											<IconGender source={require('../../../assets/male.png')} ></IconGender>
										</GenderView>
										<TextGender>macho</TextGender>
									</View>

									<View>
										<GenderView style={{ backgroundColor: '#F68E90' }}>
											<IconGender source={require('../../../assets/female.png')} ></IconGender>
										</GenderView>
										<TextGender>Fêmea</TextGender>
									</View>
								</ContainerGender>

								<TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 10 }}>
                                    <UnderlinetText>Sexo não identificado</UnderlinetText>
                                </TouchableOpacity>

							</Form>

							<ContainerButton>
								<TouchableOpacity style={styles.btn} onPress={this.nextPage}>
									<BtnText>Próximo</BtnText>
								</TouchableOpacity>
							</ContainerButton>
						</Inner>
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



