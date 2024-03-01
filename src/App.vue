<script setup>
import { onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import MainPage from './components/MainPage.vue'

function loaded() {
  setTimeout(() => {
    document.querySelector('.openning-gradient').classList.add('animating')
  }, 100);
}

onMounted(() => {
  loaded()
})
</script>

<template lang="pug">
.page-wrapper
  .top-wrapper.mb
    .avatar
      img(src="./assets/me.png" alt="Le Van Pa" title="I'm older than this image")
    .right
      h1.name LE VAN PA
      span.born Born in 1995
  Sidebar
  MainPage
  .openning-gradient
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap')
@import url('./sass/normalize.css')

// reset css
*
  margin: 0
  padding: 0
  box-sizing: border-box
  line-height: 1.2

button
  background: none
  border: none

h1, h2, h3, h4, h5, h6
  font-size: inherit
  font-weight: normal
  margin: 0

li
  list-style-type: none

img
  border: none
  width: 100%
  height: 100%

a
  color: inherit
  text-decoration: none

// general styles
#app
  width: 100%
  max-width: 1024px
  margin: 0 auto
  font-family: 'Open Sans', sans-serif
  font-size: 16px
  opacity: 1
  .hidden
    visibility: hidden
.page-wrapper
  display: flex
  box-shadow: 2px 0 7px #a9a9a9
  position: relative
  overflow: hidden
  .sidebar-wrapper
    flex: 35% 1 1
    background-color: #ecf2f4
  .mainpage-wrapper
    flex: 65% 1 1

.openning-gradient
  width: 100%
  height: 150%
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)
  position: absolute
  top: -50%
  left: 0
  z-index: 100
  transition: top 1s ease-out
  &.animating
    top: 100%

+pc
  .mb
    display: none !important

+mb
  html
    font-size: calc(100vw / 375)
  body
    overflow-x: hidden
    font-size: 16rem
  .pc
    display: none !important

  #app
    max-width: unset
    font-size: 16rem
  .page-wrapper
    flex-direction: column
    box-shadow: 2rem 0 7rem #a9a9a9
    .sidebar-wrapper
      display: none
    .mainpage-wrapper
      flex: 100% 1 1

    > .top-wrapper
        display: flex
        align-items: center
        gap: 10rem
        padding: 20rem 40rem
        background-color: #ecf2f4
        border-bottom: 1rem solid #bbb
        .avatar
          flex-basis: 100rem
          height: 100rem
          border-radius: 50%
          background-color: #fff
        .name
          font-weight: 600
          font-size: 20rem
        .born
          color: #888
          font-size: 14rem

</style>