import { defineConfig } from 'vitepress'
import conf from '../../conf.json'
import themeConfigZh from './zh.mjs'
import themeConfigEn from './en.mjs'

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
  lastUpdated: true,
  // cleanUrls: true,
  sitemap: {
    hostname: 'https://bmcu.wanzii.cn'
  },
  base: conf.base,// 方便用actions同时部署到github pages和服务器
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      title: "bmcu wiki，由社区驱动的BMCU百科文档",
      description: "这是BMCU项目的百科文档，由丸子搭建，并由社区共建，包含了BMCU项目的全流程资料，欢迎大家参与完善。",
      themeConfig: themeConfigZh
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "bmcu wiki, community driven BMCU documentation",
      description: "This is the BMCU documentation, built by the community, and contributed by the community, which contains the full process material of the BMCU project, welcome to participate in the improvement.",
      themeConfig: themeConfigEn
    }
  },
  themeConfig: {
    siteTitle: 'bmcu wiki',
    nav: [
      { text: '主页', link: '/' },
    ],
    search: {
      provider: 'local'
    },
    logo: { light: '/竹笋-黑.png', dark: '/竹笋-白.png', alt: '竹笋logo' },
    footer: {
      message: '<a href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" style="display: flex; align-items: center; justify-content: center; text-decoration: none;"> 本网站由<img src="https://static.wanzii.cn/image/又拍云_logo.png" style="height: 17px; padding-right: 2px;">提供cdn加速服务 </a>',
      copyright: '版权所有 © BMCU WIKI编辑部'
    },
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/at_4061N/BMCU' }
    ],
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
