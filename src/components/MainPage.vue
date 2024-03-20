<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
let isExpandAll = false

function calcExpandableHeight() {
  const elements = document.querySelectorAll('.text-wrapper .info')
  elements.forEach((item) => {
    const height = `${item.scrollHeight + 60}px`
    item.setAttribute('data-height', height)
    item.style.maxHeight = height
  })
}

function toggleExpandable(event) {
  let element = event.target.nextElementSibling
  // check if the element is expanded or collapsed
  if (element.hasAttribute('style')) {
    element.removeAttribute('style')
  } else {
    element.style.maxHeight = element.getAttribute('data-height')
  }
}

function hideExpandable() {
  setTimeout(() => {
    let elements = document.querySelectorAll('.text-wrapper .info')
    elements.forEach((item) => {
      if (item.hasAttribute('style')) {
        item.removeAttribute('style')
      }
    })
  }, 1500);
}

function expandAll() {
  let elements = document.querySelectorAll('.experience-wrapper .text-wrapper .info')
  if (isExpandAll) {
    elements.forEach((item) => {
      item.removeAttribute('style')
    })
  } else {
    elements.forEach((item) => {
      item.style.maxHeight = item.getAttribute('data-height')
    })
  }
  isExpandAll = !isExpandAll
}

function fullscreenModal() {
  let mainpageElement = document.querySelector('.mainpage-wrapper')
  if (mainpageElement.classList.contains('is-full')) {
    mainpageElement.classList.remove('is-full')
  } else {
    mainpageElement.classList.add('is-full')
    handleModal()
  }
}

function handleModal() {
  let modal = document.querySelector('.mainpage-wrapper.is-full .experience-wrapper')
  modal.addEventListener('click', event => {
    const bounding = modal.getBoundingClientRect()
    if (
      event.clientX < bounding.left ||
      event.clientX > bounding.right ||
      event.clientY < bounding.top ||
      event.clientY > bounding.bottom
    ) {
      closeModal()
    }
  })
}

function closeModal() {
  let mainpageElement = document.querySelector('.mainpage-wrapper')
  if (mainpageElement.classList.contains('is-full')) {
    mainpageElement.classList.remove('is-full')
  }
}

// language list: en, vi
function changeLanguage(lang) {
  locale.value = lang || 'en'
  // calcExpandableHeight()
  // hideExpandable()
}

onMounted(() => {
  calcExpandableHeight()
  hideExpandable()
})
</script>

<template lang="pug">
.mainpage-wrapper
  .language-wrapper
    ul.list
      li.item
        button.link(@click="changeLanguage('en')") English
      li.item
        button.link(@click="changeLanguage('vi')") Tiếng Việt
  .top-wrapper
    i.icon.fa-solid.fa-circle-exclamation
    p.text {{ $t('objective') }}
  .experience-wrapper
    .title-wrapper
      h2.title {{ $t('exp.title') }}
      button.common-button(aria-label="expand experience button" :title="$t('exp.expand_button')" @click.prevent="expandAll")
        i.fa-solid.fa-up-down
      button.fullscreen-button.common-button(aria-label="fullscreenModal experience button" :title="$t('exp.widen_button')" @click.prevent="fullscreenModal")
        i.fa-solid.fa-maximize
    ul.timeline-list
      li.timeline-item
        span.year 2015
        .text-wrapper
          p.name {{ $t('exp.title1') }}
      li.timeline-item
        span.year 03/2019
        .text-wrapper
          p.name.bold.clickable(@click.prevent="toggleExpandable") {{ $t('exp.title2') }}
          .info
            span.dash
            ul.work
              li {{ $t('exp.pa1') }}
              li {{ $t('exp.pa2') }}
              li {{ $t('exp.pa3') }}
              li {{ $t('exp.pa4') }}
              li {{ $t('exp.pa5') }}
            span.approach {{ $t('exp.approach') }} {{ $t('exp.pa_approach') }}
      li.timeline-item
        span.year 07/2020
        .text-wrapper
          p.name.clickable(@click.prevent="toggleExpandable") {{ $t('exp.title3') }}
          .info
            span.dash
            span.approach {{ $t('exp.approach') }} {{ $t('exp.graphic_approach') }}
      li.timeline-item
        span.year 11/2020
        .text-wrapper
          p.name.bold.clickable(@click.prevent="toggleExpandable") {{ $t('exp.title4') }}
          .info
            span.dash
            ul.work
              li {{ $t('exp.fc1') }}
              li {{ $t('exp.fc2') }}
              li {{ $t('exp.fc3') }}
            span.approach {{ $t('exp.approach') }} {{ $t('exp.fc_approach') }}
      li.timeline-item
        span.year 12/2021
        .text-wrapper
          p.name.clickable(@click.prevent="toggleExpandable") {{ $t('exp.title5') }}
          .info
            span.dash
            span.approach {{ $t('exp.approach') }} {{ $t('exp.framework_approach') }}
      li.timeline-item
        span.year 02/2022 - 02/2024
        .text-wrapper
          p.name {{ $t('exp.title6') }}
  .skills-wrapper
    h2.title {{ $t('skills.title') }}
    .skill-chart
      .left
        .header
          span {{ $t('skills.title') }}
        ul.list
          li.item HTML, CSS
          li.item Vuejs
          li.item Javascript
          li.item Responsive
          li.item English (*)
      .right
        .header
          span.header-left {{ $t('skills.beginner') }}
          span.header-right {{ $t('skills.master') }}
        ul.list
          li.item
            span.hidden hidden text
            span.value(style="width: 75%;")
          li.item
            span.hidden hidden text
            span.value(style="width: 35%;")
          li.item
            span.hidden hidden text
            span.value(style="width: 60%;")
          li.item
            span.hidden hidden text
            span.value(style="width: 65%;")
          li.item
            span.hidden hidden text
            span.value(style="width: 45%;")
        span.note {{ $t('skills.note') }}
          br.mb
          | TOEIC 755
</template>

<style lang="sass">
@import '../sass/mainpage.sass'
</style>
