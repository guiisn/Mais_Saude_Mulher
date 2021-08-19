import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

import colors from '../../../StylesGlobals/colors';

import Header from '../../components/Header/Header';

export default function CitologyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Último ano em que realizou citologia?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Não fez? Deixe em branco'
            placeholderTextColor={colors.colorPlaceholder}
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Usa DIU/ Pílula anticoncepcional?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Sim ou Não'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='default'
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Já fez Radioterapia/ Quimioterapia?</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Sim ou Não'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='default'
            />
        </View>

        <View style={styles.input_container} >
          <Text style={styles.texts} >Data da última menstruação:</Text>
          <TextInput 
            style={styles.input} 
            placeholder='00/00/0000'
            placeholderTextColor={colors.colorPlaceholder}
            keyboardType='numeric'
            />
        </View>

        <View style={styles.input_container} >
          <Pressable style={styles.button} onPress={ () => navigation.navigate("Mammography") } >
            <Text style={styles.text_button} >Avançar</Text>
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