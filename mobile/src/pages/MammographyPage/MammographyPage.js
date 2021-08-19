import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

import colors from '../../../StylesGlobals/colors';

import Header from '../../components/Header/Header';

export default function MammographyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Último ano em que realizou mamografia?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Não fez? Deixe em branco'
            placeholderTextColor={colors.colorPlaceholder}
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Possui nódulo/ caroço na mama?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Sim ou Não'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='default'
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Teve suas mamas avaliadas anteriormente?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Sim ou Não'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='default'
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Fez Radioterapia/ Quimioterapia?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Sim ou Não'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='default'
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Fez cirurgia na mama?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Sim ou Não'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='default'
            />
        </View>

        <View style={styles.input_container} >
          <Pressable style={styles.button} onPress={ () => navigation.navigate("Home") } >
            <Text style={styles.text_button} >Concluir Cadastro!</Text>
          </Pressable>
        </View>

      </View>

    </View>
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
    fontSize: 17.1,
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