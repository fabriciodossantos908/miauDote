import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import {
  ModalContainer,
  ModalTitle,
  ModalText,
  ContactInformationView,
  ContactInformationImage,
  ContactInformationText
} from './styles.js'

const Modal = () => {
  return (
    <View style={styles.container}>
      <ModalContainer>
        <ModalTitle>
          Entre em Contato!
        </ModalTitle>

        <ModalText>
          Nós do miaudote estamos aqui para facilitar o encontro de pessoas que querem doar e adotar os pets,
          por isso fornecemos as informacoes de contato do doador para que vocês possam entrar em acordo sobre a adoção do pet.
        </ModalText>

        <ContactInformationView>
          <ContactInformationImage source={require('../../../assets/whatsapp-icon.png')} />
          <ContactInformationText>+55 11 95331-7466</ContactInformationText>
        </ContactInformationView>

        <ContactInformationView>
          <ContactInformationImage source={require('../../../assets/email-icon.png')} />
          <ContactInformationText style={{ fontSize: 13 }}>davisoares4456@gmail.com</ContactInformationText>
        </ContactInformationView>

      </ModalContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    padding: 16,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    height: '50%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    marginTop: 50,
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
})

export default Modal