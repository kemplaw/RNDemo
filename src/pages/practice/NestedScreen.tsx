import React from 'react'
import { Button, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function NestedChildAScreen({ navigation }: any) {
  return (
    <View>
      <Text>nested child a screen</Text>
      <Button title='to b' onPress={() => navigation.navigate('NestedChildB')} />
    </View>
  )
}

function NestedChildBScreen({ navigation }: any) {
  return (
    <View>
      <Text>nested child b screen</Text>
      <Button title='to a' onPress={() => navigation.navigate('NestedChildA')} />
    </View>
  )
}

const Tab = createBottomTabNavigator()

export const NestedScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='NestedChildA' component={NestedChildAScreen} />
      <Tab.Screen name='NestedChildB' component={NestedChildBScreen} />
    </Tab.Navigator>
  )
}
