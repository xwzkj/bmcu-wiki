import { defineConfig } from 'vitepress'
import conf from '../conf.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/竹笋-黑.png' }],
    ['script', {}, `
      window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?eab6301be45e2bdccae567c27ed7646c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-78MFJCXQ83' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-78MFJCXQ83');`
    ]
  ],
  title: "bmcu wiki，由社区驱动的BMCU百科文档",
  description: "这是BMCU项目的百科文档，由丸子搭建，并由社区共建，包含了BMCU项目的全流程资料，欢迎大家参与完善。",
  lastUpdated: true,
  sitemap: {
    hostname: 'https://bmcu.wanzii.cn'
  },
  base: conf.base,// 方便用actions同时部署到github pages和服务器
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {

    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'bmcu wiki',
    nav: [
      { text: '主页', link: '/' },
    ],
    logo: { light: '/竹笋-黑.png', dark: '/竹笋-白.png', alt: '竹笋logo' },
    footer: {
      message: '<a href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" style="display: flex; align-items: center; justify-content: center; text-decoration: none;"> 本网站由<img src="https://static.wanzii.cn/image/又拍云_logo.png" style="height: 17px; padding-right: 2px;">提供cdn加速服务 </a>',
      copyright: '版权所有 © BMCU WIKI编辑部'
    },
    sidebar: [
      {
        text: '制作前',
        items: [
          { text: '什么是bmcu', link: '/doc/prepare/what-is-it' },
          { text: '版本分支', link: '/doc/prepare/versions' },
          { text: '制作前准备', link: '/doc/prepare/prepare' },
          { text: '材料清单', link: '/doc/prepare/list' }
        ]
      },
      {
        text: '制作中',
        items: [
          { text: '130制作教程', link: '/doc/build/130' },
          { text: '180制作教程', link: '/doc/build/180' },
          { text: 'BMCU370x制作教程（星尘微动版）', link: '/doc/build/bmcu370x' },
          { text: 'BMCU-B（370钢珠版）制作教程', link: '/doc/build/370' },
          { text: 'BMCU-C（370霍尔版）制作教程', link: '/doc/build/370hall' },
        ]
      },
      {
        text: '调试',
        items: [
          { text: '常见问题', link: '/doc/debug/problems' },
          { text: '对地值参考', link: '/doc/debug/value-to-ground' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: "将BMCU用于P/X系列打印机", link: "/doc/other/bmcu-on-px" },
          { text: '下载中心', link: '/doc/other/download-center' },
          { text: '支持wiki运行', link: '/doc/other/donate' }
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

  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 80
    },
    ssr: {
      noExternal: ["naive-ui", "vueuc"],
    },
  }
})
