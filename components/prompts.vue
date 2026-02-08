<script setup>
import { NModal, NCard, NButton, NDropdown, useNotification } from 'naive-ui'

import { computed, nextTick, ref, watch, h } from 'vue'

const notification = useNotification()

let preStatus = { studyOnly: 0, hard: 0, websites: 0, websitesV1: 0 }

let preLocalStorage = JSON.parse(localStorage.getItem('prompts-status') ?? '{}')

for (let key in preLocalStorage) {
    preStatus[key] = preLocalStorage[key]
}

let show = ref([false, false])
let lang = ref('zh')
let text = ref({
    zh: {
        name: '中文',
        title: '警告',
        text1: '该项目仅供学习，任何销售行为与我们无关',
        text2: '我们最近发现有卖家在aliexpress等平台对bmcu成品进行销售，此行为与我们无关,我们谴责商业化行为'
    },
    en: {
        name: 'English',
        title: 'Warning',
        text1: 'This project is for learning purposes only, any sales activities are not related to us.',
        text2: 'We recently found that some sellers are selling BMCU finished products on platforms such as Aliexpress, this behavior is not related to us.'
    },
    es: {
        name: 'Español',
        title: 'Advertencia',
        text1: 'Este proyecto es solo para fines de aprendizaje, cualquier actividad de venta no está relacionada con nosotros.',
        text2: 'Recientemente hemos descubierto que algunos vendedores están vendiendo productos terminados de BMCU en plataformas como Aliexpress, este comportamiento no está relacionado con nosotros.'
    },
    fr: {
        name: 'Français',
        title: 'Avertissement',
        text1: 'Ce projet est uniquement à des fins d\'apprentissage, toute activité de vente ne nous concerne pas.',
        text2: 'Nous avons récemment découvert que certains vendeurs vendent des produits finis BMCU sur des plateformes comme Aliexpress, ce comportement ne nous concerne pas.'
    },
    de: {
        name: 'Deutsch',
        title: 'Warnung',
        text1: 'Dieses Projekt dient nur zu Lernzwecken, jegliche Verkaufsaktivitäten stehen nicht mit uns in Verbindung.',
        text2: 'Wir haben kürzlich festgestellt, dass einige Verkäufer BMCU-Fertigprodukte auf Plattformen wie Aliexpress verkaufen. Dieses Verhalten steht nicht mit uns in Verbindung.'
    },
    ja: {
        name: '日本語',
        title: '警告',
        text1: 'このプロジェクトは学習目的のみであり、いかなる販売行為も当社とは関係ありません。',
        text2: '最近、一部の販売者がAliexpressなどのプラットフォームでBMCUの完成品を販売していることを発見しましたが、この行為は当社とは関係ありません。'
    },
    ko: {
        name: '한국어',
        title: '경고',
        text1: '이 프로젝트는 학습 목적으로만 사용되며, 모든 판매 행위는 당사와 관련이 없습니다.',
        text2: '최근 일부 판매자가 Aliexpress 등의 플랫폼에서 BMCU 완제품을 판매하는 것을 발견했으며, 이 행동은 당사와 무관합니다.'
    },
    ru: {
        name: 'Русский',
        title: 'Предупреждение',
        text1: 'Этот проект предназначен только для обучения, любая продажа не имеет к нам отношения.',
        text2: 'Недавно мы обнаружили, что некоторые продавцы продают готовую продукцию BMCU на таких платформах, как Aliexpress. Это поведение не связано с нами.'
    },
    ar: {
        name: 'العربية',
        title: 'تحذير',
        text1: 'هذا المشروع مخصص لأغراض التعلم فقط، وأي أنشطة بيع ليست ذات صلة بنا.',
        text2: 'لقد اكتشفنا مؤخرًا أن بعض البائعين يبيعون منتجات BMCU الجاهزة على منصات مثل Aliexpress، هذا السلوك لا علاقة لنا به.'
    },
    pt: {
        name: 'Português',
        title: 'Aviso',
        text1: 'Este projeto é apenas para fins de aprendizado, quaisquer atividades de venda não estão relacionadas conosco.',
        text2: 'Recentemente, descobrimos que alguns vendedores estão vendendo produtos acabados da BMCU em plataformas como Aliexpress, esse comportamento não está relacionado a nós.'
    },
    it: {
        name: 'Italiano',
        title: 'Avvertimento',
        text1: 'Questo progetto è solo a scopo di apprendimento, qualsiasi attività di vendita non è collegata a noi.',
        text2: 'Abbiamo recentemente scoperto che alcuni venditori stanno vendendo prodotti finiti BMCU su piattaforme come Aliexpress, questo comportamento non è collegato a noi.'
    },
    hi: {
        name: 'हिन्दी',
        title: 'चेतावनी',
        text1: 'यह प्रोजेक्ट केवल शिक्षण उद्देश्यों के लिए है, किसी भी बिक्री गतिविधि का हमसे कोई संबंध नहीं है।',
        text2: 'हमें हाल ही में पता चला कि कुछ विक्रेता Aliexpress जैसे प्लेटफार्मों पर BMCU तैयार उत्पाद बेच रहे हैं, यह व्यवहार हमसे संबंधित नहीं है।'
    },
    tr: {
        name: 'Türkçe',
        title: 'Uyarı',
        text1: 'Bu proje sadece eğitim amaçlıdır, herhangi bir satış faaliyeti bizimle ilgili değildir.',
        text2: 'Son zamanlarda bazı satıcıların Aliexpress gibi platformlarda BMCU bitmiş ürünlerini sattığını fark ettik, bu davranış bizimle ilgili değildir.'
    },
    th: {
        name: 'ไทย',
        title: 'คำเตือน',
        text1: 'โครงการนี้มีไว้เพื่อการเรียนรู้เท่านั้น กิจกรรมการขายใด ๆ ไม่เกี่ยวข้องกับเรา',
        text2: 'เมื่อเร็วๆ นี้ เราพบว่ามีผู้ขายบางรายกำลังขายผลิตภัณฑ์ BMCU สำเร็จรูปบนแพลตฟอร์มเช่น Aliexpress พฤติกรรมนี้ไม่เกี่ยวข้องกับเรา'
    },
    vi: {
        name: 'Tiếng Việt',
        title: 'Cảnh báo',
        text1: 'Dự án này chỉ dành cho mục đích học tập, mọi hoạt động bán hàng không liên quan đến chúng tôi.',
        text2: 'Gần đây, chúng tôi phát hiện một số người bán đang bán sản phẩm hoàn chỉnh của BMCU trên các nền tảng như Aliexpress, hành vi này không liên quan đến chúng tôi.'
    },
    id: {
        name: 'Bahasa Indonesia',
        title: 'Peringatan',
        text1: 'Proyek ini hanya untuk tujuan pembelajaran, segala aktivitas penjualan tidak terkait dengan kami.',
        text2: 'Baru-baru ini kami menemukan bahwa beberapa penjual menjual produk jadi BMCU di platform seperti Aliexpress, perilaku ini tidak terkait dengan kami.'
    },
    nl: {
        name: 'Nederlands',
        title: 'Waarschuwing',
        text1: 'Dit project is alleen voor leerdoeleinden, verkoopactiviteiten zijn niet aan ons gerelateerd.',
        text2: 'We hebben onlangs ontdekt dat sommige verkopers BMCU-afgewerkte producten verkopen op platforms zoals Aliexpress, dit gedrag is niet aan ons gerelateerd.'
    },
    pl: {
        name: 'Polski',
        title: 'Ostrzeżenie',
        text1: 'Ten projekt służy wyłącznie celom edukacyjnym, wszelkie działania sprzedażowe nie są z nami związane.',
        text2: 'Ostatnio zauważyliśmy, że niektórzy sprzedawcy sprzedają gotowe produkty BMCU na platformach takich jak Aliexpress, to zachowanie nie jest z nami związane.'
    },
    sv: {
        name: 'Svenska',
        title: 'Varning',
        text1: 'Detta projekt är endast för inlärningsändamål, försäljningsaktiviteter är inte relaterade till oss.',
        text2: 'Vi har nyligen upptäckt att vissa säljare säljer färdiga BMCU-produkter på plattformar som Aliexpress, detta beteende är inte relaterat till oss.'
    },
    el: {
        name: 'Ελληνικά',
        title: 'Προειδοποίηση',
        text1: 'Αυτό το έργο προορίζεται μόνο για εκπαιδευτικούς σκοπούς, οποιαδήποτε δραστηριότητα πώλησης δεν σχετίζεται με εμάς.',
        text2: 'Πρόσφατα ανακαλύψαμε ότι κάποιοι πωλητές πωλούν έτοιμα προϊόντα BMCU σε πλατφόρμες όπως το Aliexpress, αυτή η συμπεριφορά δεν σχετίζεται με εμάς.'
    },
    cs: {
        name: 'Čeština',
        title: 'Varování',
        text1: 'Tento projekt je určen pouze pro vzdělávací účely, jakékoli prodejní aktivity s námi nesouvisí.',
        text2: 'Nedávno jsme zjistili, že někteří prodejci prodávají hotové produkty BMCU na platformách, jako je Aliexpress, toto chování s námi nesouvisí.'
    },
    hu: {
        name: 'Magyar',
        title: 'Figyelmeztetés',
        text1: 'Ez a projekt kizárólag tanulási célokra szolgál, bármilyen értékesítési tevékenység nem kapcsolódik hozzánk.',
        text2: 'Nemrégiben észrevettük, hogy néhány eladó BMCU késztermékeket értékesít olyan platformokon, mint az Aliexpress, ez a viselkedés nem kapcsolódik hozzánk.'
    }
});
let langList = computed(() => {
    let list = [];
    for (let key in text.value) {
        list.push({
            label: text.value[key].name,
            key: key
        })
    }
    return list;
})
lang.value = (() => {
    let userLanguages = navigator.languages ?? [navigator.language ?? 'en']; // 获取浏览器语言列表
    userLanguages = userLanguages.map(lang => lang.toLowerCase()); // 统一转为小写处理

    // 尝试匹配语言的前缀（如 "zh-CN" -> "zh"）
    for (let lang of userLanguages) {
        let shortLang = lang.split('-')[0]; // 获取语言前缀
        if (text.value[shortLang]) return shortLang;
    }

    return 'en'; // 如果都匹配不到，则默认使用英语
})()

