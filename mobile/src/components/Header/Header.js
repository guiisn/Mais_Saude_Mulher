import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import colors from '../../../StylesGlobals/colors';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.legend}>SAÚDE DA MULHER</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorSecondary,
    width: '100%',
    height: '15%',
    marginBottom: '5%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  legend: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 18,

    color: colors.colorPrimary,
},
});