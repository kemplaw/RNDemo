/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useLayoutEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

declare const global: { HermesInternal: null | {} }

function HomeScreen(props: { [key: string]: any } & { extraData: any }) {
  const { navigation } = props
  const [count, setCount] = useState(0)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return <Button title='header right' onPress={() => setCount(count => count + 1)} />
      }
    })
  }, [navigation])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen, count: {count}</Text>
      <Button
        title='to details'
        onPress={() => props.navigation.navigate('Detail', { data: { value: 123 } })}
      />
    </View>
  )
}

function DetailsScreen({ route, navigation }: any) {
  const { data } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}

const CustomHeader = (props: any) => (
  <View>
    <Text>custom header, {props.title}</Text>
  </View>
)

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          options={{
            headerTitle: 'header text',
            headerRight: () => (
              <View>
                <Text>right button</Text>
              </View>
            )
          }}
        >
          {props => <HomeScreen {...props} extraData={123} />}
        </Stack.Screen>
        <Stack.Screen name='Detail' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
