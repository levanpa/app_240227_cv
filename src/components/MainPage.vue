<script setup>
import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

// const count = ref(0)
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
        p.text Learnt Ecommerce at University of Information Technology (UIT).
      li.timeline-item
        span.year 03/2019
        p.text
          span.bold Worked as a Full stack website developer at P.A Viet Nam Company Limited.
          span.dash
          span.work Website dev (realty and e-commercial websites).
            br
            | - Design website admin page's interface.
            br
            | - Design, create website templates.
          span.approach Approach: HTML, CSS, Jquery, ReactJs, Ajax, PHP, MySQL, Bootstrap, git, svn, responsive, browser compatibility...
      li.timeline-item
        span.year 07/2020
        p.text Learnt about Graphic Design and Web Design.
          span.dash
          span.approach Approach: Photoshop, Figma, Illustrator, UI/UX, Adobe XD, Lightroom,...
      li.timeline-item
        span.year 11/2020
        p.text
          span.bold Worked as a Front-end website developer at Fastcoding Viet Nam.
          span.dash
          span.work Website dev (landing pages, business websites).
            br
            | - Slice html from design and make it functional
            br
            | - Maintain and support (client's and company's webs)
          span.approach Approach: Sass/scss, pug, Vuejs, Wordpress, Japanese web styles,...
      li.timeline-item
        span.year 12/2021
        p.text Learnt more about framework.
          span.dash
          span.approach Approach: more Vuejs, Nestjs, Vite, Typescript, Axios, Vuex, Pinia,...
      li.timeline-item
        span.year 02/2022
        p.text Service for military.
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
        span.note * Reading and Listening: TOEIC 755
</template>

<style lang="sass">
@import '../sass/mainpage.sass'
</style>

