import React, { Component } from 'react'
import CompanyBaseInfo from './companyBaseInfo'
import CompanyPersonalInfo from './companyPersonalInfo'
import CompanyAddress from './companyAddress'
import Home from '../../../../pages/home'
import * as yup from 'yup';
import { setLocale } from 'yup';

export class FormCompany extends Component {
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
      company_error: ""
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

  ValidateFields(company) {

    setLocale({
      number: {
        min: 'Deve ser maior que  ${min}',
        max: 'Deve ser menor que  ${max}',
      },
    });
    let schema = yup.object().shape({
      nome_representante: yup
        .string()
        .min(10)
        .max(100),
      email_representante: yup
        .string()
        .email(),
      senha: yup
        .string()
        .min(8)
        .max(30),
      razao_social: yup
        .string()
        .min(5)
        .max(50),
      nome_empresa: yup
        .string()
        .min(5)
        .max(100),
      celular_representante: yup
        .string()
        .length(11),
      cnpj: yup
        .string()
        .length(14),
      telefone: yup
        .string()
        .length(10),
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
        .length(2)
        // .required()
    });

    schema
      .isValid(company)
      .then(function (valid) {
        console.log("valid " + valid)
      })

      schema.validate(company).catch(function (err) {
        console.log(err.errors);
      });


  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { step } = this.state
    switch (step) {
      case 1:
        return (
          <CompanyBaseInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            state={this.state}
            valInsert={this.valInsert}
          />
        );
      case 2:
        return (
          <CompanyPersonalInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            state={this.state}
          />
        );
      case 3:
        return (
          <CompanyAddress
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            valInsert={this.valInsert}
            state={this.state}
          />
        );

      default: return <Home />
    }
  }
}

export default FormCompany