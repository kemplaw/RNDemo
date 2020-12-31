import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

function BottomTabHomeScreen(props: any) {
  return (
    <View>
      <Text>bottom tab home screen</Text>
    </View>
  )
}

function BottomTabMyScreen(props: any) {
  return (
    <View>
      <Text>bottom tab my screen</Text>
    </View>
  )
}

export default function BottomTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='bottomTabHome'
        component={BottomTabHomeScreen}
        options={{ tabBarIcon: () => <Icon name='images-outline' size={25} /> }}
      />
      <Tab.Screen
        name='bottomTabMy'
        component={BottomTabMyScreen}
        options={{ tabBarIcon: () => <Icon name='logo-twitch' size={25} />, tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  )
}
