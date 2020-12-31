import { createContext, Dispatch, useReducer } from 'react'

export interface AuthContextStateDefine {
  userToken: string
}

export interface AuthAction {
  type: AuthActionTypes
  data?: any
}

interface AuthReducer {
  (state: AuthContextStateDefine, action: AuthAction): AuthContextStateDefine
}

export interface AuthControlContextDefine {
  signIn: (data: any) => (dispatch: Dispatch<AuthAction>) => void
}

export enum AuthActionTypes {
  SIGN_IN = 'SIGN_IN'
}

export const AuthControlContext = createContext<AuthControlContextDefine | undefined>(undefined)

export const authControl: AuthControlContextDefine = {
  signIn: (data?: any) => (dispatch: Dispatch<AuthAction>) =>
    dispatch({ type: AuthActionTypes.SIGN_IN, data })
}

const authReducer: AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN:
      return {
        ...state,
        userToken: action.data
      }
    default:
      return state
  }
}

export default function useAuthHook() {
  const [state, dispatch] = useReducer<AuthReducer>(authReducer, { userToken: '' })

  return {
    state,
    dispatch
  }
}