console.log('自动识别语言:', lang.value);

const showfirst = () => {
    if (preStatus.studyOnly < 2) {
        show.value[0] = true
        preStatus.studyOnly++
        localStorage.setItem('prompts-status', JSON.stringify(preStatus))
    } else {
        showsecond()
    }

}
const showsecond = () => {
    if (preStatus.hard < 2) {
        show.value[1] = true
        preStatus.hard++
        localStorage.setItem('prompts-status', JSON.stringify(preStatus))
    } else {
        showthird()
    }
}
const showthird = () => {
    if (preStatus?.websitesV1 < 5 || true) {
        notification.create({
            title: '提示',
            duration: 60 * 1000,
            content: () => h('div', { class: 'vp-doc' },
                [
                    h('span', { style: { color: 'red' } }, '  本站内容已停更很久 请自行根据页面底部“最后更新于”判断时效性！'),
                    '\n  丸子因学业暂停wiki维护，欢迎大家前往',
                    h('a', { href: 'https://github.com/xwzkj/bmcu-doc', target: '_blank' }, 'github仓库'),
                    '提交pr\n\n  目前源站更改为github pages，并使用cloudflare cdn。',
                    '\n\n  因目前的服务托管不会造成费用，捐赠入口已关闭。',
                    '\n\n  The English content on this website is translated from Chinese by AI, which may result in inaccuracies and outdated content updates',
                    '\n\n  In addition, there is a French website that is not related to this website and provides information in English:',
                    h('a', { href: 'https://wiki.yuekai.fr', target: '_blank' }, 'https://wiki.yuekai.fr'),
                ]),
        })
        // preStatus.websitesV1++
        // localStorage.setItem('prompts-status', JSON.stringify(preStatus))
    }
}

