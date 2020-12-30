import React from 'react'
import { Text, View } from 'react-native'

export default function TabGroup(props: { children: any }) {
  return (
    <View>
      <Text>tab containerF</Text>
      {props.children}
    </View>
  )
}
