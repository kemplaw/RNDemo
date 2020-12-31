import React, { useCallback } from 'react'
import { Text, View } from 'react-native'
import { TabGroup, TabItem } from '../components'
import TodoHelper from './TodoHelper'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { TodoStatus } from './types'

export default function TodoContainer() {
  // TODO: finish the todo flow
  const handleClearCompleted = useCallback(() => {
    console.log('clear all')
  }, [])
  const handleToggleTodoStatus = useCallback(() => {
    console.log('toggle todo status')
  }, [])
  const handleAddTodo = useCallback(todoLabel => {
    console.log(todoLabel)
  }, [])

  return (
    <View>
      <View>
        <Text>todo container</Text>
      </View>
      <TabGroup>
        <TabItem />
      </TabGroup>
      <TodoInput onEnter={handleAddTodo} />
      <TodoItem
        todo={{ id: 1, label: 'demo 1', status: TodoStatus.unCompleted }}
        onToggle={handleToggleTodoStatus}
      />
      <TodoHelper todoListLength={0} onClear={handleClearCompleted} />
    </View>
  )
}
