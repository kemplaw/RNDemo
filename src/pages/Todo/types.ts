export enum TodoStatus {
  completed = 1,
  unCompleted = 2
}

export interface Todo {
  id: any
  label: string
  status: TodoStatus
}

export interface TodoHelperPropsDefine {
  todoListLength: number
  onClear: () => void
}

export interface TodoItemPropsDefine {
  todo: Todo
  onToggle: (todoId: number) => void
}

export interface TodoInputPropsDefine {
  onEnter: (todoLabel: string) => void
}
