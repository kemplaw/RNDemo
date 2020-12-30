import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RouterNameMap = 'Home' | 'Detail' | 'CustomHeader' | 'Nested' | 'Modal'

type ParamsDataDefine = { data: any } | undefined

export type RootStackParamList = {
  Home: ParamsDataDefine
  Detail: ParamsDataDefine
  CustomHeader: ParamsDataDefine
  Nested: ParamsDataDefine
  Modal: ParamsDataDefine
}

export type RoutePropDefine<T extends RouterNameMap> = RouteProp<RootStackParamList, T>

export type NavigationPropDefine<T extends RouterNameMap> = StackNavigationProp<
  RootStackParamList,
  T
>
