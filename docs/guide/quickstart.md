# 快速开始
本节将介绍如何在项目中使用 zView。
## 用法
### 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
``` ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```
#### Volar 支持
如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。
``` json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

### 按需导入
您需要使用额外的插件来导入要使用的组件。
#### 自动导入
首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件
``` sh
npm install -D unplugin-vue-components unplugin-auto-import
```
然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中
##### Vite
``` ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```
##### Webpack
``` ts
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```
想了解更多打包 ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) 和配置工具，请参考 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import#install)。
#### Nuxt
对于 Nuxt 用户，只需要安装 `@element-plus/nuxt` 即可。
``` sh
npm install -D @element-plus/nuxt
```
然后将下面的代码写入你的配置文件。
``` ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],
})
```
配置文档参考 [docs](https://github.com/element-plus/element-plus-nuxt#readme)。

### 手动导入
zView 提供了基于 ES Module 的开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) 功能。

但你需要安装 [unplugin-element-plus](https://github.com/element-plus/unplugin-element-plus) 来导入样式。 配置文档参考 [docs](https://github.com/element-plus/unplugin-element-plus#readme).
``` html
<!-- App.vue -->
<template>
  <el-button>我是 ElButton</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script>
```
``` ts
// vite.config.ts
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [ElementPlus()],
})
```