<template id="portfolio">
    <section class="page_section portfolio_block color-block center">
        <div class="container">
            <h2 class="block-title">Портфолио</h2>
            <div class="portfolio_list">
                <div class="portfolio_list_item" v-for="portfolioItem in portfolioList" :key="portfolioItem.src">
                    <a :href="portfolioItem.href">
                        <img loading="lazy" :src="portfolioItem.src" :alt="portfolioItem.alt">
                        <span>{{portfolioItem.name}}</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    template: '#portfolio',
    data() {
        return {
           portfolioList: [
               {href:'https://sign.elf74.ru/', src: '/img/sign.jpg', alt:'вывески', name:'landing-page для вывесок'},
               {href:'https://oca-praga.cz/', src: '/img/oca.jpg', alt:'association', name:'Сайт с образовательными курсами Association'},
               {href:'https://intehprom.pro/', src: '/img/intech.jpg', alt:'intehprom', name:'landing-page для производства пресс-форм'}
           ]
        }
    }
}
</script>