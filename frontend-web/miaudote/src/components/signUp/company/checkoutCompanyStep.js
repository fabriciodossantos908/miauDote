import React, { Component } from 'react'
import CompanyBaseInfo from './companyBaseInfo'
import CompanyPersonalInfo from './companyPersonalInfo'
import CompanyAddress from './companyAddress'
import Home from '../../../pages/home'
// import * as yup from 'yup';
import RemoveMask from '../../../validations/RemoveMask';
import { makeStyles } from '@material-ui/core';

const rmvMask = new RemoveMask()

export class CheckoutCompanyStep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Reveal the actually registration step
      step: 1,
      nome_representante: "",
      email_representante: "",
      celular_representante: "",
      razao_social: "",
      nome_empresa: "",
      cnpj: "",
      telefone: "",
      cep: "",
      cidade: "",
      bairro: "",
      logradouro: "",
      numero: "",
      complemento: "",
      uf: "",
      id_tipo_servico: "1",
      url_logo: "https://urlFotoTeste.jpg",
      permissions: "COMPANY",
      senha: "",
      senha_confirmation: "",
      errors: ""
    }
    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.valInsert = this.valInsert.bind(this)
  }

  nextStep() {
    const { step } = this.state
    this.setState({
      step: step + 1
    });
  };

  prevStep() {
    const { step } = this.state
    this.setState({
      step: step - 1
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // valFormat(input) {

  //   let schema = yup.object().shape({
  //     nome_representante: yup
  //       .string()
  //       .min(10, "Nome e sobrenome meu caro milorde")
  //       .max(100, "Por favor, somente o primeiro nome e sobrenome"),
  //     email_representante: yup
  //       .string()
  //       .email("Coloque um email válido"),
  //     senha: yup
  //       .string()
  //       .min(8, "Muito curta a senha")
  //       .max(30, "Muita longa a senha"),
  //     razao_social: yup
  //       .string()
  //       .min(5)
  //       .max(50),
  //     nome_empresa: yup
  //       .string()
  //       .min(5)
  //       .max(100),
  //     celular_representante: yup
  //       .string()
  //       .length(11),
  //     cnpj: yup
  //       .string()
  //       .length(18),
  //     telefone: yup
  //       .string()
  //       .length(10),
  //     cep: yup
  //       .string()
  //       .length(8),
  //     cidade: yup
  //       .string()
  //       .min(3)
  //       .max(10),
  //     bairro: yup
  //       .string()
  //       .min(2)
  //       .max(100),
  //     logradouro: yup
  //       .string()
  //       .min(3)
  //       .max(100),
  //     numero: yup
  //       .string()
  //       .min(1)
  //       .max(50),
  //     complemento: yup
  //       .string()
  //       .min(5)
  //       .max(50),
  //     uf: yup
  //       .string()
  //       .length(2)
  //     // .required()
  //   });

  //   schema
  //     .isValid(input)
  //     .then(function (valid) {
  //       console.log("valid " + valid)
  //     })

  //   schema.validate(input).catch(function (err) {
  //     console.log(err.errors)
  //   });
  // }

  valInsert(event) {
    if (event.target.name === "celular_representante" || "telefone") {
      const field = {
        [event.target.name]: rmvMask.trimSlash(rmvMask.trimMaskCell(event.target.value))
      }
       this.valFormat(field)
       console.log(this.state.errors)
    }
    else {
      const field = {
        [event.target.name]: event.target.value
      }
      this.valFormat(field)
    }
  }

   
  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        }
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop: 100,
        maxWidth: 800,
        minHeight: 500
      },
    }))

    const { step } = this.state
    switch (step) {
      case 1:
        return (
          <CompanyBaseInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            state={this.state}
            useStyles={useStyles}
          />
        );
      case 2:
        return (
          <CompanyPersonalInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            state={this.state}
            valInsert={this.valInsert}
          />
        );
      case 3:
        return (
          <CompanyAddress
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            state={this.state}
            valInsert={this.valInsert}
          />
        );

      default: return <Home/>
    }
  }
}

export default CheckoutCompanyStep