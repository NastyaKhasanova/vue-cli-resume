<template id="skill">
    <div class="skills_list_item">
        <div class="icon">
            <img :src="src" :alt="name">
        </div>
        <div class="desc">{{name}}</div>
    </div>
</template>

<script>
export default {
   template: "#skill",
    props:['skill'],
    computed:{
        src(){
            if(!this.skill || !this.skill.src)
                {
                    return false;
                }
            return this.skill.src;
        },
        name(){
            if(!this.skill || !this.skill.name)
                {
                    return false;
                }
            return this.skill.name;

        }
    }
}
</script>