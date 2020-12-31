import React, {
  createContext,
  Reducer,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState
} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { TextInput } from 'react-native-gesture-handler'

enum ActionTypes {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT'
}

interface UserStateDefine {
  isLoading: boolean
  isSignOut: boolean
  userToken: string | null
}

interface UserReducerAction {
  type: ActionTypes
  data?: any
}

type AuthContextDefine =
  | { signIn: (data?: any) => void; signOut: (data?: any) => void; signUp: (data?: any) => void }
  | undefined

const userReducer: Reducer<UserStateDefine, UserReducerAction> = (
  state,
  action
): UserStateDefine => {
  switch (action.type) {
    case ActionTypes.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.data,
        isLoading: false
      }

    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignOut: false,
        isLoading: false,
        userToken: action.data
      }

    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        isSignOut: true,
        isLoading: false,
        userToken: null
      }

    default:
      return state
  }
}

const AuthContext = createContext<AuthContextDefine>(undefined)
const Stack = createStackNavigator()

function SignInScreen(props: any) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useContext(AuthContext) || {}

  function handleLogin() {
    signIn && signIn({ username, password })
  }

  return (
    <View>
      <Text>SignIn screen</Text>
      <View>
        <TextInput placeholder='username' value={username} onChangeText={setUsername} />
      </View>
      <View>
        <TextInput
          secureTextEntry
          placeholder='password'
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button title='sign in' onPress={handleLogin} />
    </View>
  )
}

function HomeScreen(props: any) {
  return (
    <View>
      <Text>home screen</Text>
    </View>
  )
}

export default function AuthFlowScreen() {
  const [state, dispatch] = useReducer(userReducer, {
    isLoading: true,
    isSignOut: false,
    userToken: null
  })
  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => dispatch({ type: ActionTypes.SIGN_IN, data: 'auth-token' }),
      signOut: () => dispatch({ type: ActionTypes.SIGN_OUT }),
      signUp: async (data: any) => dispatch({ type: ActionTypes.SIGN_IN, data: 'auth-token' })
    }),
    []
  )

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (error) {
        console.log(error)
      }

      dispatch({ type: ActionTypes.RESTORE_TOKEN, data: userToken })
    }

    bootstrapAsync()
  }, [])

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!state.userToken ? (
          <Stack.Screen name='SignIn' component={SignInScreen} />
        ) : (
          <Stack.Screen name='Home' component={HomeScreen} />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}
