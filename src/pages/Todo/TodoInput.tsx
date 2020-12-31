import React, { useCallback } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { TodoInputPropsDefine } from './types'

export default function TodoInput({ onEnter }: TodoInputPropsDefine) {
  const handleSubmit = useCallback(
    (e: any) => [
      // TODO: trouble param => e
      onEnter(e.target.value)
    ],
    [onEnter]
  )

  return (
    <View>
      <TextInput placeholder='enter to add todo' onSubmitEditing={handleSubmit} />
    </View>
  )
}
