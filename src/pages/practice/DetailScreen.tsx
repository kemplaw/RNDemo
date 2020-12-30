import React, { useCallback, useMemo } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationPropDefine, RoutePropDefine } from '../../../types'

interface DetailScreenPropsDefine {
  route: RoutePropDefine<'Detail'>
  navigation: NavigationPropDefine<'Detail'>
}

export default function DetailScreen({ route, navigation }: DetailScreenPropsDefine) {
  const handleNavigate = useCallback(() => navigation.push('Detail'), [navigation])
  const paramsJson = useMemo(() => JSON.stringify(route.params?.data), [route])
  const handleChangeHeaderTitle = useCallback(() => {
    navigation.setOptions({ title: 'hello detail' })
  }, [navigation])

  return (
    <View>
      <Text>detail screen</Text>
      <Text>params json: {paramsJson || 'null'}</Text>
      <Button title='push to detail' onPress={handleNavigate} />
      <Button title='back' onPress={() => navigation.goBack()} />
      <Button title='to top' onPress={() => navigation.popToTop()} />
      <Button title='change title to hello detail' onPress={handleChangeHeaderTitle} />
    </View>
  )
}
