import React, { useCallback, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { connect, ConnectedProps } from 'react-redux'
import { updateUser } from '../../store/actions'
import { UserInfo } from './types'

const mapDispatchToProps = (dispatch: any) => ({
  updateUser: (userInfo: UserInfo) => dispatch(updateUser(userInfo))
})
const connecter = connect(null, mapDispatchToProps)

type LoginScreenPropsDefine = ConnectedProps<typeof connecter>

export default connecter(function LoginScreen({ updateUser }: LoginScreenPropsDefine) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = useCallback(
    () => updateUser({ username: 'Kemp', userToken: 'kemp-token', isSignOut: false }),
    [updateUser]
  )

  return (
    <View style={{ padding: 15 }}>
      <View>
        <Text style={{ fontSize: 30, textAlign: 'center' }}>Login</Text>
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
})
