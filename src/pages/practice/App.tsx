import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'

import HomeScreen from './src/pages/practice/HomeScreen'
import DetailScreen from './src/pages/practice/DetailScreen'
import CustomHeaderScreen, { CustomHeader } from './src/pages/practice/CustomHeaderScreen'
import { Button } from 'react-native'
import { NestedScreen } from './src/pages/practice/NestedScreen'
import ModalScreen from './src/pages/practice/ModalScreen'
import BottomTabScreen from './src/pages/practice/BottomTabScreen'
import DrawerScreen from './src/pages/practice/DrawerScreen'
import AuthFlowScreen from './src/pages/practice/AuthFlowScreen'

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black'
          },
          headerTitleStyle: {
            color: '#fff'
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerRight: () => (
              <Button
                title={`header right button; count:  ${count}`}
                onPress={() => setCount(c => c + 1)}
              />
            )
          }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={({ route, navigation }) => ({
            title: `${route.params?.data.username}'s page`,
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerLeft: () => <Button title='back' onPress={() => navigation.goBack()} />
          })}
        />
        <Stack.Screen
          name='CustomHeader'
          component={CustomHeaderScreen}
          options={{ headerTitle: props => <CustomHeader {...props} /> }}
        />
        <Stack.Screen name='Nested' component={NestedScreen} />
        <Stack.Screen name='Modal' component={ModalScreen} />
        <Stack.Screen name='BottomTab' component={BottomTabScreen} />
        <Stack.Screen name='Drawer' component={DrawerScreen} />
        <Stack.Screen name='Auth' component={AuthFlowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
