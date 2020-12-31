import { Todo, TodoStatus } from '../../pages/Todo/types'
import { TodoActionCreatorTypes, TODO_ACTION_TYPES } from '../actions'

export interface TodoStateDefine {
  todoList: Todo[]
}

const initialTodoState: TodoStateDefine = {
  todoList: []
}

function toggleTodoStatus(state: TodoStateDefine, todoId: number) {
  const newTodoList = state.todoList.map(todo => {
    if (todo.id === todoId) {
      const newStatus =
        todo.status === TodoStatus.completed ? TodoStatus.unCompleted : TodoStatus.completed

      return {
        ...todo,
        status: newStatus
      }
    }

    return todo
  })

  return {
    ...state,
    todoList: newTodoList
  }
}

function addTodo(state: TodoStateDefine, todo: Todo) {
  return {
    ...state,
    todoList: [todo, ...state.todoList]
  }
}

function clearAllCompleted(state: TodoStateDefine) {
  const filteredTodoList = state.todoList.filter(todo => todo.status === TodoStatus.unCompleted)

  return {
    ...state,
    todoList: filteredTodoList
  }
}

export default function TodoReducer(state = initialTodoState, action: TodoActionCreatorTypes) {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      return addTodo(state, action.data)
    case TODO_ACTION_TYPES.TOGGLE_TODO_STATUS:
      return toggleTodoStatus(state, action.todoId)
    case TODO_ACTION_TYPES.CLEAR_COMPLETED:
      return clearAllCompleted(state)
    default:
      return state
  }
}
