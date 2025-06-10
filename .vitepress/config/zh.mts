import { type DefaultTheme } from 'vitepress'
function getConfig(): DefaultTheme.Config {
    return {
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
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',
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
                    { text: '固件烧录', link: '/doc/build/flash-firmware' },
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
                    { text: 'XMCU抓包工具', link: '/doc/other/packet-sniffer' },
                    { text: "将BMCU用于P/X系列打印机", link: "/doc/other/bmcu-on-px" },
                    { text: '下载中心', link: '/doc/other/download-center' },
                    // { text: '支持wiki运行', link: '/doc/other/donate' }
                ]
            }
        ],
    }
}

export default getConfig()