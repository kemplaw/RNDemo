import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { todoReducer, userReducer } from './reducers'

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer
})

export type RootStateDefine = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
