<script setup>
import { ref, onMounted } from 'vue'

let isExpandAll = false

function calcExpandableHeight() {
  const elements = document.querySelectorAll('.text-wrapper .info')
  elements.forEach((item) => {
    const height = `${item.scrollHeight + 30}px`
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

onMounted(() => {
  calcExpandableHeight()
  hideExpandable()
})
</script>

<template lang="pug">
.mainpage-wrapper
  .top-wrapper
    i.icon.fa-solid.fa-circle-exclamation
    p.text I've studied E-Commerce major at  University of Information Technology (UIT). I wish to be a Front-end developer working in commercial.
  .experience-wrapper
    .title-wrapper
      h2.title experience
      button.common-button(aria-label="expand experience button" title="Click to expand all fields" @click.prevent="expandAll")
        i.fa-solid.fa-up-down
      button.fullscreen-button.common-button(aria-label="fullscreenModal experience button" title="Click to widen experience session" @click.prevent="fullscreenModal")
        i.fa-solid.fa-maximize
    ul.timeline-list
      li.timeline-item
        span.year 2015
        .text-wrapper
          p.name Learnt Ecommerce at University of Information Technology (UIT).
      li.timeline-item
        span.year 03/2019
        .text-wrapper
          p.name.bold.clickable(@click.prevent="toggleExpandable") Worked as a Full stack website developer at P.A Viet Nam Company Limited.
          .info
            span.dash
            ul.work
              li - Work with the Customer Service team to fix bugs and update the website based on customer feedback.
              li - Participate in the development of the website builder tool (similar to Wix.com).
              li - Code modules follow source code structure.
              li - Test the tool and provide feedback.
              li - Create new websites/templates using the company website builder tool.
            span.approach Approach: HTML, CSS, JS, Jquery, ReactJs, Ajax, PHP, MySQL, Bootstrap, git,...
      li.timeline-item
        span.year 07/2020
        .text-wrapper
          p.name.clickable(@click.prevent="toggleExpandable") Learnt about Graphic Design and Web Design.
          .info
            span.dash
            span.approach Approach: Photoshop, Figma, Illustrator, UI/UX, Adobe XD, Lightroom,...
      li.timeline-item
        span.year 11/2020
        .text-wrapper
          p.name.bold.clickable(@click.prevent="toggleExpandable") Worked as a Front-end website developer at Fastcoding Viet Nam.
          .info
            span.dash
            ul.work
              li - Slice HTML from design and make it functional.
              li - Implement animations, responsiveness, browser compatibility, clean code, pixel perfection, WebP images, code validation, and optimize for PageSpeed Insights (PSI).
              li - Test the website against the company's standards before submitting it to the leader.
            span.approach Approach: sass/scss, pug, Wordpress, VueJS, Japanese web styles,...
      li.timeline-item
        span.year 12/2021
        .text-wrapper
          p.name.clickable(@click.prevent="toggleExpandable") Learnt more about framework.
          .info
            span.dash
            span.approach Approach: more Vuejs, Nestjs, Vite, Typescript, Axios, Vuex, Pinia,...
      li.timeline-item
        span.year 02/2022 - 02/2024
        .text-wrapper
          p.name Served in the military.
  .skills-wrapper
    h2.title skills
    .skill-chart
      .left
        .header
          span Skills
        ul.list
          li.item HTML, CSS
          li.item Vuejs
          li.item Javascript
          li.item Responsive
          li.item English (*)
      .right
        .header
          span.header-left beginner
          span.header-right master
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
            span.value(style="width: 50%;")
        span.note * Reading and Listening: &nbsp;
          br.mb
          | TOEIC 755
</template>

<style lang="sass">
@import '../sass/mainpage.sass'
</style>
