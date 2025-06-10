import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './presentation/screens/home/HomeScreen';

export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}
/*
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
//import LoginScreen from './presentation/screens/login/LoginScreen';
//const Stack = createStackNavigator();
<NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        { Aquí irán otras pantallas como Home, Register, etc }
      </Stack.Navigator>
    </NavigationContainer>*/
