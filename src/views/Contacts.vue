<template id="contacts">
    <section class="page_section contacts_block center">
        <div class="container">
            <h2 class="block-title">Контакты</h2>
            <p>Вы можете связаться со мной любым удобным способом</p>
            <div class="btn-wrap">
                <div @click="showPhone = !showPhone" class="tel-toggle" title="возьмите меня на курсы :)">
                    <span v-if="!showPhone" class="btn">показать телефон</span>
                    <a v-else class="btn">89068663419</a>
                </div>
            </div>
            <ul class="socials">
                <li v-for="socialItem in socials" :key="socialItem.alt">
                    <a :href="socialItem.href">
                        <img :src="socialItem.src" :alt="socialItem.alt" />
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    template : "#contacts",
    data(){
    return {
        showPhone: false,
        socials: [
            {
                href: 'https://vk.com/nastja_bdst', src: '/img/vk.png', alt: 'vk'
            },
            {
                href: 'https://www.instagram.com/nastja_khasanova/?hl=ru', src: '/img/inst.png', alt: 'instagram'
            },
            {
                href: 'tg://resolve?domain=@HasanovaNastya', src: '/img/telegram.png', alt: 'telegram'
            },
            {
                href: 'https://wa.me/+79068663419', src: '/img/whatsapp.png', alt: 'whatsapp'
            }
        ]
      }
    }
}
</script>