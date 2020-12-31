import React, { Dispatch, useCallback, useContext, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AuthAction, AuthControlContext } from '../../hooks/useAuthHook'

export default function LoginScreen({ dispatch }: any) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(AuthControlContext)
  const { signIn } = context ?? {}

  const handleSignIn = useCallback(
    () => signIn && signIn({ username, password })(dispatch as Dispatch<AuthAction>),
    [signIn, password, username, dispatch]
  )

  return (
    <View>
      <View>
        <Text>login</Text>
      </View>
      <View>
        <TextInput value={username} placeholder='username' onChangeText={setUsername} />
      </View>
      <View>
        <TextInput
          value={password}
          secureTextEntry
          placeholder='password'
          onChangeText={setPassword}
        />
      </View>

      <Button title='start use' onPress={handleSignIn} />
    </View>
  )
}
