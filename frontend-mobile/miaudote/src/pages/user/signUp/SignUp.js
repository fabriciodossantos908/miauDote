import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';

import { ProgressSteps, ProgressStep, circleStyle } from 'react-native-progress-steps';
export default class SignUp extends Component {

	constructor() {
		super()
		this.state = {
			
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
			activeStepIconBorderColor: '#686868',
			activeLabelColor: '#686868',
			activeStepNumColor: 'white',
			activeStepIconColor: '#686868',
			completedStepIconColor: '#686868',
			completedProgressBarColor: '#686868',
			completedCheckColor: '#4bb543', 
		  };

		  const circleStyle = {
			width: 20,
			height: 20,
		  }

			
			return (
				<View style={{flex: 1}}>
					<ProgressSteps  circleStyle={circleStyle} {...progressStepsStyle} >
						<ProgressStep  nextBtnTextStyle={btnTextStyle} nextBtnStyle={buttonTextStyle} label="First Step">
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 1!</Text>
							</View>
						</ProgressStep>
						<ProgressStep previousBtnTextStyle={btnTextStyle} label="Second Step" nextBtnTextStyle={btnTextStyle} previousBtnStyle={previousButtonStyle} nextBtnStyle={buttonTextStyle} >
							<View style={{ alignItems: 'center' }}>
								<Text>This is the content within step 2!</Text>
							</View>
						</ProgressStep>
					</ProgressSteps>
				</View>
			)
		
	}

}
