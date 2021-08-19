import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform,TextInput, Pressable, Alert } from 'react-native';
import * as yup from 'yup';

import api from '../../services/api';

import Header from '../../components/Header/Header';
import colors from '../../../StylesGlobals/colors';

export default function RegisterPage({ navigation }) {
  const [userName, setUserName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [susCard, setsusCard] = useState('');

  async function handleSubmit() {
    try {
      const validade = yup.object.shape({
        userName: yup.string().required('O nome é obrigatório'),
        motherName: yup.string().required('O nome da mãe é obrigatório'),
        birthDate: yup.string().required('A data de nascimento é obrigatório'),
        cpf: yup.string().required('O cpf é obrigatório'),
        susCard: yup.string().required('O cartão sus é obrigatório'),
      });

      await validade.validade({
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        console.log(err)
      }
    };
    

    const res = await api.post('/create/user', {
      name: userName,
      mother_name: motherName,
      birth_date: birthDate,
      cpf: cpf,
      sus_card: susCard,
    });

    console.log(res.data)
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior='padding' style={styles.container}>
      <Header />
      <View style={styles.form}>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Seu nome:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Maria da Silva'
            placeholderTextColor={colors.colorPlaceholder}
            autoCapitalize='words'
            value={userName}
            onChangeText={setUserName}
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Nome da mãe:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Joana da Silva'
            placeholderTextColor={colors.colorPlaceholder}
            autoCapitalize='words'
            value={motherName}
            onChangeText={setMotherName}
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Data de nascimento:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='24/04/1994'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='numeric'
            value={birthDate}
            onChangeText={setBirthDate}
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >CPF:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='000.000.000-00'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='numeric'
            value={cpf}
            onChangeText={setCpf}
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Cartão sus:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='000.000.000-00'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='numeric'
            value={susCard}
            onChangeText={setsusCard}
            />
        </View>

        <View style={styles.input_container} >
          <Pressable style={styles.button} onPress={handleSubmit} >
            <Text style={styles.text_button} >Avançar</Text>
          </Pressable>
        </View>

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    alignItems: 'center',
  },

  form: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center'
  },

  input_container: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',

    width: '100%'
  },

  texts: {
    color: colors.colorSecondary,
    fontWeight: 'normal',
    fontSize: 23,
  },

  input: {
    borderWidth: 1.5,
    borderColor: colors.colorSecondary,
    width: '100%',
    height: 40,
    borderRadius: 5,

    marginTop: '5%',
    marginBottom: '5%',

    textAlign: 'center'
  },  

  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.colorSecondary,
    borderRadius: 5,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_button: {
    fontWeight: 'bold',
    lineHeight: 31,
    fontSize: 22,
    color: colors.colorPrimary,
  },

});