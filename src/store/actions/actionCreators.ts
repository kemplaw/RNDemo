import { Action, Dispatch } from 'redux'
import { UserInfo } from '../../pages/Auth/types'
import { Todo } from '../../pages/Todo/types'
import { TODO_ACTION_TYPES, USER_ACTION_TYPES } from './actionTypes'

interface UpdateUserAction extends Action<typeof USER_ACTION_TYPES.UPDATE_USER> {
  user: UserInfo
}

interface ToggleTodoStatusAction extends Action<typeof TODO_ACTION_TYPES.TOGGLE_TODO_STATUS> {
  todoId: number
}

type ClearCompletedTodoAction = Action<typeof TODO_ACTION_TYPES.CLEAR_COMPLETED>

interface AddTodoAction extends Action<typeof TODO_ACTION_TYPES.ADD_TODO> {
  data: Todo
}

export function updateUser(userInfo: UserInfo) {
  return (dispatch: Dispatch<UpdateUserAction>) => {
    dispatch({
      type: USER_ACTION_TYPES.UPDATE_USER,
      user: userInfo
    })
  }
}

export function toggleTodoStatus(todoId: number) {
  return (dispatch: Dispatch<ToggleTodoStatusAction>) =>
    dispatch({ type: TODO_ACTION_TYPES.TOGGLE_TODO_STATUS, todoId })
}

export function clearCompleted() {
  return (dispatch: Dispatch<ClearCompletedTodoAction>) =>
    dispatch({ type: TODO_ACTION_TYPES.CLEAR_COMPLETED })
}

export function addTodo(todo: Todo) {
  return (dispatch: Dispatch<AddTodoAction>) =>
    dispatch({ type: TODO_ACTION_TYPES.ADD_TODO, data: todo })
}

export type TodoActionCreatorTypes =
  | ToggleTodoStatusAction
  | ClearCompletedTodoAction
  | AddTodoAction

export type UserActionCreatorTypes = UpdateUserAction
