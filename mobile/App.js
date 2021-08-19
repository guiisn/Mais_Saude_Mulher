import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/HomePage/HomePage';
import RegisterPage from './src/pages/RegisterPage/RegisterPage';
import AddressPage from './src/pages/AddressPage/AddressPage';
import CitologyPage from './src/pages/CitologyPage/CitologyPage';
import MammographyPage from './src/pages/MammographyPage/MammographyPage';
import ListUsersPage from './src/pages/ListUsersPage/ListUsersPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Register' component={RegisterPage} />
        <Stack.Screen name='Address' component={AddressPage} />
        <Stack.Screen name='Citology' component={CitologyPage} />
        <Stack.Screen name='Mammography' component={MammographyPage} />
        <Stack.Screen name='List' component={ListUsersPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

