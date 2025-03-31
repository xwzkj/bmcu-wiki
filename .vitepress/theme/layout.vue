<template>
    <n-config-provider :theme-overrides="themeOverrides">
        <Layout>
            <template #layout-bottom>
                <studyOnly />
            </template>
        </Layout>
    </n-config-provider>
</template>
<script setup>
import { ref } from 'vue'
import studyOnly from '../../components/study-only.vue'
import DefaultTheme from 'vitepress/theme'
import { NConfigProvider } from 'naive-ui'
const { Layout } = DefaultTheme
let themeOverrides = ref({
    common: {
        borderRadius: '0.8rem'
    },
})
</script>
<style scoped></style>