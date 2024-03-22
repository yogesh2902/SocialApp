import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Auth/Login/Login'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'

type Props = {}

const App = (props: Props) => {
  return (
    <NavigationContainer>

      <AuthStack />

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})