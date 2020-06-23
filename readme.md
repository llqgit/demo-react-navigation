## 项目内容

- [x] react native
- [x] react-navigation

## 新建一个与本项目相同项目的步骤

```sh
// 1. react-native 为全局安装包时，可以直接使用如下。否则可选用 npx
react-native init demo_react_navigation

// 2. 安装 react-navigation 导航模块
yarn add @react-navigation/native

yarn add @react-navigation/stack @react-navigation/bottom-tabs

// 3. 安装 react-navigation 依赖
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

// 4. 为 ios 单独运行命令，安装 ios 需要使用的包（安卓好像不用单独运行命令）
npx pod-install ios
```

5. **在 index.js 文件前面引入‘手势包’，官方说，不引入生产环境会崩**

```js
// App.js

// 官网示例
import 'react-native-gesture-handler'; // 就是这句
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

## ps 清除缓存命令

```sh
If you are sure the module exists, try these steps:
 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules: rm -rf node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*
```
