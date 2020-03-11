<template id="skills">
    <section class="page_section skills_block center">
        <div class="container">
            <h2 class="block-title">Навыки</h2>
            <div class="skills_list">
                <skill v-for="oneSkill in skillList" :key="oneSkill.name"  :skill="oneSkill"></skill>
            </div>
        </div>
    </section>
</template>

<script>
import Skill from '@/views/Skill'

export default {
    template : "#skills",
    data(){
        return {
            skillList: [
            {
                name : "Html",
                src  : "/img/html.png",
            },
            {
                name : "Css",
                src  : "/img/css.png",
            },
            {
                name : "jQuery",
                src  : "/img/jquery.png",
            },
            {
                name : "Figma",
                src  : "/img/figma.png",
            },
        ]
        }
    },
    created(){
        
    },
    components: {
        Skill
    }
}
</script>>