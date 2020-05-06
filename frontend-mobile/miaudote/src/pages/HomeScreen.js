import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';


class HomeScreen extends Component{

	loginPage = ( e ) => {
		this.props.navigation.navigate('Login')
	}

	signUpPage = ( e ) => {
		this.props.navigation.navigate('FormBasicInfo')	
	}

	skipToHome = ( e ) => {
		this.props.navigation.navigate('Teste')	
	}

	render(){
		return (
			<View style = { styles.container }>

				<View style = { styles.logoContainer }>
					<Image style= {styles.logo} source={require('../assets/logo.png')} />
				</View>

				<View style={styles.options}>
					<TouchableOpacity style={styles.loginButton} onPress={this.loginPage}>
						<Text style={styles.loginTextButton}>ENTRAR</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.signUpButton} onPress={this.signUpPage}>
						<Text style={styles.signUpTextButton}>CRIAR UMA CONTA</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.skipButton} onPress = {this.skipToHome}>
						<Text style = {styles.txtSkip}>
							Pular
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: '#ffffff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	logoContainer: {
		alignItems: 'center',
		height: '60%',
		width: '100%',
	},

	options: {
		// flexGrow: 1,
		height: '40%',
		width: '100%',
	},

	logo: {
		width: 300,
		height: 200,
		margin: 18,
		top:80
	},

	loginButton:{
		alignItems: 'center',
		height:50,
		width:300,
		borderColor:'#5A6978',
		backgroundColor:'rgba(0, 0, 0, 0.0)',
		borderWidth: 1.5,
		padding: 14,
		marginTop:20,
		borderRadius:21,
		alignSelf:"center"
	},

	signUpButton:{
		alignItems: 'center',
		height:50,
		width:300,
		borderColor:'#fc6b6e',
		backgroundColor:'#fc6b6e',
		borderWidth: 1.5,
		padding: 14,
		marginTop:35,
		borderRadius:21,
		alignSelf:"center"
	},

	loginTextButton: {
		color:'#5A6978',
		fontSize:15,
		fontWeight: "bold"
	},

	signUpTextButton: {
		color:'#FFF',
		fontSize:15,
		fontWeight: "bold"
	},

	txtSkip: {
		color: '#1bc7cb',
		fontSize: 23,
		alignSelf:"flex-end",
		position: 'absolute',
		bottom:25,
		right:25
		//   marginBottom: 12
	},

	skipButton: {
		alignSelf:"flex-end",
		position: 'absolute',
		bottom:25,
		right:25
	}


});

export default HomeScreen;