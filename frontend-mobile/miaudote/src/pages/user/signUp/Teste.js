import React, { Component } from 'react'
import { View, StyleSheet, Text, Alert, TextInput, Button, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';



// const testando = (props) => {
//     const dentistas = props.dentistas
//     console.log(this.state)
// }


export default class Teste extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            confirmPassword: '',
        }
        // const { params } = this.props.route.params
        // this.state = {
        // 	data: params.data
        // }
    }

    teste = () => {
        // console.log('eu sou um TESTEEEEEE!!!!')

        // return console.log(this.state)
        
        let _string = JSON.stringify(this.state) //convertendo objeto em string
        let _obejto = JSON.parse(_string) //convertendo string em objeto

        alert("string " + _string)
        alert("objeto " + _obejto)
        
        
    }

    nextPage = ( props ) => {

        // A variavel recebe os valosres do estado
        const  _string  = this.state

        // alert(_string)
        // console.log(_string)

        this.props.navigation.navigate('HomeTeste', {
			screen: 'Teste',
			params: { _string }, //passando os valores do state para a próxima pagina
            }); 
           
        
    }

    render() {
        console.log("Vim da tela teste" + JSON.stringify(this.state))

        return (
            <KeyboardAvoidingView
                // behavior={Platform.OS == "ios" ? "padding" : "height"}
                behavior={"height"}
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* <ScrollView> */}
                    <View style={styles.inner}>
                        <View style={{ marginTop: 70, bottom: 20 }}>
                            <Text style={styles.header}>header</Text>
                        </View>
                        <View>
                            <TextInput 
                            placeholder="Username" 
                            style={styles.textInput} 
                            onChangeText={txt => this.setState({ name: txt })} />

                            <TextInput 
                            placeholder="password" 
                            style={styles.textInput} 
                            onChangeText={txt => this.setState({ password: txt })} />

                            <TextInput 
                            placeholder="Confirm password" 
                            style={styles.textInput} 
                            onChangeText={txt => this.setState({ confirmPassword: txt })} />
                        </View>
                        <View style={styles.btnContainer}>
                            <Button title="Submit" onPress={this.nextPage} />
                        </View>
                    </View>
                    {/* </ScrollView> */}
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
        top: 10
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 70,
        backgroundColor: '#c78'
    }
});