showfirst() // 打开第一个弹窗

const firstLeave = () => {
    setTimeout(() => {
        showsecond() // 打开第二个弹窗
    }, 200)
}
const secondLeave = () => {
    showthird() // 打开第三个弹窗
}
</script>
<template>
    <!-- 难度较高 -->
    <n-modal v-model:show="show[1]" :auto-focus="false" @after-leave="secondLeave">
        <n-card style="width:85%" closable @close="show[1] = false">
            <template #header>
                <div class="header-title">
                    <span style="font-size: 1.5rem; margin-right: 0.5rem;">警告</span>
                </div>
            </template>
            <div class="red-text">
                该项目电路部分对于新手难度较高
            </div>
            <template #footer>
                <div class="gray-text">
                    量力而行，也可以找人帮忙焊接
                </div>
            </template>
        </n-card>
    </n-modal>

    <!-- 仅供学习 -->
    <n-modal v-model:show="show[0]" :auto-focus="false" @after-leave="firstLeave">
        <n-card style="width:85%" closable @close="show[0] = false">
            <template #header>
                <div class="header-title">
                    <span style="font-size: 1.5rem; margin-right: 0.5rem;">{{ text?.[lang].title }}</span>
                    <n-dropdown trigger="click" :options="langList" @select="(key) => { lang = key }"
                        style="max-height: 100%;">
                        <n-button secondary>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m13 19l3.5-9l3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
                            </svg>
                        </n-button>
                    </n-dropdown>
                </div>
            </template>
            <div class="red-text">
                {{ text?.[lang].text1 }}
            </div>
            <template #footer>
                <div class="gray-text">
                    {{ text?.[lang].text2 }}
                </div>
            </template>
        </n-card>
    </n-modal>
</template>
<style scoped>
.header-title {
    display: flex;
    align-items: center;
}

.red-text {
    font-size: 1.8rem;
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 3px rgb(255, 0, 0),
        0px 2px 3px rgb(255, 0, 0),
        2px 0px 3px rgb(255, 0, 0),
        0px -2px 3px rgb(255, 0, 0),
        -2px 0px 3px rgb(255, 0, 0),
        -2px -2px 3px rgb(255, 0, 0),
        -2px 2px 3px rgb(255, 0, 0),
        2px -2px 3px rgb(255, 0, 0);
}

.gray-text {
    font-size: 0.8rem;
    color: gray;
}

@media screen and (max-width: 500px) {
    .red-text {
        font-size: 1.2rem;
    }
}
</style>