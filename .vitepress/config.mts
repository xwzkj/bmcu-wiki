import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "bmcu wiki",
  description: "bmcu资料整理",
  themeConfig: {
    docFooter: {
      prev: "上一页", //Next page
      next: "下一页", //Previous page
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: '制作前',
        items: [
          { text: '什么是bmcu', link: '/doc/desc/what-is-it' },
          { text: '版本分支', link: '/doc/desc/versions' },
          { text: '制作前准备', link: '/doc/desc/prepare' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/at_4061N/BMCU' }
    ]
  }
})
