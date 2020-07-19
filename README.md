# tungsten-web-boilerplate
使用React、Redux、React-Router、Typescript、Parcel搭建的前端项目模板。

## 开始使用

建议使用 `yarn` 作为包管理工具。
修改 `package.json` 中的 `scripts`，假设项目最终部署 URL 为 `https://seicwxbz.seu.edu.cn/boilerplate/`，则 `dev` 脚本修改为：
```
parcel ./public/index.html --public-url /boilerplate/ --hmr-hostname seicwxbz.seu.edu.cn --hmr-port 18080 --port 8080
```
进入项目目录，依次执行以下命令：
```bash
yarn
yarn start
```
whistle 代理规则配置如下：
```
/^https:\/\/seicwxbz\.seu\.edu\.cn\/boilerplate\/(.*)/ http://localhost:8080/boilerplate/$1
/^wss:\/\/seicwxbz\.seu\.edu\.cn:18080\/(.*)/ localhost:18080/$1
```
然后即可在浏览器中访问`https://seicwxbz.seu.edu.cn/boilerplate/`进行调试。

## React Hook

真的很有趣，模板中的例子都是使用 Hook API 的。什么？你不知道什么是 Hook API？那看看这里吧：https://zh-hans.reactjs.org/docs/hooks-intro.html

## Redux 的使用

在本模板中，Redux 用于存储一些**关键的**全局状态，例如：用户登录状态。
其他状态只有在以下两种情况时才写入 Redux：
* 需要持久化
* 需要全局共享

否则请直接使用局部状态。

在应用的顶层，整个组件树已经使用 React-Redux 提供的 `Provider` 进行了包装。
同时，Redux 存储使用 LocalStorage 持久化，并使用 `PersistGate` 包装了组件树。

```tsx
const Main:React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootRouter />
            </PersistGate>
        </Provider>
    )
}
```

### 获取 Store 中的数据

使用 `useSelector` 访问 Store 中的数据：
```tsx
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector(state => state.counter)
  return <div>{counter}</div>
}
```

```tsx
import React from 'react'
import { useSelector } from 'react-redux'

export const TodoListItem = props => {
  const todo = useSelector(state => state.todos[props.id])
  return <div>{todo.text}</div>
}
```

### dispatch 数据修改

```tsx
import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
```

```tsx
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({ type: 'increment-counter' }),
    [dispatch]
  )

  return (
    <div>
      <span>{value}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  )
}

export const MyIncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment counter</button>
))
```



