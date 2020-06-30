import React, { Component } from 'react';

import { View } from 'react-native';

import {
   Container,
   ImageEmail,
   TitleEmailConfirm,
   TextEmailConfirm
} from './styles'

export default class EmailConfirm extends Component{

   constructor(props) {
      super(props)

      this.state = {
         name: ''
      }
   }

   render() {

      return (
         <Container>
            <ImageEmail source = {require('../../../assets/email.png')} />
            <TitleEmailConfirm style={{fontFamily: 'Poppins_400Regular'}}>
               Confirme seu email
            </TitleEmailConfirm>
            <TextEmailConfirm>
               Olá Joanna falta pouco para concluirmos seu cadastro. 
               Para sua segurança enviamos uma mensagem de confirmação para jo****na@gmail.com
            </TextEmailConfirm>
         </Container>
      )

   }

}