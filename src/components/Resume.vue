<template lang="pug">
    .main
      router-view 
      section.page_section.top_block
        .container
          .top_block_text
            h1.page-header
              | Хасанова
              br
              | Настя
            .text
              | HTML-верстальщик
              br
              | 30 лет, Челябинск
          .top-img(title='возьмите меня на курсы :)')
            img(src='/nastya-800w.jpg' alt='nastya')   
           
              
</template>

<script>

export default {
  methods: {
   
  },
  components: {
   
  },
  computed: {

  }
}
</script>

<style lang="stylus" scoped>
  
</style>