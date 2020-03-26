import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
export default class SignUp extends Component {

	constructor() {
		super()
		this.state = {
			
		}
	}
	
	
		
	render() {
		
		const activeStepIconBorderColor = {
			color: '#c789'
		}

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
			color:'#fff'
		}

		
			
			return (
				<View style={{flex: 1}}>
					<ProgressSteps>
						<ProgressStep nextBtnStyle={buttonTextStyle} label="First Step" activeStepIconBorderColor={activeStepIconBorderColor}>
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 1!</Text>
							</View>
						</ProgressStep>
						<ProgressStep label="Second Step"  previousBtnStyle={previousButtonStyle} nextBtnStyle={buttonTextStyle} >
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 2!</Text>
							</View>
						</ProgressStep>
					</ProgressSteps>
				</View>
			)
		
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		justifyContent: "center",
	},

})