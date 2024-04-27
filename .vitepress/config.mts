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
    footer: {
      copyright: '© 2023-Present Chat Nio',
      message: 'LightXi Inc. All Rights Reserved'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: 'API', link: '/developers/' },
      { text: '商业版咨询', link: '/pro/' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '快速开始', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Deeptrain-Community/chatnio' }
    ]
  }
})
