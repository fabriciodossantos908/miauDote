import React, { Component } from "react";

import { Container, Div, Title, Description, ActiveStep, DisableStep, StepView, ButtonNext, IconContainer } from "./styles";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';


export default class AboutDonation extends Component {

    nextPage = () => {
        this.props.navigation.navigate('AboutAdoption')
        // Alert.alert('OLHA O ALERTA', 'Clicou')
    }


    render() {
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <Container>
                    <Div style={{ marginTop: 0 }}>
                        <ImageBackground
                            style={{ height: 450, width: "100%" }}
                            source={require('../../../assets/donation.jpg')}>
                        </ImageBackground>
                    </Div>
                    <Div>
                        <Title>
                            Doe, salve vidas!
                        </Title>

                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat
                        </Description>
                    </Div>

                    <StepView>
                        <ActiveStep></ActiveStep>
                        <DisableStep></DisableStep>
                        <DisableStep></DisableStep>
                    </StepView>

                    <Icon onPress={this.nextPage} style={{ marginRight: 8, marginTop: 16, alignSelf: 'flex-end'}} name="md-arrow-round-forward" size={40} color="#1ab5b8" />
                </Container>
            </SafeAreaView>
        )
    }
}