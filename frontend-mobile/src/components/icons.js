import React, { Component } from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from "./colors";
import { IconPetType, IconImage } from "../pages/pets/register/styles";

export function Heart (){
    return(
        <Icon name={'heart'} size={14} color={colors.pink} />
    )
}

export function IconPin () {
    return(
        <IconMaterialIcons name={'location-on'} color={'#F95F62'} size={24}></IconMaterialIcons>
    )
}

export function IconDog () {
    return (
        <IconPetType source={require('../assets/type-dog.png')} ></IconPetType>
    )
}

export function IconCat () {
    return (
        <IconPetType source={require('../assets/type-cat.png')} ></IconPetType>
    )
}

export function IconBird () {
    return (
        <IconPetType source={require('../assets/type-bird.png')} ></IconPetType>
    )
}

export function IconRabbit () {
    return (
        <IconPetType source={require('../assets/type-rabbit.png')} ></IconPetType>
    )
}

export function IconHamster () {
    return (
        <IconPetType source={require('../assets/type-hamster.png')} ></IconPetType>
    )
}



export function IconPawSmall() {
    return (
        <Icon name={'paw'} size={17} color={colors.green}></Icon>
    )
}

export function IconPawMedium() {
    return (
        <Icon name={'paw'} size={24} color={colors.green}></Icon>
    )
}

export function IconPawBig() {
    return (
        <Icon name={'paw'} size={31} color={colors.green}></Icon>
    )
}

export function IconFemale() {
    return (
        <IconImage source={require('../assets/female.png')} ></IconImage>
    )
}

export function IconMale() {
    return (
        <IconImage source={require('../assets/male.png')} ></IconImage>
    )
}

// ****** Icons pet disable ****** //


export function IconDogDisable () {
    return (
        <IconPetType source={require('../assets/type-dog-disable.png')} ></IconPetType>
    )
}

export function IconCatDisable () {
    return (
        <IconPetType source={require('../assets/type-cat-disable.png')} ></IconPetType>
    )
}

export function IconBirdDisable () {
    return (
        <IconPetType source={require('../assets/type-bird-disable.png')} ></IconPetType>
    )
}

export function IconRabbitDisable () {
    return (
        <IconPetType source={require('../assets/type-rabbit-disable.png')} ></IconPetType>
    )
}

export function IconHamsterDisable () {
    return (
        <IconPetType source={require('../assets/type-hamster-disable.png')} ></IconPetType>
    )
}


// Icones para o porte desativados
export function IconPawSmallDisable() {
    return (
        <Icon name={'paw'} size={17} color={'#999999'}></Icon>
    )
}

export function IconPawMediumDisable() {
    return (
        <Icon name={'paw'} size={24} color={'#999999'}></Icon>
    )
}

export function IconPawBigDisable() {
    return (
        <Icon name={'paw'} size={31} color={'#999999'}></Icon>
    )
}