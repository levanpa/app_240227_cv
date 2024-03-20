<script setup>
import { onMounted } from 'vue'
import Sidebar from './components/Sidebar.vue'
import MainPage from './components/MainPage.vue'

let topPosition = 0

function openingAnimation() {
  setTimeout(() => {
    document.querySelector('.openning-gradient').classList.add('animating')
  }, 50)
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

function loadNonImportantCss() {
  const link = document.createElement('link')
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
  link.rel = 'stylesheet'
  link.media = 'all'
  document.head.appendChild(link)
}

onMounted(() => {
  openingAnimation()
  loadNonImportantCss()
  handleCompactHeader()
})
</script>

<template lang="pug">
.page-wrapper
  .top-wrapper.mb(@click.prevent="toggleSidebar")
    .avatar
      img(src="./assets/me.png" :alt="$t('name')" :title="$t('old')")
    .right
      h1.name {{ $t('name') }}
      span.born {{ $t('born') }}
    .contact-button
      i.fa-regular.fa-address-card
  Sidebar
  MainPage
  .openning-gradient
</template>

<style lang="sass">
@import url('./sass/app.sass')
</style>