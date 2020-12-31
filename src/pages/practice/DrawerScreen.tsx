import React from 'react'
import { Button, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

function DrawerHomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>drawer screen</Text>
      <Button title='open' onPress={() => navigation.navigate('notification')} />
      <Button title='function open' onPress={() => navigation.openDrawer()} />
      <Button
        title='dispatch to open'
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  )
}

function NotificationScreen() {
  return (
    <View>
      <Text>drawer screen 1</Text>
    </View>
  )
}

export default function DrawerScreen() {
  return (
    <Drawer.Navigator initialRouteName='home'>
      <Drawer.Screen name='home' component={DrawerHomeScreen} />
      <Drawer.Screen name='notification' component={NotificationScreen} />
    </Drawer.Navigator>
  )
}
