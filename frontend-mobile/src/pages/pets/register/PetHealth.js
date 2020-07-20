import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, View, StatusBar, TouchableOpacity } from "react-native";

import { RadioButton } from 'react-native-paper';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { HeaderDecoration, Head } from "./services/header";
import colors from "../../../components/colors";

import {
    Label, Main, Form, ContainerHealth, LabelHealth,
    DivRow, ContainerRadioButton, LabelGreen, LabelPink,
    ContainerQuestion, RowCenter, ButtonNext
}
    from './styles';
import { showAlertMessage } from "../../../components/alert";
import { IconArrow } from "../../../components/icons";





export default class PetHealth extends Component {

    constructor(props) {
        super(props)
        const { data } = this.props.route.params.params
        this.state = {
            name: data.name,
            gender: data.gender,
            type: data.type,
            uf: data.uf,
            city: data.city,
            breed:data.breed,
            age: data.age,
            porte: data.porte,
            color: data.color,
            description: data.description,
            // this page
            dewormed: null,
            vaccinated: null,
            castrated: null,
            needCare: null
        }
    }

    
    validate = () => {
		const { vaccinated, dewormed, castrated, needCare } = this.state

		if (vaccinated == null || dewormed == null  || castrated == null  || needCare == null ) {
			showAlertMessage('Ops...Parece que faltou algo!', 'Preencha todos os campos para prosseguir.')
			return false
		}
        return true
        
	}


    nextPage = (props) => {
        if(!this.validate()) return
        
        const data = this.state

		this.props.navigation.navigate('PetPhoto', {
			screen: 'PetHealth',
			params: { data },
		});
    }
    
    previousPage = () => {
        this.props.navigation.goBack(null)
    }

    render() {
        const { dewormed, vaccinated, castrated, needCare } = this.state

        console.log(this.state)

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
                            <View style={{ backgroundColor: '#fff' }}>
                                <TouchableOpacity onPress={this.previousPage}>
                                    <IconArrow />
                                </TouchableOpacity>
                            </View>
                            <Main>
                                <Head />
                                <Label>Nos informe sobre a saúde do seu pet</Label>
                                <Form style={{ alignItems: 'stretch' }}>
                                    <ContainerHealth>
                                        <View>
                                            <LabelHealth>
                                                Vermifugado:
                                            </LabelHealth>
                                        </View>

                                        <DivRow>
                                            <LabelGreen>Sim</LabelGreen>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.green}
                                                    value={dewormed}
                                                    status={dewormed == true ? 'checked' : 'unchecked'}
                                                    onPress={() => this.setState({ dewormed: true })}
                                                />
                                            </ContainerRadioButton>
                                        </DivRow>

                                        <DivRow>
                                            <LabelPink>Não</LabelPink>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value={dewormed}
                                                    status={dewormed == false ? 'checked' : "unchecked"}
                                                    onPress={() => this.setState({ dewormed: false })}
                                                >
                                                </RadioButton>
                                            </ContainerRadioButton>
                                        </DivRow>

                                    </ContainerHealth>

                                    <ContainerHealth style={{ marginTop: '8%' }}>
                                        <View>
                                            <LabelHealth>
                                                Vacinado:
                                            </LabelHealth>
                                        </View>

                                        <DivRow style={{ left: 13 }}>
                                            <LabelGreen>Sim</LabelGreen>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.green}
                                                    value={vaccinated}
                                                    status={vaccinated == true ? 'checked' : 'unchecked'}
                                                    onPress={() => this.setState({ vaccinated: true })}
                                                />
                                            </ContainerRadioButton>
                                        </DivRow>

                                        <DivRow>
                                            <LabelPink>Não</LabelPink>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value={vaccinated}
                                                    status={vaccinated == false ? 'checked' : 'unchecked'}
                                                    onPress={() => this.setState({ vaccinated: false })}
                                                />
                                            </ContainerRadioButton>
                                        </DivRow>
                                    </ContainerHealth>

                                    <ContainerHealth style={{ marginTop: '8%' }}>
                                        <View>
                                            <LabelHealth>
                                                Castrado:
                                            </LabelHealth>
                                        </View>

                                        <DivRow style={{ left: 13 }}>
                                            <LabelGreen>Sim</LabelGreen>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.green}
                                                    value={castrated}
                                                    status={castrated == true ? 'checked' : 'unchecked'}
                                                    onPress={() => this.setState({ castrated: true })}
                                                />
                                            </ContainerRadioButton>
                                        </DivRow>

                                        <DivRow>
                                            <LabelPink>Não</LabelPink>
                                            <ContainerRadioButton>
                                                <RadioButton
                                                    color={colors.pink}
                                                    value={castrated}
                                                    status={castrated == false ? 'checked' : 'unchecked'}
                                                    onPress={() => this.setState({ castrated: false })}
                                                />
                                            </ContainerRadioButton>
                                        </DivRow>

                                    </ContainerHealth>


                                    <ContainerQuestion>
                                        <Label>O Pet está precisando de cuidados veterinários?</Label>

                                        <RowCenter>
                                            <DivRow>
                                                <LabelGreen>Sim</LabelGreen>
                                                <ContainerRadioButton>
                                                    <RadioButton
                                                        color={colors.green}
                                                        value={needCare}
                                                        status={needCare == true ? 'checked' : 'unchecked'}
                                                        onPress={() => this.setState({ needCare: true })}
                                                    />
                                                </ContainerRadioButton>
                                            </DivRow>

                                            <DivRow>
                                                <LabelPink>Não</LabelPink>
                                                <ContainerRadioButton>
                                                    <RadioButton
                                                        color={colors.pink}
                                                        value={needCare}
                                                        status={needCare == false ? 'checked' : 'unchecked'}
                                                        onPress={() => this.setState({ needCare: false })}
                                                    />
                                                </ContainerRadioButton>
                                            </DivRow>
                                        </RowCenter>
                                    </ContainerQuestion>
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
