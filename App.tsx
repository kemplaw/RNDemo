import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TodoContainer } from './src/pages/Todo'
import { LoginScreen } from './src/pages/Auth'
import useAuthHook, { AuthControlContext, authControl } from './src/hooks/useAuthHook'

const RootAppStack = createStackNavigator()

export default function App() {
  const { state, dispatch } = useAuthHook()

  return (
    <NavigationContainer>
      <AuthControlContext.Provider value={authControl}>
        <RootAppStack.Navigator>
          {state.userToken ? (
            <RootAppStack.Screen name='Todo' component={TodoContainer} />
          ) : (
            <RootAppStack.Screen name='Auth' options={{ headerShown: false }}>
              {props => <LoginScreen {...props} dispatch={dispatch} />}
            </RootAppStack.Screen>
          )}
        </RootAppStack.Navigator>
      </AuthControlContext.Provider>
    </NavigationContainer>
  )
}
