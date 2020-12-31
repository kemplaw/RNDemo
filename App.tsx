import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import { TodoContainer } from './src/pages/Todo'
import { LoginScreen } from './src/pages/Auth'
import store from './src/store'

const RootAppStack = createStackNavigator()

export default function App() {
  const [hasToken, setHasToken] = useState(false)
  const [isSignOut, setIsSignOut] = useState(true)

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const { userToken, isSignOut } = store.getState().user
      const token = Boolean(userToken)
      setHasToken(token)
      setIsSignOut(isSignOut)
    })
    return unsubscribe
  }, [])

  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootAppStack.Navigator screenOptions={{ headerShown: false }}>
          {hasToken ? (
            <RootAppStack.Screen name='Todo' component={TodoContainer} />
          ) : (
            <RootAppStack.Screen
              name='Auth'
              options={{ animationTypeForReplace: isSignOut ? 'pop' : 'push' }}
              component={LoginScreen}
            />
          )}
        </RootAppStack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}
