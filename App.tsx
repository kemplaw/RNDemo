/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Login } from './src/pages/Auth'
import { TodoContainer } from './src/pages/Todo'

declare const global: { HermesInternal: null | {} }

function HomeScreen(props: { extraData: number }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'>
          {props => <HomeScreen {...props} extraData={123} />}
        </Stack.Screen>
        <Stack.Screen name='Detail' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    backgroundColor: Colors.lighter
  }
})

export default App
