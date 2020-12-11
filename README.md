# v3-shopweb

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```



### 解决 ts报错‘Require statement not part of import statement’

`.eslintrc.js`

```
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
  }
```



### 项目引入 vant@next

```
npm i vant@next -S
```

这里为方便我直接全局引入,`main.ts`：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible'

createApp(App)
  .use(Vant)
  .use(store)
  .use(router)
  .mount('#app')

```



### 配置 rem适配

```
npm install postcss-pxtorem --D   //是一款 postcss 插件，用于将单位转化为 rem
```

```
npm i  amfe-flexible -S   //用于设置 rem 基准值
```

根目录新建 `.postcssrc.js`

```

```

