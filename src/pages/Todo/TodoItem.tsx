import React from 'react'
import { Button, Text, View } from 'react-native'
import { TodoItemPropsDefine } from './types'

export default function TodoItem({ todo, onToggle }: TodoItemPropsDefine) {
  const { id: todoId } = todo

  return (
    <View>
      <Text>status: {todo.status}</Text>
      <Text>{todo.label}</Text>
      <Button title='toggle' onPress={() => onToggle(todoId)} />
    </View>
  )
}
