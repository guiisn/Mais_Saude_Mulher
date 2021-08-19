import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import colors from '../../../StylesGlobals/colors';

import Header from '../../components/Header/Header';

import register from '../../assets/image.png';
import list from '../../assets/list.png';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <View style={styles.options} >
            <Pressable style={styles.opt} onPress={ () => navigation.navigate('Register') } >        
                <View >
                    <View>
                        <Image source={register}  style={styles.img} />
                    </View>
                    <View >
                        <Text style={styles.legend} >Cadastrar</Text>
                    </View>
                </View>
            </Pressable>

            <Pressable style={styles.opt} onPress={ () => navigation.navigate('List') } >
                <View >
                    <View style={styles.image} >
                        <Image source={list}  style={styles.img} />
                    </View>
                    <View >
                        <Text style={styles.legend}>Listar</Text>
                    </View>
                </View>
            </Pressable>
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

  options: {
      width: '80%',
      display: 'flex',
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'space-between'
  },

  opt: {
    width: '47%',
    height: 160,

    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: colors.colorPlaceholder,
    borderRadius: 10,

    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',
  }, 

  img: {
      marginBottom: '15%',
      resizeMode: 'stretch',
  },

  legend: {
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: 18,

      color: colors.colorText,
  },
});