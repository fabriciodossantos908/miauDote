import React, { Component } from 'react';
import { Picker, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, StyleSheet, View, StatusBar, Text, TouchableOpacity } from "react-native";
import { ContainerRow, TextIcon, Label, Main, Form, IconView, ContainerPetLocal, ButtonNext, ContainerButton, ButtonPrevious, ButtonNextOutline, BtnTextOutline } from './styles';
import { BtnText } from '../../user/signUp/styles';
import colors from '../../../components/colors'
import { HeaderDecoration, Head } from './services/header';
import { IconPin, IconDog, IconCat, IconBird, IconRabbit, IconHamster, IconDogDisable, IconCatDisable, IconBirdDisable, IconRabbitDisable, IconHamsterDisable, IconArrow } from "../../../components/icons";
import Axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { showAlertMessage } from '../../../components/alert';



// import removerAcentos from '../../../services/Regex';



export default class PetType extends Component {

    constructor(props) {
        super(props)
        const { data } = this.props.route.params.params
        this.state = {
            name: data.name,
            gender: data.gender,
            latitude:data.latitude,
            longitude:data.longitude,
            type: null,
            ufs: [],
            selectedUf: '',
            selectedCity: '',
            cities: [],
            font: 'bold'
        }
    }

    componentDidMount = () => {
        Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
            .then(response => {
                const ufInitials = response.data.map(uf => uf.sigla)


                this.setState({ ufs: ufInitials })

                try {
                    if (this.state.selectedUf != '' || this.state.selectedUf != '0') {
                        this.handleCities()
                    }
                } catch (error) {
                    null
                }


            })

    }


    handleCities = (value) => {
        // const { selectedUf } = this.state
        const uf = value;
        Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(response => {
                const citiesName = response.data.map(city => city.nome)

                this.setState({ cities: citiesName })
            })

    }

    validate = () => {
        const { type, selectedUf, selectedCity } = this.state

        if (!type || !selectedUf || !selectedCity) {
            showAlertMessage('Ops...Parece que faltou algo!', 'Preencha todos os campos para prosseguir.')
            return false
        }
        return true

    }

    nextPage = () => {

        if (!this.validate()) return

        const data = this.state

        this.props.navigation.navigate('PetBreed', {
            screen: 'PetType',
            params: { data },
        });
    }

    previousPage = () => {
        this.props.navigation.goBack(null)
    }

    FontBold = () => {
        const { type } = this.state
        type === 'cão' ? 'bold' : 'normal'
    }

    render() {

        // if(this.state.selectedUf != ''){
        //     this.handleUfs()
        // }

        console.log(this.state)
        console.log(this.state.selectedUf)


        const { type, ufs, cities, selectedUf } = this.state

        const bold = 'bold'
        const normal = 'normal'

        let FontDog = type === 'cão' ? bold : normal
        let FontCat = type === 'gato' ? bold : normal
        let FontBird = type === 'pássaro' ? bold : normal
        let FontRabbit = type === 'coelho' ? bold : normal
        let FontRodent = type === 'roedor' ? bold : normal



        return (
            <React.Fragment>
                <StatusBar barStyle={'light-content'} backgroundColor={colors.pink} />
                <KeyboardAvoidingView
                    // behavior={Platform.OS == "ios" ? "padding" : "height"}
                    behavior={"height"}
                    style={{ flex: 1 }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            {/* <ImageBackground source={require('../../../assets/head.png')} style={{ height: 50 }} imageStyle={{ resizeMode: 'cover' }} /> */}
                            <HeaderDecoration />
                            <View style={{ backgroundColor: '#fff' }}>
                                <TouchableOpacity onPress={this.previousPage}>
                                    <IconArrow />
                                </TouchableOpacity>
                            </View>
                            <Main>
                                <Head />

                                <Form style={{ top: 20 }}>
                                    <Label>Qual o tipo do seu pet?
                                        <Text style={{ color: colors.green, fontWeight: 'bold' }}> {type} </Text>
                                    </Label>

                                    <ContainerRow style={{ justifyContent: "space-around" }}>
                                        <View>
                                            <IconView onPress={() => this.setState({ type: 'cão' })}>
                                                {/* <IconDog /> */}
                                                {type === null || type === 'cão' ? <IconDog /> : <IconDogDisable />}
                                            </IconView>
                                            <TextIcon style={{ fontWeight: FontDog }}>Cão</TextIcon>
                                        </View>

                                        <View>
                                            <IconView onPress={() => this.setState({ type: 'gato' })}>
                                                {/* <IconCat /> */}
                                                {type === null || type === 'gato' ? <IconCat /> : <IconCatDisable />}
                                            </IconView>
                                            <TextIcon style={{ fontWeight: FontCat }}>Gato</TextIcon>
                                        </View>

                                        <View>
                                            <IconView onPress={() => this.setState({ type: 'pássaro' })}>
                                                {type === null || type === 'pássaro' ? <IconBird /> : <IconBirdDisable />}
                                            </IconView>
                                            <TextIcon style={{ fontWeight: FontBird }}>Pássaro</TextIcon>
                                        </View>

                                    </ContainerRow>

                                    <ContainerRow >
                                        <View>
                                            <IconView onPress={() => this.setState({ type: 'coelho' })}>
                                                {type === null || type === 'coelho' ? <IconRabbit /> : <IconRabbitDisable />}
                                            </IconView>
                                            <TextIcon style={{ fontWeight: FontRabbit }}>Coelho</TextIcon>
                                        </View>
                                        <View>
                                            <IconView onPress={() => this.setState({ type: 'roedor' })}>
                                                {type === null || type === 'roedor' ? <IconHamster /> : <IconHamsterDisable />}
                                            </IconView>
                                            <TextIcon style={{ fontWeight: FontRodent }}>Roedor</TextIcon>
                                        </View>
                                    </ContainerRow>

                                    <ContainerPetLocal>
                                        <Label>Localização do pet <IconPin /> </Label>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Picker
                                                style={{ height: 50, width: '30%' }}
                                                selectedValue={this.state.selectedUf}
                                                onValueChange={(value) =>
                                                    this.setState({ selectedUf: value }, this.handleCities(value))}
                                            >
                                                <Picker.Item color='#ccc' label="UF" value="0" />
                                                {ufs.map(uf => {
                                                    return <Picker.Item key={uf} label={uf} value={uf} />
                                                })}
                                            </Picker>

                                            <Picker
                                                style={{ height: 50, width: '70%' }}
                                                selectedValue={this.state.selectedCity}
                                                onValueChange={(value) =>
                                                    this.setState({ selectedCity: value })}
                                            >
                                                <Picker.Item color='#ccc' label="Cidade" value="0" />
                                                {selectedUf == '' || selectedUf == '0' ?
                                                    <Picker.Item color={colors.pink} label="Nenhum estado selecionado." value="0" />
                                                    :
                                                cities.map(cities => {
                                                    return <Picker.Item key={cities} label={cities} value={cities} />
                                                })}
                                            </Picker>
                                        </View>
                                    </ContainerPetLocal>
                                </Form>


                                <ContainerButton style={{ marginTop: '13%' }}>
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

const styles = StyleSheet.create({
    inputSmall: {
        backgroundColor: colors.grey1,
        height: 40,
        alignSelf: 'stretch',
        marginTop: 10,
        width: '30%',
        marginRight: 10
    },

    input: {
        backgroundColor: '#ffff',
        height: 40,
        alignSelf: 'stretch',
        marginTop: 10,
        width: '65%'
    },
})



