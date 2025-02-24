import { defineConfig } from 'vitepress'

console.log(import.meta);


// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/竹笋-黑.png' }],
  ],
  title: "bmcu wiki",
  description: "bmcu资料整理",
  lastUpdated: true,
  sitemap: {
    hostname: 'https://bmcu.xwzkj.top'
  },
  // base: '/bmcu-doc/',
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],
    logo: '/竹笋-黑.png',
    footer: {
      // message: 'BMCU_WIKI',
      copyright: '版权所有 © BMCU WIKI编辑部'
    },
    sidebar: [
      {
        text: '制作前',
        items: [
          { text: '什么是bmcu', link: '/doc/prepare/what-is-it' },
          { text: '版本分支', link: '/doc/prepare/versions' },
          { text: '制作前准备', link: '/doc/prepare/prepare' },
        ]
      },
      {
        text: '制作中',
        items: [
          { text: '130制作教程', link: '/doc/build/130' },
        ]
      },
      {
        text: '调试',
        items: [
          { text: '常见问题', link: '/doc/debug/problems' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/at_4061N/BMCU' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示详情',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      },
    },
    docFooter: {
      prev: "上一页", //Next page
      next: "下一页", //Previous page
    },
    outline: {
      level: [2, 6],
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

  }
})
