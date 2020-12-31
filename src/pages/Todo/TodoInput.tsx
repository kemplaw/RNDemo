import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { TodoInputPropsDefine } from './types'

export default function TodoInput({ onEnter }: TodoInputPropsDefine) {
  const [value, setValue] = useState('')
  const handleSubmit = useCallback(() => {
    if (!value) {
      return
    }

    onEnter(value)
    setValue('')
  }, [onEnter, value])

  return (
    <View>
      <TextInput
        value={value}
        placeholder='enter to add todo'
        onChangeText={setValue}
        onSubmitEditing={handleSubmit}
      />
    </View>
  )
}
