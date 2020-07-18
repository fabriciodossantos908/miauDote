import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Animated, Dimensions, PixelRatio, Modal } from 'react-native'

import {
  ModalContainer,
  ModalTitle,
  ModalText,
  ContactInformationView,
  ContactInformationImage,
  ContactInformationText
} from './styles.js'


const ContactModal = ({ show, close }) => {

  return (
    <View style={styles.container}>
      <Modal style={styles.modal}
        // animationType='slide'
        // transparent={true}
        visible={true}
        // onRequestClose={() => {
        //   console.log('Modal fechado.');

      >
        <ModalTitle>
          Entre em Contato!
        </ModalTitle>

        <ModalText>
          Nós do miaudote estamos aqui para facilitar o encontro de pessoas que querem doar e adotar os pets,
          por isso fornecemos as informações de contato do doador para que vocês possam entrar em acordo sobre a adoção do pet.
        </ModalText>

        <ContactInformationView>
          <ContactInformationImage source={require('../../../assets/whatsapp-icon.png')} />
          <ContactInformationText onPress={close}>+55 11 95331-7466</ContactInformationText>
        </ContactInformationView>

        <ContactInformationView>
          <ContactInformationImage source={require('../../../assets/email-icon.png')} />
          <ContactInformationText style={{ fontSize: 13 }}>davisoares4456@gmail.com</ContactInformationText>
        </ContactInformationView>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
    position: 'absolute',
    top: 0,
    paddingBottom: 16,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  modal: {
    height: 360,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    alignSelf: 'center',
    borderWidth: 0
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

export default ContactModal