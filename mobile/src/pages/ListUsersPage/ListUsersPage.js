import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import colors from '../../../StylesGlobals/colors';

import Header from '../../components/Header/Header';

import register from '../../assets/image.png';
import api from '../../services/api';

export default function ListUsersPage({ navigation }) {
  
  async function users () {
    const response = await api.get('/create/user');
    console.log(response.data)
  }
  
  useEffect(() => {
    users()
  }, []);

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorPrimary,
    alignItems: 'center',
  },

});