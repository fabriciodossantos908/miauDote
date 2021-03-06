import React, { Component } from "react";

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, View, TouchableOpacity, StatusBar, Image, Alert } from "react-native";

import {  Form, ContainerText, LabelBold, JustifyText, ContainerPetImager, PetImage, ButtonNext, ButtonChooseImage, TxtButton, Main } from './styles';
import { ContainerButton, BtnText } from '../../user/signUp/styles';
import { Heart, IconArrow } from "../../../components/icons";
import { HeaderDecoration, Head } from "./services/header";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';




export default class PetPhoto extends Component {

    constructor(props) {
        super(props)
        // const { data } = this.props.route.params.params
        this.state = {
            // name: data.name,
            // gender: data.gender,
            // type: data.type,
            // uf: data.uf,
            // city: data.city,
            // breed: data.breed,
            // age: data.age,
            // porte: data.porte,
            // color: data.color,
            // description: data.description,
            // dewormed: data.dewormed,
            // vaccinated: data.vaccinated,
            // castrated: data.castrated,
            // needCare: data.needCare,
            // latitude:data.latitude,
            // longitude:data.longitude,
            image: null,
            id_user:null,
        }
    }

    nextPage = () => {
        console.log(this.state)
    }

    componentDidMount() {
        this.getPermissionAsync();
      }
    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    
      _pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          // console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
    
      uploadImage = async () => {
        let { image } = this.state;
        let filename = image.split('/').pop();
    
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        const formData = new FormData();
    
        formData.append('file', { uri: image, name: filename, type })
    
        fetch(`http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets/upload/foto/${13}`, {
          method: 'PUT',
          body: formData
        }).then(response => {
          // console.log(response);
          response.json();
        }).then(result => {
          Alert.alert('Upload de imagem realizado com sucesso', 'Aleluuuuuuiaaaaaaaa');
        }).catch(error => {
          console.log(error);
        })
      }

    render() {

        console.log(this.state, 'aaaaaaaa')
        let { image } = this.state;

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

                                <Form style={{ alignItems: 'stretch' }}>
                                    <ContainerText>
                                        <LabelBold>
                                            Chegamos ao último passo!
                                        </LabelBold>

                                        <JustifyText>
                                            Escolha a melhor foto
                                            {this.state.gender == 'M' ? ' do ' : ' da '}
                                            {this.state.name} e derreta corações <Heart />
                                        </JustifyText>
                                    </ContainerText>

                                    <ContainerPetImager>
                                    {image == null ?
                                        <PetImage
                                            source={require('../../../assets/image2.png')}
                                        /> :
                                        image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop:'12%' }} />
                                    }

                                        <ButtonChooseImage onPress={this._pickImage}>
                                            <TxtButton>Escolher imagem</TxtButton>
                                        </ButtonChooseImage>

                                    </ContainerPetImager>
                                </Form>

                                <ContainerButton>
                                    <ButtonNext onPress={this.uploadImage}>
                                        <BtnText>Finalizar</BtnText>
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
