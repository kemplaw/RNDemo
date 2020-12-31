import React, { useCallback, useMemo, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import { RootStateDefine } from '../../store'
import { addTodo, clearCompleted, toggleTodoStatus, updateUser } from '../../store/actions'
import { UserInfo } from '../Auth/types'
import { TabGroup, TabItem } from '../components'
import { Tab, TabFilterStatus } from '../components/TabGroup/types'
import TodoHelper from './TodoHelper'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { Todo, TodoStatus } from './types'

const mapStateToProps = (state: RootStateDefine) => ({
  user: state.user,
  todoList: state.todo.todoList
})
const mapDispatchToProps = (dispatch: any) => ({
  updateUser: (userInfo: UserInfo) => dispatch(updateUser(userInfo)),
  addTodo: (todo: Todo) => dispatch(addTodo(todo)),
  clearCompletedTodo: () => dispatch(clearCompleted()),
  toggleTodo: (todoId: number) => dispatch(toggleTodoStatus(todoId))
})

const connecter = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connecter>
type TodoPropsDefine = PropsFromRedux & {}

let todoId = 1

export default connecter(function TodoContainer({
  user,
  todoList,
  updateUser,
  addTodo,
  toggleTodo,
  clearCompletedTodo
}: TodoPropsDefine) {
  const [tabStatus, setTabStatus] = useState(TabFilterStatus.all)
  const tabList: Tab[] = useMemo(() => {
    return [
      {
        id: TabFilterStatus.all,
        label: 'all'
      },
      {
        id: TabFilterStatus.active,
        label: 'active'
      },
      {
        id: TabFilterStatus.completed,
        label: 'completed'
      }
    ]
  }, [])
  const unCompletedTodoListLength = useMemo(
    () => todoList.filter(todo => todo.status === TodoStatus.unCompleted),
    [todoList]
  )
  const filteredTodoList = useMemo(() => {
    return todoList.filter(todo => {
      if (tabStatus === TabFilterStatus.all) {
        return true
      } else if (tabStatus === TabFilterStatus.active) {
        return todo.status === TodoStatus.unCompleted
      }

      return todo.status === TodoStatus.completed
    })
  }, [todoList, tabStatus])
  const handleClearCompleted = useCallback(() => clearCompletedTodo(), [clearCompletedTodo])
  const handleToggleTodoStatus = useCallback((todoId: number) => toggleTodo(todoId), [toggleTodo])
  const handleAddTodo = useCallback(
    todoLabel => {
      const newTodo: Todo = {
        id: todoId++,
        label: todoLabel,
        status: TodoStatus.unCompleted
      }
      addTodo(newTodo)
    },
    [addTodo]
  )
  const handleSignOut = useCallback(() => updateUser({ username: '', userToken: '' }), [updateUser])
  const handleClickTabItem = useCallback(({ id }: Tab) => setTabStatus(id), [])

  return (
    <View>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>{user.username || 'null'}'s Todo</Text>
      </View>
      <TabGroup>
        {tabList.map(tab => (
          <TabItem key={tab.id} tab={tab} checked={tabStatus} onClick={handleClickTabItem} />
        ))}
      </TabGroup>
      <TodoInput onEnter={handleAddTodo} />
      {filteredTodoList
        ? filteredTodoList.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={handleToggleTodoStatus} />
          ))
        : null}
      <TodoHelper
        todoListLength={unCompletedTodoListLength.length}
        onClear={handleClearCompleted}
      />
      <Button title='sign out' onPress={handleSignOut} />
    </View>
  )
})
