import React, { useMemo } from 'react'
import { StyleProp, Text, TextStyle, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TabItemPropsDefine } from './types'

export default function TabItem({ tab, checked, onClick }: TabItemPropsDefine) {
  const labelColor = useMemo<StyleProp<TextStyle>>(() => {
    if (checked === tab.id) {
      return {
        color: '#f00'
      }
    }

    return {
      color: '#000'
    }
  }, [tab, checked])

  return (
    <TouchableOpacity onPress={() => onClick(tab)}>
      <View>
        <Text style={labelColor}>{tab.label}</Text>
      </View>
    </TouchableOpacity>
  )
}
