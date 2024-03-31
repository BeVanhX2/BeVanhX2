import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/navigator/TabNavigation';
import DetailScreen from './src/screens/DetailScreen';
import BookingScreen from './src/screens/BookingScreen';
import InfomationScreen from './src/screens/InfomationScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={SplashScreen}></Stack.Screen>
        <Stack.Screen name='SignIn' component={SignInScreen}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name='HomeStack' component={TabNavigation}></Stack.Screen>
        <Stack.Screen name='Detail' component={DetailScreen}></Stack.Screen>
        <Stack.Screen name='Booking' component={BookingScreen}></Stack.Screen>
        <Stack.Screen name='Info' component={InfomationScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})