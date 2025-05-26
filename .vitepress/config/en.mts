import { type DefaultTheme } from 'vitepress'
function getConfig(): DefaultTheme.Config {
    return {
        sidebar: [
            {
                text: 'Before Building',
                items: [
                    { text: 'What is BMCU', link: '/en/doc/prepare/what-is-it' },
                    { text: 'Versions', link: '/en/doc/prepare/versions' },
                    { text: 'Preparation', link: '/en/doc/prepare/prepare' },
                    { text: 'Materials List', link: '/en/doc/prepare/list' }
                ]
            },
            {
                text: 'Building Process',
                items: [
                    { text: 'Firmware Flashing', link: '/en/doc/build/flash-firmware' },
                    { text: '130 Assembly Guide', link: '/en/doc/build/130' },
                    { text: '180 Assembly Guide', link: '/en/doc/build/180' },
                    { text: 'BMCU370x Assembly Guide (Stardust Microswitch Edition)', link: '/en/doc/build/bmcu370x' },
                    { text: 'BMCU-B (370 Steel Ball Edition) Guide', link: '/en/doc/build/370' },
                    { text: 'BMCU-C (370 Hall Effect Edition) Guide', link: '/en/doc/build/370hall' },
                ]
            },
            {
                text: 'Troubleshooting',
                items: [
                    { text: 'Common Issues', link: '/en/doc/debug/problems' },
                    { text: 'Ground Reference Values', link: '/en/doc/debug/value-to-ground' }
                ]
            },
            {
                text: 'Additional Resources',
                items: [
                    { text: "Using BMCU with P/X Series Printers", link: "/en/doc/other/bmcu-on-px" },
                    { text: 'Download Center', link: '/en/doc/other/download-center' },
                    { text: 'Support the Wiki', link: '/en/doc/other/donate' }
                ]
            }
        ],
        outline: {
            level: [2, 6],
        },
    }
}
export default getConfig()