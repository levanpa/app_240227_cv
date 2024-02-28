<script setup>
import Sidebar from './components/Sidebar.vue'
import MainPage from './components/MainPage.vue'
</script>

<template lang="pug">
.page-wrapper
  Sidebar
  MainPage
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap')

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
.page-wrapper
  display: flex
  box-shadow: 2px 0 7px #a9a9a9
  .sidebar-wrapper
    flex: 35% 1 1
    background-color: #ecf2f4
  .mainpage-wrapper
    flex: 65% 1 1

</style>