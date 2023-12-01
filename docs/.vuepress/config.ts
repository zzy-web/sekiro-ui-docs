import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

const __dirname = getDirname(import.meta.url)

export default {
  title: 'sekiro',
  base: '/sekiro-ui-docs/',
  description: 'sekiro，一套为我自己准备的基于 Vue 3.0 的桌面端组件库',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'stylesheet', href: '/styles/index.scss' }]
  ],
  port: 8079,
  markdown: {
    code: {
      lineNumbers: false
    }
  },
  plugins: [
    'demo-container',
    backToTopPlugin(),
    docsearchPlugin({
      appId: 'DIRJZ01PYH',
      apiKey: '7195912ec4d7d1f6a82c03915bf63ee4',
      indexName: 'zview',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
        },
      }
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  theme: defaultTheme({
    logo: '/img/logo.png',
    repo: 'https://github.com/zzy-web/sekiro-ui',
    sidebar:
    {
      // 指南
      '/guide/': [
        {
          text: '基础',
          children: [
            // {
            //   text: '设计',
            //   link: '/guide/design'
            // },
            // {
            //   text: '导航',
            //   link: '/guide/nav'
            // },
            {
              text: '安装',
              link: '/guide/installation'
            },
            {
              text: '快速开始',
              link: '/guide/quickstart'
            }],
        },
        {
          text: '开发',
          children: [{
            text: '开发指南',
            link: '/guide/dev-guide'
          },
          {
            text: '开发常见问题',
            link: '/guide/dev-faq'
          }],
        },
      ],
      // 组件
      '/component/': [
        {
          text: '开发指南',
          children: [{
            text: '安装',
            link: '/component/installation'
          },
          {
            text: '快速上手',
            link: '/component/quickstart'
          }],
        },
        {
          text: 'Basic 基础组件',
          children: [{
            text: 'layout 布局',
            link: '/component/layout'
          },
          {
            text: 'Button 按钮',
            link: '/component/button'
          }],
        },
      ],
    },
    navbar: [
      {
        text: '指南',
        link: '/guide/installation/',
        activeMatch: '/guide/',
      },
      {
        text: '组件',
        link: '/component/installation/',
        activeMatch: '/component/',
      },
      {
        text: 'JS',
        link: '/js/',
        activeMatch: '/js/',
      },
      {
        text: '模版',
        link: '/template/',
        activeMatch: '/template/',
      },
      {
        text: '关于我',
        link: '/about/',
        activeMatch: '/about/',
      },
    ],
  }),
}