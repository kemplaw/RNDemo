import React from 'react'
import { Text, View } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { TabGroup, TabItem } from '../components'
import TodoHelper from './TodoHelper'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

export default function TodoContainer() {
  return (
    <View>
      <View>
        <Text>todo container</Text>
      </View>
      <TabGroup>
        <TabItem />
      </TabGroup>
      <TodoInput />
      <TodoItem />
      <TodoHelper />
    </View>
  )
}
