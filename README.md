# RN-Demo

demo App to practice React Native

### Notice

1. Stack 默认加载组件会优化渲染机制，如果使用以下的回调方式显示页面，会移除这些优化，建议回调函数 搭配 memo 来避免不必要的 re-render

```


const Stack = createStackNavigator()

<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>
```