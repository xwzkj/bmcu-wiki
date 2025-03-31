<script setup>
import { NModal, NCard } from 'naive-ui'

import { ref } from 'vue'

let show = ref(false)
let lang = ref('zh')
let text = ref({
    zh: {
        text1: '该项目仅供学习，任何销售行为与我们无关',
        text2: '我们最近发现有卖家在aliexpress等平台对bmcu成品进行销售，此行为与我们无关'
    },
    en: {
        text1: 'This project is for learning purposes only, any sales activities are not related to us.',
        text2: 'We recently found that some sellers are selling BMCU finished products on platforms such as Aliexpress, this behavior is not related to us.'
    },
    es: {
        text1: 'Este proyecto es solo para fines de aprendizaje, cualquier actividad de venta no está relacionada con nosotros.',
        text2: 'Recientemente hemos descubierto que algunos vendedores están vendiendo productos terminados de BMCU en plataformas como Aliexpress, este comportamiento no está relacionado con nosotros.'
    },
    fr: {
        text1: 'Ce projet est uniquement à des fins d\'apprentissage, toute activité de vente ne nous concerne pas.',
        text2: 'Nous avons récemment découvert que certains vendeurs vendent des produits finis BMCU sur des plateformes comme Aliexpress, ce comportement ne nous concerne pas.'
    },
    de: {
        text1: 'Dieses Projekt dient nur zu Lernzwecken, jegliche Verkaufsaktivitäten stehen nicht mit uns in Verbindung.',
        text2: 'Wir haben kürzlich festgestellt, dass einige Verkäufer BMCU-Fertigprodukte auf Plattformen wie Aliexpress verkaufen. Dieses Verhalten steht nicht mit uns in Verbindung.'
    },
    ja: {
        text1: 'このプロジェクトは学習目的のみであり、いかなる販売行為も当社とは関係ありません。',
        text2: '最近、一部の販売者がAliexpressなどのプラットフォームでBMCUの完成品を販売していることを発見しましたが、この行為は当社とは関係ありません。'
    },
    ko: {
        text1: '이 프로젝트는 학습 목적으로만 사용되며, 모든 판매 행위는 당사와 관련이 없습니다.',
        text2: '최근 일부 판매자가 Aliexpress 등의 플랫폼에서 BMCU 완제품을 판매하는 것을 발견했으며, 이 행동은 당사와 무관합니다.'
    },
    ru: {
        text1: 'Этот проект предназначен только для обучения, любая продажа не имеет к нам отношения.',
        text2: 'Недавно мы обнаружили, что некоторые продавцы продают готовую продукцию BMCU на таких платформах, как Aliexpress. Это поведение не связано с нами.'
    },
    ar: {
        text1: 'هذا المشروع مخصص لأغراض التعلم فقط، وأي أنشطة بيع ليست ذات صلة بنا.',
        text2: 'لقد اكتشفنا مؤخرًا أن بعض البائعين يبيعون منتجات BMCU الجاهزة على منصات مثل Aliexpress، هذا السلوك لا علاقة لنا به.'
    },
    pt: {
        text1: 'Este projeto é apenas para fins de aprendizado, quaisquer atividades de venda não estão relacionadas conosco.',
        text2: 'Recentemente, descobrimos que alguns vendedores estão vendendo produtos acabados da BMCU em plataformas como Aliexpress, esse comportamento não está relacionado a nós.'
    },
    it: {
        text1: 'Questo progetto è solo a scopo di apprendimento, qualsiasi attività di vendita non è collegata a noi.',
        text2: 'Abbiamo recentemente scoperto che alcuni venditori stanno vendendo prodotti finiti BMCU su piattaforme come Aliexpress, questo comportamento non è collegato a noi.'
    },
    hi: {
        text1: 'यह प्रोजेक्ट केवल शिक्षण उद्देश्यों के लिए है, किसी भी बिक्री गतिविधि का हमसे कोई संबंध नहीं है।',
        text2: 'हमें हाल ही में पता चला कि कुछ विक्रेता Aliexpress जैसे प्लेटफार्मों पर BMCU तैयार उत्पाद बेच रहे हैं, यह व्यवहार हमसे संबंधित नहीं है।'
    },
    tr: {
        text1: 'Bu proje sadece eğitim amaçlıdır, herhangi bir satış faaliyeti bizimle ilgili değildir.',
        text2: 'Son zamanlarda bazı satıcıların Aliexpress gibi platformlarda BMCU bitmiş ürünlerini sattığını fark ettik, bu davranış bizimle ilgili değildir.'
    },
    th: {
        text1: 'โครงการนี้มีไว้เพื่อการเรียนรู้เท่านั้น กิจกรรมการขายใด ๆ ไม่เกี่ยวข้องกับเรา',
        text2: 'เมื่อเร็วๆ นี้ เราพบว่ามีผู้ขายบางรายกำลังขายผลิตภัณฑ์ BMCU สำเร็จรูปบนแพลตฟอร์มเช่น Aliexpress พฤติกรรมนี้ไม่เกี่ยวข้องกับเรา'
    },
    vi: {
        text1: 'Dự án này chỉ dành cho mục đích học tập, mọi hoạt động bán hàng không liên quan đến chúng tôi.',
        text2: 'Gần đây, chúng tôi phát hiện một số người bán đang bán sản phẩm hoàn chỉnh của BMCU trên các nền tảng như Aliexpress, hành vi này không liên quan đến chúng tôi.'
    },
    id: {
        text1: 'Proyek ini hanya untuk tujuan pembelajaran, segala aktivitas penjualan tidak terkait dengan kami.',
        text2: 'Baru-baru ini kami menemukan bahwa beberapa penjual menjual produk jadi BMCU di platform seperti Aliexpress, perilaku ini tidak terkait dengan kami.'
    },
    nl: {
        text1: 'Dit project is alleen voor leerdoeleinden, verkoopactiviteiten zijn niet aan ons gerelateerd.',
        text2: 'We hebben onlangs ontdekt dat sommige verkopers BMCU-afgewerkte producten verkopen op platforms zoals Aliexpress, dit gedrag is niet aan ons gerelateerd.'
    },
    pl: {
        text1: 'Ten projekt służy wyłącznie celom edukacyjnym, wszelkie działania sprzedażowe nie są z nami związane.',
        text2: 'Ostatnio zauważyliśmy, że niektórzy sprzedawcy sprzedają gotowe produkty BMCU na platformach takich jak Aliexpress, to zachowanie nie jest z nami związane.'
    },
    sv: {
        text1: 'Detta projekt är endast för inlärningsändamål, försäljningsaktiviteter är inte relaterade till oss.',
        text2: 'Vi har nyligen upptäckt att vissa säljare säljer färdiga BMCU-produkter på plattformar som Aliexpress, detta beteende är inte relaterat till oss.'
    },
    el: {
        text1: 'Αυτό το έργο προορίζεται μόνο για εκπαιδευτικούς σκοπούς, οποιαδήποτε δραστηριότητα πώλησης δεν σχετίζεται με εμάς.',
        text2: 'Πρόσφατα ανακαλύψαμε ότι κάποιοι πωλητές πωλούν έτοιμα προϊόντα BMCU σε πλατφόρμες όπως το Aliexpress, αυτή η συμπεριφορά δεν σχετίζεται με εμάς.'
    },
    cs: {
        text1: 'Tento projekt je určen pouze pro vzdělávací účely, jakékoli prodejní aktivity s námi nesouvisí.',
        text2: 'Nedávno jsme zjistili, že někteří prodejci prodávají hotové produkty BMCU na platformách, jako je Aliexpress, toto chování s námi nesouvisí.'
    },
    hu: {
        text1: 'Ez a projekt kizárólag tanulási célokra szolgál, bármilyen értékesítési tevékenység nem kapcsolódik hozzánk.',
        text2: 'Nemrégiben észrevettük, hogy néhány eladó BMCU késztermékeket értékesít olyan platformokon, mint az Aliexpress, ez a viselkedés nem kapcsolódik hozzánk.'
    }
});

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


setTimeout(() => {
    show.value = true
}, 500)
</script>
<template>
    <n-modal v-model:show="show">
        <n-card style="width:85%" title="警告">
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