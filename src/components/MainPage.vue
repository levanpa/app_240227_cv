<script setup>
import { ref, onMounted } from 'vue'

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

function hideExpandable(event) {
  setTimeout(() => {
    let elements = document.querySelectorAll('.text-wrapper .info')
    elements.forEach((item) => {
      if (item.hasAttribute('style')) {
        item.removeAttribute('style')
      }
    })
  }, 1000);
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
    h2.title experience
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
            span.work Website dev (realty and e-commercial websites).
              br
              | - Design website admin page's interface.
              br
              | - Design, create website templates.
            span.approach Approach: HTML, CSS, Jquery, ReactJs, Ajax, PHP, MySQL, Bootstrap, git, svn, responsive, browser compatibility...
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
            span.work Website dev (landing pages, business websites).
              br
              | - Slice html from design and make it functional
              br
              | - Maintain and support (client's and company's webs)
            span.approach Approach: Sass/scss, pug, Vuejs, Wordpress, Japanese web styles,...
      li.timeline-item
        span.year 12/2021
        .text-wrapper
          p.name.clickable(@click.prevent="toggleExpandable") Learnt more about framework.
          .info
            span.dash
            span.approach Approach: more Vuejs, Nestjs, Vite, Typescript, Axios, Vuex, Pinia,...
      li.timeline-item
        span.year 02/2022
        .text-wrapper
          p.name Service for military.
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

