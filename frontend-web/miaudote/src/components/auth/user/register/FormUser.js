import React, { Component } from 'react'
import FormUserInitialInfo from './FormUserInitialnfo'
import FormPersonalInfo from './FormUserPersonalInfo'
import FormUserAddress from './FormUserAddress'
import Confirm from './Confirm'
import Home from '../../../../pages/home'
import '../../../../api/cep'
import Cep from '../../../../api/cep';
import * as yup from 'yup';
import RemoveMask from '../../../../validations/RemoveMask';


const mask = new RemoveMask()

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            nome: "",
            email: "",
            celular: "",
            senha: "",
            data_nascimento: "",
            sexo: "",
            cpf: "",
            cep: "",
            cidade: "",
            bairro: "",
            logradouro: "",
            uf: "",
            url_foto: "",
            permissions: "USER",
            senha_confirmation: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.nextStep = this.nextStep.bind(this)
        this.prevStep = this.prevStep.bind(this)
        this.valInsert = this.valInsert.bind(this)
    }

    nextStep() {
        const { step } = this.state
        const next = step + 1;

        this.setState({
            step: next
        });
    };

    prevStep() {
        const { step } = this.state
        const prev = step - 1;

        this.setState({
            step: prev
        });
        return console.log("Should make you go back")
    };

    valFormat(input) {

        let schema = yup.object().shape({
            nome_representante: yup
                .string()
                .min(10, "Nome e sobrenome meu caro milorde")
                .max(100, "Por favor, somente o primeiro nome e sobrenome"),
            email: yup
                .string()
                .email("Coloque um email válido"),
            senha: yup
                .string()
                .min(8, "Muito curta a senha")
                .max(30, "Muita longa a senha"),
            celular: yup
                .string()
                .length(11),
            cep: yup
                .string()
                .length(8),
            cidade: yup
                .string()
                .min(3)
                .max(10),
            bairro: yup
                .string()
                .min(2)
                .max(100),
            logradouro: yup
                .string()
                .min(3)
                .max(100),
            numero: yup
                .string()
                .min(1)
                .max(50),
            complemento: yup
                .string()
                .min(5)
                .max(50),
            uf: yup
                .string()
                .length(2),
            dt_nasc: yup
                .date(),
            sexo: yup
                .string()
                .length(1, "Defina o sexo com um caractére"),
            cpf: yup
            .string()
            .length(14, "Por favor, complete o seu cpf")
        });

        schema
            .isValid(input)
            .then(function (valid) {
                console.log("valid " + valid)
            })

            schema.validate(input).catch(function (err) {
            console.log(err.errors)
        });

    }

    valInsert(event) {
        if (event.target.name === "celular") {
            const field = {
                [event.target.name]: mask.trimSlash(mask.trimMaskCell(event.target.value))
            }
            this.valFormat(field)
        }
        else if(event.target.name === "cpf"){
            const field = {
                [event.target.name]: mask.repEmptyCpf(event.target.value)
            }
            this.valFormat(field)
        }
        else if(event.target.name === "cep"){
            const field = {
                [event.target.name]: mask.trimSlash(mask.trimMaskCep(event.target.value))
            }
            this.valFormat(field)            
        }
        else {
            const field = {
                [event.target.name]: event.target.value
            }
            this.valFormat(field)
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { step } = this.state
        const state = this.state

        switch (step) {
            case 1: return (
                < FormUserInitialInfo
                    seachCep={Cep}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    validInsert={this.valInsert}
                    state={state}
                />
            );
            case 2: {
                return (
                    <FormPersonalInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        validInsert={this.valInsert}
                        state={state}
                    />

                );
            }
            case 3: {
                return (
                    <FormUserAddress
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        validInsert={this.valInsert}
                        state={state}
                    />

                );
            }
            case 4: {
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        state={state}
                    />

                );
            }
            default: return <Home />
        }
    }
}
