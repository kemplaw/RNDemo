import React from 'react'
import { Text, View } from 'react-native'

export default function TabGroup(props: { children: any }) {
  return (
    <View>
      <Text>tab container</Text>
      {props.children}
    </View>
  )
}
