import React, { Component } from 'react';
import { View, StyleSheet , Text, TextInput, Image, TouchableOpacity, Button } from 'react-native';


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
	HorizontalLine,
	DivInputMedium,
	DivRow,
	DivInputSmall,
	TxtInputFormSmall,
	DivPhoto,
	DivButtonPhoto,
	LargeButtonGrey} from './styles'


export default class SignUp extends Component {
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
            <View>
                <Text>Ola mundo</Text>
            </View>
        )

    }
}
