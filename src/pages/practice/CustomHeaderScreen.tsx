import { StackHeaderTitleProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'

export default function CustomHeaderScreen() {
  return (
    <View>
      <Text>custom header bar</Text>
    </View>
  )
}

export function CustomHeader(props: StackHeaderTitleProps) {
  console.log(props)

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>custom header</Text>
    </View>
  )
}
