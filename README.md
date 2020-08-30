# 狼剩子的前端模板项目
使用React、Redux、React-Router、Typescript搭建的前端项目模板。

## 请先安装好 Whistle 并配置如下规则

```
/^https:\/\/seicwxbz\.seu\.edu\.cn\/boilerplate\/(.*)/ http://localhost:8080/boilerplate/$1
/^wss:\/\/seicwxbz\.seu\.edu\.cn:8080\/(.*)/ ws://localhost:8080/$1
# 如果需要本地后端则正确配置下述内容
# /^https:\/\/seicwxbz\.seu\.edu\.cn\/boilerplate-api\/(.*)/ http://localhost:3000/$1
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [https://seicwxbz.seu.edu.cn/boilerplate/](https://seicwxbz.seu.edu.cn/boilerplate/) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


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



