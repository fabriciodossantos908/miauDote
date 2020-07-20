import React, { Component } from "react";
import colors from "../../../../components/colors";
import { ImageBackground, View } from "react-native";
import { Header, ContainerCenter, ContainerIcon, Title } from "../styles";


export function HeaderDecoration() {
    return (
        <ImageBackground
            source={require('../../../../assets/head.png')}
            style={{ height: 50 }}
            imageStyle={{ resizeMode: 'cover' }}
        />
    )
};

export function Head() {
    return (
        <>
            <Header style={{marginBottom:8}}>
                <Title>Cadastre seu pet</Title>
            </Header>
            <ContainerCenter>
                <ContainerIcon>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#1bc7cb', width: '100%' }}></View>
                </ContainerIcon>
            </ContainerCenter>
        </>
    );
}