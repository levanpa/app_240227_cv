<script setup>
import { onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import MainPage from './components/MainPage.vue'

let topPosition = 0

function loaded() {
  setTimeout(() => {
    document.querySelector('.openning-gradient').classList.add('animating')
  }, 100);
}

function handleCompactHeader() {
  // execute event when scoll 100px from top
  document.addEventListener('scroll', (event) => {
    if (window.scrollY > 100 && !document.querySelector('.page-wrapper.show-sidebar')) {
      document.querySelector('.top-wrapper').classList.add('is-compact')
    } else {
      document.querySelector('.top-wrapper').classList.remove('is-compact')
    }
  })
}

function toggleSidebar() {
  const element = document.querySelector('.page-wrapper')

  if (element.classList.contains('show-sidebar')) {
    // scroll to position before open sidebar
    window.scrollTo(0, topPosition)
    element.classList.remove('show-sidebar')
  } else {
    // get current position to scroll to after close sidebar
    topPosition = window.scrollY
    element.classList.add('show-sidebar')
    window.scrollTo(0, 0)
  }
}

onMounted(() => {
  loaded()
  handleCompactHeader()
})
</script>

<template lang="pug">
.page-wrapper
  .top-wrapper.mb(@click.prevent="toggleSidebar")
    .avatar
      img(src="./assets/me.png" alt="Le Van Pa" title="I'm older than this image")
    .right
      h1.name LE VAN PA
      span.born Born in 1995
    .contact-button
      i.fa-regular.fa-address-card
  Sidebar
  MainPage
  .openning-gradient
</template>

<style lang="sass">
@import url('./sass/app.sass')
</style>