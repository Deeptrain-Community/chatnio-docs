import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chat Nio",
  description: "🚀 下一代 AI 一站式 B/C 端解决方案 🚀 Next Generation AI One-Stop Internationalization Solution",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'author', content: 'Deeptrain Community' }],
    ['meta', { name: 'keywords', content: 'chatnio, chat nio, aigc, deeptrain' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/Deeptrain-Community/chatnio.com/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    sidebarMenuLabel: '目录',
    outlineTitle: '文章导航',
    returnToTopLabel: '返回顶部',
    footer: {
      copyright: '© 2023-Present Chat Nio',
      message: 'LightXi Inc. All Rights Reserved'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '价格', link: '/guide/pricing'},
      { text: 'API', link: '/developers/' },
      { text: '商业版咨询', link: '/pro/' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '模型价格', link: '/guide/pricing' },
        ]
      },
      {
        text: '商业版',
        items: [
          { text: '产品介绍', link: '/pro/' },
          { text: '产品授权', link: '/pro/license' },
          { text: '授权咨询', link: '/pro/contact' },
          { text: '成为代理商', link: '/pro/agent' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Deeptrain-Community/chatnio' }
    ]
  }
})
