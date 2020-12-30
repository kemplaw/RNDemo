import React, { useCallback } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationPropDefine, RoutePropDefine, RouterNameMap } from '../../../types'

interface HomeScreePropsDefine {
  route: RoutePropDefine<'Home'>
  navigation: NavigationPropDefine<'Home'>
}

export default function HomeScreen({ navigation }: HomeScreePropsDefine) {
  const handleNavigateTo = useCallback(
    (routerName: RouterNameMap) => {
      navigation.navigate(routerName, {
        data: {
          username: 'abc'
        }
      })
    },
    [navigation]
  )

  const handleNavigateToCustomHeader = useCallback(() => handleNavigateTo('CustomHeader'), [
    handleNavigateTo
  ])
  const handleNavigateToDetail = useCallback(() => handleNavigateTo('Detail'), [handleNavigateTo])
  const handleNavigateToNested = useCallback(() => handleNavigateTo('Nested'), [handleNavigateTo])
  const handleNavigateToModal = useCallback(() => handleNavigateTo('Modal'), [handleNavigateTo])

  return (
    <View style={styles.wrapper}>
      <Text>Home</Text>
      <Button title='to detail screen' onPress={handleNavigateToDetail} />
      <Button title='to custom header screen' onPress={handleNavigateToCustomHeader} />
      <Button title='to nested screen' onPress={handleNavigateToNested} />
      <Button title='to modal screen' onPress={handleNavigateToModal} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
