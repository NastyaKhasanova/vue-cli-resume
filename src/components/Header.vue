<template lang="pug">
    header
        .container
            nav.menu
                ul.nav
                    li
                        router-link(to='/about') Обо мне
                    li
                        router-link(to='/skills') Навыки
                    li
                        router-link(to='/portfolio') Портфолио
                    li
                        router-link(to='/contacts') Контакты
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  ul
    &.nav
        list-style none
        display flex
        justify-content space-between
        margin-left -15px
        margin-right -15px
        position relative
        &::after
            content ''
            position absolute
            left 15px
            right 15px
            bottom 0
            height 1px
            background #828282

.nav
    & > li
        & > a
            display inline-block
            font-weight bold
            color #828282
            padding 25px 15px
            text-decoration none
            transition color 0.5s ease-in

.nav>li>a:hover,
.nav>li>a:focus
    color #070707

.toggle-nav
    width 30px
    height 18px
    position relative
    display none
    .bun
        display block
        width 100%
        height 4px
        background #070707
        position absolute
        left 0
        &:nth-child(1)
            top 0
        &:nth-child(2)
            bottom 0
</style>