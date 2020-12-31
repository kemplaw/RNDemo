import { UserInfo } from '../../pages/Auth/types'
import { UserActionCreatorTypes, USER_ACTION_TYPES } from '../actions'

type UserStateDefine = UserInfo

const initialUserState: UserStateDefine = {
  username: '',
  userToken: '',
  isSignOut: true
}

export default function user(state = initialUserState, action: UserActionCreatorTypes) {
  switch (action.type) {
    case USER_ACTION_TYPES.UPDATE_USER:
      return {
        ...state,
        ...action.user
      }
    default:
      return state
  }
}
