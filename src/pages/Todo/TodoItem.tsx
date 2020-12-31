import React from 'react'
import { Text, View } from 'react-native'
import { TodoItemPropsDefine } from './types'

export default function TodoItem({ todo }: TodoItemPropsDefine) {
  return (
    <View>
      <Text>{todo.label}</Text>
    </View>
  )
}
