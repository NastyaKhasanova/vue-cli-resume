<template lang="pug">
  .app(:class="{'dark-theme' : dark}")
      Header(:class="{'dark-theme' : dark}")
      Resume
      footer
        .container.center
          input(type="checkbox" v-model="dark" id="dark")
          label.light(for="dark" v-if="dark") перейти на светлую сторону
          label.dark(for="dark" v-else="dark") перейти на темную сторону
          
</template>

<script>

import Resume from '@/components/Resume'
import Header from '@/components/Header'

export default {
  name: 'App',
  data() {
    return {dark: true}
  },
  methods: {
   
  },
  components: {
      Resume,
      Header
  }
  
}
</script>

<style lang="stylus">
  .dark-theme
    .main, .color-block
      background: #000
      color: #fff

    .portfolio_list_item 
      img
        box-shadow: 0px 60px 60px #181a28;
      a
        color: #fff  

  header.dark-theme  
    background: #000   

    .nav > li > a:hover,
    .nav > li > a:focus
      color: #fff
        

  img
    max-width 100%

  p
    &:not(:last-child)
        margin-bottom 35px

  .page_section
      padding 100px 25px

  .container
      max-width 940px
      width 100%
      margin auto

  .color-block
      background #F6F6F6

  .center
      text-align center

  .page-header
      font-size 46px
      font-weight bold
      line-height 1

  .block-title
      font-size 34px
      font-weight bold
      line-height 1.2
      margin-bottom 50px

  footer 
    input  
      appearance none
      width 0
      height 0  

    label  
      cursor pointer    

</style>
