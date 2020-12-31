import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TodoHelperPropsDefine } from './types'

export default function TodoHelper({ todoListLength, onClear }: TodoHelperPropsDefine) {
  return (
    <View style={styles.wrapper}>
      <Text>{todoListLength} items left </Text>
      <Button title='clear' onPress={onClear} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  }
})
